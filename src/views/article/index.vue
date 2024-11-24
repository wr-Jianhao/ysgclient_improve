<template>
  <div style="background-color: rgba(240, 242, 245, 1); height: auto">
    <HeaderBar />
    <div
      style="
        width: 1300px;
        margin: 0 auto;
        border: 1px solid #ccc;
        padding: 20px;
        margin-top: 20px;
      "
    >
      <p class="title">
        {{ newsData.title }}
      </p>
      <div
        style="display: flex; justify-content: space-around; margin-top: 20px"
      >
        <span class="detail">时间：{{ newsData.date }}</span>
        <span class="detail">来源：{{ newsData.source }}</span>
        <span class="detail">点击数：1000</span>
        <span class="detail">浏览量：1000</span>
      </div>

      <hr />
      <p class="content">
        近日，省科技厅、省统计局和省财政厅联合发布《2023年云南省科技统计公报》，《公报》显示，2023年玉溪全社会研发投入经费达34.47亿元，比上年增加2.7亿元，增幅达8.47%；研发经费投入强度1.34%，同比提高0.08%，高于全省1.15%的平均水平，研发经费投入总量和强度均位居全省第3位。
        从经费总量来看，玉溪市研发经费总量仅次于昆明市和曲靖市，并连续两年保持全省第3位，占全省的比重达9.94%，对全省增量贡献达8.11%；从投入强度看，玉溪市研发经费投入强度高于全省平均水平0.19%，仅次于昆明市和保山市。
        从投入主体来看，企业继续保持研发经费投入“主力军”地位。《公报》显示，2023年全市企业研发经费投入达32.09亿元，同比增长4.53%，占全社会研发经费投入比重93.10%；规上工业企业中有研发活动的企业占比达31.94%，高于全省25.24%的平均水平，位居全省第一；规上工业企业中有研发机构的企业占比达39.52%，高于全省13.89%的平均水平，位居全省第一，较上年提升5位，增长近30%。
        立足充分发挥财政科技投入的杠杆作用，2023年全市财政科技投入超1亿元，达到2.44亿元，占财政支出比重0.98%，高于全省0.91%的平均水平，位居全省第二。
        近年来，玉溪市以前所未有的重视程度、政策力度和投入强度推动科技创新，落实“创新驱动高质量发展29条”及研发投入奖补政策，加力实施《玉溪市全社会研发投入提升行动方案》，突出企业创新主体地位，大力培育和发展新质生产力，推动高新技术企业“三倍增”行动计划，2024年争取研发经费投入奖补资金2606万元，奖补资金惠及全市150余户企业，单户企业最高获得奖补资金500万元，持续激发各类创新主体投入研发活动的积极性和主动性，奋力擦亮玉溪创新型城市“金字招牌”。
        下一步，玉溪将不断提升服务水平，加大规上企业走访力度，全面开展研发经费投入指导工作，推进规上企业研发投入全覆盖，重点关注新升规企业，加强优惠政策宣讲解读，稳存量、促增量、挖潜力、保增长，与各部门协同发力，共同推动全市研发经费投入提升工作取得新成绩。
      </p>
    </div>
    <BottomBar />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import store from "@/store";
import HeaderBar from "@/components/Header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
const newsData = ref({});

onMounted(() => {
  newsData.value = store.state.news;
});
</script>
<style scoped>
.title {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
}
.detail {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  vertical-align: top;
  margin-left: 20px;
}
.content {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;

  color: rgba(0, 0, 0, 1);
  text-align: justify;
  vertical-align: top;
  word-wrap: break-word; /* 长单词换行 */
  overflow-wrap: break-word; /* 兼容性更好的换行处理 */
  white-space: normal; /* 自动换行 */
  line-height: 1.5;
}
</style>
