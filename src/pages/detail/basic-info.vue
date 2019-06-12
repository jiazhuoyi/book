<template>
  <div class="basic-info">
    <div class="info-container">
      <!-- <div class="publisher-info"></div> -->
      <!-- <div class="cell">
        <div class="publisher-name item">
          <span class="item-title">出版社</span>
          <span class="item-text">{{book.publisher}}</span>
        </div>
        <div class="item2"></div>
      </div> -->
      <van-row>
        <van-col span="5">出版社</van-col>
        <van-col span="19">{{book.publisher}}</van-col>
      </van-row>
      <van-row>
        <van-col span="5">ISBN</van-col>
        <van-col span="19">{{book.isbn13}}</van-col>
      </van-row>
      <!-- <div class="cell">
        <div class="publisher-isbn item">
          <span class="item-title">ISBN</span>
          <span class="item-text">{{book.isbn13}}</span>
        </div>
        <div class="item2"></div>
      </div> -->
      <van-row>
        <van-col span="5">出版时间</van-col>
        <van-col span="9">{{book.pubdate}}</van-col>
        <van-col span="4">页数</van-col>
        <van-col span="6">{{book.pages}}</van-col>
      </van-row>
      <van-row>
        <van-col span="5">装帧</van-col>
        <van-col span="9">{{book.binding}}</van-col>
        <van-col span="4">价格</van-col>
        <van-col span="6">{{book.price}}</van-col>
      </van-row>
      <!-- <div class="cell">
        <div class="item">
          <span class="item-title">出版时间</span>
          <span class="item-text">{{book.pubdate}}</span>
        </div>
        <div class="item2">
          <span class="item-title">页数</span>
          <span class="item-text">{{book.pages}}</span>
        </div>
      </div> -->
      <!-- <div class="cell">
        <div class="item">
          <span class="item-title">装帧</span>
          <span class="item-text">{{book.binding}}</span>
        </div>
        <div class="item2">
          <span class="item-title">价格</span>
          <span class="item-text">{{book.price}}</span>
        </div>
      </div> -->
    </div>
    <div class="book-summary">
      <p class="summary-title">内容介绍</p>
      <p class="summary-text">{{book.summary}}</p>
      <!-- <rich-text class="summary-text" :nodes="book.summary"></rich-text> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      book: {
        publisher: '北京十月文艺出版社',
        isbn13: '9787530219218',
        pubdate: '2019-4-16',
        pages: '345',
        binding: '精装',
        price: '55',
        summary: '他是全村最出奇古怪的人，古怪的名目要扳着指头一个一个数：\n第一，他当过国民党军队的上校，是革命群众要斗争的对象。但大家一边斗争他，一边又巴结讨好他，家里出什么事都去找他拿主意。\n第二，都说他是太监，可我们小孩子经常偷看他那个地方，好像还是满当当的，有模有样的。\n第三， 他向来不出工，不干农活，天天空在家里看报纸，嗑瓜子，可日子过得比谁家都舒坦。还像养孩子一样养着一对猫，宝贝得不得了，简直神经病！”\n·\n《人生海海》讲述了一个人在时代中穿行缠斗的一生，离奇的故事里藏着让人叹息的人生况味,既有日常滋生的残酷，也有时间带来的仁慈。\n=========\n人生如海，总有阴冷暴虐的水域，也有轻柔温暖的洋流。\n·\n“生活摧残了他，但也让他穿越了生死恐惧和世态炎凉， 变得大彻大悟， 笑傲江湖。 ”\n他知道怎样在风光处耀目，也知道怎么在卑贱中自处。\n·\n★麦家强力超越之作·在一个最不可描述之处解密人性的荒唐与高尚\n★小说的迷人之 处就在于它能把不存在的人物写得仿佛是我们的朋友，麦家的《人生海海》就是这么迷人。——莫言\n★麦家的身上永远有一种旁观者的气质，一旦他开了口，他的语言是那么的精准。他的细节是那么的触动，他的思想是那么的深刻。如果用一句诗来形容我读完《人生海海》的感受，那就是“回首向来萧瑟处，也无风雨也无晴”。——董卿\n★我想写的是在绝望中诞生的幸运，在艰苦中卓绝的道德。我要另立山头，回到童年，回去故乡，去破译人心和人性的密码。——麦家\n★《人生海海》是麦家老师跨越了自己的第一座高峰，向内心深处的文学攀登下一座高峰的大作。——高晓松\n=========\n★“人生海海，敢死不叫勇气，活着才需要勇气。你要替我记住这句话，我要不遇到它，死几回都不够。”\n★人生海海，潮落之后是潮起。\n你说那是消磨、笑柄、罪过，但那就是我的英雄主义。'
      }
    }
  }
}
</script>

<style scoped>
.basic-info {
  margin-top: 10rpx;
  background-color: #fff;
  height: 400rpx;
  padding: 40rpx;
}
.info-container {
  border: 1rpx solid #e0e0e0;
  padding: 20rpx;
  font-size: 28rpx;
}
/* .publisher-isbn {
  border-bottom: 1rpx solid #e0e0e0;
  padding-bottom: 20rpx;
} */
.item {
  line-height: 40rpx;
  display: flex;
  flex: 3;
  font-size: 28rpx;
}
.item2 {
  line-height: 40rpx;
  display: flex;
  flex: 2;
  font-size: 28rpx;
}
.item-title {
  flex: 1;
  text-align: left;
}
.item-text {
  flex: 2;
  text-align: left;
}
.cell {
  display: flex;
}

.book-summary {
  margin-top: 40rpx;
}

.summary-title {
  color: red;
}

.summary-text {
  font-size: 28rpx;
  line-height: 40rpx;
  margin-top: 20rpx;
}
</style>
