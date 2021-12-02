<template>
  <div>
    <SectionHeader title="OUR MENU"></SectionHeader>
    <v-container fluid>
      <p v-if="$vuetify.breakpoint.mdAndUp"
         class="t4 medium text-center mx-10 mb-5 shadow-3"
         style="white-space: pre-wrap">
        Click the button below to go to our online ordering page!
      </p>
      <div class="d-flex justify-center mb-10">
        <v-btn :block="$vuetify.breakpoint.smAndDown"
               tile
               color="success"
               x-large
               width="30%"
               href="https://my4sonsbbq.hrpos.heartland.us/"
               target="_blank">
          <v-icon left class="shadow-4">mdi-silverware</v-icon>
          <span class="large t2 shadow-4" style="white-space: normal">
                         Online Ordering
                    </span>
        </v-btn>
      </div>
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
      <v-tabs dark centered grow color="red" background-color="#4C4C4C" style="border-radius: 0">
        <v-tab dark>
          Main
        </v-tab>
        <v-tab dark>
          Sides
        </v-tab>
        <v-tab dark>
          Specials
        </v-tab>

        <v-tab-item class="grey darken-3">
          <MainMenu></MainMenu>
        </v-tab-item>
        <v-tab-item class="grey darken-3">
          <SidesMenu></SidesMenu>
        </v-tab-item>
        <v-tab-item class="grey darken-3">
          <SpecialtyMenu></SpecialtyMenu>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import SectionHeader from "./elements/SectionHeader";
import MainMenu from "./elements/MainMenu";
import SidesMenu from "./elements/SidesMenu";
import SpecialtyMenu from "./elements/SpecialtyMenu";

export default {
  name      : "Menu",
  components: {SpecialtyMenu, SidesMenu, MainMenu, SectionHeader},
  data() {
    return {
      text: "All of our food is prepared in-house and fresh for the day.\n\n" +
            "That means no reheating, no store bought plates, and no microwaves. " +
            "Just meats cooked slow on our pellet smoker, and sides carefully prepared by hand using family recipes." +
            "\n\nIf the 4 sons wouldn't approve of it, we don't sell it!",
    }
  }
}
</script>

<style scoped>

</style>
