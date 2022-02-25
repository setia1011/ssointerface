var application = new Vue({
   el: '#vueForm',
   created() {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
   },
   data: {
      show: false,
      transitionName: 'fade',
      msg: null,
      opassword: null,
      npassword: null,
      cpassword: null
   },
   watch: {

   },
   mounted() {
      console.log(this.show);
   },
   methods: {
      passw: function(event) {
         event.preventDefault();
         if (this.opassword && this.npassword && this.cpassword) {
            this.show = true;
            this.msg = null;
            axios.post('/user/xhr-password', JSON.stringify({
               data: {
                  opassword: this.opassword,
                  npassword: this.npassword,
                  cpassword: this.cpassword
               }
            })).then(res => {
               this.msg = res.data.msg;
               setTimeout(() => this.show = false, 2500);
            }).catch(err => {
               console.log(err);
            })
         } else {

         }
         return false;
      }
   }
});