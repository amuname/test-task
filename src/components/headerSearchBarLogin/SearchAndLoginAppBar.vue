<template>
  <v-app-bar app flat height=70 v-bind:extension-height="extend_value">
    <div class="d-flex flex-column j-content-centr">
      <div class="d-flex mt-4 mb-2 not-hided" >
        <SearchBar/>
        <UserLogin/>
      </div>
    </div>
    <template v-slot:extension >
      <headerSearchFilter/>
    </template>
  </v-app-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import UserLogin from './UserLogin.vue'
  import SearchBar from './SearchBar.vue'
  import headerSearchFilter from './headerSearchFilter.vue'

  export default {
    name: 'SearchAndLoginAppBar',
    data: () => ({ 
     }),
    computed:{
      ...mapGetters([
        'filterOpened',
      ]),
      extend_value(){
        return this.filterOpened ? 260 : 110
      }
    },
    methods:{
    },
    components: {
      UserLogin,
      SearchBar,
      headerSearchFilter,
    }
  }
</script> 

<style scoped>
  .not-hided {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .j-content-centr {
    width: 100%;
    display: flex;
    align-items: ;
    justify-content: center;
  }
</style>
