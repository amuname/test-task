<template>
  <v-app>
    
    <NavigationDrawerMenuList/>

    
    <SearchAndLoginAppBar/>
    

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  import NavigationDrawerMenuList from './components/NavigationDrawerMenuList.vue'
  import SearchAndLoginAppBar from './components/headerSearchBarLogin/SearchAndLoginAppBar.vue'

  export default {
    data: () => ({  }),
    methods:{

    },
    components: {
      SearchAndLoginAppBar,
      NavigationDrawerMenuList,
    }
  }
</script> 
