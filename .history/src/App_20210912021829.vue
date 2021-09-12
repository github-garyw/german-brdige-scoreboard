<template>
<v-app>
    <v-app-bar app dark>
        German Bridge Scoreboard
    </v-app-bar>

    <v-main dark>
        <Scoreboard />
    </v-main>
</v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Scoreboard from "./components/Scoreboard.vue";

export default Vue.extend({
    name: "App",

    components: {
        Scoreboard,
    },

    data: () => ({
        //
    }),
});
</script>
