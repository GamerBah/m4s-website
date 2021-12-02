<template>
  <div>
    <!--<v-dialog v-model="dialog" persistent max-width="700px">
        <template v-slot:activator="{ on }">
            <v-btn block x-large v-on="on">
                <span class="medium t2" style="white-space: normal">REQUEST EVENT CATERING</span>
            </v-btn>
        </template>
        <v-card dark>
            <v-card-title>
                <v-row>
                    <v-col cols="12">
                        <p class="t2 x4 shadow-2 text-center">Event Catering Form</p>
                    </v-col>
                    <v-col cols="12">
                        <p class="t4 small my-n5 text-center">All fields are required.</p>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-container>
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="First Name"
                                              v-model="request.firstName"
                                              :rules="nameRules"
                                              required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Last Name"
                                              v-model="request.lastName"
                                              :rules="nameRules"
                                              required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Email"
                                              v-model="request.email"
                                              :rules="emailRules"
                                              required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select prepend-icon="mdi-account-group"
                                          v-model="request.amount"
                                          :items="['10 - 25','25 - 50','50 - 75','75 - 100','100 - 125','125 - 150','150 - 200','200+']"
                                          label="# of People"
                                          :rules="[v => !!v || 'Required']"
                                          required>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu v-model="date"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="formattedDate"
                                                      label="Event Date"
                                                      prepend-icon="mdi-calendar"
                                                      readonly
                                                      :rules="[v => !!v || 'Required']"
                                                      required
                                                      v-on="on">
                                        </v-text-field>
                                    </template>
                                    <v-date-picker dark
                                                   color="red"
                                                   v-model="request.date"
                                                   @input="date = false"
                                                   :min="earliestDate">
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select prepend-icon="mdi-cake"
                                          v-model="request.eventType"
                                          :items="['Birthday','Wedding','Holiday','Graduation','Other']"
                                          label="Event Type"
                                          :rules="[v => !!v || 'Required']"
                                          required>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select prepend-icon="mdi-clipboard-text-outline"
                                          v-model="request.cateringType"
                                          :items="['Drop Off','Pick Up @ Store','Full Service']"
                                          label="Catering Type"
                                          :rules="[v => !!v || 'Required']"
                                          @change="cateringOnChange"
                                          required>
                                </v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field ref="location"
                                              prepend-icon="mdi-map"
                                              v-model="request.location"
                                              label="Event Location"
                                              :rules="[v => !!v || 'Required']"
                                              hint="Just to give us an idea of how far away it is!"
                                              :required="request.cateringType !== 'Pick Up @ Store'"
                                              :disabled="request.cateringType === 'Pick Up @ Store'">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" class="mb-n10 mt-n2">
                                <v-textarea outlined
                                            no-resize
                                            counter="300"
                                            :rules="[v => v.length <= 300 || 'Max 300 characters']"
                                            v-model="request.info"
                                            label="Additional Information (Not Required)"
                                            hint="Tell us anything else you think we should know!"
                                            persistent-hint>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-5">
                <v-btn class="no-border" color="red darken-1" large text @click="closeDialog(true)">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="no-border"
                       color="green darken-1"
                       large
                       text
                       @click="sendRequest"
                       :disabled="disabled">Send
                                            Request
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64" color="red" width="5"></v-progress-circular>
        </v-overlay>
        <v-dialog v-model="sentDialog" persistent max-width="500px">
            <v-card dark>
                <v-card-title style="justify-content: center; background-color: green">
                    <p class="t2 x5 shadow-2 text-center">Thanks!</p>
                </v-card-title>
                <v-card-text>
                    <v-container class="my-5">
                        <p class="t4 small text-center" style="white-space: pre-wrap">
                            Your request should be sent! You should get an email shortly confirming the request, as
                            well as some details about what's next.
                            <br><br>
                            Check your spam/junk folder just in case!
                            <br><br>
                        </p>
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header class="t4 red--text" expand-icon="mdi-menu-down">
                                    Didn't get an email?
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="t4 small">
                                        Sorry about that!<br>Try one of these other options, instead:
                                    </p>
                                    <v-btn class="mt-5 shadow-3 blue darken-4 no-border"
                                           large
                                           block
                                           target="_blank"
                                           href="https://www.facebook.com/My4SonsBBQ/">
                                        <v-icon class="shadow-3 mr-2">
                                            mdi-facebook-box
                                        </v-icon>
                                        Message Us on Facebook
                                    </v-btn>
                                    <v-btn class="mt-5 shadow-3 grey darken-3 no-border"
                                           large
                                           block
                                           href="mailto:my4sonsbbq@live.com">
                                        <v-icon class="shadow-3 mr-2">
                                            mdi-email
                                        </v-icon>
                                        Send Us a Direct Email
                                    </v-btn>
                                    <v-btn class="mt-5 shadow-3 grey darken-2 no-border" large block>
                                        <v-icon class="shadow-3 mr-2">
                                            mdi-phone
                                        </v-icon>
                                        (253) 777-4677
                                    </v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="no-border" color="red darken-1" block outlined @click="sentDialog = false">Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-dialog>-->
    <v-dialog v-model="alert" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn block x-large v-on="on">
          <span class="medium t2" style="white-space: normal">REQUEST EVENT CATERING</span>
        </v-btn>
      </template>
      <v-card dark>
        <v-card-title style="justify-content: center; background-color: darkred">
          <p class="t2 x4 shadow-2 text-center mt-2">Sorry!</p>
        </v-card-title>
        <v-card-text>
          <v-container class="my-5">
            <p class="t4 small text-center" style="white-space: pre-wrap">{{ covidText }}</p>
            <v-btn class="mt-5 shadow-3 blue darken-4 no-border"
                   large
                   block
                   target="_blank"
                   href="https://www.facebook.com/My4SonsBBQ/">
              <v-icon class="shadow-3 mr-2">
                mdi-facebook
              </v-icon>
              Message Us on Facebook
            </v-btn>
            <v-btn class="mt-5 shadow-3 grey darken-3 no-border"
                   large
                   block
                   href="mailto:my4sonsbbq@live.com">
              <v-icon class="shadow-3 mr-2">
                mdi-email
              </v-icon>
              Send Us a Direct Email
            </v-btn>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="no-border" color="red darken-1" block outlined @click="alert = false">Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "RequestForm",
  data() {
    return {
      dialog    : false,
      date      : false,
      sentDialog: false,
      loading   : false,
      alert     : false,
      request   : {
        firstName   : "",
        lastName    : "",
        email       : "",
        amount      : "",
        date        : null,
        eventType   : "",
        cateringType: "",
        location    : "",
        info        : "",
      },
      nameRules : [
        v => !!v || "Required",
      ],
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      covidText : "Unfortunately, due to the COVID-19 social distancing measures, we're unavailable for catering for the time being.\n\n" +
                  "We are hopeful that the situation will improve in the coming months, and we will post updates when we are able to resume our event service.\n\n" +
                  "We apologize for the inconvenience, and thank you for your understanding!\n\nHere are some other ways to contact us:",
    }
  },
  methods : {
    closeDialog(reset) {
      if (reset) {
        this.$refs.form.resetValidation();
        this.request.firstName = "";
        this.request.lastName = "";
        this.request.email = "";
        this.request.amount = "";
        this.request.date = null;
        this.request.eventType = "";
        this.request.cateringType = "";
        this.request.location = "";
        this.request.info = "";
      }
      this.dialog = false;
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`
    },
    sendRequest(e) {
      this.loading = true;
      e.preventDefault();
      let location = this.request.location;
      if (location === "") {
        location = "N/A"
      }
      let info = this.request.info;
      if (info === "") {
        info = "No additional info given."
      }
      this.$axios.post("catering_request.php", JSON.stringify({
                                                                name    : this.request.firstName +
                                                                          " " +
                                                                          this.request.lastName,
                                                                email   : this.request.email,
                                                                people  : this.request.amount,
                                                                date    : this.formatDate(this.request.date),
                                                                type    : this.request.eventType,
                                                                catering: this.request.cateringType,
                                                                location: location,
                                                                info    : info,
                                                              })).then(response => {
        this.loading = false;
        this.sentDialog = true;
        if (response === -1) {
          console.error("Unable to send request");
          this.closeDialog(false);
        } else {
          this.closeDialog(true);
        }
      });
    },
    cateringOnChange() {
      if (this.request.cateringType === "Pick Up @ Store") {
        this.request.location = "";
        this.$refs.location.resetValidation();
      }
    },
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.request.date)
    },
    earliestDate() {
      const date = new Date();
      date.setDate(date.getDate() + 6);
      return date.toISOString().substr(0, 10)
    },
    disabled() {
      return this.request.firstName === ""
             || this.request.lastName === ""
             || this.request.email === ""
             || this.request.amount === ""
             || this.request.date === null
             || this.request.eventType === ""
             || this.request.cateringType === ""
             || (this.request.cateringType !== "Pick Up @ Store" && this.request.location === "")
    }
  }
}
</script>

<style scoped>
</style>
