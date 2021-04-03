<template>
  <div class="flex flex-col lg:flex-row p-5 lg:p-0 flex-wrap justify-center">
    <div
      class="border-4 rounded-md border-mainColor-100 dark:border-thirdColor-100 mb-5 lg:m-5 w-full xl:w-2/5 h-60"
    >
      <h1>Название работодателя</h1>
    </div>
    <div
      class="border-4 rounded-md border-mainColor-100 dark:border-thirdColor-100 mb-5 lg:m-5 w-full xl:w-2/5 h-60"
    >
      <h1>Название работодателя</h1>
    </div>
    <div
      class="border-4 rounded-md border-mainColor-100 dark:border-thirdColor-100 mb-5 lg:m-5 w-full xl:w-2/5 h-60"
    >
      <h1>Название работодателя</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EmployersPage',

  computed: mapGetters(['getEmployers']),

  async created() {
    await this.getAllEmployers();
  },

  methods: mapActions(['getAllEmployers']),
};
</script>
