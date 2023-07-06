/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/7/5 15:52 
**/

import { defineStore } from "pinia";

const useSettingStore = defineStore("Setting", {
  state: () => {
    return {
      fold: false,
      refsh: false
    };
  },
  actions: {
    setFold(fold: boolean) {
      this.fold = fold;
    },
    getFold() {
      return this.fold;
    },
    setRefsh(refsh: boolean) {
      this.refsh = refsh;
    },
    getRefsh() {
      return this.refsh;
    }
  }
});
export default useSettingStore;