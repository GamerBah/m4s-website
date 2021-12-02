<template>
  <div>
    <v-row v-if="$vuetify.breakpoint.mdAndUp"
           v-for="(item, i) in items"
           :key="i"
           justify="space-around"
           class="shadow-3">
      <v-col v-for="n in 2"
             class="my-5"
             :key="n*(i+1)"
             :cols="n === 1 ? 6 : undefined"
             style="height: 100%; overflow: hidden">
        <div v-if="i % 2 === 0">
          <div v-if="n === 1" class="ml-10" style="height: 100%">
            <p class="t2 x4 text-right" style="white-space: pre-wrap">{{ item.name }}</p>
            <p class="t4 medium text-left" style="white-space: pre-wrap">{{ item.desc }}</p>
            <v-divider dark></v-divider>
          </div>
          <div v-else class="mr-10">
            <v-lazy :value="true"
                    :min-height="$vuetify.breakpoint.smAndDown ? 0 : $vuetify.breakpoint.mdOnly ? 232.44 : 309.92">
              <v-img contain class="elevation-5" :src="item.src"></v-img>
            </v-lazy>
          </div>
        </div>
        <div v-else>
          <div v-if="n === 1" class="ml-10">
            <v-lazy :value="true"
                    :min-height="$vuetify.breakpoint.smAndDown ? 0 : $vuetify.breakpoint.mdOnly ? 232.44 : 309.92">
              <v-img contain class="elevation-5" :src="item.src"></v-img>
            </v-lazy>
          </div>
          <div v-else class="mr-10" style="height: 100%">
            <p class="t2 x4 text-left" style="white-space: pre-wrap">{{ item.name }}</p>
            <p class="t4 medium text-left" style="white-space: pre-wrap">{{ item.desc }}</p>
            <v-divider dark></v-divider>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown"
           v-for="(item, i) in items"
           :key="i"
           justify="center"
           class="mx-2 my-5">
      <span class="shadow-3 t2 x5 text-center" style="width: 100%;">{{ item.name }}</span>
      <v-lazy :value="true">
        <v-img contain class="elevation-5" max-width="70vw" :src="item.src"></v-img>
      </v-lazy>
      <span class="t4 my-5 medium text-center" style="white-space: pre-wrap">{{ item.desc }}</span>
      <v-divider dark></v-divider>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      items: [
        {
          name     : "Brisket",
          desc     : "Cooked low and slow, our most popular item on the menu is prepared to ensure you'll be able to cut it with a plastic " +
                     "fork. Whether you like fat or lean, it's the best thing since sliced white bread, which we also have!",
          modifiers: [
            {
              name : "1/4 lb.",
              price: 4.99
            },
            {
              name : "1/2 lb.",
              price: 9.99
            },
            {
              name : "1 lb.",
              price: 19.99
            },
          ],
          src      : require("../../assets/food/brisket-2.jpg")
        },
        {
          name     : "Ribs",
          desc     : "Of the St. Louis variety. If you don't like eating with a fork, this one's for you. Great to share with friends! " +
                     "Grab an extra one while they're not looking. We won't tell.",
          modifiers: [
            {
              name : "1/2 Rack",
              price: 11.99
            },
            {
              name : "Full Rack",
              price: 21.99
            },
          ],
          src      : require("../../assets/food/ribs-2.jpg")
        },
        {
          name     : "Pulled Pork",
          desc     : "The meat that started it all! Put it by itself, or put it with almost anything. On a bun, in a sundae, on some nachos, " +
                     "in a wrap, in a soup... need we say more?",
          modifiers: [
            {
              name : "1/4 lb.",
              price: 3.99
            },
            {
              name : "1/2 lb.",
              price: 6.99
            },
            {
              name : "1 lb.",
              price: 13.50
            },
          ],
          src      : require("../../assets/food/pulled-pork-1.jpg")
        },
        {
          name     : "Chicken",
          desc     : "A boneless, skinless thigh covered in salt and pepper and smoked until juicy perfection. " +
                     "Good by itself, or good on a bun if you want to hold it closer to your heart.",
          modifiers: [
            {
              name : "1/4 lb.",
              price: 3.99
            },
            {
              name : "1/2 lb.",
              price: 6.99
            },
            {
              name : "1 lb.",
              price: 13.50
            },
          ],
          src      : require("../../assets/food/chicken-plate-1.jpg")
        },
        {
          name     : "The BBQ Sundae",
          desc     : "Everything in a single bite. Mac & cheese, BBQ beans, " +
                     "your choice of meat, and coleslaw. All topped with BBQ sauce and a pickle or two. If you don't like your food touching, this ain't for you.",
          modifiers: [
            {
              name : "Per Sundae",
              price: 6.99
            },
          ],
          src      : require("../../assets/food/sundae.jpg")
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>
