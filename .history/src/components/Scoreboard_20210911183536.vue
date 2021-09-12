<template>
<div>
    German Bridge Scoreboard
    <!-- {{players}} -->
    <md-table>
        <md-table-row v-for="player in players" v-bind:key="player.key">
            {{players.name}}
        </md-table-row>
    </md-table>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component
export default class Scoreboard extends Vue {
    players = [{
        key: "A",
        name: 'AN'
    }, {
        key: "C",
        name: 'CN'
    }]

}
</script>

<style scoped>

</style>
