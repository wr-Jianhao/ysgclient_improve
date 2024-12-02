import money from "@/assets/money.png";
import trade from "@/assets/trade.png";
import law from "@/assets/law.png";
import government from "@/assets/government.png";
export function getBottomData() {
  return {
    bottomList: [
      {
        title: "资金保障",
        detail: "交易期间全程托管资金担保保障 买卖双方权益",
        icon: money,
      },
      {
        title: "交易保障",
        detail: "交易额满足条件，派有专人全程 陪同交易",
        icon: trade,
      },
      {
        title: "法律保障",
        detail: "交易签署权威合同，提供专业法 务咨询与援助",
        icon: law,
      },
      {
        title: "国家机构",
        detail: "一站式知产服务平台，国家知识 产权局备案机构",
        icon: government,
      },
    ],
  };
}
