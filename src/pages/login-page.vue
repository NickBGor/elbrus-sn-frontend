<template>
  <login-form-component :isLoading="isLoading">
    <template #form>
      <form :class="{ 'opacity-50': isLoading }" @submit.prevent="loginHandler">
        <div>
          <label for="email" class="text-mainColor dark:text-darkModeTextColor">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Ваш email"
            class="input-default"
            :disabled="isLoading"
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
            :disabled="isLoading"
          />
        </div>
        <div class="mt-4">
          <button class="btn-default" :disabled="isLoading">
            Войти
          </button>
        </div>
        <router-link :to="{ name: 'recovery-mail' }">
          <div class="mt-2 text-mainColor-100 dark:text-darkModeTextColor-100">
            Восстановление пароля
          </div>
        </router-link>
      </form>
    </template>
  </login-form-component>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import LoginFormComponent from '@/components/UI/login-form-component';

export default {
  name: 'LoginPage',

  components: { LoginFormComponent },

  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    };
  },

  computed: mapGetters(['getAuth']),

  methods: {
    ...mapActions(['login']),

    async loginHandler() {
      this.isLoading = true;
      await this.login({ email: this.email, password: this.password });
      this.isLoading = false;
      this.getAuth ? await this.$router.push({ name: 'main' }) : null;
    },
  },
};
</script>
