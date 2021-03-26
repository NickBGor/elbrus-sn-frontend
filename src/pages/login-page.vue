<template>
  <login-form-component :is-loading="isLoading">
    <template #form>
      <form @submit.prevent="loginHandler" :class="{ 'opacity-50': isLoading }">
        <div>
          <label for="email" class="text-mainColor dark:text-darkModeTextColor"
            >Email</label
          >
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Ваш email"
            class="input-default"
            :disabled="isLoading"
          />
        </div>
        <div class="mt-2">
          <label
            for="password"
            class="text-mainColor dark:text-darkModeTextColor"
            >Пароль</label
          >
          <input
            v-model="password"
            id="password"
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
      </form>
    </template>
  </login-form-component>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoginFormComponent from '@/components/UI/login-form-component';

export default {
  name: 'login-page',

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
      this.getAuth ? await this.$router.push({ name: 'news' }) : null;
    },
  },
};
</script>
