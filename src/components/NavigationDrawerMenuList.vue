<template>
<div
  v-on:mouseenter.stop="min_size = !min_size"
  v-on:mouseleave.stop="min_size = !min_size"
>
  <v-navigation-drawer
    app
    left
    mobileBreakpoint=0
    v-bind:mini-variant="min_size"
    mini-variant-width=50     
    >
    <v-list-item >
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg" alt=Logo></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Logo</v-list-item-title>
      </v-list-item-content>
    </v-list-item>


  <!-- <v-divider></v-divider> -->
  <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer> 
</div> 
</template>

<script>
  export default {
    name: 'NavigationDrawerMenuList',
    props:[],
    data:()=>({
      min_size:true,
      items: [
        { text: 'Главная', icon: 'mdi-home' },
        { text: 'Клиенты', icon: 'mdi-wallet' },
        { text: 'Сотрудники', icon: 'mdi-account-multiple' },
        { text: 'Аналитика', icon: 'mdi-google-analytics' },
      ],
    }),
    methods:{

    },


  }
</script>