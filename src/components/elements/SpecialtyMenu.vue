<template>
  <div>
    <v-row v-if="$vuetify.breakpoint.smAndUp" v-for="(item, i) in specialty" :key="i" justify="space-around">
      <v-col>
        <v-row>
          <v-col v-for="n in 2" class="my-2" :key="n*(i+1)" :cols="n === 1 ? 6 : 0"
                 style="height: 100%; overflow: hidden">
            <div v-if="n === (isLeft(i) ? 1 : 2)" :class="isLeft(i) ? 'ml-10' : 'mr-10'" style="height: 100%">
              <p :class="classLeftOrRight(i, true)" style="white-space: pre-wrap">{{ item.name }}</p>
              <p :class="classLeftOrRight(i, false)" style="white-space: pre-wrap">Available on {{ item.day }}s</p>
              <p class="t4 medium text-left mt-n5" style="white-space: pre-wrap">{{ item.desc }}</p>
            </div>
            <div v-else :class="isLeft(i) ? 'mr-10' : 'ml-10'">
              <v-lazy :value="true" :min-height="minPictureHeight">
                <v-img contain class="elevation-5" :src="item.src"></v-img>
              </v-lazy>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters v-if="i < specialty.length - 1">
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-if="$vuetify.breakpoint.xs" v-for="(item, x) in specialty" :key="x" justify="space-around">
      <v-row justify="space-around" class="ma-5">
        <span class="t2 x5 text-center" style="width: 100%;">{{ item.name }}</span>
        <span class="t4 mb-5 medium text-center" style="width: 100%;">Available on {{ item.day }}s</span>
        <v-lazy :value="true">
          <v-img contain class="elevation-5" max-width="60vw" :src="item.src"></v-img>
        </v-lazy>
        <span class="t4 my-2 medium text-center" style="white-space: pre-wrap">{{ item.desc }}</span>
      </v-row>
      <v-divider v-if="x < specialty.length - 1" class="mx-5" dark></v-divider>
    </v-row>

  </div>
</template>

<script>
export default {
  name    : "SpecialtyMenu",
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
    classLeftOrRight(i, bool) {
      if (bool) {
        return this.isLeft(i) ? "t1 x4 text-right" : "t1 x4 text-left"
      } else {
        return this.isLeft(i) ? "t4 medium text-right" : "t4 medium text-left"
      }
    }
  },
  data() {
    return {
      specialty: [
        {
          name: "Smoke-Fried Wings",
          day : "Wednesday",
          desc: "\nSmoked, then deep-fried, then tossed in your choice of one of our sauces or dry seasonings. The ultimate party food just got better.",
          src : require("../../assets/food/wings-1.jpg")
        },
        {
          name: "Smoked Turkey",
          day : "Thursday",
          desc: "\nIt's November somewhere, right? Thanksgiving is year-round now. You're welcome.",
          src : require("../../assets/food/turkey-1.jpg")
        },
        {
          name: "Rib Tips",
          day : "Friday",
          desc: "\nSmaller ends of our pork ribs made into bite-size pieces. Great as a little snack to pass around the house. Or keep to yourself.",
          src : require("../../assets/food/rib-tips-1.jpg")
        },
        {
          name: "Burnt Ends",
          day : "Saturday",
          desc: "\n\"Meat Candy.\" Our brisket that's been cubed, covered in our house rub and Original BBQ sauce, and smoked again. You'll want a nap after this one.",
          src : require("../../assets/food/burnt-ends-2.jpg")
        },

      ],
    }
  },
}
</script>

<style scoped>

</style>
