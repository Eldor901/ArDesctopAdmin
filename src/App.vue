<template>
  <div id="q-app" :class="theme">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    theme()
    {
      return this.$store.getters.getAppTheme;
    }
  }
}
</script>
