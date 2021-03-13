import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfilePage from '@/pages/profile-page';
import LoginPage from '@/pages/login-page';
import EmployersPage from '@/pages/employers-page';
import RatingPage from '@/pages/rating-page';
import ShopPage from '@/pages/shop-page';
import MentorPage from '@/pages/mentor-page';
import OrderListPage from '@/pages/order-list-page';
import RegistrationPage from '@/pages/registration-page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: 'login',
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },
  {
    path: '/employers',
    name: 'employers',
    component: EmployersPage,
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: RatingPage,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage,
  },
  {
    path: '/mentor',
    name: 'mentor',
    component: MentorPage,
  },
  {
    path: '/order-list',
    name: 'order-list',
    component: OrderListPage,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/logout',
    name: 'logout',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
