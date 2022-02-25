<style>
   /* notif */
   .notif-wrapper {
      position: absolute;
      z-index: 999999;
   }

   .notif {
      float: right;
      position: fixed;
      right: 28px;
      top: 50px;
   }

   .notif .card {
      border: 1px solid #a0a7a142;
   }

   .notif .card-header {
      padding: .75rem 1.25rem !important;
   }

   .notif .card-body {
      padding: 5px 20px 20px 20px !important;
   }

   .fade-enter-active,
   .fade-leave-active {
      transition: opacity .5s;
   }

   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
</style>

<transition name="fade">
   <div class="row row-deck notif-wrapper" v-if="show">
      <div class="notif">
         <div class="card">
            <div class="card-status bg-green"></div>
            <div class="card-header">
               <h3 class="card-title">Info</h3>
               <div class="card-options">
                  <a href="javascript:void(0)" class="card-options-collapse" data-toggle="card-collapse"></a>
                  <a href="javascript:void(0)" class="card-options-remove"><i class="fe fe-x"></i></a>
               </div>
            </div>
            <div class="card-body notiftext">
               <div class="card-alert alert mb-0 alert-success" v-model="msg">{{ msg }}</div>
            </div>
         </div>
      </div>
   </div>
</transition>