<template>
   <v-card class=" elevation-0 TherapistCard pa-4 d-flex flex-column align-center rounded-10">
      <div class="card-profile-image rounded-50 overflow-hidden">
       <img :src="therapist.photoUrl" class="card-profile-image rounded-50 overflow-hidden ">

      </div>
      <v-card-title class="orange--text py-3">
         {{therapist.hourlyRate}}$/h
      </v-card-title>
      <h4 class="card-headder">
         {{ therapist.nickname }} <v-icon size="20" color="green">mdi-check-decagram</v-icon>
      </h4>
      <div class="active-text py-1">Last active 10min ago</div>
      <div class="d-flex w-100 mb-1">
         <img src="../assets/Vector.png">
         <h5 class="card-sub-text ml-2 d-flex-none title-elipsis ">
         {{therapist.expertExperience}} yrs of experience
      </h5>
      </div>
      <div class="d-flex w-100 mb-1">
         <img src="../assets/Group 26.png">
      <h5 class="card-sub-text ml-2 d-flex-none title-elipsis ">
           {{ therapist.expertFocusArea.join(", ") }}
      </h5>
      </div>
     <div class="d-flex w-100 mb-1">
      <img src="../assets/edu.png"> 

      <h5 class="card-sub-text ml-2 d-flex-none title-elipsis ">
         {{ therapist.qualification }}
      </h5>
     </div>
      
      <div class="mt-4 w-100 d-flex flex-row justify-space-between align-center">
         <!-- <v-btn smoll color="primary" class="elevation-0  rounded-10">
            Book Session
         </v-btn> -->
         <a  class="custom-btn  " style="width:100%">
    Book Session
  </a>
         <v-btn fab
         secondry
         dark
         small
         color="#CCF4DA"
         class="ml-2"
       >  <img src="../assets/comment.svg"></v-btn>
      </div>

    
     
   </v-card>
 </template>
 
 <script>

 
 export default {
   name: "TherapistCard.vue",
   props: ["therapist"],
   data: () => ({
      
   }),
   mounted() {
// console.error("wed------",window.innerWidth);
  },
   
 };
 </script>
 