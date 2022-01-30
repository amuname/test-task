<template>
  <div class="normal">
  <span class="black--text text-h5 ma-2">{{fio}}</span>
	<v-avatar
    color="primary"
    size="3rem"
    class="ma-2"
  >
    <span class="white--text text-h6">{{initials}}</span>
  </v-avatar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SearchAndLoginAppBar',
    data: () => ({  }),
    computed:{
      ...mapGetters([
        'initials',
        'fio',
      ])
    },
    methods:{
    },
  }
</script> 

<style scoped>
  .normal {
    flex: none;
    display: flex;
    align-items: center;

  }

</style>