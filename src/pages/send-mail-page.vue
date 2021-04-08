<template>
  <login-form-component :isLoading="isLoading">
    <template #form>
      <form :class="{ 'opacity-50': isLoading }" @submit.prevent="mailSendHandler">
        <div class="mt-2">
          <label for="email" class="text-mainColor dark:text-darkModeTextColor">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Ваш email"
            class="input-default"
          />
        </div>
        <div class="mt-4">
          <button class="btn-default" :disabled="isLoading">
            Отправить письмо восстановления пароля
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
  name: 'PasswordRecoveryPage',

  components: {
    LoginFormComponent,
  },

  data() {
    return {
      email: null,
      isLoading: false,
    };
  },

  computed: mapGetters(['getAuth']),

  beforeMount() {
    localStorage.setItem('recovery', true);
  },

  methods: {
    ...mapActions(['sendRecoveryMail']),

    async mailSendHandler() {
      this.isLoading = true;
      try {
        await this.sendRecoveryMail({ email: this.email });
      } catch (err) {
        console.log(err);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
