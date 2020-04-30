<template>
    <v-app>
        <v-app-bar app color="white">

          <v-toolbar-title class="tool-bar-title headline">
              Retail Execution Portal
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-text-field
              class="text-field-search-header"
              v-model="search_msg"
              @input="onChangeSearch()"
              placeholder="Search">
          </v-text-field>

          <v-combobox
              class="combo-box-domain"
              v-model="select_domain"
              :items="domains">
          </v-combobox>

        <!--
        router
        to="/applications-section"
        -->
        <v-btn
            icon
            style="margin-right: 24px;"
            @click="onShowcaseDialog"
            class="tool-bar-action-btn">
            <v-icon color="blue-grey darken-1">
                error_outline
            </v-icon>
        </v-btn>
        <!--
        <v-btn icon color="blue-grey darken-1">
            <v-icon>apps</v-icon>
        </v-btn>
        -->

        <v-avatar
          @click="onShowUserSettingsDialog"
          size="36"
          class="avatar-tool-bar blue-grey darken-2 orange--text app-settings" >
          <span>{{ userLetter }}</span>
        </v-avatar>

      </v-app-bar>

        <v-navigation-drawer
          class="left-nav-bar"
          v-model="drawer"
          color="white"
          :mini-variant="mini"
          :right="right"
          absolute>
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
                  <!-- -->
                  <v-icon class="icons-projects black--text" >{{ item.icon }}</v-icon>
                  <span class="icon-text" :style="item.marginLeft">{{ item.short }}</span>
              </v-list-item>

              <!--<v-divider class="bottom-divider"></v-divider>-->
              <!--<v-spacer></v-spacer>-->
              <!--<v-divider class="bottom-divider"></v-divider>-->

              <!--
              <v-list-item
                      class="vertical-menu-bottom"
                      v-for="item in bottom_items"
                      :key="item.title"
                      @click="onItemClick(item)">
                  <v-icon class="icons-projects black--text" >{{ item.icon }}</v-icon>
                  <span class="icon-text" :style="item.marginLeft">{{ item.short }}</span>
              </v-list-item>
              -->

          </v-list>
        </v-navigation-drawer>

        <v-content>
          <router-view />
        </v-content>

        <app-settings-dialog
            :show_dlg="show_setting_dlg"
            v-on:onCloseUserSettingsDialog="onCloseUserSettingsDialog">
        </app-settings-dialog>

        <app-showcase-dialog
            :show_dlg="show_setting_dlg"
            v-on:onCloseShowcaseDialog="onCloseShowcaseDialog">
        </app-showcase-dialog>

        <v-footer class="app-footer" color="white">
          <v-spacer></v-spacer>
          <div>RSi &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
  </v-app>
</template>

<script>
    import loadImageMixin from "@/mixins/loadImageMixin";
    import AppSettingsDialog from "@/dialogs/app-settings-dialog";
    import AppShowCaseDialog from "@/dialogs/app-showcase-dialog";

export default {
    name: 'App',
    mixins: [loadImageMixin],
    components: {
        "app-settings-dialog": AppSettingsDialog,
        "app-showcase-dialog": AppShowCaseDialog
    },
    //data: () => ({}),
    data() {
        return {
            user: 'Kevin Lunn',
            search_msg: "",
            show_setting_dlg: false,
            show_showcase_dlg: false,
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

            // bottom_items: [
            //     { title: 'More Info', short: "Info",
            //         marginLeft: "margin-left: 3px;", icon: 'not_listed_location'}
            // ],

            right: null,
            mini: true,
            drawer: true,
        };
    },
    computed: {
        userLetter() {
            return this.user !== null ? this.user[0] : "";
            // let user = this.$store.getters.getUser;
            // return user !== {} ? user.first_name[0] : "";
        }
    },
    methods: {
        onItemClick(item) {
            console.log('onItemClick(item): ', item);
        },
        onShowcaseDialog() {
            console.log('onShowcaseDialog()');
            this.show_showcase_dlg = true;
        },
        onCloseShowcaseDialog() {
            console.log("onCloseShowcaseDialog()");
            this.show_showcase_dlg = false;
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

        .bottom-divider {
            //margin-top: 240px;
            margin-top: 24px;
        }

        .vertical-menu-bottom {
            position: fixed !important;
            bottom: 18px;
            margin-left: -2px;
            //min-height: 51px;

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

    .tool-bar-action-btn.v-btn--active {
        .v-btn__content {
            .v-icon {
                color: #ff9800 !important;
            }
        }
    }


    .avatar-tool-bar {
        text-align: center;
        //margin-top: -9px;
        &:hover {
            cursor: pointer;
        }
    }

    .combo-box-domain {
        top: 9px;
        flex: inherit !important;
        width: 96px;
        right: 42px;
    }

    .text-field-search-header {
        margin-top: 16px !important;
        flex: inherit !important;
        width: 240px;
        margin-right: 81px !important;
    }

    .v-toolbar {
        left: 56px !important;
        box-shadow: none !important;
        -webkit-box-shadow:  none !important;
    }

    .tool-bar-title {
        //margin-top: 9px;
        margin-left: 24px;
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

    .app-footer {
        background-color: #ffffff !important;
        position: fixed !important;
        bottom: 0;
        width: 100%;
    }
</style>
