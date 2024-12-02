import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    patentData: {}, // 用于存储专利数据
    tradeData: {}, // 用于存储商标数据
    copyrightData: {}, // 用于存储著作权数据
    item: {}, // 其他选中的项目
    isLoggedIn: false,
    isChoose: false,
    news: {},
    username: "",
    password: "",
    userInfo: {}, // 用户信息
    demandData: {}, // 需求信息
  },
  mutations: {
    SET_ITEM(state, item) {
      state.item = item; // 设置选中的项目
    },
    SET_PATENT_DATA(state, data) {
      state.patentData = data; // 设置专利数据
    },
    SET_TRADE_DATA(state, data) {
      state.tradeData = data; // 设置商标数据
    },
    SET_COPYRIGHT_DATA(state, data) {
      state.copyrightData = data; // 设置著作权数据
    },

    SET_USER_STATE(state, status) {
      state.isLoggedIn = status; // 设置用户登录状态
    },
    SET_USER_USERNAME(state, username) {
      state.username = username; // 设置用户名
    },
    SET_USER_PASSWORD(state, password) {
      state.password = password; // 设置密码
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo; // 设置用户信息
    },
    SET_DEMAND_DATA(state, demandData) {
      state.demandData = demandData; // 设置需求信息
    },
    SET_NEWS(state, news) {
      state.news = news; // 设置新闻数据
    },
    CLEAR_DATA(state) {
      state.patentData = null; // 清空专利数据
      state.tradeData = null; // 清空商标数据
      state.copyrightData = null; // 清空著作权数据
      state.item = null; // 清空选中的项目
      state.isLoggedIn = false; // 清空用户状态
      state.username = ""; // 清空用户名
      state.password = ""; // 清空密码
      state.userInfo = {}; // 清空用户信息
      state.isChoose = false; // 清空选择状态
      state.news = {}; // 清空新闻数据
      state.demandData = {}; // 清空需求信息
    },
  },
  actions: {},
  getters: {
    getItem: (state) => state.item, // 获取选中的项目
    getPatentData: (state) => state.patentData, // 获取专利数据
    getTradeData: (state) => state.tradeData, // 获取商标数据
    getCopyrightData: (state) => state.copyrightData, // 获取著作权数据
    getUserState: (state) => state.isLoggedIn, // 获取用户状态
    getUsername: (state) => state.username, // 获取用户名
    getPassword: (state) => state.password, // 获取密码
    getUserInfo: (state) => state.userInfo, // 获取用户信息
    getDemandData: (state) => state.demandData, // 获取需求信息
    getNews: (state) => state.news, // 获取新闻数据
  },
  plugins: [createPersistedState()], // 使用插件
});

export default store; // 确保导出 store
