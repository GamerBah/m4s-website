<template>
  <div>
    <SectionHeader title="ABOUT US"></SectionHeader>
    <v-container fluid>
      <v-row justify="space-around">

        <v-col cols="5" v-if="!isMobile">
          <v-lazy :value="true">
            <v-img contain :src="require('../assets/storefront-1.jpg')"></v-img>
          </v-lazy>

          <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ on }">
              <v-btn block x-large dark class="mt-5 t4 no-border" style="white-space: normal" v-on="on">
                <span class="medium t1" style="white-space: normal">Read More...</span>
              </v-btn>
            </template>
            <v-card class="grey darken-3">
              <v-card-title class="align-baseline">
                <p class="flex mt-2 t2 x4">The My 4 Sons Story</p>
                <v-tooltip left transition="scale-transition">
                  <template v-slot:activator="{ on }">
                    <v-hover v-slot="{ hover }">
                      <v-btn icon :color="hover ? 'red' : ''" v-on="on" @click="dialog = false">
                        <v-icon style="justify-self: right">mdi-close</v-icon>
                      </v-btn>
                    </v-hover>
                  </template>
                  <span>Close</span>
                </v-tooltip>
              </v-card-title>
              <v-divider dark class="mx-5 my-n2"></v-divider>
              <v-card-text class="t4 mt-5 white--text small" style="white-space: pre-line">
                {{ text.dialog }}
                <p class="mt-5 mr-10 text-right">- Matt, Owner</p>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>

        <v-col :cols="isMobile ? 12 : 7">
          <p class="t4 medium text-left" style="white-space: pre-wrap">{{ text.top }}</p>
          <v-divider dark class="my-3"></v-divider>
          <p class="t4 medium text-left" style="white-space: pre-wrap">{{ text.bottom }}</p>
        </v-col>

        <v-dialog v-if="isMobile" v-model="dialog" width="600px" fullscreen>
          <template v-slot:activator="{ on }">
            <v-btn block dark x-large class="mt-3 text-wrap no-border" v-on="on">
              <span class="large t1" style="white-space: normal">Read More...</span>
            </v-btn>
          </template>
          <v-card dark>
            <v-divider dark class="mx-5"></v-divider>
            <v-card-text class="t4 mt-5 white--text small" style="white-space: pre-line">
              {{ text.dialog }}
              <p class="mt-5 mr-10 text-right">- Matt, Owner</p>
            </v-card-text>
            <v-card-actions>
              <v-btn x-large class="no-border t1" color="red darken-1" block @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-row>

    </v-container>
  </div>
</template>

<script>
import SectionHeader from "./elements/SectionHeader";

export default {
  name      : "AboutUs",
  components: {SectionHeader},
  data() {
    return {
      text  : {
        top   : "We're your average family with 4 boys that love to eat BBQ!\n\n" +
                "What started out as a small test of BBQ from around the country has turned into our dream of " +
                "owning a store we could call our own, and most importantly sharing our take on those various BBQ styles with the community.",
        bottom: "The oldest son got married in 2018 and is now in Michigan, and the younger sons are all " +
                "in school and very involved in after-school activities. As a family we believe in giving back to the community; " +
                "my wife and I coach track, and I coach high school soccer in the fall. With all that going on, we also believe in a good " +
                "balance between work and life, which means that we might have to close up shop early in order to attend all those events, " +
                "or even close for a couple of days. We will always try to give as early of a notice as possible to our customers, and we " +
                "appreciate your understanding and support.",
        dialog: "\"Over the years I was able to travel around the United States and in my travels I always sought out the local BBQ joints for a " +
                "meal or two while I was in the area. I would bring those flavors and styles home and do my best to replicate it for our 4 sons - " +
                "because what do boys eat? Meat! All of our recipes and menu items are tested and approved by the 4 sons.\n\n" +
                "\"We prep and smoke our meats daily, no short cuts or reheating. We take advantage of technology and use a " +
                "computer-controlled pellet smoker burning hickory wood. This smoker burns a clean and efficient fire and imparts a clean " +
                "hickory flavor into our meats and smoked sides. Some of our meats can take up to 16 hours to smoke, so we start smoking the " +
                "day before to get ready for you, the customer. We make all of our rubs, sides and sauces from scratch -- we want you to enjoy " +
                "those same flavors we have been serving our boys for years.\n\n" +
                "\"We try to prepare a meal that is as close to home-cooked BBQ as possible, meaning that sometimes we will run out of certain things, " +
                "sometimes out of everything. While we try to prepare enough to serve all of our customers, we often have a few more guests than we expect. " +
                "We also try to be responsible with our food: we want to waste as little as possible and be good stewards.\""
      },
      dialog: false
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  }
}
</script>

<style scoped></style>
