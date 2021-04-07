import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import notification from 'ant-design-vue/lib/notification';
import 'ant-design-vue/lib/notification/style/index.css';
import tag from 'ant-design-vue/lib/tag';
import 'ant-design-vue/lib/tag/style/index.css';
import icon from 'ant-design-vue/lib/icon';
import 'ant-design-vue/lib/icon/style/index.css';
import upload from 'ant-design-vue/lib/upload';
import 'ant-design-vue/lib/upload/style/index.css';
import progress from 'ant-design-vue/lib/progress';
import 'ant-design-vue/lib/progress/style/index.css';

import router from '@/router';
import store from '@/store';
import App from './App.vue';
import './assets/styles.css';

Vue.config.productionTip = false;
Vue.use(VueLodash, { name: 'custom', lodash });
Vue.use(tag);
Vue.use(icon);
Vue.use(upload);
Vue.use(progress);
Vue.prototype.$notification = notification;

store.dispatch('checkAuth').then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
