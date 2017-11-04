# Learning VueJs with Udemy

## Tổng hợp kiến thức cá nhân
## Conmmand CLI bacsic

```
# install vue-cli
$ npm install --global vue-cli
# create a new project using the "webpack" template
$ vue init webpack router-app
```
>***Create new project with webpack simple***
```
vue init webpack-simple project-name

cd to project folder
run `npm install`
run `npm run dev`
```
## Components
### **Props** 
>***camelCase vs. kebab-case***
- Khi khao báo props trong component, do HTML không phân biệt hoa thường nên dù có khai báo kiểu camelCase hay kebad-case thi khi đưa vào template bắt buộc phải chuyển qua kiểu kebad-case.
- Example: 
```
Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
<!-- kebab-case in HTML -->
<child my-message="hello!"></child>
```
>***Literal vs. Dynamic***
- Có một sự nhầm lẫn chung cho tất cả các beginers là khi passing data thông qua props thì data truyền qua được nhận là 1 chuổi string.
Nếu muốn truyền qua 1 số thì phải sử dụng v-bind.
- Example:
```
<!-- this passes down a plain string "1" -->
<comp some-prop="1"></comp>

<!-- this passes down an actual number -->
<comp v-bind:some-prop="1"></comp>
```
>***Default props type is "String".***

### ***Custom Events***
- Example
```
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  //v-on:increment="incrementTotal"
  //increment -> tên method passing qua child
  //incrementTotal -> method gán vào method passing. 
</div>
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment') //this.$emit('method parent truyen thong qua props')
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```
>***Binding Native Events to Components.***
- Đôi lúc ta muốn sử dụng lắng nghe sự kiện gố thì làm như sau:
```
<my-component v-on:click.native="doTheThing"></my-component>
```
- *Global variable of Vue-route is "$route"*
## Vue Router

```
<router-link :to="{ name: 'Hello' }">Home</router-link>
<router-link to="/about">About</router-link>
<router-view></router-view>
```

## Vuex
- *Global variable of Vuex state is "$store.state"*
- *Store only store the state*
- import *store* from './store', store mus be lowercase