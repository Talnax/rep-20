<template>
    <div  class="main-control">

        <v-carousel
            class="carousel-style"
            :show-arrows="false"
            height="360"
            cycle
            hide-delimiter-background
            delimiter-icon="brightness_1"
            show-arrows-on-hover>
            <v-carousel-item
                v-for="(item,i) in carousel_items"
                :key="i"
                :src="getImgUrl(item.img)">
                <v-sheet
                    style="background-color: transparent !important;"
                    height="100%">
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center">
                        <div class="display-3">{{ item.title }}</div>
                        <div class="center-position">{{ item.desc }}</div>
                        <div class="btn-position">
                            <v-btn x-large :color="item.btn.color" dark>{{ item.btn.txt }}</v-btn>
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>

        </v-carousel>
        <br><br>

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
                        height="240px"
                        :src="getImgUrl(n.img)">
                            <v-card-title class="white--text pl-12 pt-12">
                                <v-btn dark icon class="btn-top">
                                    <v-icon color="white" >slideshow</v-icon>
                                </v-btn>
                                <v-icon color="white" class="icon-style">{{n.icon}}</v-icon>
                                <div class="display-1 icon-title">{{n.title}}</div>
                                <div class="subtitle">{{n.subtitle}}</div>
                            </v-card-title>
                    </v-img>
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
                    <!--<v-app-bar dark :class="n.color" class="app-bar-card black--text">-->
                    <v-app-bar dark color="white" class="app-bar-card black--text">
                        <v-toolbar-title :class="n.color_text" class="app-bar-card-title">{{n.title}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon class="app-bar-card-icon">
                            <v-icon class="grey--text">{{n.icon}}</v-icon>
                            <!--<v-icon :color="n.color">{{n.icon}}</v-icon>-->
                        </v-btn>
                    </v-app-bar>
                    <!--<hr class="divider-line">-->
                    <v-card-title class="card-title ">
                        <div class="title font-weight-regular_second ">{{n.subtitle}}</div>
                    </v-card-title>
                    <v-list v-if="n.title === 'Communication'" two-line>
                        <v-list-item
                            @click="onClickCommunication(item)"
                            v-for="item in communication"
                            :key="item.id">
                            <v-list-item-icon>
                                <v-icon :color="n.color">{{ item.icon }}</v-icon><!---->
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.date + ";  " + item.time }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-icon color="grey">help_outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list>

                    <v-list v-if="n.title === 'News'" two-line>
                        <v-list-item
                            @click="onClickCommunication(item)"
                            v-for="item in news"
                            :key="item.id">
                            <v-list-item-icon>
                                <v-icon :color="n.color">{{ item.avatar }}</v-icon>
                                <!--<v-icon color="gray">{{ item.avatar }}</v-icon>-->
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <!--<v-icon color="black">help_outline</v-icon>-->
                                <!--<v-icon :color="n.color">help_outline</v-icon>-->
                                <v-icon color="grey">help_outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list>

                    <v-list v-if="n.title === 'Daily Overview'" two-line>
                        <v-list-item
                            @click="onClickCommunication(item)"
                            v-for="item in daily_overview"
                            :key="item.id">
                            <v-list-item-icon>
                                <v-icon :color="n.color">{{ item.avatar }}</v-icon>
                                <!--<v-icon color="grey">{{ item.avatar }}</v-icon>-->
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <!--<v-icon :color="n.color">help_outline</v-icon>-->
                                <!--<v-icon color="black">help_outline</v-icon>-->
                                <v-icon color="grey">help_outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        <!--
                        <v-divider inset></v-divider>
                        <v-divider inset></v-divider>
                        -->
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        <br><br><br>

        <!--<hr class="divider">-->

        <communication-more-dialog
            v-if="show_more_dlg"
            :show_dlg="show_more_dlg"
            :item="show_more_item"
            v-on:onCloseCommunicationMoreDialog="onCloseCommunicationMoreDialog">
        </communication-more-dialog>

    </div>
    
</template>

