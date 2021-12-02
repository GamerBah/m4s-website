<template>
  <v-data-iterator :items="sides" hide-default-footer>
    <template>
      <v-row>
        <v-col v-for="(item, n) in sides"
               class="my-5"
               :key="n"
               cols="12" sm="6" md="6" lg="6" xl="6"
               style="height: 100%; overflow: hidden">
          <div class="mx-10" style="height: 100%">
            <p v-if="$vuetify.breakpoint.smAndDown" class="t2 x5 text-center shadow-3">{{ item.name }}</p>
            <v-lazy :value="true" :min-height="minLazy">
              <v-img contain class="elevation-5" :src="item.src"></v-img>
            </v-lazy>
            <p v-if="$vuetify.breakpoint.mdAndUp" class="t2 x4 text-center mt-2 shadow-2">{{ item.name }}</p>
            <p v-if="$vuetify.breakpoint.mdAndUp" class="t4 medium text-center mx-10 shadow-3">{{ item.desc }}</p>
            <p v-if="$vuetify.breakpoint.smAndDown" class="t4 large text-center mt-5">{{ item.desc }}</p>
          </div>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
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
          desc: "Covered in our BBQ sauce with some onions, then smoked. The magical fruit just got more magical.",
          src : require("../../assets/food/beans-1.jpg")
        },
        {
          name: "Coleslaw",
          desc: "The closest thing to greens on our menu, other than the Broccoli Salad.",
          src : require("../../assets/food/coleslaw-1.jpg")
        },
        {
          name: "Potato Salad",
          desc: "Sort of like a loaded baked potato, but in salad form. Contains bacon, of course.",
          src : require("../../assets/food/potato-salad-1.jpg")
        },
        {
          name: "Broccoli Salad",
          desc: "A mix of broccoli and cauliflower with cranberries and bacon sprinkled in, covered in our in-house coleslaw sauce. "
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
          desc: "From an old family recipe. Not \"special,\" but they sure are sweet!",
          src : require("../../assets/food/brownie-1.jpg")
        }
      ],
    }
  },
  methods: {
    minLazy() {
      let a = this.$vuetify.breakpoint;
      return a.smAndDown ? 71.855 : a.mdOnly ? 143.71 : a.lgOnly ? 215.565 : 287.42;
    }
  }
}
</script>

<style scoped>

</style>
