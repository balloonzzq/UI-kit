import Vue from 'vue';
/**
 * 路由转发
 */
const eventBus = new Vue({
  data: {
    selectedView: ''
  },
  methods: {
    update(target, val) {
      this[target] = val;
    }
  }
});

export default eventBus;