<script>
    import loadImageMixin from "@/mixins/loadImageMixin";
    import CommunicationMoreDialog from "@/dialogs/communication-more-dialog"

    export default {
        name: "MainPage-index",
        mixins: [loadImageMixin],
        components: {
            "communication-more-dialog": CommunicationMoreDialog
        },
        data() {
            return {
                show_more_dlg: false,
                show_more_item: null,

                carousel_items: [
                    {
                        img: 'bk/carousel-4.jpg',
                        title: 'Case Study: Optimizing OSA with ISP',
                        desc: `Tackle On-Shelf Availability issues and empower in-store teams with RSi's In Store Power Solution`,
                        btn: {
                            txt: 'Learn More',
                            color: 'green',
                        },
                        url: ""
                    },
                    {
                        img: 'bk/carousel-5.jpg',
                        title: 'Join US For Our Upcoming Webinar!',
                        desc: `Taking A Deeper Dive Into DVoid & Store Compliance EGDs 5/7/2020 at 11 AM EST`,
                        btn: {
                            txt: 'Register Now',
                            color: 'teal',
                        },
                        url: ""
                    },
                    {
                        img: 'bk/carousel-6.jpg',
                        title: 'The Future of E-commerce',
                        desc: `Covid-19 has had a major impact on the CPG industry as a whole, especially E-commerce.
                               In out piece, we explore the future implication`,
                        btn: {
                            txt: 'Read More',
                            color: 'red',
                        },
                        url: ""
                    }
                ],

                cards: [
                    {
                        icon:  'event_note',
                        title: `Data Availability`,
                        img: 'imgs/data-availability-005.jpg',
                        id: 1,
                        subtitle: `Our comprehensive knowledge hub covers topic ranging from industry best practices.`
                    },
                    {
                        icon: 'event_available',
                        title: `Events`,
                        img: `imgs/events-1.jpg`,
                        id: 2,
                        subtitle: `Check out our events scheduled over the next few months and sign up for seminars`
                    },
                    {
                        icon: 'date_range',
                        title: `Knowledge Hub`,
                        img: `imgs/knowledge-7.jpeg`,
                        id: 3,
                        subtitle: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet`
                    }
                ],

                hubs: [
                    {
                        icon:  'language',
                        title: `Daily Overview`,
                        id: 1,
                        subtitle: `Our comprehensive knowledge hub covers topic ranging from industry best practices.`,
                        color: 'blue',
                        color_text: 'blue--text'
                    },
                    {
                        icon: 'fiber_new',
                        title: `News`,
                        id: 2,
                        subtitle: `Check out our events scheduled over the next few months and sign up for seminars`,
                        color: 'orange',
                        color_text: 'orange--text'
                    },
                    {
                        icon: 'ring_volume',
                        title: `Communication`,
                        id: 3,
                        subtitle: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet`,
                        color: 'teal',
                        color_text: 'teal--text'
                    }
                ],

                daily_overview: [
                    {
                        title: 'Lorem Ipsum is simply dummy text of the printing',
                        subtitle: 'Lorem Ipsum has been the industry standard dummy text',
                        avatar: 'business',
                        id: 1
                    },
                    {
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                        subtitle: 'Lorem Ipsum has been the industry standard dummy text',
                        avatar: 'personal_video',
                        id: 2
                    },
                    {
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                        subtitle: 'Lorem Ipsum has been the industry standard dummy text',
                        avatar: 'graphic_eq',
                        id: 3
                    }
                ],

                news: [
                    {
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                        subtitle: 'Lorem Ipsum has been the industry',
                        avatar: 'commute',
                        id: 1
                    },
                    {
                        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                        subtitle: 'Lorem Ipsum has been the industry',
                        avatar: 'credit_card',
                        id: 2
                    }
                ],

                communication: [
                    // avatar: 'https://picsum.photos/250/300?image=821'
                    {
                        title: 'Target US Data Status',
                        subtitle: '4/2/2020',
                        value: '',
                        date: '4/2/2020',
                        time: '9:15:07 AM',
                        avatar: 'icons/target.png',
                        icon: 'store',

                    },
                    {
                        title: 'Target Data Status',
                        subtitle: 'More...',
                        value: '',
                        date: '4/2/2020',
                        time: '6:15:15 AM',
                        avatar: 'icons/target.png',
                        icon: 'store'
                    },
                    {
                        title: 'Calimax Data Status',
                        subtitle: 'More...',
                        value: '',
                        date: '4/2/2020',
                        time: '4:05:15 AM',
                        avatar: 'icons/calimax.jpg',
                        icon: 'store'
                    },
                    {
                        title: 'Sams CN SSC Data Status',
                        subtitle: 'More...',
                        value: '',
                        date: '4/2/2020',
                        time: '3:40:15 AM',
                        avatar: 'icons/sams.png',
                        icon: 'store'
                    },
                    {
                        title: 'Wallmart Category CN SSC Data Status -Resolved-',
                        subtitle: 'More...',
                        value: '',
                        date: '4/2/2020',
                        time: '3:10:15 AM',
                        avatar: 'icons/walmart.png',
                        icon: 'store'
                    },
                    // {
                    //     title: 'Wallmart US Data Status -Resolved-',
                    //     subtitle: 'More...',
                    //     value: '',
                    //     date: '4/2/2020',
                    //     time: '2:25:16 AM',
                    //     avatar: 'icons/walmart.png',
                    //     icon: 'store'
                    // }
                ]
            }
        },
        methods: {

            onClickCommunication(item) {
                console.log("onShowCommunicationMoreDialog(item): ", item );
                this.onShowCommunicationMoreDialog(item);
            },

            onShowCommunicationMoreDialog(item) {
                console.clear();
                console.log("onShowCommunicationMoreDialog(item): ", item );
                this.show_more_item = item;
                this.show_more_dlg = true;
            },

            onCloseCommunicationMoreDialog() {
                console.log("onCloseCommunicationMoreDialog()");
                this.show_more_item = null;
                this.show_more_dlg = false;
            },
        }
    }
