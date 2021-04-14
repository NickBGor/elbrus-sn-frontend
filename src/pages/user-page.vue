<template>
  <div class="flex flex-col lg:flex-row">
    <div class="mx-auto my-5 lg:ml-20 lg:mr-10 w-96">
      <avatar-profile :src="user.photo" alt="user_photo" />
    </div>

    <info-profile :user="user" :isEditable="false" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import InfoProfile from '@/components/UI/info-profile';
import AvatarProfile from '@/components/UI/avatar-profile';

export default {
  name: 'UserPage',
  components: { InfoProfile, AvatarProfile },
  data() {
    return {
      user: null,
    };
  },

  computed: mapGetters(['getUser', 'getUsers']),

  async created() {
    const userId = this.$route.params.id;

    if (userId === this.getUser._id) {
      await this.$router.push({ name: 'profile' });
    }

    if (!this.getUsers) {
      await this.getAllUsers();
    }

    this.user = this.getUsers.find((el) => el._id === userId);
  },

  methods: mapActions(['getAllUsers']),
};
</script>
