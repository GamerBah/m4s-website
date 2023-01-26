<template>
  <div>
    <SectionHeader title="OUR MENU"></SectionHeader>
    <v-container fluid>
      <div class="d-flex justify-center mb-5">
        <v-row v-if="!isMobile">
          <v-col v-for="n in 3" :key="n" :cols="n === 2 ? 6 : 3">
            <v-btn v-if="n === 2" block tile x-large height="75" color="success" :href="onlineOrdering" target="_blank">
              <v-icon left>mdi-silverware</v-icon>
              <span class="xx-large t1 mx-2">Order Online</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-btn block tile x-large height="75" color="success" :href="onlineOrdering" target="_blank">
            <v-icon left>mdi-silverware</v-icon>
            <span class="x3 t1 mx-2">Order Online</span>
          </v-btn>
        </v-row>
      </div>

      <p v-if="!isSmAndDown" class="t4 medium text-center" style="white-space: pre-wrap">{{ text }}</p>
      <p v-else class="t4 medium text-center" style="white-space: pre-wrap">{{ text }}</p>
      <v-tabs centered grow color="red" background-color="#2C2C2C" style="border-radius: 0">
        <v-tab dark>Main</v-tab>
        <v-tab dark>Sides</v-tab>
        <v-tab dark>Specials</v-tab>

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
      text          : "All of our food is prepared in-house and fresh for the day. " +
                      "That means no reheating, no store bought plates, and no microwaves. " +
                      "Just meats cooked slow on our pellet smoker, and sides carefully prepared by hand using family recipes." +
                      "\n\nIf the 4 sons wouldn't approve of it, we don't sell it!",
      onlineOrdering: "https://my4sonsbbq.com/order-online",
    }
  },
  computed: {
    isSmAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  }
}
</script>

<style scoped>

</style>
