<template>
  <div class="filter-box-container">
    <div v-for="(options, key) in dataObject" :key="key" class="filter-box">
      <p class="title-1">{{ key }}</p>
      <el-link
        class="link-unlimited"
        :underline="false"
        @click="selectLink(key, '不限')"
      >
        <p class="title-2" :class="{ active: selectedLinks[key] === '不限' }">
          不限
        </p>
      </el-link>
      <div class="options-container">
        <el-link
          v-for="option in options"
          :key="option.name"
          :underline="false"
          @click="selectLink(key, option.name)"
        >
          <p
            class="option"
            :class="{ active: selectedLinks[key] === option.name }"
          >
            {{ option.name }}
          </p>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    dataObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedLinks: Object.keys(this.dataObject).reduce((acc, key) => {
        acc[key] = "不限";
        return acc;
      }, {}),
    };
  },
  methods: {
    selectLink(key, name) {
      this.selectedLinks[key] = name;
      this.$emit("update:selectedLinks", this.selectedLinks);
    },
  },
};
</script>

<style scoped>
.filter-box-container {
  width: 80%;
  margin: 20px auto;
  border-radius: 9px;
  background: linear-gradient(
    180deg,
    rgba(172, 128, 209, 0.8) 0%,
    rgba(91, 104, 207, 0.8) 100%
  );
  padding: 10px; /* 添加内边距以改善触控体验 */
}
.filter-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 10px; /* 增加底部间距 */
}
.title-1 {
  margin-left: 15px;
  font-size: 2rem; /* 使用相对单位 */
  font-weight: 900;
  color: rgba(230, 230, 230, 1);
}
.link-unlimited {
  flex: 1; /* 允许链接占据可用空间 */
  max-width: 100px; /* 最大宽度限制 */
}
.title-2 {
  font-size: 1rem; /* 使用相对单位 */
  font-weight: 400;
  color: rgba(230, 230, 230, 1);
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center; /* 垂直对齐 */
  justify-content: flex-start; /* 水平对齐方式，左对齐 */
  gap: 5px; /* 项目间隔 */
  flex: 4; /* 允许选项容器占据更多空间 */
}
.option {
  margin: 2px; /* 调整为更小的间距 */
  padding: 5px 10px; /* 增加适中的内边距 */
  min-width: 80px; /* 更灵活的最小宽度 */
  font-size: 1rem; /* 使用相对单位 */
  color: rgba(230, 230, 230, 1);
  text-align: left; /* 水平居中对齐文本 */
  width: 100%;
}
.active {
  color: blue;
  font-weight: bold;
}
</style>
