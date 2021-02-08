<template>
  <div>
    <h6>{{$t('chooseLanguage')}}</h6>
    <div class="row">
      <div class="col-2" v-for="language in languages">
        <Language :lang="language.lang" :img="language.img" :langType="language.langType"/>
      </div>
    </div>
  </div>
</template>

<script>
import Language from "components/languages/Language/Language";
import ru from 'src/assets/languages/russia.png';
import us from 'src/assets/languages/usa.png';
import es from 'src/assets/languages/spain.png';


export default {
  name: "AllLanguages",
  components: {Language},
  data() {
    return {
      languages: [
        {
          lang: "Russian",
          img: ru,
          langType: 'ru',
        },
        {
          lang: "English",
          img: us,
          langType: 'en-us',
        },
        {
          lang: "Spanish",
          img: es,
          langType: 'es',
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
