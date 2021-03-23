<template>
  <login-form-component :is-loading="isLoading">
    <template #form>
      <form
        :class="{ 'opacity-50': isLoading }"
        @submit.prevent="registrationHandler"
      >
        <div>
          <label for="name" class="text-mainColor dark:text-darkModeTextColor">
            Имя
          </label>
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Ваше имя"
            class="input-default"
          />
        </div>
        <div class="mt-2">
          <label for="email" class="text-mainColor dark:text-darkModeTextColor"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Ваш email"
            class="input-default"
          />
        </div>
        <div class="mt-2">
          <label
            for="password"
            class="text-mainColor dark:text-darkModeTextColor"
            >Пароль</label
          >
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
            Зарегистрироваться
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
  name: 'registration-page',

  components: { LoginFormComponent },

  data() {
    return {
      name: '',
      email: '',
      password: '',
      isLoading: false,
    };
  },

  computed: mapGetters(['getAuth']),

  methods: {
    ...mapActions(['registration']),

    async registrationHandler() {
      this.isLoading = true;
      await this.registration({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      this.isLoading = false;
      this.getAuth ? await this.$router.push({ name: 'news' }) : null;
    },
  },
};
</script>
