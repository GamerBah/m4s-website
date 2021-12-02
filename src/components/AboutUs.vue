<template>
  <div>
    <SectionHeader title="ABOUT US"></SectionHeader>
    <v-container fluid>
      <v-row v-if="$vuetify.breakpoint.mdAndUp" justify="space-around" class="mx-10 shadow-3">
        <v-col v-for="n in 2"
               :key="n"
               :cols="n === 1 ? 8 : undefined"
               style="height: 100%; overflow: hidden">
          <div v-if="n === 1" style="height: 100%">
            <p class="t4 medium text-left" style="white-space: pre-wrap">{{ text.top }}</p>
            <v-divider dark class="my-3"></v-divider>
            <p class="t4 medium text-left" style="white-space: pre-wrap">{{ text.bottom }}</p>
          </div>
          <div v-else>
            <v-lazy :value="true" min-height="351.33">
              <v-img contain class="elevation-5" :src="require('../assets/storefront-1.jpg')"></v-img>
            </v-lazy>
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on }">
                <v-btn block
                       x-large
                       dark
                       class="mt-3 t4 shadow-3 no-border"
                       style="white-space: normal"
                       v-on="on">
                                    <span class="medium t2" style="white-space: normal">
                                        Read More...
                                    </span>
                </v-btn>
              </template>
              <v-card dark>
                <v-card-title style="justify-content: center">
                  <p class="t2 x4 shadow-2">The My 4 Sons Story</p>
                </v-card-title>
                <v-divider dark class="mx-5"></v-divider>
                <v-card-text class="t4 mt-5 white--text small shadow-3" style="white-space: pre-line">
                  {{ text.dialog }}
                  <p class="mt-10 mr-10 text-right">- Matt, Owner</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="no-border"
                         color="red darken-1"
                         block
                         outlined
                         @click="dialog = false">Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-row>

      <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" class="mx-2">
        <v-lazy :value="true">
          <v-img class="elevation-5 mb-5" width="60vw" :src="require('../assets/storefront-1.jpg')"></v-img>
        </v-lazy>
        <p class="t4 medium text-center" style="white-space: pre-wrap">{{ text.top }}</p>
        <v-divider dark class="mb-3 mt-1"></v-divider>
        <p class="t4 medium text-center" style="white-space: pre-wrap">{{ text.bottom }}</p>
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on }">
            <v-btn block
                   dark
                   x-large
                   class="mt-3 t4 shadow-3 text-wrap no-border"
                   v-on="on">
                            <span class="large t2" style="white-space: normal">
                                Read More...
                            </span>
            </v-btn>
          </template>
          <v-card dark>
            <v-card-title style="justify-content: center">
              <p class="t2 x4 shadow-3">The My 4 Sons Story</p>
            </v-card-title>
            <v-divider dark class="mx-5"></v-divider>
            <v-card-text class="t4 mt-5 white--text medium shadow-3" style="white-space: pre-line">
              {{ text.dialog }}
              <p class="mt-10 mr-10 text-right">- Matt, Owner</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="no-border" color="red darken-1" block outlined @click="dialog = false">Close
              </v-btn>
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
  }
}
</script>

<style scoped>
</style>
