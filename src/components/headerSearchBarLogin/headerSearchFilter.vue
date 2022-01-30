<template>
      <v-card flat class="d-flex flex-column" style="width: 100%; background-color: none !important;">
    <v-card-actions class="d-flex j-content-centr" style="width: 100%;">
      <v-card-title> 
      FILTER BLOCK
      </v-card-title>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="filterOptionsVisibilityChange"
      >
        <v-icon>{{ filterOpened ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="filterOpened" class="d-flex flex-wrap py-4">

        <v-text-field 
          v-for="(val,key) in filterOptions" :key="key"
            :label="val.label"
            clearable
            :value="val.value"
          class="px-6 mx-6"
          size=25
          ></v-text-field>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'headerSearchFilter',
    data: () => ({ }),
    computed:{
      ...mapGetters([
        'filterInputChange',
        'filterOpened',
        'filterOptions',
      ]),
    },
    methods:{
      ...mapActions([
        'filterOptionsVisibilityChange',
        'filterHandleOptions',
        ]),
      onchange(name,event){
        this.filterHandleOptions({
          name,
          data:event.target.value,
        })
      }
    },
  }
</script> 

<style scoped>
  .normal {
    flex: none;
    justify-content: space-between;
  }

</style>