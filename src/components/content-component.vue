<template>
  <main class="flex-1 h-full w-full">
    <header-component />
    <router-view />
  </main>
</template>

<script>
import HeaderComponent from '@/components/UI/header-component';

export default {
  name: 'ContentComponent',

  components: { HeaderComponent },
};
</script>
