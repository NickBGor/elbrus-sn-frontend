import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import ProfilePage from '@/pages/profile-page';
import LoginPage from '@/pages/login-page';
import RegistrationPage from '@/pages/registration-page';
import EmployersPage from '@/pages/employers-page';
import RatingPage from '@/pages/rating-page';
import ShopPage from '@/pages/shop-page';
import MentorPage from '@/pages/mentor-page';
import OrderListPage from '@/pages/order-list-page';
import NewsPage from '@/pages/news-page';
import NotFoundPage from '@/pages/not-found-page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'news',
    component: NewsPage,
    meta: { auth: true },
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { auth: true },
    component: ProfilePage,
  },
  {
    path: '/employers',
    name: 'employers',
    meta: { auth: true },
    component: EmployersPage,
  },
  {
    path: '/ratings',
    name: 'ratings',
    meta: { auth: true },
    component: RatingPage,
  },
  {
    path: '/shop',
    name: 'shop',
    meta: { auth: true },
    component: ShopPage,
  },
  {
    path: '/mentor',
    name: 'mentor',
    meta: { auth: true },
    component: MentorPage,
  },
  {
    path: '/order-list',
    name: 'order-list',
    meta: { auth: true },
    component: OrderListPage,
  },
  {
    path: '/registration',
    name: 'registration',
    meta: { auth: false },
    component: RegistrationPage,
  },
  {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    component: LoginPage,
  },
  {
    path: '*',
    name: 'not-found-page',
    meta: { auth: false },
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuthRoute = to.matched.some((e) => e.meta.auth);
  const isAuth = store.getters.getAuth;

  if (requireAuthRoute && !isAuth) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
