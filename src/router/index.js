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
import EmployerPage from '@/pages/employer-page';
import PasswordRecovery from '@/pages/password-recovery-page';
import SendMail from '@/pages/send-mail-page';
import ConfirmPage from '@/pages/confirmation-mail-page';
import InDevelopingPage from '@/pages/in-developing-page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: 'profile',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage,
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { auth: true, isConfirmed: true },
    component: ProfilePage,
  },
  {
    path: '/employers',
    name: 'employers',
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
    component: EmployersPage,
  },
  {
    path: '/employers/:id',
    name: 'employer',
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
    component: EmployerPage,
  },
  {
    path: '/ratings',
    name: 'ratings',
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
    component: RatingPage,
  },
  {
    path: '/shop',
    name: 'shop',
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
    component: ShopPage,
  },
  {
    path: '/mentor',
    name: 'mentor',
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
    component: MentorPage,
  },
  {
    path: '/order-list',
    name: 'order-list',
    redirect: 'dev',
    meta: { auth: true, isConfirmed: true },
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
    path: '/recovery-mail',
    name: 'recovery-mail',
    meta: { auth: false },
    component: SendMail,
  },
  {
    path: '/recovery',
    name: 'recovery',
    meta: { auth: false },
    component: PasswordRecovery,
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: ConfirmPage,
    meta: { auth: true, isConfirmed: false },
  },
  {
    path: '/dev',
    name: 'dev',
    component: InDevelopingPage,
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
  const requireEmailRoute = to.matched.some((e) => e.meta.isConfirmed);
  const isAuth = store.getters.getAuth;
  const isConfirmedEmail = store.getters.getEmailStatus;

  if (requireAuthRoute && !isAuth) {
    next({ name: 'login' });
  } else if (requireEmailRoute && !isConfirmedEmail) {
    next({ name: 'confirmation' });
  } else {
    next();
  }
});

export default router;
