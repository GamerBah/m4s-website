import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
                               icons     : {
                                   iconfont: "mdi"
                               },
                               theme     : {
                                   dark: true
                               },
                               breakpoint: {
                                   thresholds: {
                                       xs: 800,
                                       sm: 1200,
                                       md: 1920,
                                       lg: 2560,
                                       xl: 3440,
                                   }
                               }
                           });
