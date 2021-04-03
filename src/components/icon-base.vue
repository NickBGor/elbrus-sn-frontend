<template>
  <svg :width="width" :height="height" :viewBox="viewBox" :aria-labelledby="iconName">
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },

    width: {
      type: [Number, String],
      default: 20,
    },

    height: {
      type: [Number, String],
      default: 20,
    },

    iconColor: {
      type: String,
      default: 'currentColor',
    },

    viewBox: {
      type: String,
      default: '0 0 20 20',
    },
  },
};
</script>
