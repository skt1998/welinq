<template>
  <div class="main-card d-flex flex-row">
    <div class="left-nav pa-7 scroll-y">
      <LeftNavigationView />
    </div>
    <div class="right-side pa-6">
      <TopNavBar />
      <div class="main-right d-flex flex-row">
        <div class="main-section">
          <v-card
            class="scroll-x transparent elevation-0 mx-0 px-0"
            width="100%"
          >
            <v-chip class="ml-2 rounded-5 my-2 black white--text" label>
              <v-icon color="white" size="18" class="mr-1">mdi-filter</v-icon
              >Tags
            </v-chip>
            <v-chip
              v-for="(tag, i) in tags"
              :key="i"
              class="ml-2 my-2 white rounded-5"
              label
              >{{ tag }}</v-chip
            >
          </v-card>

          <!-- TherapistCard view starts here -->
          <v-row>
            <v-col xl="2" lg="4" md="" sm="" xs="" v-for="i in 8" :key="i" >
              <TherapistCard   />

            </v-col>
          </v-row>
          <!-- <div class="TherapistCardView ">
          
         
           
          </div> -->
        </div>
        <div class="righNav">
          <RightSideView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationView from "../components/LeftNavigationView.vue";
import TopNavBar from "@/components/TopNavBar.vue";
import RightSideView from "@/components/RightSideView.vue";
import TherapistCard from "@/components/TherapistCard.vue";

export default {
  name: "HomeView",
  data: () => ({
    tags: [
      "Depression",
      "Relationship",
      "Social anxiety",
      "Social anxiety",
      "Social anxiety",
      "Social anxiety",
      "Fighting",
    ],
  }),
  components: {
    LeftNavigationView,
    TopNavBar,
    RightSideView,
    TherapistCard,
  },
};
</script>
