<template>
	<v-autocomplete
      cache-items
      class="mx-4 d-inline-flex"
      flat
      hide-no-data
      hide-details
      label="Поиск..."
      v-bind:class="{ 'normal': isActive }"
      v-on:focus="focusChange"
      v-on:blur ="focusChange"
    ></v-autocomplete>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'SearchAndLoginAppBar',
    data: () => ({ }),
    computed:{
      ...mapGetters({
        isActive:'searchBarFocus'
      })
    },
    methods:{
      ...mapActions(['focusChange'])
    },
  }
</script> 

<style scoped>
  .normal {
    flex: none;
    justify-content: space-between;
  }

</style>