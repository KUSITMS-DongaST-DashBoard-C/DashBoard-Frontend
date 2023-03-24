import {
  UilBell,
  UilCoffee,
  UilCommentsAlt,
  UilFilesLandscapes,
  UilHome,
  UilSetting,
  UilUserCircle,
  UilAngleDown,
} from "@iconscout/react-unicons";
export const Data = [
  {
    icon: UilHome,
    heading: "대시보드",
  },
  {
    icon: UilUserCircle,
    heading: "회원 관리",
  },
  {
    icon: UilFilesLandscapes,
    heading: "콘텐츠 관리",
    icon2: UilAngleDown,
    menu: ["HOME 관리", "LIVE 관리", "ORIGINAL 관리", "VOD 관리", "LIFE 관리"],
  },
  {
    icon: UilBell,
    heading: "알림 관리",
  },
  {
    icon: UilCommentsAlt,
    heading: "댓글 관리",
  },
  {
    icon: UilCoffee,
    heading: "고객센터",
  },
  {
    icon: UilSetting,
    heading: "기본설정",
  },
];
