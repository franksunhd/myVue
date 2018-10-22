<template>
  <Box>
    <div class="aboutBlog-title"><strong>关于博主</strong></div>
    <div class="aboutBlog-date">
      <i class="el-icon-edit"></i>
      <span>{{author}}</span>
      <i class="el-icon-date"></i>
      <span>{{date}}</span>
    </div>
    <hr>
    <!--个人资料-->
    <div class="personData">
      <strong>个人资料:</strong>
      <div class="aboutBlog-margin">
        <span class="person" v-for="(item,index) in personData">{{item.label}}: {{item.value}}</span>
      </div>
      <!--爱好-->
      <div class="aboutBlog-margin">
        <span>爱好:</span>
        <span class="hobby-span" v-for="item in hobbyData">{{item}}</span>
      </div>
    </div>
    <!--人生微语-->
    <ul class="personData">
      <li><strong>人生微语</strong></li>
      <li class="phoneData" v-for="(item,index) in lifeData">{{item}}</li>
    </ul>
    <!--编程信仰-->
    <ul class="personData faithData">
      <li><strong>编程信仰</strong></li>
      <li class="phoneData" v-for="(item,index) in faithData">{{item}}</li>
    </ul>
    <!--联系方式-->
    <ul class="personData">
      <li><strong>联系方式:</strong></li>
      <li class="phoneData" v-for="(item,index) in emailData">
        <b>{{item.label}} </b>
        <a :href="item.url" target="_blank">{{item.value}}</a>
      </li>
    </ul>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "about-blogger",
    components:{Box},
    data(){
      return {
        author:'孙思研',
        date:'2018-09-19 10:47:00',
        personData:[ // 个人资料
          {label:'姓名',value:'孙思研'},
          {label:'性别',value:'男'},
          {label:'生年',value:1994},
          {label:'籍贯',value:'山西'},
          {label:'工作',value:'前端开发工程师'}
        ],
        emailData:[ // 联系方式
          {label:'我的邮箱',url:'javascript:;',value:'sun_si_yan@163.com'},
          {label:'我的QQ',url:'javascript:;',value:'1625363585'},
          {label:'我的WeChat',url:'javascript:;',value:'18435202861'},
          {label:'我的GitHub',url:'https://github.com/franksunhd',value:'franksunhd'},
          {label:'我的微博',url:'https://weibo.com/franksunhd',value:'franksun'}
        ],
        // 爱好
        hobbyData:['写文字','逛社区','看博客','追剧','涂鸦','发呆','旅行','吃零食','喝饮料'],
        // 人生微语
        lifeData:[
          '人需要去拼搏，拼搏会让你更加精彩.',
          '恰同学少年,风华正茂;书生意气,挥斥方遒.',
        ],
        faithData:[
          'Python之禅 by Tim Peters(蒂姆·彼得斯的Python之禅)',
          'Beautiful is better than ugly.(优美胜于丑陋)',
          'Explicit is better than implicit.(明了胜于晦涩)',
          'Simple is better than complex.(简洁胜于复杂)',
          'Complex is better than complicated.(复杂胜于凌乱)',
          'Flat is better than nested.(扁平胜于嵌套)',
          'Sparse is better than dense.(间隔胜于紧凑)',
          'Readability counts.(可读性很重要)',
          'Special cases aren\'t special enough to break the rules.(特殊情况不足以打破规则)',
          'Although practicality beats purity.(虽然实用性胜过纯洁)',
          'Errors should never pass silently.(不要包容所有错误)',
          'Unless explicitly silenced.(除非你确定需要这样做)',
          'In the face of ambiguity, refuse the temptation to guess.(当存在多种可能，不要尝试去猜测)',
          'There should be one-- and preferably only one --obvious way to do it.(而是尽量找一种，最好是唯一一种明显的解决方案)',
          'Although that way may not be obvious at first unless you\'re Dutch.(虽然这并不容易，因为你不是 Python 之父)',
          'Now is better than never.(做也许好过不做)',
          'Although never is often better than *right* now.(但不假思索就动手还不如不做)',
          'If the implementation is hard to explain, it\'s a bad idea.(如果你无法向人描述你的方案，那肯定不是一个好方案)',
          'If the implementation is easy to explain, it may be a good idea.(如果你可以容易的向人描述你的方案，那肯定是一个好方案)',
          'Namespaces are one honking great idea -- let\'s do more of those!(命名空间是一种绝妙的理念，我们应当多加利用)',
        ]
      }
    }
  }
</script>

<style scoped>
  .aboutBlog-title {font-size: 20px;margin-bottom: 15px;}
  .aboutBlog-date {font-size: 12px;margin-bottom: 30px;}
  .aboutBlog-date span, .personData span.person{margin-right: 20px;}
  .personData {font-size: 14px;margin-bottom: 30px;}
  .personData > strong, ul.personData li > strong{display: inline-block;margin-bottom: 10px;}
  .aboutBlog-margin {margin-bottom: 10px;text-indent: 1em;}
  .hobby-span::after {content: "、";}
  .hobby-span:last-child::after {content: "";}
  ul.personData li.phoneData {text-indent: 1em;margin-bottom: 10px;}
  ul.faithData li:nth-child(2) {font-weight: bold;}
</style>
