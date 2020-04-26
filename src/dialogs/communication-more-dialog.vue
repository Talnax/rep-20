<template>
    <div class="communication-more-dialog">
        <div class="text-center">

            <v-dialog
                    v-model="show_dlg"
                    width="690">

                <v-card>

                    <v-card-title class="headline primary white--text title-card">
                        <v-icon style="margin-right: 15px;">event_note</v-icon>
                        {{this.baseItem.title}}
                        <!--{{this.baseTitle}}-->
                    </v-card-title>

                    <v-card-text><br>
                        Scheduled System Maintenance 4/14/2020,  9:50:17 AM <br><br>

                        <b>Tuesday, April 14, 2020 9:29:40 AM EST</b>
                        Please note that <b>RSi</b> will be conducting routine system maintenance on Thursday, April 23,
                        2020 at 4:00PM EST for 4 hours. <br>
                        <b>RSi</b> application will be available, but FTP will be inaccessible
                        and reports will not be delivered to FTP site while maintenance is being performed for the below:<br><br>

                        If you have any concerns or require access to RSi;s solutions during this scheduled time,
                        please notify immediately so that we can reschedule accordingly. <br><br>

                        <b>Start time:</b> <br>
                        Providence: 23/Apr/2020 04:00 PM EDT  <br>
                        Bentonville: 23/Apr/2020 03:00 PM CDT <br>
                        Mountain View: 23/Apr/2020 01:00 PM PDT <br>
                        Shanghai: 24/Apr/2020 04:00 AM CST <br>
                        Pune: 24/Apr/2020 01:30 AM IST <br>
                        London: 23/Apr/2020 09:00 PM BST <br><br>

                        <b>Duration:</b> 4 hours

                        <br><br>
                        If you have any questions or concerns about the maintenance performed, <br>
                        please submit request or send us a Chat via the <b>Knowledge Hub</b> or email us<br>
                        at <b>support@retailsolutions.com</b> <br><br>

                        We appreciate your patience during tis time.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
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
    export default {
        name: "communication-more-dialog",
        props: ["show_dlg", "item"],
        data() {
            return {}
        },
        computed: {
            baseItem() {
                //let base =
                return this.isObject(this.item ) !== null ? this.item : null;
                //return base;
            },
            // baseTitle() {
            //     //var index = this.baseItem.title.search("Data Status");
            //     return this.baseItem.title;
            // }
        },
        methods: {
            isObject(o) {
                return o !== null && typeof o === 'object' && Array.isArray(o) === false;
            },
            onCloseDlg() {
                this.$emit("onCloseCommunicationMoreDialog");
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

</style>