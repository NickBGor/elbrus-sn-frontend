<template>
  <div
    class="flex justify-center flex-col items-center my-20 text-mainColor dark:text-thirdColor-100"
  >
    <h1 class="text-9xl">404</h1>
    <p class="text-2xl">Page not found</p>
    <router-link
      class="mt-5 text-secondColor dark:text-darkModeTextColor hover:text-mainColor dark:hover:text-thirdColor-100"
      :to="{ name: 'news' }"
    >
      Вернуться на главную
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'not-found-page',
};
</script>
