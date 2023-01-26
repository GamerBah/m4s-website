<template>
  <div>
    <v-row v-if="$vuetify.breakpoint.smAndUp" v-for="(item, i) in items" :key="i" justify="center">
      <v-col>
        <v-row>
          <v-col v-for="n in 2" class="my-2" :key="n*(i+1)" :cols="n === 1 ? 6 : 0"
                 style="height: auto; overflow: hidden">
            <div v-if="n === (isLeft(i) ? 1 : 2)" :class="isLeft(i) ? 'ml-10' : 'mr-10'">
              <p :class="classLeftOrRight(i)" style="white-space: pre-wrap">{{ item.name }}</p>
              <p class="t4 medium text-left" style="white-space: pre-wrap">{{ item.desc }}</p>
            </div>
            <div v-else :class="isLeft(i) ? 'mr-10' : 'ml-10'">
              <v-lazy :value="true" :min-height="minPictureHeight">
                <v-img contain class="elevation-5 align-self-center" :src="item.src"></v-img>
              </v-lazy>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters v-if="i < items.length - 1">
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-if="$vuetify.breakpoint.xs" v-for="(item, x) in items" :key="x" justify="space-around">
      <v-row justify="space-around" class="ma-5">
        <span class="t2 x5 text-center" style="width: 100%;">{{ item.name }}</span>
        <v-lazy :value="true">
          <v-img contain class="elevation-5" max-width="60vw" :src="item.src"></v-img>
        </v-lazy>
        <span class="t4 my-5 medium text-center" style="white-space: pre-wrap">{{ item.desc }}</span>
      </v-row>
      <v-divider v-if="x < items.length - 1" class="mx-5" />
    </v-row>
  </div>
</template>

<script>
export default {
  name    : "MainMenu",
  computed: {
    minPictureHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
          return 230;
        case "md":
          return 306;
        default:
          return 308;
      }
    }
  },
  methods : {
    isLeft(i) {
      return i % 2 === 0;
    },
    classLeftOrRight(i) {
      return this.isLeft(i) ? "t1 x4 text-right" : "t1 x4 text-left"
    }
  },
  data() {
    return {
      items: [
        {
          name: "Brisket",
          desc: "Cooked low and slow, our most popular item on the menu is prepared to ensure you'll be able to cut it with a plastic " +
                "fork. Whether you like fat or lean, it's the best thing since sliced white bread, which we also have!",
          src : require("../../assets/food/brisket-2.jpg")
        },
        {
          name: "Ribs",
          desc: "Of the St. Louis variety. If you don't like eating with a fork, this one's for you. Great to share with friends! " +
                "Grab an extra one while they're not looking. We won't tell.",
          src : require("../../assets/food/ribs-2.jpg")
        },
        {
          name: "Pulled Pork",
          desc: "The meat that started it all! Put it by itself, or put it with almost anything. On a bun, in a sundae, on some nachos, " +
                "in a wrap, in a soup... need we say more?",
          src : require("../../assets/food/pulled-pork-1.jpg")
        },
        {
          name: "Pulled Chicken",
          desc: "A boneless, skinless thigh covered in salt and pepper and smoked until juicy perfection. " +
                "Good by itself, or good on a bun if you're a \"hands-on\" type of person.",
          src : require("../../assets/food/chicken-plate-1.jpg")
        },
        {
          name: "The BBQ Sundae",
          desc: "Everything in a single bite. Mac & cheese, BBQ beans, " +
                "your choice of meat, and coleslaw. All topped with BBQ sauce and a pickle or two. If you don't like your food touching, this ain't for you.",
          src : require("../../assets/food/sundae.jpg")
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>
