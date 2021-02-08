<template>
  <q-card class="q-ma-sm app_card cursor-pointer" @click="changeLanguage(langType)">
    <q-card-section>
      {{lang}}
    </q-card-section>
    <q-card-section>
      <div >
        <q-card>
          <img :src="img" height="100px">
        </q-card>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
name: "Language",
props: ['lang', 'img', 'langType'],
  data() {
    return {

    }
  },


  methods: {
    changeLanguage(lang)
    {
      this.$root.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>

</style>
