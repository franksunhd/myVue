<template>
  <Box>
    <div class="aboutBlog-title"><strong>关于博客</strong></div>
    <div class="aboutBlog-date">
      <i class="el-icon-edit"></i>
      <span>{{author}}</span>
      <i class="el-icon-date"></i>
      <span>{{date}}</span>
    </div>
    <div class="aboutBlog-content">
      <p>
        认认真真写一下关于博客，当初建立博客的时候，那时我还处在学写程序的初步阶段。
        所谓的零基础，就是什么都不会。那个时候面对代码，我就觉得像面对恶魔一样，
        内心充满了恐惧和不安。我每天都在想，我是不是就不是敲代码的料，
        我是不是没那个脑子，我每天处于自我怀疑和自我否定的那个黑洞里，想逃却逃不出来。
        因为我从小就特别写文字，朋友建议我要不要去做编辑，干脆就忘记写程序吧。
        我执拗得说不，为什么要放弃，如果你现在处于我那时的纠结状态，请你继续加油，
        因为那段特别痛苦的时光正是破茧成蝶的时候，一定不要轻易说放弃，一定不要轻易的否定自己。
      </p>
      <p>
        写一下我整这个博客的初衷吧，那时经理让我做个新闻系统，
        利用现有的框架弄一个新闻的前后台出来，当前是规定了时间，一周完成。
        那时候，和我同组的那个女生和我一样，什么也不会。
        经理的想法就是，谁做出来，谁留下，做不出来就可以走人了。
        我这种执拗得性格，是绝对不可能灰头土脸的走人的。
        不想走的话，就自己研究代码。在什么都不会的情况，抓瞎的状态，
        我还是如期的完成了前后台功能。这个博客最初的原型，就是我第一个做的项目。
        为了纪念这深刻难忘的记忆，我决定把这个博客一直做下去，更新自己的心情，
        分享自己眼里看到的，书中读到的，工作中遇到的，于我而言把我所知道的分享给大家也是一种荣幸。
      </p>
      <p>
        此博客旨在发扬矫情见怪不怪，语不雷人死不休的风格。
        意在感慨春夏秋冬四季更迭，人生路上变幻莫测的波澜，
        念在激起键盘指尖充满灵性的火花，忆在学堂落拓而纯粹的美好年华，
        写在不起任何涟漪的时光里对着电脑碎碎念，
        如你喜欢此博客的风格或内容，分享给你身边的朋友或同学。
      </p>
      <p>
        ps:转载自 <a class="psUrl" href="https://www.yezismile.com/detail/6.html" target="_blank">叶子博客</a>,转载或引用请注明出处，尊重原创。
      </p>
    </div>
  </Box>
</template>

<script>
  import Box from '../../components/Box';
  export default {
    name: "about-blog",
    components:{Box},
    data(){
      return {
        author:'孙思研',
        date:'2018-09-19 10:47:00',
      }
    },
  }
</script>

<style scoped>
  .aboutBlog-title {font-size: 20px;margin-bottom: 15px;}
  .aboutBlog-date {font-size: 12px;margin-bottom: 30px;}
  .aboutBlog-date span {margin-right: 20px;}
  .aboutBlog-content p{font-size: 14px;text-indent: 2em;margin: 10px 0;line-height: 28px;}
  a.psUrl {color: #fc9b0e;}
</style>
