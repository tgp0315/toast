# vue2-toast

## Usage
Install:

```
npm install toast2-vue -S
```
Import:

```javascript
import 'toast2-vue/dist/toast.css';
import Toast from 'toast2-vue';
Vue.use(Toast);
```
or
```javascript
import 'toast2-vue/dist/toast.css';
import Toast from 'toast2-vue';
Vue.use(Toast, {
    type: 'center',
    duration: 3000,
    width: '150px'
});
```

Use in component:

```javascript
<template>
    <div id="app">
      <button @click="open()">showToast</button>
      <button @click="openLoading()">loading</button>
    </div>
</template>
export default {
    methods:{
        openBottom(){
            this.$toast.showToast('操作成功');  // or this.$toast.bottom('bottom'); 
        },
        openLoading(){
          this.$toast.showLoading('loading...');
			    let self = this;
	        setTimeout(function () {
	          self.closeLoading()
	        }, 2000)
        },
        closeLoading(){
            this.$toast.closeLoading();
        }
    }
}


## options

    Vue.use(Toast, [options])

- type : position of Toast. | String | default: 'center' | possible 'top, center'
- duration : Number | default 2500ms
- width : width of Toast. | String | default: 'auto'
