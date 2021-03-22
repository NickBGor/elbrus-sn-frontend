<template>
  <div
    class="font-fira flex min-h-screen min-w-screen bg-bodyColor-lightMode dark:bg-bodyColor-darkMode dark:text-darkModeTextColor"
  >
    <template>
      <burger-menu-component class="lg:hidden absolute top-5 right-4" />
      <navigation-component class="hidden lg:flex fixed h-full" />
      <content-component class="ml-0 lg:ml-56" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentComponent from '@/components/content-component';
import BurgerMenuComponent from '@/components/UI/burger-menu-component';
import NavigationComponent from '@/components/UI/navigation-component';

export default {
  components: {
    BurgerMenuComponent,
    ContentComponent,
    NavigationComponent,
  },

  computed: mapGetters(['getErrors', 'getSuccessMessage']),

  watch: {
    getErrors(errors) {
      if (errors.length) {
        return errors.map((e) =>
          this.$notification.error({
            message: 'Ошибка',
            description: e.msg,
            class: 'bg-bodyColor-lightMode dark:bg-thirdColor',
          }),
        );
      }
      return null;
    },
    getSuccessMessage(message) {
      if (message.length) {
        return message.map((e) => {
          this.$notification.success({
            message: 'Успех',
            description: e.msg,
            class: 'bg-bodyColor-lightMode dark:bg-thirdColor',
          });
        });
      }
      return null;
    },
  },
};
</script>
