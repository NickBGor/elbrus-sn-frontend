<template>
  <aside class="w-56 bg-sideBar-lightMode flex-col dark:bg-sideBar-darkMode">
    <div class="mb-20 mt-2 mx-4 flex items-center">
      <router-link :to="{ name: 'news' }">
        <icon-base width="137" height="48" viewBox="0 0 137 48" fill="none">
          <main-logo />
        </icon-base>
      </router-link>
    </div>
    <nav class="mx-4 flex-1">
      <div
        v-for="item in getMenuItems"
        :key="item.id"
        class="my-1 rounded-md text-mainColor hover:bg-thirdColor h-10 dark:text-darkModeTextColor"
      >
        <router-link
          class="min-w-full min-h-full flex items-center px-4"
          :to="{ name: item.linkName }"
          exactActiveClass="rounded-md bg-thirdColor-100"
        >
          <span class="material-icons mr-4">{{ item.icon }}</span>
          {{ item.title }}
        </router-link>
      </div>
    </nav>
    <div
      class="my-4 rounded-md text-mainColor hover:text-secondColor h-10 inline-block dark:text-darkModeTextColor dark:hover:text-thirdColor-100"
      @click="logoutHandler"
    >
      <router-link class="flex items-center px-4 flex items-center" :to="{ name: 'login' }">
        <span class="material-icons mr-2">logout</span>
        Выход
      </router-link>
    </div>
    <a
      href="https://github.com/NickBGor/elbrus-sn-frontend"
      target="_blank"
      class="mb-8 mx-4 flex items-center text-mainColor hover:text-secondColor dark:text-darkModeTextColor dark:hover:text-thirdColor-100"
    >
      <a-icon type="github" class="github-icon" />
      <span class="mx-2">Github проекта</span>
    </a>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import IconBase from '@/components/icon-base';
import MainLogo from '@/components/icons/main-logo';

export default {
  name: 'NavigationComponent',

  components: { MainLogo, IconBase },

  computed: mapGetters(['getMenuItems']),

  methods: {
    ...mapActions(['logout']),

    logoutHandler() {
      this.logout();
    },
  },
};
</script>

<style lang="scss">
.github-icon {
  font-size: 1.5rem;
}
</style>
