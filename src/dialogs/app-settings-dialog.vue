<template>
    <div class="app-settings-dialog">

        <!--<v-dialog v-model="modalProp" max-width="360px">-->
        <v-dialog v-model="show_dlg" max-width="360px">

            <v-card class="app-settings_panel" >
                <v-card-title class="headline grey lighten-2" primary-title >
                    <v-avatar class="avatar-head blue-grey darken-2 orange--text">
                        <span >{{ user.first_name[0] }}</span>
                    </v-avatar>
                    <v-card-text class="head-line-content">
                        <div class="head-line-content_organization">
                            {{ user.company }}
                        </div>
                        <div class="line-value">
                            <span class="title-value grey--text text--darken-1">Name:</span>{{ user.first_name }} {{ user.last_name }}
                        </div>
                        <div class="line-value">
                            <span class="title-value grey--text text--darken-1">ID:</span>{{ user.user_id }}
                        </div>
                        <div class="line-value">
                            <span class="title-value grey--text text--darken-1">Role:</span>{{ user.role }}
                        </div>
                        <div class="line-value">
                            <span class="title-value grey--text text--darken-1">Mail:</span>{{ user.email }}
                        </div>
                        <div class="line-value">
                            <span class="title-value grey--text text--darken-1">Phone:</span>{{ user.phone }}
                        </div>
                    </v-card-text>

                </v-card-title>

                <v-list class="list-user-action transparent">
                    <v-list-item
                            v-for="item in user_action"
                            :key="item.title "
                            @click="onActionDlgItemClick(item)"
                            class="item-user-action-tile">
                        <v-list-item-icon >
                            <v-icon
                                medium
                                color="blue-grey lighten-2"
                                class="item-info-icon ">{{ item.icon }}</v-icon>
                            <br>
                        </v-list-item-icon>

                        <!--<v-list-tile-content>-->
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <!--</v-list-tile-content>-->
                    </v-list-item>
                </v-list>

                <v-divider class="divider"></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="orange--text"
                        text
                        @click="onActionDlgLogout">
                        LogOut
                    </v-btn>
                </v-card-actions>

            </v-card>

        </v-dialog>

    </div>
</template>

<script>
    export default {
        name: "app-settings-dialog",
        props: ["show_dlg"],
        data() {
            return {
                user_group_model: "Becky",
                User:  {
                    company: "Loblaw Companies Ltd",
                    first_name: "Kevin",
                    last_name: "Lunn",
                    user_id: "KLunn-ID",
                    role: "Retailer Admin Approver",
                    file: "user-kevin.json",
                    email: 'Kevin.Lunn@gmail.com',
                    phone: "408-863-6732"
                },
                user_action: [
                    {
                        icon: "supervised_user_circle",
                        title: "Users",
                        link: ""
                    },
                    {
                        icon: "location_searching",
                        title: "Support",
                        link: ""
                    },
                    {
                        icon: "help_outline",
                        title: "Knowledge",
                        link: ""
                    }
                ]
            };
        },
        computed: {
            // https://stackoverflow.com/questions/39868963/vue-2-mutating-props-vue-warn
            // The Vue pattern is simple: props down and events up.
            modalProp: {
                get() {
                    return this.show_dlg;
                },
                set(val) {
                    this.$emit("update:show_dlg", val);
                    this.$emit("onCloseUserSettingsDialog");
                }
            },
            usersGroup() {
                console.log("usersGroup(): ", this.$store.getters.getUsersGroup);
                return this.$store.getters.getUsersGroup;
            },
            mainUser() {
                return this.$store.getters.getUser;
            },
            user() {
                //return this.$store.getters.getUser;
                //console.log('this.user: ', this.User);
                return this.User;
            }
        },
        methods: {
            initialize() {},
            onActionDlgItemClick(item) {
                console.log("onActionDlgItemClick(item)", item);
                this.$emit("onCloseUserSettingsDialog");
                //this.$router.push(item.link);
            },
            onActionDlgLogout() {
                this.$emit("onCloseUserSettingsDialog");
            }
        }
    };
</script>

<style lang="scss">
    .app-settings-dialog {
        //overflow-y: hidden;
        height: 100%;
    }

    .app-settings_panel {
        .menu-users {
            margin-left: 9px;
            margin-top: -9px;
            width: 24%;

            .v-select__slot {
                font-size: 15px;
            }
        }
    }

    .app-settings_panel {
        position: absolute !important;
        width: 360px !important;
        top: 51px;
        right: 30px !important;

        .head-line-content {
            margin-left: 72px;
            margin-top: -90px;

            .line-value {
                margin-top: -9px;
                font-size: 13px;

                .title-value {
                    display: inline-block;
                    margin-right: 15px;
                    font-size: 12px;
                    min-width: 36px;
                }
            }
        }

        .avatar-head {
            margin-top: 36px;
        }

        .head-line-content_organization {
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 9px;
        }

        .list-user-action {
            display: block;

            .item-user-action-tile {
                margin-bottom: -9px;

                .item-info-icon {
                    //margin-left: -18px;
                }
            }
        }

        .divider {
            margin-top: 9px;
        }

        .expansion-panel-items {
            .v-expansion-panel__container {
                .v-expansion-panel__header {
                    padding-right: 18px;
                }
            }

            .expansion-panel-item-content {
                margin-top: 9px;
                display: flex;

                .expansion-panel-item-icon {
                    margin-left: -11px;
                }

                .expansion-panel-item-txt {
                    margin-left: 30px;
                    margin-top: 3px;
                }
            }

            .profile-content {
                width: 90%;
                text-align: center;
                margin-left: 5%;
                margin-top: -3%;

                .profile-content_item {
                    margin-top: -6px;
                }
            }
        }

        .close-btn-dlg-icon {
            margin-top: 6px;
        }
    }

    .list-group-actions {
        padding: 0;

        .list-group-actions_item {
            margin-top: -9px;
        }

        .v-list__group__header--active .v-list__group__header__prepend-icon .v-icon {
            color: #f57c00; // accent
        }
    }
</style>
