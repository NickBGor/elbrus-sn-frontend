<template>
  <div
    class="font-fira flex min-h-screen min-w-screen bg-bodyColor-lightMode dark:bg-bodyColor-darkMode dark:text-darkModeTextColor"
  >
    <template>
      <burger-menu-component class="lg:hidden absolute top-5 right-4" />
      <navigation-component class="hidden lg:flex" />
      <content-component />
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

  computed: mapGetters(['getErrors']),

  async created() {
    if (this.getErrors) {
      this.getErrors.map((e) =>
        this.$notification.error({
          message: 'Ошибка',
          description: e.msg,
          class: 'bg-bodyColor-lightMode dark:bg-thirdColor',
        }),
      );
    }
  },
};
</script>
