<template>
  <div>
    <span
      class="material-icons text-mainColor dark:text-darkModeTextColor cursor-pointer"
      @click="open"
      onselectstart="return false"
      onmousedown="return false"
    >
      {{ getIcon }}
    </span>
    <div
      v-show="isOpen"
      class="w-40 font-fira absolute z-50 right-0.5 text bg-sideBar-lightMode rounded-md p-2 dark:bg-sideBar-darkMode"
    >
      <div
        v-for="item in getMenuItems"
        :key="item.id"
        class="my-1 rounded-md text-mainColor hover:bg-thirdColor dark:text-darkModeTextColor"
        @click="close"
      >
        <router-link
          :to="{ name: item.linkName }"
          class="p-1 min-w-full min-h-full flex items-center"
          exact-active-class="rounded-md bg-thirdColor-100"
        >
          {{ item.title }}
        </router-link>
      </div>
      <div
        class="my-1 rounded-md text-mainColor dark:text-darkModeTextColor"
        @click="logoutHandler"
      >
        <router-link
          :to="{ name: 'login' }"
          class="p-1 min-w-full min-h-full hover:text-secondColor-100 flex items-center dark:hover:text-thirdColor-100"
        >
          Выход
        </router-link>
      </div>
      <a
        href="https://github.com/NickBGor/elbrus-sn-frontend"
        target="_blank"
        class="px-1 flex items-center text-mainColor hover:text-secondColor dark:text-darkModeTextColor dark:hover:text-thirdColor-100"
      >
        <a-icon type="github" :style="{ fontSize: '1.5rem' }" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'burger-menu-component',

  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    ...mapGetters(['getMenuItems']),

    getIcon() {
      return this.isOpen ? 'menu_open' : 'menu';
    },
  },

  methods: {
    ...mapActions(['logout']),

    logoutHandler() {
      this.logout();
      this.close();
    },

    open() {
      this.isOpen = !this.isOpen;
    },

    close() {
      this.isOpen = false;
    },
  },
};
</script>
