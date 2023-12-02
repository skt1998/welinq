<template>
   <div class="">
   <v-card width="100%" height="12.813rem" class="elevation-0 d-flex justify-center rounded-20 align-center" color="#F4F5FF">
     <img  class="logoImg" src="../assets/Logo.svg"> 
   </v-card>
   <v-card
    class="ma-0  pa-0 elevation-0"
    width="100%"
    tile
  >
    <v-list flat>    
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
        active-class="white--text primary rounded-10"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          to=""
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
  </v-card>
  <v-card width="100%" height="19.875rem" class=" mt-6 elevation-0">
<img width="100%" height="auto" src="../assets/Frame 4254.svg">
  </v-card>



   </div>
 </template>
 
 <script>

 
 export default {
   name: "LeftNavigationView",
 
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Home', icon: 'mdi-home-outline' },
        { text: 'My Sessions', icon: 'mdi-calendar-range' },
        { text: 'Therapist', icon: 'mdi-head-cog-outline' },
        { text: 'Quizzes', icon: 'mdi-wall' },
        { text: 'Webinars', icon: 'mdi-account' },
        { text: 'Profile', icon: 'mdi-emoticon-excited-outline' },
      ],
    }),

   components: {
    
   },
 };
 </script>
 