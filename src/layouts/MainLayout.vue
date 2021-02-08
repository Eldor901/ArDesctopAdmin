<template>
    <q-layout view="hHh Lpr lff" container style="min-height: 100vh" class="shadow-2 ">
      <q-header elevated  class="header">
        <Header/>
        <q-toolbar>
          <div>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </div>
          <q-toolbar-title>Ar Market</q-toolbar-title>
          <div>
            <q-icon name="logout" class="icon"/>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay

        :width="200"
        :breakpoint="500"
        bordered
        content-class=" drawer"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <template v-for="rote in routes">
              <router-link :to="{name: rote.name}" class="style: none">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon :name="rote.icon_name" />
                  </q-item-section>

                  <q-item-section>
                    {{rote.text}}
                  </q-item-section>
                </q-item>
              </router-link>
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding class="content">
            <router-view/>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>
import Header from "components/electron/header/DesctopHeader";
export default {
  components: {Header},
  data () {
    return {
      drawer: false,
      miniState: true,
      routes: [
        {
          name: "page1",
          icon_name: "pages",
          text: "Page1"
        },
        {
          name: "page2",
          icon_name: "pages",
          text: "Page2"
        },
        {
          name: "settings",
          icon_name: "settings",
          text: "Page3"
        }
      ]
    }
  }
}
</script>

