/*import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';*/
import Home from './components/Home.vue';
import Header from './components/Header.vue';
//next for lazy loading
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'user'); //it is webpack syntax for making several bundles
};
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'user'); //it is webpack syntax for making several bundles
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  }, 'user'); //it is webpack syntax for making several bundles
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'user'); //it is webpack syntax for making several bundles
};


export const routes = [
  {path: '', name: 'home', components: {
    default: Home,
      'header-top': Header
    }},
  {path: '/user', components: {
      default: User,
      'header-bottom': Header
    }, children: [ //nested routes
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
        console.log('inside route setup');
        next()
        } },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]}, //:id - flexible element
  { path: '/redirect-me', redirect: { name: 'home' } },
  { path: '*', redirect: '/'} //all route that are not here path to home
];
