import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    menuItems: [
      {
        id: 1,
        title: 'Новости',
        linkName: 'news',
        icon: 'feed',
      },
      {
        id: 2,
        title: 'Профиль',
        linkName: 'profile',
        icon: 'badge',
      },
      {
        id: 3,
        title: 'Работадатели',
        linkName: 'employers',
        icon: 'business_center',
      },
      {
        id: 4,
        title: 'Рейтинги',
        linkName: 'ratings',
        icon: 'trending_up',
      },
      {
        id: 5,
        title: 'Магазин',
        linkName: 'shop',
        icon: 'store',
      },
      {
        id: 6,
        title: 'Ментор',
        linkName: 'mentor',
        icon: 'gavel',
      },
      {
        id: 7,
        title: 'Список заказов',
        linkName: 'order-list',
        icon: 'shopping_bag',
      },
    ],
    notAuthMenuItems: [
      {
        id: 1,
        title: 'Авторизация',
        linkName: 'login',
        icon: 'login',
      },
      {
        id: 2,
        title: 'Регистрация',
        linkName: 'registration',
        icon: 'app_registration',
      },
    ],
    user: {},
    allUsers: null,
    errors: null,
    successMessage: null,
    employers: [],
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setAllUsers(state, allUsers) {
      state.allUsers = allUsers;
    },

    changeAuth(state, auth) {
      state.isAuth = auth;
    },

    setErrors(state, errors) {
      state.errors = errors;
    },

    setSuccessMessage(state, success) {
      state.successMessage = success;
    },

    setEmployers(state, employers) {
      state.employers = employers;
    },
  },

  actions: {
    async login({ commit }, payload) {
      commit('setErrors', null);
      commit('setSuccessMessage', null);
      try {
        const { data } = await api.user.login(payload);
        commit('setUser', data.user);
        commit('changeAuth', true);
        commit('setSuccessMessage', data.success);
        localStorage.setItem('token', data.token);
      } catch (error) {
        commit('setErrors', error.response.data.errors);
      }
    },

    async registration({ commit }, payload) {
      commit('setErrors', null);
      commit('setSuccessMessage', null);
      try {
        const { data } = await api.user.registration(payload);
        commit('setUser', data.user);
        commit('changeAuth', true);
        commit('setSuccessMessage', data.success);
        localStorage.setItem('token', data.token);
      } catch (error) {
        commit('setErrors', error.response.data.errors);
      }
    },

    logout({ commit }) {
      commit('setErrors', null);
      commit('setUser', {});
      commit('changeAuth', false);
      localStorage.removeItem('token');
    },

    async checkAuth({ commit }) {
      commit('setErrors', null);
      commit('setSuccessMessage', null);
      try {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          const { data } = await api.user.checkAuth({ token });
          commit('setUser', data.user);
          commit('changeAuth', true);
          commit('setSuccessMessage', data.success);
        }
      } catch (error) {
        commit('setErrors', error.response.data.errors);
      }
    },

    async editUserProfile({ commit }, payload) {
      commit('setErrors', null);
      commit('setSuccessMessage', null);
      try {
        const { data } = await api.user.editProfile(payload);
        commit('setUser', data.user);
        commit('setSuccessMessage', data.success);
      } catch (error) {
        commit('setErrors', error.response.data.errors);
      }
    },

    async getAllUsers({ commit }) {
      commit('setErrors', null);
      try {
        const { data } = await api.user.getAllUsers();
        commit('setAllUsers', data.users);
      } catch (error) {
        commit('setErrors', error.response.data.errors);
      }
    },

    async getAllEmployers({ commit }) {
      commit('setErrors', null);
      try {
        const { data } = await api.employers.getEmployers();
        commit('setEmployers', data.employers);
      } catch (error) {
        commit('setErrors', error.response.data.errors);
      }
    },
  },

  getters: {
    getAuth(state) {
      return state.isAuth;
    },

    getUser(state) {
      return state.user;
    },

    getUsers(state) {
      return state.allUsers;
    },

    getMenuItems(state) {
      if (state.isAuth) return state.menuItems;
      return state.notAuthMenuItems;
    },

    getErrors(state) {
      if (state.errors) return state.errors;
      return null;
    },

    getSuccessMessage(state) {
      if (state.successMessage) return state.successMessage;
      return null;
    },

    getEmailStatus(state) {
      return state.user.confirmedEmail;
    },

    getEmployers(state) {
      return state.employers;
    },
  },
});
