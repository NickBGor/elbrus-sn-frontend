<template>
  <div class="m-10">
    <div v-if="isLoading">
      <icon-base width="300px" height="300px" viewBox="0 0 100 100" class="mx-auto">
        <pack-man-loader />
      </icon-base>
    </div>

    <div v-else class="flex flex-col lg:flex-row">
      <div class="w-full order-2 lg:order-1 flex flex-col">
        <div
          v-for="(user, index) in sliceUsers"
          :id="index === sliceUsers.length - 1 && 'lastItem'"
          :key="user._id"
          class="flex items-center mb-4 pb-2 border-b border-gray-200 dark:border-gray-500"
        >
          <span
            :class="{
              'text-secondColor dark:text-secondColor': index === 0 && nowSortedByRating,
              'text-green-300 dark:text-green-300': index === 1 && nowSortedByRating,
              'text-red-300 dark:text-red-300': index === 2 && nowSortedByRating,
              'text-mainColor dark:text-darkModeTextColor': index > 2 || !nowSortedByRating,
            }"
          >
            {{ index + 1 }}
          </span>
          <img
            class="w-14 ml-4 h-14 rounded-full object-cover"
            :src="user.photo"
            alt="user.name"
            :class="{
              'shadow-secondColorShadow border-2 border-secondColor':
                index === 0 && nowSortedByRating,
              'shadow-green border-2 border-green-300': index === 1 && nowSortedByRating,
              'shadow-red border-2 border-red-300': index === 2 && nowSortedByRating,
            }"
          />
          <div class="ml-4 flex flex-col text-mainColor dark:text-darkModeTextColor">
            <router-link :to="{ name: 'user-page', params: { id: user._id } }">
              <span class="hover:text-secondColor-100 dark:hover:text-thirdColor-100">
                {{ user.name }}
              </span>
            </router-link>
            <span class="text-sm text-mainColor-100 dark:text-darkModeTextColor-100">
              Рейтинг: {{ user.rating }}, Статус: {{ user.status }}
            </span>
            <span class="text-sm text-mainColor-100 dark:text-darkModeTextColor-100"> </span>
          </div>
        </div>
        <button
          v-show="users.length > pageSize && sliceUsers.length !== users.length"
          v-scroll-to="{ element: '#lastItem', duration: 2000 }"
          class="w-1/3 mx-auto btn-default"
          @click="currentPage++"
        >
          Показать еще
        </button>
      </div>

      <div
        class="w-full mb-8 flex flex-row order-1 lg:mb-0 lg:ml-8 lg:flex-col lg:order-2 lg:w-1/5"
      >
        <button
          class="w-full text-mainColor dark:text-darkModeTextColor lg:mb-4 flex focus:outline-none"
          @click="sortBtn('sortByRating')"
        >
          <span ref="sortByRating" class="material-icons mr-2 duration-500"> expand_more </span>
          <span>По рейтингу</span>
        </button>
        <button
          class="w-full text-mainColor dark:text-darkModeTextColor flex focus:outline-none"
          @click="sortBtn('sortByName')"
        >
          <span ref="sortByName" class="material-icons mr-2 duration-500"> expand_more </span>
          <span>По имени</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import IconBase from '@/components/icon-base';
import PackManLoader from '@/components/icons/pack-man-loader';

export default {
  name: 'RatingsPage',
  components: { PackManLoader, IconBase },
  data() {
    return {
      isLoading: false,
      users: null,
      currentPage: 1,
      pageSize: 7,
      nowSortedByRating: true,
    };
  },

  computed: {
    ...mapGetters(['getUsers']),
    sliceUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.users.slice(0, end);
    },
  },

  beforeRouteLeave(to, from, next) {
    console.log(to, from, next);
    if (to.name === 'user-page') {
      localStorage.setItem('currentPage', this.currentPage);
    } else {
      localStorage.removeItem('currentPage');
    }
    next();
  },

  async created() {
    const page = localStorage.getItem('currentPage');
    if (page) {
      this.currentPage = page;
    }
    if (this.getUsers) {
      this.users = this.sortUsers('rating');
      return;
    }
    this.isLoading = true;
    await this.getAllUsers();
    this.isLoading = false;
    this.users = this.sortUsers('rating');
  },

  methods: {
    ...mapActions(['getAllUsers']),
    sortUsers(param, direction = 'ascending') {
      if (typeof this.getUsers[0][param] === 'number') {
        return this.getUsers.sort((a, b) => {
          if (direction === 'ascending') return b[param] - a[param];
          if (direction === 'descending') return a[param] - b[param];
        });
      }
      if (typeof this.getUsers[0][param] === 'string') {
        return this.getUsers.sort((a, b) => {
          if (direction === 'ascending') return a[param].localeCompare(b[param]);
          if (direction === 'descending') return b[param].localeCompare(a[param]);
        });
      }
    },

    sortBtn(ref) {
      const checkedRef = this.$refs[ref];
      if (checkedRef.classList.contains('transform')) {
        checkedRef.classList.remove('transform');
        checkedRef.classList.remove('rotate-180');
        if (ref === 'sortByRating') {
          this.nowSortedByRating = true;
          this.users = this.sortUsers('rating');
          return;
        }
        if (ref === 'sortByName') {
          this.nowSortedByRating = false;
          this.users = this.sortUsers('name');
        }
      } else {
        checkedRef.classList.add('rotate-180');
        checkedRef.classList.add('transform');
        if (ref === 'sortByRating') {
          this.nowSortedByRating = false;
          this.users = this.sortUsers('rating', 'descending');
          return;
        }
        if (ref === 'sortByName') {
          this.nowSortedByRating = false;
          this.users = this.sortUsers('name', 'descending');
        }
      }
    },
  },
};
</script>
