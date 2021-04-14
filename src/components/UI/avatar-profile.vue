<template>
  <div class="aspect-h-6 aspect-w-5">
    <img
      :src="src"
      :alt="alt"
      class="object-cover rounded-md transform transition-transform lg:hover:scale-105 shadow-2xl dark:shadow-mainColorShadow"
    />
  </div>
</template>

<script>
export default {
  name: 'AvatarProfile',

  props: {
    src: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },
  },
};
</script>
