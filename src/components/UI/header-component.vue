<template>
  <header
    class="sticky top-0 z-50 h-16 flex items-center bg-headerColor-lightMode text-mainColor dark:text-darkModeTextColor dark:bg-headerColor-darkMode"
  >
    <router-link class="ml-2 lg:hidden" :to="{ name: 'news' }">
      <icon-base width="90" height="30" viewBox="0 0 137 48" fill="none">
        <main-logo />
      </icon-base>
    </router-link>
    <span
      v-show="disableInput"
      class="material-icons mx-2 lg:mx-4"
      onselectstart="return false"
      onmousedown="return false"
    >
      search
    </span>
    <input
      class="flex-1 bg-transparent outline-none focus:ring-0 border-none"
      type="text"
      :placeholder="placeholderLabel"
      :disabled="!disableInput"
    />

    <span
      class="material-icons cursor-pointer mr-16 lg:mx-8"
      onselectstart="return false"
      onmousedown="return false"
      @click="changeMode"
    >
      {{ getIconMode }}
    </span>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import IconBase from '@/components/icon-base';
import MainLogo from '@/components/icons/main-logo';

export default {
  name: 'header-component',

  components: { MainLogo, IconBase },

  data() {
    return {
      darkMode: null,
    };
  },

  created: function() {
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }
    const mode = localStorage.getItem('theme');
    if (mode !== 'light') {
      document.documentElement.classList.add('dark');
      this.darkMode = true;
    } else {
      document.documentElement.classList.remove('dark');
      this.darkMode = false;
    }
  },

  computed: {
    ...mapGetters(['getAuth']),

    getIconMode() {
      return this.darkMode ? 'light_mode' : 'dark_mode';
    },

    disableInput() {
      return this.getAuth;
    },

    placeholderLabel() {
      return this.getAuth ? 'Введите имя для поиска' : '';
    },
  },

  methods: {
    changeMode() {
      if (this.darkMode) {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        this.darkMode = false;
      } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        this.darkMode = true;
      }
    },
  },
};
</script>
