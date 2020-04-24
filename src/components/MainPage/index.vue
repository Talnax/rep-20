<template>
    <div  class="main-control">

        <!--
        <v-row justify="center" align="center">
            <v-col cols="12" sm="1">
                MainPage
            </v-col>
        </v-row>
        -->

        <!--<div justify="center" align="center" class="cards-position">-->
        <!--
        <v-row justify="center" class="cards-position">

            <v-card class="position-start" max-width="360" >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
                    <v-card-title>
                        <b class="timeline-item-title  white-text">K</b>nowledge Hub
                    </v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
                <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="orange"
                        text>
                        Share
                    </v-btn>

                    <v-btn
                        color="orange"
                        text>
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-card class="position-middle" max-width="360" >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
                    <v-card-title>
                        <b class="timeline-item-title  white-text">D</b>ata Availability
                    </v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            color="orange"
                            text>
                        Share
                    </v-btn>

                    <v-btn
                            color="orange"
                            text>
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-card class="position-stop" max-width="360" >
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
                    <v-card-title>
                        <b class="timeline-item-title  white-text">E</b>vents
                    </v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            color="orange"
                            text>
                        Share
                    </v-btn>

                    <v-btn
                            color="orange"
                            text>
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>

        </v-row>
        -->

        <v-row class="card-section" justify="center">
            <v-col
                v-for="n in cards"
                :key="n.id"
                cols="auto">
                <v-card
                    class="card-position"
                    width="390">
                    <v-img
                        class="white--text align-end"
                        height="180px"
                        :src="getImgUrl(n.img)" >
                        <!--
                        <v-card-title>
                            <div v-html='n.title'/>
                        </v-card-title>
                        -->
                    </v-img>

                    <!--
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                            :aspect-ratio="16/9">
                    </v-img>
                    -->
                    <v-card-title>
                        <v-icon class="icon-position" size="36">{{n.icon}}</v-icon>
                        <div class="display-1 mb-2">{{n.title}}</div>
                        <div class="title font-weight-regular ">{{n.subtitle}}</div>
                    </v-card-title>
                    <!--
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        v-text="n - 1">
                    </v-row>
                    -->

                    <!--
                        <v-row>
                            <v-col class="hidden-sm-and-down" md="2">
                                <v-icon size="33">mdi-account-multiple-outline</v-icon>
                            </v-col>
                            <v-col cols="12" md="10">
                                Scaevola imperdiet nec ut,
                                sed euismod convenire principes at.
                            </v-col>
                        </v-row>
                    -->

                </v-card>
            </v-col>
        </v-row>

        <v-row class="card-section" justify="center">

            <v-col
                v-for="n in hubs"
                :key="n.id"
                cols="auto">
                <v-card
                    class="card-position"
                    width="390">
                    <v-app-bar
                            dark
                            color="grey lighten-1">

                        <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->

                        <v-btn icon>
                            <v-icon >{{n.icon}}</v-icon>
                        </v-btn>

                        <v-toolbar-title>{{n.title}}</v-toolbar-title>

                        <v-spacer></v-spacer>

                    </v-app-bar>
                    <v-card-title>
                        <!--<v-icon class="icon-position" size="36">{{n.icon}}</v-icon>-->
                        <!--<div class="display-1 mb-2">{{n.title}}</div>-->
                        <div class="title font-weight-regular ">{{n.subtitle}}</div>
                    </v-card-title>
                    <!--
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        v-text="n - 1">
                    </v-row>
                    -->

                    <!--
                        <v-row>
                            <v-col class="hidden-sm-and-down" md="2">
                                <v-icon size="33">mdi-account-multiple-outline</v-icon>
                            </v-col>
                            <v-col cols="12" md="10">
                                Scaevola imperdiet nec ut,
                                sed euismod convenire principes at.
                            </v-col>
                        </v-row>
                    -->

                </v-card>
            </v-col>
        </v-row>

    </div>
    
</template>

<script>
    import loadImageMixin from "@/mixins/loadImageMixin";

    export default {
        name: "MainPage-index",
        mixins: [loadImageMixin],
        data() {
            return {
                cards: [
                    {
                        icon:  'mdi-account-multiple-outline',
                        title: `Data Availability`,
                        img: `imgs/knowledge-7.jpeg`,
                        id: 1,
                        subtitle: `Our comprehensive knowledge hub covers topic ranging from industry best practices.`,
                        staff: '   through robust measure.'
                    },
                    {
                        icon: 'event_available',
                        title: `Events`,
                        img: `imgs/events-1.jpg`,
                        id: 2,
                        subtitle: `Check out our events scheduled over the next few months and sign up for seminars`
                    },
                    {
                        icon: 'storage',
                        title: `Knowledge Hub`,
                        img: `imgs/data-availability-3.jpg`,
                        id: 3,
                        subtitle: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet`
                    }
                ],

                hubs: [
                    {
                        icon:  'language',
                        title: `Daily Overview`,
                        img: `imgs/knowledge-7.jpeg`,
                        id: 1,
                        subtitle: `Our comprehensive knowledge hub covers topic ranging from industry best practices.`,
                        staff: '   through robust measure.'
                    },
                    {
                        icon: 'fiber_new',
                        title: `News`,
                        img: `imgs/events-1.jpg`,
                        id: 2,
                        subtitle: `Check out our events scheduled over the next few months and sign up for seminars`
                    },
                    {
                        icon: 'ring_volume',
                        title: `Communication`,
                        img: `imgs/data-availability-3.jpg`,
                        id: 3,
                        subtitle: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet`
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .main-control {
        width: 100% !important;
        height: 100% !important;
        background-color: #F5F5F5;

        /*
        .cards-position {
            //top: 60px;
            //margin-top: 45px;

            .position-start {
                position: absolute;
                top: 60px;
                left: 150px;

                .timeline-item-title {
                    font-size: 2.7rem !important;
                    font-weight: 300;
                }
            }

            .position-middle {
                left: 750px;
                top: 60px;
                position: absolute;

                .timeline-item-title {
                    font-size: 2.7rem !important;
                    font-weight: 300;
                }
            }

            .position-stop {
                left: 1300px;
                top: 60px;
                position: absolute;

                .timeline-item-title {
                    font-size: 2.7rem !important;
                    font-weight: 300;
                }
            }
        }
        */

        .card-section {

            .card-position {
                margin-top: 30px;
                //margin-right: 54px;
                margin-left: 54px;

                .icon-position {
                    margin-right: 36px;
                    margin-top: -6px;
                }

                .font-weight-regular {
                    font-weight: 300 !important;
                    font-size: 18px !important;
                    line-height: normal;
                    word-break: break-word;
                }
            }
        }


    }
</style>