<template>
  <div>


  <div class="main-card d-flex flex-row">
    <div class="left-nav pa-7 scroll-y">
      <LeftNavigationView id="left" />
    </div>
    <div class="right-side pa-6 scroll-y">
      <TopNavBar />
      <div class="main-right d-flex flex-row">
        <div class="main-section scroll-hidden">
          <v-card
            class="scroll-x transparent elevation-0 mx-0 px-0 d-flex flex--row"
            width="100%"
          >
            
          <v-chip-group 
      class="ma-0 pa-0"
      column
            active-class="primaryLight2 black--text "
        multiple
          > <v-chip disabled class="ml-2 not-disable rounded-5 my-2 black white--text" label>
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
          </v-chip-group>
          </v-card>         
          <div
            class="TherapistCardView  "
            id="middle"
            ref="middle"
          >
            <v-row>
              <v-col class="pa-2" xl="2" lg="4" md="" sm="" xs="" v-for="i in 5" :key="i">
                <TherapistCard />
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="righNav">
          <RightSideView />
        </div>
      </div>
    </div>
  </div>
  <FooterView />
</div>
</template>

<script>
import LeftNavigationView from "../components/LeftNavigationView.vue";
import TopNavBar from "@/components/TopNavBar.vue";
import RightSideView from "@/components/RightSideView.vue";
import TherapistCard from "@/components/TherapistCard.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  data: () => ({
    leftTop: 0,
    tags: [
      "Depression",
      "Relationship",
      "Social anxiety",  
      "Fighting",
    ],
  }),
  components: {
    LeftNavigationView,
    TopNavBar,
    RightSideView,
    TherapistCard,
    FooterView
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const middleContentOffset = this.$refs.middle.offsetTop;

      if (scrollPosition >= middleContentOffset) {
        this.leftTop = middleContentOffset + "px";
      } else {
        this.leftTop = "0";
      }
    },
  },
};
</script>
