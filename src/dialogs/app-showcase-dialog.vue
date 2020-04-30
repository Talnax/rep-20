<template>
    <div class="communication-more-dialog">
        <div class="text-center">

            <v-dialog v-model="show_dlg" width="810">

                <v-card>

                    <v-card-title class="headline teal white--text title-card">
                        <v-icon style="margin-right: 15px;">event_note</v-icon>
                        {{this.baseValue.heading}}
                    </v-card-title>

                    <v-card-text>
                        <br>
                        <div class="showcase-subtitle">
                            <b>{{this.baseValue.when}}</b>
                        </div>
                        <br>
                        <div class="showcase-explanation">
                            {{this.baseValue.explanation_1}} <br>
                            {{this.baseValue.explanation_2}} <br>
                        </div>
                        <br>
                        <v-img
                            class="white--text align-end"
                            height="420px"
                            :src="getImgUrl('bk/rsi-aris.png')">
                        </v-img>


                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="black"
                            text
                            @click="onCloseDlg">
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-dialog>

        </div>
    </div>
</template>

<script>
    import loadImageMixin from "@/mixins/loadImageMixin";

    export default {
        name: "app-showcase-dialog",
        mixins: [loadImageMixin],
        props: ["show_dlg", "values_dlg"],
        data() {
            return {

            }
        },
        computed: {
            baseValue() {
                return this.isObject(this.values_dlg ) !== null ? this.values_dlg : null;
            }
        },
        methods: {
            isObject(o) {
                return o !== null && typeof o === 'object' && Array.isArray(o) === false;
            },
            onCloseDlg() {
                //console.log('this.values_dlg: ', this.values_dlg);
                //console.log('call onCloseShowcaseDialog');
                this.$emit("onCloseShowcaseDialog");
            }
        }
    }
</script>

<style lang="scss">
    .communication-more-dialog {}

    .title-card {
        font-weight: 300 !important;
    }

    .v-application .headline {
        font-size: 1.2rem !important;
    }

    .showcase-subtitle {
        font-size: 18px !important;
        margin: auto;
        text-align: center;
    }

    .showcase-explanation {
        font-size: 18px;
        text-align: center;
    }

</style>