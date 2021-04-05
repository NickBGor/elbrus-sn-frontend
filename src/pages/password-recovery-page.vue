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
import LoginFormComponent from '@/components/UI/login-form-component';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PasswordRecoveryPage',

  components: {
    LoginFormComponent,
  },

  data() {
    return {
      email: null,
      password: null,
      isLoading: false,
    };
  },

  computed: mapGetters(['getAuth']),

  async beforeCreate() {
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

    async recoveryHandler() {
      this.isLoading = true;
      const result = await this.recoverPassword({
        email: this.email,
        password: this.password,
      });
      this.isLoading = false;
      result ? await this.$router.push({ name: 'login' }) : null;
    },
  },
};
</script>

<style></style>
