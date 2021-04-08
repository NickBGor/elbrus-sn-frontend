<template>
  <login-form-component :isLoading="isLoading">
    <template #form>
      <form :class="{ 'opacity-50': isLoading }" @submit.prevent="recoveryHandler">
        <div class="mt-2">
          <label for="email" class="text-mainColor dark:text-darkModeTextColor">Email </label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Ваш email"
            class="input-default"
          />
        </div>
        <div class="mt-2">
          <label for="password" class="text-mainColor dark:text-darkModeTextColor">Пароль</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Ваш пароль"
            class="input-default"
          />
        </div>
        <div class="mt-2">
          <label for="repeatPassword" class="text-mainColor dark:text-darkModeTextColor">
            Введите пароль еще раз
          </label>
          <input
            id="repeatPassword"
            v-model="repeatPassword"
            type="password"
            placeholder="Введите пароль еще раз"
            class="input-default"
          />
        </div>
        <div class="mt-4">
          <button class="btn-default">
            Обновить пароль
          </button>
        </div>
      </form>
    </template>
  </login-form-component>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import LoginFormComponent from '@/components/UI/login-form-component';

export default {
  name: 'PasswordRecoveryPage',

  components: {
    LoginFormComponent,
  },

  data() {
    return {
      email: null,
      password: null,
      repeatPassword: null,
      isLoading: false,
    };
  },

  async created() {
    const isRecovery = localStorage.getItem('recovery');
    if (!isRecovery) {
      await this.$router.push({ name: 'profile' });
    }
  },

  beforeDestroy() {
    localStorage.removeItem('recovery', null);
  },

  methods: {
    ...mapActions(['recoverPassword']),
    ...mapMutations(['setErrors']),

    async recoveryHandler() {
      this.setErrors(null);
      if (this.password !== this.repeatPassword) {
        return this.setErrors([{ msg: 'Пароли не совпадают' }]);
      }
      this.isLoading = true;
      const result = await this.recoverPassword({
        email: this.email,
        password: this.password,
      });
      this.isLoading = false;
      result ? await this.$router.push({ name: 'main' }) : null;
    },
  },
};
</script>

<style></style>