</script>

<style lang="scss">
    .main-control {
        width: 100% !important;
        height: 100% !important;
        background-color: #F5F5F5;
        //margin-bottom: 60px;

        .carousel-style {
            width: 74%;
            margin: auto ;
            left: 24px;
            top: 36px;

            .center-position {
                width: 90%;
                font-size: 27px;
                text-align: center;
                margin-top: -60px;
            }

            .btn-position {
                text-align: center;
                margin-top: -60px;
            }
        }

        .card-section {
            //text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.6);
            //box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);

            .card-position {
                margin-top: 18px;
                margin-left: 51px;

                .btn-top {
                    position: absolute;
                    top: 18px;
                    right: 9px;
                }

                .icon-style {
                    position: absolute;
                    left: 15px;
                }

                .icon-title {
                    position: absolute;
                    top: 15px;
                    left: 60px;
                }

                .subtitle {
                    font-weight: 400 !important;
                    text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.6);
                    color: white;
                    line-height: normal;
                    margin-left: 9px;
                }

                .app-bar-card {
                    height: 51px !important;

                    .app-bar-card-title {
                        margin-top: -9px !important;
                    }
                    .app-bar-card-icon {
                        margin-top: -9px !important;
                    }
                }

                .divider-line {
                    border-top: 1px solid #EEEEEE;
                    width: 100%;
                }

                .card-title {
                    margin-top: -9px;

                    .icon-position {
                        margin-right: 18px;
                        margin-top: -9px;
                    }

                    .display-1 {
                        font-size: 1.5rem !important;
                        line-height: normal !important;
                    }

                    .icon-right-position {
                        position: absolute;
                        right: 18px;
                        bottom: 72px;
                    }

                    .font-weight-regular {
                        margin-top: -9px !important;
                        font-weight: 300 !important;
                        font-size: 18px !important;
                        line-height: normal;
                        word-break: break-word;
                    }

                    .font-weight-regular_second {
                        margin-top: 6px !important;
                        font-weight: 300 !important;
                        font-size: 18px !important;
                        line-height: normal;
                        word-break: break-word;
                        margin-bottom: -15px;
                    }
                }
            }
        }
    }
</style>