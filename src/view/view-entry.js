import Vue from 'vue';
import router from './view-router';
import App from './view-app';
import zan from '~components/index'; // 开发模式
// import UI from '../dist/index'; // 测试打包出来的index.js是否运行正常

import '~assets/style/index.less'

Vue.use(zan);

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#view',
  router,
  ...App
});
