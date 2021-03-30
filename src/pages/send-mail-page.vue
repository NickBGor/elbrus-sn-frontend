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
      isLoading: false,
    };
  },

  computed: mapGetters(['getAuth']),

  methods: {
    async mailSendHandler() {
      this.isLoading = true;
      try {
        const response = await fetch('http://localhost:3000/recovery', {
          method: 'POST',
          body: JSON.stringify({ email: this.email }),
        });
        const result = await response.json();
        console.log(result);
      }catch ( err ){
        console.log(err);
      }
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
