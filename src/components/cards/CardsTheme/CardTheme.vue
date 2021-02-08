<template>
  <q-card class="q-ma-sm app_card cursor-pointer" @click="changeTheme(app_theme)">
    <q-card-section class="q-qa-lg">
      {{title}}
    </q-card-section>
    <div>
      <q-card-section :class="theme" style="all: revert" >
        <card>
        <div style="min-height: 100px" class="row q-pa-sm ">
          <div class="col-12  headerTheme"  style="height: 15px;  box-shadow: 0 0 2px rgba(0,0,0,0.5);">
          </div>
          <div class="col-1  drawerTheme" style="height: 90px">
          </div>
          <div class="col-10 contentTheme">
            <div class="q-ma-sm">
              choose this theme
            </div>
          </div>
        </div>
        </card>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
export default {
name: "cardTheme",
  props: ['theme', 'title', 'app_theme'],
  data() {
    return {

    }
  },


  methods: {
    changeTheme(theme){
     // this.$store.dispatch('changeThemeColor', theme)

      this.$store.dispatch('changeThemeColor', theme)

    }
  }
}
</script>

<style scoped>

</style>
