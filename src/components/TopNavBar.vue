<template>
<v-card width="100%" height="56px" color="transparent" class="elevation-0 d-flex flex-row justify-space-between">
   <v-card-title>Therapists</v-card-title>

   <div class="d-flex flex-row align-center w-60">
      
      <v-btn
      class="mx-2 elevation-0 m-fav-height"
      fab
      dark


      color="white"
      
    >
      <v-icon dark color="black">
        mdi-tune
      </v-icon>
    </v-btn>
      <v-text-field
              solo
              label="Search for session "
              hide-details
              prepend-inner-icon="mdi-magnify"
              v-model="search"
              class=" ml-2 rounded-pill elevation-0 custom-no-elevation"
             elevation="0"
             depressed
              clearable
            >
          </v-text-field>

      <v-icon size="50" color="primary" class="ma-0 ml-8 cursor">mdi-bell-circle</v-icon>
    
    <img src="../assets/Ellipse 5.svg" class="ml-8 rounded-50 cursor">
   </div>
  

</v-card>
 </template>
 
 <script>

 
 export default {
   name: "TopNavigationBar",
 
    data: () => ({
      search: "",
    }),

   components: {
    
   },
 };
 </script>
 