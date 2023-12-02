<template>
  <div class="righNav ma-4 rounded-10 pa-4 white">
    <v-card class="100% d-flex flex-row elevation-0" height="auto">
      <img
        src="../assets/Ellipse 5.svg"
        class="ml-0 profile-pic rounded-50 cursor"
      />
      <div class="profileInfo d-flex flex-column pa-4 pt-0">
        <v-card-title class="ma-0 pa-0"> sneha ai </v-card-title>
        <v-card-subtitle class="ma-0 pa-0">
          Anxiety , Depression specialist
        </v-card-subtitle>
        <v-btn
          class="rounded-xl px-2 white--text primary elevation-0 mt-2"
          width="160px"
        >
        <span class="btn-text">
          View Profile
        </span>
        </v-btn>
        <!-- <a href="#" class="custom-btn primary white--text"> <span class="btn-text">
          View Profile
        </span> </a> -->
      </div>
    </v-card>
    <Calender class="mt-4" />
    <v-card
      class="outline-border elevation-0 pa-4 rounded-10 mt-4 d-flex flex-column justify-center align-center"
    >
      <v-card-title
        class="text-center pb-2 pt-0 d-flex justify-center text-center"
      >
        Session Period
      </v-card-title>

      <a href="#" class="custom-btn"> 60 min </a>
      <h6 class="note-text mt-4  text-disabled">Note: *Session period will be of 60min</h6>
    </v-card>

    <v-card class=" outline-border elevation-0 pa-4 rounded-10 mt-4">
      <v-card-title
        class="text-center d-flex justify-center text-center pb-2 pt-0"
      >
        Select Time
      </v-card-title>
      <v-card-subtitle class="d-flex pb-0 pt-2 justify-center text-center"
        ><v-icon size="14" color="primary" class="mr-1">mdi-circle</v-icon
        >Am<v-icon size="14" class="ml-2 mr-1">mdi-circle</v-icon
        >Pm</v-card-subtitle
      >
      <v-chip-group
      class=""
            active-class="primaryLight2 black--text "
            column
          >
            <v-chip
            label
            class="transparent"
              v-for="time in times"
              :key="time"
            >
              {{ time }}
            </v-chip>
          </v-chip-group>
    </v-card>
    <v-btn large width="100%" class="primary mt-4 rounded-10 elevation-0">Book Session</v-btn>
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
    times: ["10:00 am","11:00 am","12:00 pm","01:00 pm","02:00 pm","03:00 pm"]
  }),

  components: {
    Calender,
  },
};
</script>
 