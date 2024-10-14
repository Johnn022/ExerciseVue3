 <template>
  <div class="bg-gray-900 text-white py-4 md:flex md:items-center justify-between px-4">    
      <div class="logo text-2xl font-bold text-white cursor-pointer">
          <img src="../../assets/logo_full.svg" alt="" width="80" height="50" > 
      </div>
      
 
  <span class="text-white text-4xl absolute right-6 top-5 cursor-pointer md:hidden" >
      <i :class="[open? 'bi bi-x':'bi bi-filter-left']"> </i>
  </span>
  <ul class="md:flex gap-5 items-center absolute md:static bg-gray-900 w-full md:w-auto md:pb-0 px-6 md:px-0 top-14 duration-500"     
  :class="[open? 'left-0':'left-[-100%]']">
      <!-- <li v-for="tag in tags" class="py-4 md:py-0 hover:text-green-400 duration-300 text-xl">        
          <RouterLink :to="tag.link" active-class="is-active" class="navbar-item">{{ tag.name }} </RouterLink>
      </li> -->
      <li class="py-4 md:py-0 hover:text-green-400 duration-300 text-xl">        
        <router-link to="/offer" class="nav-link">Offers</router-link>
       
      </li>
      <li class="py-4 md:py-0 hover:text-green-400 duration-300 text-xl">
        <a @click="logoutAction()" class="nav-link " aria-current="page" href="#">Logout</a>
      </li>
      
  </ul>
</div>
</template>
   
 <script>
 import axios from 'axios';
 import LayoutDiv from '../LayoutDiv.vue';
   
 export default {
   name: 'DashboardPage',
   components: {
     LayoutDiv,
   },
   data() {
     return {
       user: {},
     };
   },
   created() {
     this.getUser();
     if(localStorage.getItem('token') == "" || localStorage.getItem('token') == null){
       this.$router.push('/')
     }else {
       this.getUser();
     }
  
   },
   methods: {
     getUser() {
         axios.get('/api/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
         .then((r) => {
            this.user = r.data;
            return r
         })
         .catch((e) => {
            return e
         });
     },
  
     logoutAction () {
       axios.post('/api/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
       .then((r) => {
           localStorage.setItem('token', "")
           this.$router.push('/')
           return r
       })
       .catch((e) => {
         return e
       });
     }
  
   },
 };
 </script>