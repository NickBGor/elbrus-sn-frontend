<style>
.confirm {
  display: inline-block;
}
</style>

<template>
  <div class="card-default confirm">
    <p>{{ user.name }} , подтверди пожалуйста почту! 🚀</p>
    <p>Мы выслали тебе письмо, так что проверь входящие</p>
    PS: <small>и загляни на всякий случай в спам</small>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'confirmation-page',
  data() {
    return {
      user: store.getters.getUser,
    };
  },
};
</script>
