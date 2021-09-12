<template>
<v-container>
    <v-row justify="center">
        German Bridge Scoreboard
    </v-row>

    <v-row justify="center">
        <v-simple-table dark>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th v-for="player in players" :key="player.name" class="text-left">
                            <v-text-field
                            label="Regular"
                            justify="center"
                            placerholder="player.key">
                                {{player.name}}
                            </v-text-field>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="player in players" :key="player.name">
                            {{ player.key }}
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
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
            key: "B",
            name: "BN",
        },
        {
            key: "C",
            name: "CN",
        },
        {
            key: "D",
            name: "DN",
        },
    ];
}
</script>

<style scoped></style>
