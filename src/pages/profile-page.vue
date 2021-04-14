<template>
  <div class="flex flex-col">
    <div class="flex flex-col lg:flex-row">
      <div class="mx-auto my-5 lg:ml-20 lg:mr-10 w-96">
        <avatar-profile :src="getUser.photo" alt="user_photo" />
        <button
          v-if="!isEditable"
          class="btn-default mt-8 w-3/4 mx-auto text-md"
          @click="editHandler"
        >
          Редактировать профиль
        </button>
        <div v-else class="flex">
          <button
            class="btn-default mt-8 w-2/5 mx-auto text-md"
            :class="{ 'btn-disabled': isLoading }"
            :disabled="isLoading"
            @click="saveHandler"
          >
            Сохранить
          </button>
          <button
            class="btn-default mt-8 w-2/5 mx-auto text-md bg-red-500 text-darkModeTextColor hover:bg-red-700"
            :class="{ 'btn-disabled': isLoading }"
            :disabled="isLoading"
            @click="cancelHandler"
          >
            Отменить
          </button>
        </div>
      </div>

      <info-profile :user="getUser" :isEditable="isEditable" />

      <div v-if="isEditable" class="m-auto w-4/5 lg:w-4/12 lg:m-5 relative">
        <icon-base
          v-if="isLoading"
          width="300px"
          height="300px"
          viewBox="0 0 100 100"
          class="absolute left-20 top-10 z-10"
        >
          <pack-man-loader />
        </icon-base>
        <div :class="{ 'opacity-50': isLoading }">
          <div class="mb-8">
            <div>
              <label for="name">Имя:</label>
            </div>
            <input
              id="name"
              v-model="name"
              class="input-default w-11/12"
              type="text"
              placeholder="Укажите ваше имя"
              :disabled="isLoading"
            />
          </div>
          <div class="mb-8">
            <div class="flex items-center">
              <label>Навыки:</label>
              <span
                class="material-icons mx-2 text-green-400 cursor-pointer"
                @click="addHandler(skills)"
              >
                add_circle_outline
              </span>
            </div>
            <div v-for="(_, i) in skills" :key="i" class="flex items-center">
              <input
                v-model="skills[i]"
                class="input-default my-1"
                type="text"
                placeholder="Укажите ваш навык"
                :disabled="isLoading"
              />
              <span
                class="material-icons mx-1 text-red-400 cursor-pointer"
                @click="deleteHandler(skills, i)"
              >
                remove_circle_outline
              </span>
            </div>
          </div>
          <div class="mb-8">
            <div class="flex items-center">
              <label>Контакты:</label>
              <span
                class="material-icons mx-2 text-green-400 cursor-pointer"
                @click="addHandler(contacts)"
              >
                add_circle_outline
              </span>
            </div>
            <div v-for="(_, i) in contacts" :key="i" class="flex items-center">
              <input
                v-model="contacts[i].type"
                class="input-default my-1 w-3/12 mr-1"
                type="text"
                placeholder="Тип контакта"
                :disabled="isLoading"
              />
              :
              <input
                v-model="contacts[i].contact"
                class="input-default ml-1 w-8/12 mx-1"
                type="text"
                placeholder="Укажите ваш контакт"
                :disabled="isLoading"
              />
              <span
                class="material-icons mx-1 text-red-400 cursor-pointer"
                @click="deleteHandler(contacts, i)"
              >
                remove_circle_outline
              </span>
            </div>
            <div class="mt-8">
              <a-upload
                name="file"
                action="https://api.cloudinary.com/v1_1/dwtshakxu/image/upload"
                :data="{ upload_preset: 'upload-users-avatars' }"
                listType="picture"
                @change="photoUpload"
              >
                <button class="btn-default flex items-center">
                  <span class="material-icons mr-2">
                    file_download
                  </span>
                  Новое фото
                </button>
              </a-upload>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import InfoProfile from '@/components/UI/info-profile';
import AvatarProfile from '@/components/UI/avatar-profile';
import IconBase from '@/components/icon-base';
import PackManLoader from '@/components/icons/pack-man-loader';

export default {
  name: 'ProfilePage',

  components: {
    InfoProfile,
    AvatarProfile,
    PackManLoader,
    IconBase,
  },

  data() {
    return {
      isEditable: false,
      isLoading: false,
      id: 0,
      name: '',
      photo: '',
      skills: [],
      contacts: [],
    };
  },

  computed: mapGetters(['getUser']),

  methods: {
    ...mapActions(['editUserProfile']),

    editHandler() {
      this.id = this.getUser._id;
      this.name = this.getUser.name;
      this.photo = this.getUser.photo;
      this.skills = this._.cloneDeep(this.getUser.skills);
      this.contacts = this._.cloneDeep(this.getUser.contacts);
      this.isEditable = true;
    },

    async saveHandler() {
      this.isLoading = true;
      await this.editUserProfile({
        name: this.name,
        userId: this.id,
        skills: this.skills,
        imgUrl: this.photo === this.getUser.photo ? this.getUser.photo : this.photo,
        contacts: this.contacts,
      });
      this.isEditable = false;
      this.isLoading = false;
    },

    cancelHandler() {
      this.id = '';
      this.name = '';
      this.photo = '';
      this.skills = [];
      this.contacts = [];
      this.isEditable = false;
    },

    deleteHandler(array, i) {
      array.splice(i, 1);
    },

    addHandler(array) {
      if (array === this.skills) {
        array.push('');
      }
      if (array === this.contacts) {
        array.push({ type: '', contact: '' });
      }
    },

    async photoUpload(info) {
      if (info.file.status === 'done') {
        this.$notification.success({
          message: 'Успех',
          description: 'Загрузка файла прошла успешно',
          class: 'bg-bodyColor-lightMode dark:bg-thirdColor',
        });
        this.photo = info.file.response.secure_url;
      } else if (info.file.status === 'error') {
        this.$notification.error({
          message: 'Ошибка',
          description: 'Что то пошло не так при загрузке файла. Попробуйте еще раз.',
          class: 'bg-bodyColor-lightMode dark:bg-thirdColor',
        });
      }
    },
  },
};
</script>

<style>
.ant-upload-list-item,
.ant-upload-list-item-done,
.ant-upload-list-item-list-type-picture {
  border: 1px solid #66eefb !important;
  color: #66eefb !important;
}
.ant-upload-list-item,
.ant-upload-list-item-done,
.ant-upload-list-item-list-type-picture svg {
  fill: #f77171 !important;
  margin-right: 4px !important;
}
</style>
