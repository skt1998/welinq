<template>
  <v-card width="100% "  class=" pa-8 elevation-0 pb-0 footer d-flex flex-column ">
   <div class="d-flex flex-row">
      <div class="w-20 ">
      <img class="float-right mt-4 mr-8" src="../assets/footerLogo.svg" />
    </div>
    <div class="w-20">
      <v-card-title class=" d-flex">
         Product
      </v-card-title>
      <v-card-text class="">
         Affiliate program
      </v-card-text>
    </div>
    <div class="w-20">
      <v-card-title class=" d-flex pl-0 ">
         Resources
      </v-card-title>
      <v-card-text class=" pa-0 ma-0">
         Blog
      </v-card-text>
      <v-card-text class=" pa-0 ma-0">
         Become Therapists
      </v-card-text>
      <v-card-text class="pa-0 ma-0">
         Apply for Therapist
      </v-card-text>
    </div>
    <div class="w-20">
      <v-card-title class=" d-flex pl-0">
         Useful links
      </v-card-title>
      <v-card-text class=" pa-0 ma-0">
         Terms
      </v-card-text>
      <v-card-text class=" pa-0 ma-0">
         Privacy policy
      </v-card-text>
    </div>
    <div class="w-20">
      <v-card-title class=" d-flex pl-0 ">
         Follow us on 
      </v-card-title>
      <v-card-text class=" pa-0 ma-0">
        <v-icon color="#316FF6">mdi-facebook</v-icon> facebook
      </v-card-text>
      <v-card-text class=" pa-0 ma-0">
         <v-icon color="#0077b5">mdi-linkedin</v-icon>       
         Linkedin
      </v-card-text>
      <v-card-text class=" pa-0 ma-0">
         <v-icon color="#1DA1F2">mdi-twitter</v-icon>
         Twitter
      </v-card-text>
      <v-card-text class=" pa-0 ma-0">
         <v-icon color="#d62976">mdi-instagram</v-icon>
         Instagram
      </v-card-text>
    </div>
   </div>
   
    <v-divider class="mt-8"></v-divider>
    <v-card-text class="text-center">© 2023 Einstein Limited. All rights reserved.</v-card-text>
  </v-card>
</template>
  
  <script>
export default {
  name: "LeftNavigationView",

  data: () => ({}),

  components: {},
};
</script>
  