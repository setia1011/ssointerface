var application = new Vue({
   el: '#auth',
   created() {
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
   },
   data: {
      clientName: "",
      username: "",
      password: "",
      message: null
   },
   mounted() {
      this.clientName = this.$refs.clientName.innerText;
      console.log(this.clientName);
   },
   methods: {
      authLogin: function(event, cfor) {
         event.preventDefault();
         if (this.username !== "" && this.password !== "" && this.clientName != "") {
            axios.post('/user/xhr-auth', JSON.stringify({
               data: {
                  username: this.username,
                  password: this.password,
                  action: cfor
               }
            })).then(res => {
               if (res.data === "invalid credentials") {
                  this.message = res.data;
                  setTimeout(() => this.message = null, 2500);
               } else {
                  if (res.data.userInfo) {
                     window.location.href = "/";
                  }
               }
            }).catch(err => {
               console.log(err);
            })
         } 
         return false;
      }
   }
});