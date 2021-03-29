<template>
  <login-form-component :is-loading="isLoading">
    <template #form>
      <form
        :class="{ 'opacity-50': isLoading }"
        @submit.prevent="recoveryHandler"
      >
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
            Обновить пароль
          </button>
        </div>
      </form>
    </template>
  </login-form-component>
</template>

<script>
import LoginFormComponent from '@/components/UI/login-form-component';
import { mapGetters } from "vuex";

export default {
  name: 'password-recovery-page',

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

  methods: {
    async recoveryHandler() {
      this.isLoading = true;
      console.log('555');
      this.isLoading = false;
      this.getAuth ? await this.$router.push({ name: 'news' }) : null;
    },
  },
};
</script>

<style></style>
