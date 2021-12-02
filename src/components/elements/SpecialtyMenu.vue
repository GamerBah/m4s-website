<template>
  <div>
    <v-row v-if="$vuetify.breakpoint.mdAndUp"
           v-for="(item, i) in specialty"
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
            <p class="t4 medium text-right mt-n5" style="white-space: pre-wrap">
              Available on {{ item.day }}
            </p>
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
            <p class="t4 medium text-left mt-n5" style="white-space: pre-wrap">
              Available on {{ item.day }}
            </p>
            <p class="t4 medium text-left" style="white-space: pre-wrap">{{ item.desc }}</p>
            <v-divider dark></v-divider>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown"
           v-for="(item, i) in specialty"
           :key="i"
           justify="center"
           class="mx-2 my-5">
      <span class="shadow-3 t2 x5 text-center" style="width: 100%;">{{ item.name }}</span>
      <span class="t4 medium text-right mb-2" style="white-space: pre-wrap">Available on {{ item.day }}</span>
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
  name: "SpecialtyMenu",
  data() {
    return {
      specialty: [
        {
          name: "Smoke-Fried Chicken Wings",
          day : "Wednesday",
          desc: "\nSmoked, then deep-fried, then tossed in your choice of seasoning or sauce.",
          src : require("../../assets/food/wings-1.jpg")
        },
        {
          name: "Smoked Turkey",
          day : "Thursday",
          desc: "\nIt's November somewhere, right? Wait, no... that's not how that saying goes, but I digress.",
          src : require("../../assets/food/turkey-1.jpg")
        },
        {
          name: "Rib Tips",
          day : "Friday",
          desc: "\nSmaller ends of a rib made into bite-size pieces. Great as a little snack to pass around the house.",
          src : require("../../assets/food/rib-tips-1.jpg")
        },
        {
          name: "Burnt Ends",
          day : "Saturday",
          desc: "\n\"Meat Candy.\" Already-smoked brisket that's been cubed, covered in our house rub and BBQ sauce, and smoked again. Very rich flavor.",
          src : require("../../assets/food/burnt-ends-2.jpg")
        },
        {
          name: "Beef Ribs",
          day : "Thursday, Friday, and Saturday",
          desc: "\n\"The Dino Rib\", as we like to call it. \"Brisket on a Rib\" works, too. It's your favorite messy, hand-held meal... " +
                "but from a cow. Sold by the pound because they are really, really big.",
          src : require("../../assets/food/beef-rib-1.jpg")
        },

      ],
    }
  },
}
</script>

<style scoped>

</style>
