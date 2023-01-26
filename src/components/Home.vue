<template>
  <div>
    <v-app>
      <v-app-bar app dark inverted-scroll class="elevation-10" style="z-index: 100">
        <v-btn x-large elevation="0" @click="$vuetify.goTo(Number(0), {duration: 750})" height="115%"
               style="border-radius: 0">
                    <span class="main-title t1 x3 shadow-3">
                        MY 4 SONS BBQ
                    </span>
        </v-btn>

        <div class="no-gutters ml-10 hidden-md-and-down" style="height: 115%">
          <v-btn v-for="(section, i) in sections" :key="i"
                 @click="$vuetify.goTo('#' + section.id, {duration: 750, offset: 75})" text height="100%"
                 style="border-radius: 0" class="t2">
            <span class="large">{{ section.name }}</span>
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-tooltip bottom transition="scale-transition" open-delay="500">
            <template v-slot:activator="{ on }">
              <v-btn text color="yellow" target="_blank" href="https://my4sonsbbq.com/order-online" v-on="on">
                <v-icon class="x3 shadow-3">mdi-silverware</v-icon>
                <span class="t2 shadow-3 large hidden-sm-and-down ml-2">
                                    Order Online
                                </span>
              </v-btn>
            </template>
            <span class="hidden-sm-and-down">Opens in a new tab!</span>
          </v-tooltip>
          <v-tooltip bottom transition="scale-transition" open-delay="500">
            <template v-slot:activator="{ on }">
              <v-btn text color="primary" target="_blank" href="https://www.facebook.com/My4SonsBBQ/" v-on="on">
                <v-icon class="x3 shadow-3">mdi-facebook</v-icon>
                <span class="t2 shadow-3 large hidden-sm-and-down ml-2">
                                    Facebook
                                </span>
              </v-btn>
            </template>
            <span class="hidden-sm-and-down">Opens in a new tab!</span>
          </v-tooltip>
          <v-tooltip bottom transition="scale-transition" open-delay="500">
            <template v-slot:activator="{ on }">
              <v-btn text color="success" target="_blank" href="https://goo.gl/maps/LL4RGieJHAHXW8cz5" v-on="on">
                <v-icon class="x3 shadow-3">
                  mdi-google-maps
                </v-icon>
                <span class="t2 shadow-3 large hidden-sm-and-down ml-2">
                                    Maps
                                </span>
              </v-btn>
            </template>
            <span class="hidden-sm-and-down">Opens in a new tab!</span>
          </v-tooltip>
        </v-toolbar-items>
      </v-app-bar>

      <div class="main">
        <transition name="fade" mode="in-out">
          <img class="slide" :src="slideUrl" :key="active" />
        </transition>
        <div class="main d-flex align-center" style="text-align: center;">
          <div style="width: 100vw; max-height: 100%">
            <transition name="fade" appear>
              <img v-if="$vuetify.breakpoint.mdAndUp" class="overlay" :src="require('../assets/misc/overlay.png')"
                   alt="image" />
              <img v-if="$vuetify.breakpoint.smAndDown" class="overlay-sm"
                   :src="require('../assets/misc/logo-transparent.png')" alt="image" />
            </transition>
            <br>
            <v-btn icon large color="white" class="overlay floating hidden-sm-and-down"
                   @click="$vuetify.goTo('#about-us', {duration: 750, offset: 75})">
              <v-icon class="shadow-2" style="font-size: calc(16px + 1.5vw)">mdi-chevron-double-down
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <v-container fluid class="grey darken-4">
        <v-row v-if="$vuetify.breakpoint.mdAndUp" class="my-10" v-for="(section, i) in sections" :key="i">
          <v-col v-for="n in 3" :key="n" :cols="contentCols(n)">
            <div v-if="n === 2" class="pa-2 pb-10 grey darken-3 elevation-10">
              <component :is="section.src" :id="section.id" />
            </div>
          </v-col>
        </v-row>
        <v-row v-if="$vuetify.breakpoint.smAndDown" :class="$vuetify.breakpoint.sm ? 'my-10' : 'my-n5'"
               v-for="(section, i) in sections" :key="i">
          <v-col v-for="n in 3" :key="n" :cols="contentCols(n)">
            <div v-if="n === 2" class="pa-2 pb-5 grey darken-3 elevation-10">
              <component :is="section.src" :id="section.id" />
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="i in 3" :cols="i === 2 ? 6 : 2">
            <v-dialog v-if="i === 2" v-model="notice" persistent max-width="600px" overlay-opacity=".8">
              <v-card>
                <v-card-title class="t2 justify-center">
                  <p class="x4 my-5 red--text font-weight-bold">CLOSED FOR THE HOLIDAYS</p>
                </v-card-title>
                <v-card-text>
                  <p class="t4 medium text-center">
                    Merry Christmas from the My 4 Sons Family! We're spending the holidays together, which means that
                    we'll be closed: </p>
                  <p class="t1 large text-center my-5" style="font-weight: bolder">DECEMBER 27 - 31</p>
                  <p class="t4 medium text-center">We'll be open again on Tuesday, January 3rd to start 2023!<br><br>We
                                                   appreciate all the support in 2022, and we're excited for another
                                                   year of BBQ!</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn block outlined large @click="notice = false">
                    Okay!
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>

      <v-footer elevation="10" class="red darken-4 text-center" height="75px">
                <span class="t4 small mr-10 hidden-sm-and-down" style="vertical-align: center;">
                    &#169 {{ new Date().getFullYear() }} My 4 Sons Enterprises
                </span>
        <v-tooltip v-if="$vuetify.breakpoint.mdAndUp" top transition="scale-transition" v-for="(icon, i) in icons"
                   color="grey darken-3" :key="i">
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" icon v-on="on" target="_blank" :href="icon.link">
              <v-icon size="24px">{{ icon.src }}</v-icon>
            </v-btn>
          </template>
          <span class="hidden-sm-and-down">{{ icon.tooltip }}</span>
        </v-tooltip>
        <v-divider v-if="$vuetify.breakpoint.mdAndUp" class="ml-2" vertical></v-divider>
        <span class="t4 small ml-5">Tue - Sat {{ `\u00BB` }} 11 - 7PM</span>
        <v-btn class="ml-5 py-5" small tile outlined href="tel:2537774677">
          <v-icon class="mr-4" size="24px">mdi-phone</v-icon>
          <span class="t4 small float-right">(253) 777-4677</span>
        </v-btn>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import AboutUs from "./AboutUs"
