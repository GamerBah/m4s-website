<template>
  <div>
    <SectionHeader title="CATERING"></SectionHeader>
    <v-container fluid>
      <p v-if="$vuetify.breakpoint.mdAndUp"
         class="t4 medium text-center mx-10 mb-10 shadow-3"
         style="white-space: pre-wrap">
        {{ text }}
      </p>
      <p v-if="$vuetify.breakpoint.smAndDown"
         class="t4 medium text-center mx-2"
         style="white-space: pre-wrap">
        {{ text }}
      </p>
      <v-carousel :height="height + `vh`"
                  cycle
                  hide-delimiter-background
                  delimiter-icon="mdi-minus"
                  style="max-height: 1080px">
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide">
        </v-carousel-item>
      </v-carousel>
      <RequestForm class="mt-10"></RequestForm>
    </v-container>
  </div>
</template>

<script>
import RequestForm from "./RequestForm";
import SectionHeader from "./elements/SectionHeader";

export default {
  name      : "Catering",
  components: {SectionHeader, RequestForm},
  data() {
    return {
      text  : "We've catered for weddings, baseball teams, birthdays, auctions, and much more. " +
              "It's the same great food you'd want at your event, but without the hassle!\n\n" +
              "Have an event you'd like us to cater for? Click on the button below to fill out our request form! " +
              "Requests are generally accepted by availability, but we do our best to make room for everyone!",
      slides: [
        require("../assets/catering/catering-2.jpg"),
        require("../assets/catering/catering-3.jpg"),
        require("../assets/catering/catering-1.jpg")
      ]
    }
  },
  computed: {
    height() {
      let a = this.$vuetify.breakpoint;
      return a.smAndDown ? 25 : a.mdOnly ? 40 : 65;
    }
  }
}
</script>

<style scoped>

</style>
