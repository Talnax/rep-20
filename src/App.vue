<template>
  <v-app>
    <!--
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    -->

      <v-navigation-drawer
          class="left-nav-bar"
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

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
    import loadImageMixin from "@/mixins/loadImageMixin";
    //import AppSettingsDialog from "@/dialogs/app-settings-dialog";

export default {
    name: 'App',
    mixins: [loadImageMixin],
    // components: {
    //     "app-settings-dialog": AppSettingsDialog
    // },
    //data: () => ({}),
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
        };
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
};
</script>

<style lang="scss">
    .left-nav-bar {
        //top: 9px !important;
        position: fixed !important;

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

    .rsi-logo {
        height: 27px;
        margin-left: 9px;
        margin-top: 15px;
        margin-bottom: 6px;
        box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);

        &:hover {
            //cursor: pointer;
        }
    }
</style>
