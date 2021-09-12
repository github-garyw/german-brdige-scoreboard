<template>
<v-container>
<v-row justify="center">
    German Bridge Scoreboard
</v-row>
<v-row justify="center>
    <!-- {{players}} -->
    <md-table>
        <md-table-row v-for="player in players" v-bind:key="player.key">
            {{ player.name }}
        </md-table-row>
    </md-table>
</v-row>
</v-container>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";

@Component
export default class Scoreboard extends Vue {
    players = [{
            key: "A",
            name: "AN",
        },
        {
            key: "C",
            name: "CN",
        },
    ];
}
</script>

<style scoped></style>
