<template>
  <div>
    <v-sheet v-if="$vuetify.breakpoint.mdAndUp" class="red darken-4 mb-2 text-center" tile>
      <span class="x5 t2 shadow-1">{{ title }}</span>
    </v-sheet>
    <v-sheet v-if="$vuetify.breakpoint.sm" class="red darken-4 py-2 text-center" tile>
      <span class="x5 t2 shadow-2">{{ title }}</span>
    </v-sheet>
    <v-sheet v-if="$vuetify.breakpoint.xs" class="red darken-4 py-2 text-center" tile>
      <span class="x5 t2 shadow-3">{{ title }}</span>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name : "SectionHeader",
  props: {
    title: String,
  }
}
</script>

<style scoped>

</style>
