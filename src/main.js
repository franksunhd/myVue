import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import api from './config/api.js';
import canvas from './config/canvas.js';
import ElementUI from 'element-ui';
import {
  Message,
  MessageBox
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css';
import './assets/css/common.css';
import 'font-awesome/css/font-awesome.min.css'
Vue.use(Vuex);
Vue.use(ElementUI);

Vue.config.productionTip = false; // 阻止 vue 在启动时生成生产提示
Vue.prototype.getCookie = getCookie;
Vue.prototype.setCookie = setCookie;
Vue.prototype.delCookie = delCookie;
Vue.prototype.$api = api;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$canvas = canvas;

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    projectInfo: {
      projectName: '',
      projectId: '',
      time: '',
      mobile:'',
      name:'',
      pwdstatus:''
    },
    loading: false,
  },
  mutations: {
    getProject(state, json) {
      for (var key in json) {
        state.projectInfo[key] = json[key];
      }
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setCreateTime(state, time) {
      state.createTime = time;
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    "$route": 'checkLogin'
  },
  methods: {
    checkLogin() {
      if (!localStorage.getItem('userName') && this.$route.name !== 'Registered' && this.$route.name !== 'ForgetPassword') {
        this.$router.replace('/login');
      }
    }
  }
});

// 获取cookie
function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if(arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
// 设置cookie 有效期为30天
function setCookie(name,value,days) {
  var exp = new Date();
  exp.setDate(exp.getDate() + days);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
// 删除 cookie
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = this.getCookie(name);
  if(cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
