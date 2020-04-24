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
                    height="240"
                    width="360">
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="getImgUrl(n.img)" >
                        <v-card-title>
                            <b class="timeline-item-title  white-text">K</b>nowledge Hub
                        </v-card-title>
                    </v-img>
                    <!--
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        v-text="n - 1">
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
                        title:  `<b class="white--text">D</b>ata Availability`,
                        img: `imgs/knowledge-7.jpeg`,
                        id: 1
                    },
                    {
                        title: `<b class="white--text">E</b>vents`,
                        img: `imgs/events-1.jpg`,
                        id: 2
                    },
                    {
                        title: `<b class="white--text">K</b>nowledge Hub`,
                        img: `imgs/data-availability-3.jpg`,
                        id: 3
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
                margin-right: 30px;
            }
        }


    }
</style>