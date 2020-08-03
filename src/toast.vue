<template>
  <div> 
    <div class="loading" v-if="loading">
      <svg v-if="loading"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path opacity="0.2" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
        <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
            C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(42.1171 20 20)">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
      <p>{{ tip }}</p>
    </div>
    <div :class="['toast', {top: toastLocation === 'top', center: toastLocation === 'center'}]" v-if="isToast" :style="{width: operatewidth}">
      <p>{{ toastTip }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      operatewidth: "auto",
      loading: false,
      tip: "",
      isToast: false,
      toastTip: "",
      duration: 2500,
      toastLocation: "center"
    }
  },
  created() {
    // this.showToast("加载中...")
  },
  methods: {
    showLoading(tip) {
      this.loading = true;
      this.tip = tip;
    },
    closeLoading() {
      this.loading = false;
    },
    showToast(tip) {
      this.isToast = true;
      this.toastTip = tip;
      setTimeout(() => {
        this.toastTip = "";
        this.isToast = false;
      }, this.duration)
    }
  },
}
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
  /* word-break: break-all; */
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  height: auto;
  text-align: center;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
.toast {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  height: auto;
  text-align: center;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
.toast.top {
  top: 15%;
}
.toast.center {
  top: 50%;
}
</style>