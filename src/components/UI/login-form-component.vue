<template>
  <div>
    <icon-base
      width="120"
      height="120"
      viewBox="0 0 70 70"
      class="mx-auto mt-12 rounded-md dark:shadow-mainColorShadow"
    >
      <old-logo />
    </icon-base>

    <div
      class="relative mx-auto mt-5 w-96 bg-sideBar-lightMode py-8 px-6 shadow rounded-lg dark:bg-headerColor-darkMode"
    >
      <icon-base
        v-if="isLoading"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        class="absolute left-28 z-10"
      >
        <pack-man-loader />
      </icon-base>
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/icon-base';
import OldLogo from '@/components/icons/old-logo';
import PackManLoader from '@/components/icons/pack-mak-loader';

export default {
  name: 'LoginFormComponent',

  components: { PackManLoader, OldLogo, IconBase },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
