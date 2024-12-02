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
        height: 99vh;
      "
    >
      <p class="title">{{ demandData.title }}</p>
      <div v-html="demandData.content"></div>
    </div>
    <BottomBar />
  </div>
</template>
<script setup>
import HeaderBar from "@/components/header/index.vue";
import BottomBar from "@/components/bottom/index.vue";
import { ref, onMounted } from "vue";
import store from "@/store";

const demandData = ref({});
onMounted(() => {
  demandData.value = store.state.demandData;
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
</style>
