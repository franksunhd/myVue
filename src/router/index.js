import Vue from 'vue';
import Router from 'vue-router';

// 登录页
const Login = () => import('@/page/login');
// 首页
const Index = () => import('@/page/Index');
const Home = () => import('@/page/pages/Home');
// 随笔
const LifeNote = () => import('@/page/pages/LifeNote');
const techNote = () => import('@/page/pages/techNote');
// 技术分享
const UiShare = () => import('@/page/pages/UiShare');
const webShare = () => import('@/page/pages/webShare');
const webBackShare = () => import('@/page/pages/webBackShare');
const toolSoftwareDetail = () => import('@/page/pages/toolSoftwareDetail');

// 文章归档
const lifeCount = () => import('@/page/pages/lifeCount');
const techCount = () => import('@/page/pages/techCount');
// 留言评论
const review = () => import('@/page/pages/review');
const leaveMessage = () => import('@/page/pages/leaveMessage');
// 关于我
const aboutBlog = () => import('@/page/pages/aboutBlog');
const aboutBlogger = () => import('@/page/pages/aboutBlogger');
// 注册
const Registered = () => import('@/page/pages/Registered');
// 找回密码
const ForgetPassword = () => import('@/page/pages/ForgetPassword');
// 设置管理
const Info = () => import('@/page/pages/Info');
const Account = () => import('@/page/pages/Account');

Vue.use(Router);
export default new Router({
  routes: [
    {path: '/', redirect:'/login'},  // 主页重定向
    {path: '/index',redirect:'index/home'},
    {path: '/index',name:'index',component:Index,
      children:[
        {path: '/index/home',name:'home',component:Home},
        {path: '/index/LifeNote',name:'LifeNote',component:LifeNote},
        {path: '/index/techNote',name:'techNote',component:techNote},
        {path: '/index/UiShare',name:'UiShare',component:UiShare},
        {path: '/index/UiShare/toolSoftwareDetail',name:'toolSoftwareDetail',component:toolSoftwareDetail},
        {path: '/index/webShare',name:'webShare',component:webShare},
        {path: '/index/webBackShare',name:'webBackShare',component:webBackShare},
        {path: '/index/lifeCount',name:'lifeCount',component:lifeCount},
        {path: '/index/techCount',name:'techCount',component:techCount},
        {path: '/index/review',name:'review',component:review},
        {path: '/index/leaveMessage',name:'leaveMessage',component:leaveMessage},
        {path: '/index/aboutBlog',name:'aboutBlog',component:aboutBlog},
        {path: '/index/aboutBlogger',name:'aboutBlogger',component:aboutBlogger},
        {path: '/index/info',name:'Info',component:Info},
        {path: '/index/account',name:'Account',component:Account},
      ]
    },
    // 登录
    {path: '/login', name:'login', component:Login},
    // 注册
    {path: '/registered', name:'Registered', component:Registered},
    // 找回密码
    {path: '/forgetPassword', name:'ForgetPassword', component:ForgetPassword},
  ]
});
