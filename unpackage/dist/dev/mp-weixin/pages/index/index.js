"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance();
      const obasver = common_vendor.index.createIntersectionObserver(instance.ctx);
      obasver.relativeTo(".target");
      obasver.observe(".self", (e) => console.log(e));
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
