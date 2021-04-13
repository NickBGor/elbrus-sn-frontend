<template>
  <div class="flex flex-col lg:flex-row">
    <div class="mx-auto my-5 lg:ml-20 lg:mr-10 max-w-96">
      <img
        :src="user.photo"
        alt="user_photo"
        class="rounded-md transform transition-transform lg:hover:scale-105 shadow-2xl dark:shadow-mainColorShadow"
      />
    </div>

    <div class="flex flex-col flex-wrap w-full lg:flex-row lg:w-6/12">
      <div class="card-default lg:w-2/3 lg:w-2/5 flex flex-col justify-around">
        <h1 class="text-4xl text-mainColor dark:text-darkModeTextColor">
          {{ user.name }}
        </h1>
        <div>
          <span class="text-mainColor dark:text-thirdColor-100">
            Контакты:
          </span>
          <div v-if="user.contacts && user.contacts.length">
            <div
              v-for="(c, i) in user.contacts"
              :key="i"
              class="text-mainColor text-sm my-1 dark:text-darkModeTextColor"
            >
              {{ c.type }}: {{ c.contact }}
            </div>
          </div>
          <div v-else class="text-mainColor dark:text-darkModeTextColor">
            Пользователь еще не добавил свои контакты
          </div>
        </div>
      </div>
      <div class="card-default lg:w-2/3 lg:w-2/5">
        <div>
          <span class="text-mainColor dark:text-thirdColor-100">
            Роль в кампусе:
          </span>
          <h1 class="text-2xl text-mainColor dark:text-darkModeTextColor">
            {{ user.status }}
          </h1>
        </div>
        <div>
          <span class="text-mainColor dark:text-thirdColor-100">Группа:</span>
          <h1 v-if="user.group" class="text-2xl text-mainColor dark:text-darkModeTextColor">
            {{ user.group }}
          </h1>
          <div v-else class="text-sm text-mainColor dark:text-darkModeTextColor">
            Пользователя еще не добавили в группу
          </div>
        </div>
      </div>
      <div class="card-default lg:w-2/3 lg:w-1/5">
        <div>
          <span class="text-mainColor dark:text-thirdColor-100">Монеты:</span>
          <h1 class="text-4xl text-mainColor dark:text-darkModeTextColor">
            <span class="material-icons text-red-500">
              attach_money
            </span>
            {{ user.coins ? user.coins : 0 }}
          </h1>
        </div>
        <div>
          <span class="text-mainColor dark:text-thirdColor-100">Рейтинг:</span>
          <h1 class="text-4xl text-mainColor dark:text-darkModeTextColor">
            <span class="material-icons text-mainColor dark:text-darkModeTextColor">
              trending_up
            </span>
            {{ user.rating ? user.rating : 0 }}
          </h1>
        </div>
      </div>
      <div class="card-default lg:w-2/3 lg:w-2/5">
        <span class="text-mainColor dark:text-thirdColor-100">
          Навыки:
        </span>
        <div v-if="user.skills && user.skills.length" class="my-2">
          <a-tag v-for="(tag, i) in user.skills" :key="i" color="#4520ab" class="text-lg m-1">
            {{ tag }}
          </a-tag>
        </div>
        <div v-else class="text-sm text-mainColor dark:text-darkModeTextColor">
          Пользователь еще не добавил свои навыки
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserPage',
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
