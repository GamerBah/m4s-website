<template>
  <div>
    <v-row v-if="$vuetify.breakpoint.smAndUp" justify="space-around">
      <v-col v-for="(item, i) in sides" :key="i" :class="isMobile ? '' : 'my-2'" :cols="isMobile ? 12 : 6"
             style="height: 100%; overflow: hidden">
        <div class="mx-10">
          <v-lazy :value="true" :min-height="minLazy">
            <v-img contain class="elevation-5" max-width="60vw" :src="item.src"></v-img>
          </v-lazy>
          <p class="t1 x3 mt-2 mb-0 text-center">{{ item.name }}</p>
          <v-divider />
          <p class="t4 medium text-center ma-2">{{ item.desc }}</p>
        </div>
      </v-col>
    </v-row>

    <v-row v-if="$vuetify.breakpoint.xs" v-for="(item, x) in sides" :key="x" justify="space-around">
      <v-row justify="space-around" class="ma-5">
        <span class="t2 x5 text-center" style="width: 100%;">{{ item.name }}</span>
        <v-lazy :value="true">
          <v-img contain class="elevation-5" max-width="60vw" :src="item.src"></v-img>
        </v-lazy>
        <span class="t4 my-5 medium text-center" style="white-space: pre-wrap">{{ item.desc }}</span>
      </v-row>
      <v-divider v-if="x < sides.length - 1" class="mx-5" dark></v-divider>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SidesMenu",
  data() {
    return {
      sides: [
        {
          name: "Mac & Cheese",
          desc: "Made for your consumption using four varieties of cheese. Perfect for the kids!",
          src : require("../../assets/food/mac-1.jpg")
        },
        {
          name: "Smoked BBQ Beans",
          desc: "Covered in our BBQ sauce and then smoked. The magical fruit just got more magical.",
          src : require("../../assets/food/beans-1.jpg")
        },
        {
          name: "Coleslaw",
          desc: "The closest thing to greens on our menu, other than the Broccoli Salad.",
          src : require("../../assets/food/coleslaw-1.jpg")
        },
        {
          name: "Potato Salad",
          desc: "Sort of like a loaded baked potato, but in salad form. Contains bacon, because why not?",
          src : require("../../assets/food/potato-salad-1.jpg")
        },
        {
          name: "Broccoli Salad",
          desc: "A mix of broccoli, cauliflower, dried cranberries, and bacon of course. Covered in our in-house coleslaw dressing. "
                + "Did we mention there's bacon?",
          src : require("../../assets/food/broccoli-salad-1.jpg")
        },
        {
          name: "Mini Cornbread Muffins",
          desc: "A minified cornbread muffin that doesn't need honey. Only the size of a quarter, which matches their 25\u00A2 price tag!",
          src : require("../../assets/food/cornbread-1.jpg")
        },
        {
          name: "Brownies",
          desc: "From an old family recipe. Not \"special,\" but they sure are sweet! Doesn't contain any nuts.",
          src : require("../../assets/food/brownie-1.jpg")
        }
      ],
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  },
  methods : {
    minLazy() {
      let a = this.$vuetify.breakpoint;
      return a.smAndDown ? 71.855 : a.mdOnly ? 143.71 : a.lgOnly ? 215.565 : 287.42;
    }
  }
}
</script>

<style scoped>

</style>
