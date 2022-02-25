var application = new Vue({
   el: '#vuemenu',
   created() {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
   },
   data: {},
   watch: {},
   methods: {}
});