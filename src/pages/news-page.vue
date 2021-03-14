<template>
  <div class="flex flex-col lg:flex-row w-full h-full">
    <div class="w-full lg:w-4/5 order-2 lg:order-1 space-y-10 ">
      <div
        v-for="item in news"
        :key="item.id"
        class="card-default h-60 mx-10 dark:shadow-thirdColorShadow overflow-auto"
      >
        <h2 class="text-2xl">{{ item.title }}</h2>
        <p class="">
          {{ item.body }}
        </p>
      </div>
    </div>
    <div
      class="w-full mx-5 mt-5 space-y-0 order-1 flex flex-wrap flex-row lg:flex-col lg:w-1/5 lg:order-2 lg:space-y-2"
    >
      <div class="mx-5 cursor-pointer hover:text-mainColor dark:hover:text-thirdColor-100">Общие новости</div>
      <div class="mx-5 cursor-pointer hover:text-mainColor dark:hover:text-thirdColor-100">Питерский кампус</div>
      <div class="mx-5 cursor-pointer hover:text-mainColor dark:hover:text-thirdColor-100">Московский кампус</div>
      <div class="mx-5 cursor-pointer hover:text-mainColor dark:hover:text-thirdColor-100">Онлайн буткемп</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-page',

  data() {
    return {
      news: [
        {
          id: 1,
          title: 'Статья № 1',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at eveniet harum ipsum magni veritatis. Ad adipisci at consequatur maiores nam omnis pariatur, placeat praesentium quisquam quod rem, saepe sed velit veritatis, voluptatem. Blanditiis excepturi ipsum nostrum, perferendis qui repudiandae suscipit. Accusamus accusantium ad aperiam aspernatur corporis debitis dolorem dolores ea est, exercitationem expedita explicabo inventore labore placeat porro praesentium provident quia quisquam repellat rerum similique suscipit unde. Aliquam at atque autem dolorum eum eveniet explicabo facilis fugiat laborum minima mollitia nam natus nisi nobis nostrum odit perferendis quae quam quibusdam ratione recusandae reiciendis, repellendus repudiandae suscipit voluptatem? A accusamus adipisci aspernatur aut corporis deserunt dolore fugiat, hic impedit in iure libero magnam maiores maxime molestiae nesciunt non quidem quis reprehenderit sunt totam unde vel voluptate. Aut facilis in sit! Commodi incidunt iusto maiores, minus perferendis quae ullam voluptas? Atque cumque doloremque, expedita iste minima minus officia reprehenderit. Aliquid consequatur, cupiditate, dicta dignissimos ducimus eos error et incidunt laborum molestias nesciunt nulla repellat reprehenderit veritatis vero! Aperiam ea expedita iure laudantium officia soluta temporibus voluptates! Accusantium ad, amet aspernatur assumenda consequuntur corporis cumque debitis error explicabo incidunt laudantium, libero maxime natus praesentium quibusdam reprehenderit repudiandae, sit tempora ullam veritatis voluptatum.',
        },
        {
          id: 2,
          title: 'Статья № 2',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at eveniet harum ipsum magni veritatis. Ad adipisci at consequatur maiores nam omnis pariatur, placeat praesentium quisquam quod rem, saepe sed velit veritatis, voluptatem. Blanditiis excepturi ipsum nostrum, perferendis qui repudiandae suscipit. Accusamus accusantium ad aperiam aspernatur corporis debitis dolorem dolores ea est, exercitationem expedita explicabo inventore labore placeat porro praesentium provident quia quisquam repellat rerum similique suscipit unde. Aliquam at atque autem dolorum eum eveniet explicabo facilis fugiat laborum minima mollitia nam natus nisi nobis nostrum odit perferendis quae quam quibusdam ratione recusandae reiciendis, repellendus repudiandae suscipit voluptatem? A accusamus adipisci aspernatur aut corporis deserunt dolore fugiat, hic impedit in iure libero magnam maiores maxime molestiae nesciunt non quidem quis reprehenderit sunt totam unde vel voluptate. Aut facilis in sit! Commodi incidunt iusto maiores, minus perferendis quae ullam voluptas? Atque cumque doloremque, expedita iste minima minus officia reprehenderit. Aliquid consequatur, cupiditate, dicta dignissimos ducimus eos error et incidunt laborum molestias nesciunt nulla repellat reprehenderit veritatis vero! Aperiam ea expedita iure laudantium officia soluta temporibus voluptates! Accusantium ad, amet aspernatur assumenda consequuntur corporis cumque debitis error explicabo incidunt laudantium, libero maxime natus praesentium quibusdam reprehenderit repudiandae, sit tempora ullam veritatis voluptatum.',
        },
      ],
    };
  },
};
</script>
