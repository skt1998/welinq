<template>
   <v-card class="TherapistCard pa-4 d-flex flex-column align-center">
      <img src="../assets/Ellipse 5.svg" class="card-profile-image rounded-50 ">
      <v-card-titile class="orange--text">
         30$/h
      </v-card-titile>
      <h4 class="card-headder">
         Mizuru Chizuhara <v-icon size="20" color="green">mdi-check-decagram</v-icon>
      </h4>
      <div class="active-text">Last active 10min ago</div>
      <h5 class="card-sub-text d-flex-none title-elipsis text-center">
         9yrs of experience
      </h5>
      <h5 class="card-sub-text d-flex-none title-elipsis text-center">
         Depression , Anxiety, Stress..
      </h5>
      <h5 class="card-sub-text d-flex-none title-elipsis text-center">
         Dialectical Behaviour Therap..
      </h5>
      <div class="mt-4 w-100 d-flex flex-row justify-space-between">
         <!-- <v-btn smoll color="primary" class="elevation-0  rounded-10">
            Book Session
         </v-btn> -->
         <a  class="custom-btn">
    Book Session
  </a>
         <v-btn fab
         secondry
         dark
         small
         color="#CCF4DA"
         class=""
       >  <img src="../assets/comment.svg"></v-btn>
      </div>

    
     
   </v-card>
 </template>
 
 <script>

 
 export default {
   name: "TherapistCard.vue",
   data: () => ({
      
   }),
   mounted() {
console.error("wed------",window.innerWidth);
  },
   
 };
 </script>
 