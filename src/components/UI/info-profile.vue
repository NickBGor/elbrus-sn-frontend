<template>
  <div v-if="!isEditable" class="flex flex-col flex-wrap w-full lg:flex-row lg:w-6/12">
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
          Нажми кнопку редактировать что бы добавить свои контакты
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
          Попроси своего ментора добавить тебя в твою группу
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
        Нажми кнопку редактировать что бы добавить новые навыки
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoProfile',

  props: {
    user: {
      type: Object,
      default: null,
    },

    isEditable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
