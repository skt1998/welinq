<template>
  <div class="about">
    <h1>This is an Home page</h1>
  </div>
</template>

<script>


export default {
  name: "TherapistsView",
  data: () => ({
 
  }),
  components: {

  },
  mounted() {
    this.goTotherapists()
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goTotherapists(){
      this.$router.push("/therapists")
    }
  },
};
</script>
