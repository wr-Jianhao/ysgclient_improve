import index_1 from "@/assets/index_1.png";
import index_2 from "@/assets/index_2.png";
import choose_img1 from "@/assets/choose_img1.png";
import choose_img2 from "@/assets/choose_img2.png";
import choose_img3 from "@/assets/choose_img3.png";
import team from "@/assets/team.png";
import statistic from "@/assets/statistic.png";
import database from "@/assets/database.png";
import right from "@/assets/right.png";
import money from "@/assets/money.png";
import trade from "@/assets/trade.png";
import law from "@/assets/law.png";
import government from "@/assets/government.png";
import recommend_img6 from "@/assets/recommend_img6.jpg";
import recommend_img5 from "@/assets/recommend_img5.jpg";
import recommend_img3 from "@/assets/recommend_img3.jpg";
import recommend_img4 from "@/assets/recommend_img4.jpg";
export function getData() {
  return {
    serviceCityList: [
      {
        name: "昆明",
      },
      {
        name: "玉溪",
      },
      {
        name: "大理",
      },
      {
        name: "丽江",
      },
      {
        name: "保山",
      },
      {
        name: "丽江",
      },
      {
        name: "丽江",
      },
      {
        name: "丽江",
      },
      {
        name: "丽江",
      },
    ],
    chooseImgList: [
      {
        index: 1,
        name: choose_img1,
        title: "彝时光环境",
      },
      {
        index: 2,
        name: choose_img2,
        title: "彝时光会议",
      },
      {
        index: 3,
        name: choose_img3,
        title: "彝时光环境",
      },
    ],
    featureList: [
      {
        name: "100+人专业团队",
        detail: "专业为基础，品质为根本，7*14小时在线，实时满足客户知产需要",
        icon: team,
      },
      {
        name: "地方行业资源",
        detail: "本土化检索评估，优质资源实时更新，好商标任您随心选",
        icon: statistic,
        /*              icon:'feature_icon2.png' */
      },
      {
        name: "一站式知产平台",
        detail: "互联网+知识产权，用户专业化流程，打造闭环式知产生态圈",
        icon: database,
        /*        icon:'feature_icon3.png' */
      },
      {
        name: "政企协作机构",
        detail: "官方机构权威认证，流程操作公开透明，服务专业有保障！",
        icon: right,
        /*         icon:'feature_icon4.png' */
      },
    ],
    recommendList: [
      {
        name: "公告信息",
        background: recommend_img6,
        link: "/news",
        detail: "及时了解平台公共、了解平台政策和管理制度",
      },
      {
        name: "宣传片",
        background: recommend_img5,
        link: "",
        detail: "了解平台宣传片，推动知识产权服务工作",
      },
      {
        // name: "行业新闻",
        name: "专利市场",
        background: recommend_img3,
        link: "/patent",
        detail: "关注知识产权、关注科技，关注创新创业",
      },
      {
        // name: "平台咨询",
        name: "需求市场",
        background: recommend_img4,
        link: "/demand",
        detail: "及时了解平台、服务中心、高新区新闻和服务政策",
      },
    ],
    bottomDetailList: [
      {
        title: "资金保障",
        detail: "交易期间全程托管资金担保保障买卖双方权益",
        icon: money,
      },
      {
        title: "交易保障",
        detail: "交易额满足条件，派有专人全程陪同交易",
        icon: trade,
      },
      {
        title: "法律保障",
        detail: "交易签署权威合同，提供专业法务咨询与援助",
        icon: law,
      },
      {
        title: "国家机构",
        detail: "一站式知产服务平台，国家知识产权局备案机构",
        icon: government,
      },
    ],
    casualList: [{ src: index_1 }, { src: index_2 }],
  };
}
