<template>

  <div>
    <h3 class="text-center">{{$t('settingsManagement')}}</h3>
    <div>
      <AllCardsTheme/>
      <AllLanguages/>
    </div>
  </div>
</template>

<script>
import CardTheme from "components/cards/CardsTheme/CardTheme";
import AllCardsTheme from "components/cards/AllCardsTheme/AllCardsTheme";
import AllLanguages from "components/languages/AllLanguages/AllLanguages";
export default {
  name: "SettingsPage",
  components: {AllLanguages, AllCardsTheme, CardTheme}
}
</script>

<style scoped>

</style>
