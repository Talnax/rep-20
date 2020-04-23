<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>

    <v-navigation-drawer
            class="left-vertical-bar"
            v-model="drawer"
            color="primary"
            :mini-variant="mini"
            :right="right"
            absolute
            dark>
      <v-list  class="py-0" >

        <img
            class="rsi-logo"
            :src="getImgUrl('bk/rsi-logo.jpg')" >

        <v-divider></v-divider>

        <v-list-item
              class="vertical-menu"
              v-for="item in items"
              :key="item.title"
              @click="onItemClick(item)">
          <v-icon class="icons-projects" >{{ item.icon }}</v-icon>
          <span class="icon-text" :style="item.marginLeft">{{ item.short }}</span>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
  import loadImageMixin from "@/mixins/loadImageMixin";
  //import AppSettingsDialog from "@/dialogs/app-settings-dialog";

  export default {
    name: 'App',
    mixins: [loadImageMixin],
    // components: {
    //   "app-settings-dialog": AppSettingsDialog
    // },
    data() {
      return {
        user: 'Kevin Lunn',
        search_msg: "",
        show_setting_dlg: false,
        select_domain: "Americas",
        domains: [
          "Americas", "EU", "CN", "WM", "WM EU", "WM CN"
        ],
        items: [
          { title: 'Retail Execution Portal', short: "REP",
            marginLeft: "margin-left: 3px;", icon: 'category' },
          { title: 'Retail Visibility', short: "RV",
            marginLeft: "margin-left: 5px;", icon: 'visibility' },
          { title: 'Retail Intelligence', short: "RI",
            marginLeft: "margin-left: 6px;", icon: 'share' },
          { title: 'Administration', short: "Admin",
            marginLeft: "margin-left: -3px;", icon: 'person' },
          { title: 'Data Extract Mgmt', short: "DEM",
            marginLeft: "margin-left: 1px;", icon: 'dns'},
          { title: 'Tableau', short: "Tableau",
            marginLeft: "margin-left: -6px;", icon: 'timeline'},
          { title: 'Data Availability', short: "Data",
            marginLeft: "margin-left: 1px;", icon: 'signal_cellular_alt'},
          { title: 'Power BI', short: "Power",
            marginLeft: "margin-left: -2px;", icon: 'insert_chart_outlined'},
          { title: 'OSA Power', short: "OSA",
            marginLeft: "margin-left: 1px;", icon: 'brightness_5'},
          { title: 'Promo Power', short: "Promo",
            marginLeft: "margin-left: -3px;", icon: 'spa'},
          { title: 'Pacific', short: "Pacific",
            marginLeft: "margin-left: -3px;", icon: 'touch_app'}
        ],
        right: null,
        mini: true,
        drawer: true,
      }
    },
    methods: {
      onItemClick(item) {
        console.log('onItemClick(item): ', item);
      },
      onShowUserSettingsDialog() {
        console.clear();
        console.log("onShowUserSettingsDialog()");
        this.show_setting_dlg = true;
      },
      onCloseUserSettingsDialog() {
        console.log("onCloseUserSettingsDialog()");
        this.show_setting_dlg = false;
      },
      onChangeSearch() {
        console.log("onChangeSearch(search): ", this.search_msg);
      }
    }
  }

</script>

<style lang="scss">
  .app  {

    .left-nav-bar {
      //top: 9px !important;
      position: fixed !important;
    }

    .v-list-item--link:before {
      margin-bottom: -9px;
    }

    .vertical-menu {
      margin-top: 3px;
      margin-left: -2px;
      min-height: 51px;

      .icons-projects {}

      .icon-text {
        font-size: 11px;
        position: absolute !important;
        white-space: nowrap;
        display: initial;
        margin-top: 21px;
        overflow: visible !important;
        clip: unset !important;
        height: unset !important;

        //color: black !important;
      }
    }

  }
</style>
