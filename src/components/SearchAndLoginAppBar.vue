<template>
  <v-app-bar app flat >
    <v-autocomplete
      width=200
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4 d-inline-flex pa-2"
      flat
      hide-no-data
      hide-details
      label="What state are you from?"

    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    
  </v-app-bar>
</template>

<script>
  // import UserLogin from './UserLogin.vue'
  // import SearchBar from './UserLogin.vue'

  export default {
    name: 'SearchAndLoginAppBar',
    data: () => ({  }),
    methods:{

    },
    components: {
      // UserLogin,
      // SearchBar,
    }
  }
</script> 
