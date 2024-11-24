export function getFilterData(type) {
  if (type === "patent")
    return {
      专利类型: [
        { name: "发明专利" },
        { name: "实用新型" },
        { name: "外观设计" },
      ],
      授权范围: [
        {
          name: "农业牧业",
        },
        {
          name: "食品饮料",
        },
        {
          name: "家具用品",
        },
        {
          name: "教育休闲",
        },
        {
          name: "医药与医疗",
        },
        {
          name: "化学化工",
        },
        {
          name: "电气自动化",
        },
        {
          name: "新能源",
        },
        {
          name: "电子信息源",
        },
        {
          name: "仪器仪表",
        },
        {
          name: "环保和资源",
        },
        {
          name: "轻工纺织",
        },
        {
          name: "包装印刷",
        },
        {
          name: "建筑建材",
        },
        {
          name: "新型材料",
        },
        {
          name: "海洋开发",
        },
        {
          name: "航空航天",
        },
        {
          name: "采矿冶金",
        },
        {
          name: "交通运输",
        },
        {
          name: "橡胶塑料",
        },
        {
          name: "机械",
        },
        {
          name: "安全防护",
        },
        {
          name: "其他",
        },
      ],
      出售价格: [
        { name: "5000以下" },
        { name: "5000-2万" },
        { name: "2-4万" },
        { name: "4万以上" },
      ],
      其他条件: [
        {
          name: "是否独家",
        },
        {
          name: "是否特价",
        },
        {
          name: "交易类型",
        },
        {
          name: "专利状态",
        },
      ],
    };
}
