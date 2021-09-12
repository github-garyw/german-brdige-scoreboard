<template>
<v-app>
    <v-app-bar app color="primary" dark>
        German Bridge Scoreboard
    </v-app-bar>

    <v-main>
        <Scoreboard />
    </v-main>
</v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Scoreboard from "./components/Scoreboard.vue";
import NumberCell from "./components/NumberCell.vue";

export default Vue.extend({
    name: "App",

    components: {
        Scoreboard,
        NumberCell

    },

    data: () => ({
        //
    }),
});
</script>
