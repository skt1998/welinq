<template>
  <div class="righNav pa-4">
    <v-card class="100% d-flex flex-row elevation-0" height="auto">
      <img
        src="../assets/Ellipse 5.svg"
        class="ml-8 profile-pic rounded-50 cursor"
      />
      <div class="profileInfo d-flex flex-column pa-6">
        <v-card-title class="ma-0 pa-0"> sneha ai </v-card-title>
        <v-card-sub-title class="ma-0 pa-0">
          Anxiety , Depression specialist
        </v-card-sub-title>
        <v-btn
          class="rounded-xl white--text primary elevation-0 mt-2"
          width="180px"
        >
          View Profile
        </v-btn>
      </div>
    </v-card>
    <Calender class="mt-4" />
    <v-card
      class="outlined elevation-0 pa-2 rounded-10 mt-4 d-flex flex-column justify-center align-center"
    >
      <v-card-title
        class="text-center pb-2 pt-0 d-flex justify-center text-center"
      >
        Session Period
      </v-card-title>

      <a href="#" class="custom-btn"> 60 min </a>
    </v-card>

    <v-card class="outlined elevation-0 pa-2 rounded-10 mt-4">
      <v-card-title
        class="text-center d-flex justify-center text-center pb-2 pt-0"
      >
        Select Time
      </v-card-title>
      <v-card-sub-title class="d-flex justify-center text-center"
        ><v-icon size="14" color="primary" class="mr-1">mdi-circle</v-icon
        >Am<v-icon size="14" class="ml-2 mr-1">mdi-circle</v-icon
        >Pm</v-card-sub-title
      >
    </v-card>
  </div>
</template>
 
 <script>
import Calender from "../components/CalenderView.vue";
export default {
  name: "LeftNavigationView",

  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Home", icon: "mdi-home-outline" },
      { text: "My Sessions", icon: "mdi-calendar-range" },
      { text: "Therapist", icon: "mdi-head-cog-outline" },
      { text: "Quizzes", icon: "mdi-wall" },
      { text: "Webinars", icon: "mdi-account" },
      { text: "Profile", icon: "mdi-emoticon-excited-outline" },
    ],
  }),

  components: {
    Calender,
  },
};
</script>
 