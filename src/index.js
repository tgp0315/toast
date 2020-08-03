import Toast from "./toast.vue";
const obj = {};
// 默认配置
const defaultOption = {
  type: 'top',
  duration: 2500,
  width: 'auto'
};
obj.install = (Vue, options) => {
  let option ={};
  Object.assign(option, defaultOption, options)
  const toastContrustor = Vue.extend(Toast);
  const toast = new toastContrustor();
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  toast.duration = option.duration;
  toast.operatewidth = option.width;
  toast.toastLocation = option.type;
  Vue.prototype.$toast = toast;
}

export default obj;