<template>
  <login-form-component :is-loading="isLoading">
    <template #form>
      <form
        :class="{ 'opacity-50': isLoading }"
        @submit.prevent="mailSendHandler"
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
        <div class="mt-4">
          <button class="btn-default">
            Отправить письмо восстановления пароля
          </button>
        </div>
      </form>
    </template>
  </login-form-component>
</template>

<script>
import LoginFormComponent from '@/components/UI/login-form-component';
import { mapGetters } from 'vuex';

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
    async mailSendHandler() {
      this.isLoading = true;
      console.log('555');
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
