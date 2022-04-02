import { atom } from "recoil";

//atom은 key와 default 프로퍼티를 가짐
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