import Menu from "./Menu"
import Catering from "./Catering"

export default {
  name: "Home",
  data() {
    return {
      notice  : false,
      active  : 0,
      sections: [
        {
          src : AboutUs,
          name: "About Us",
          id  : "about-us",
        },
        {
          src : Menu,
          name: "Our Menu",
          id  : "menu",
        },
        {
          src : Catering,
          name: "Catering",
          id  : "catering",
        }
      ],
      slides  : [
        {
          key: 0,
          alt: "Ribs",
          src: "food/ribs-2.jpg"
        },
        {
          key: 1,
          alt: "Rib Tips",
          src: "food/rib-tips-1.jpg"
        },
        {
          key: 2,
          alt: "Front Counter",
          src: "counter.jpg"
        },
        {
          key: 3,
          alt: "BBQ Sundae",
          src: "food/sundae.jpg"
        },
        {
          key: 4,
          alt: "Brisket",
          src: "food/brisket-1.jpg"
        },
        {
          key: 5,
          alt: "Catering Family",
          src: "catering/catering-1.jpg"
        }
      ],
      icons   : [
        {
          src    : "mdi-facebook",
          link   : "https://facebook.com/My4SonsBBQ/",
          tooltip: "Like us on Facebook!",
        },
        {
          src    : "mdi-clipboard-check",
          link   : "https://www.yelp.com/biz/my-4-sons-bbq-midland",
          tooltip: "Give us a review on Yelp!",
        },
        {
          src    : "mdi-google-maps",
          link   : "https://goo.gl/maps/LL4RGieJHAHXW8cz5",
          tooltip: "See where we're located!",
        },
      ]
    }
  },
  created() {
    setInterval(() => {
      if (this.active === this.slides.length - 1) {
        this.active = 0
      } else {
        this.active++
      }
    }, 4000)
  },
  methods : {
    contentCols(n) {
      if (n === 2) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return 12
          case "sm":
            return 10
          case "md":
            return 8
          case "lg":
            return 6;
          default:
            return 5;
        }
      }
      return undefined;
    },
    componentPadding() {
      if (this.$vuetify.breakpoint.mdAndUp) return "10";
      return "n5";
    },
  },
  computed: {
    slideUrl() {
      return require("../assets/" + this.slides[this.active].src)
    },
  }
}
</script>

<style>
.main {
  width: 100vw;
  max-height: 100vh;
  height: 56vw;
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.slide {
  position: absolute;
  max-width: 100%;
  width: 100vw;
  filter: brightness(60%);
}

.overlay {
  vertical-align: middle;
  max-width: 100vw;
  max-height: 100%;
  alignment: bottom;
  z-index: 20;
}

.overlay-sm {
  vertical-align: middle;
  max-width: 50vw;
  max-height: 100%;
  alignment: bottom;
  z-index: 20;
}

.floating {
  transform: translateY(0px);
  animation: float 2.5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.main-title {
  font-weight: bolder;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

</style>
