<template>
  <div>
    <h6>{{$t('chooseTheme')}}</h6>
    <div class="row root_theme_spotify">
      <div class="col-2" v-for="theme in themes">
        <CardTheme :title="theme.title" :theme="theme.theme" :app_theme="theme.app_theme"/>
      </div>
    </div>
    </div>
</template>

<script>
import './allCardsTheme.scss'
import CardTheme from "components/cards/CardsTheme/CardTheme";
export default {
  name: "AllCardsTheme",
  components: {CardTheme},
  data() {
    return {
      themes: [
        {
          title: "Spotify",
          theme: "spotifyTheme",
          app_theme: "spotify"
        },
        {
          title: "AdminLte",
          theme: "adminLteTheme",
          app_theme: "adminLte",
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
