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
                        <th>
                            Round
                        </th>
                        <th v-for="player in players" :key="player.name" class="text-left">
                            <v-text-field :label=player.key class="centered-input">
                                {{player.name}}
                            </v-text-field>
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {{round}}
                        </td>
                        <td v-for="player in players" :key="player.name">
                            {{ player.key }}
                        </td>
                        <td>
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
    round = 1;
    players = [{
            key: "Player 1",
            name: "AN",
        },
        {
            key: "Player 2",
            name: "BN",
        },
        {
            key: "Player 3",
            name: "CN",
        },
        {
            key: "Player 4",
            name: "DN",
        },
    ];
}
</script>

<style scoped>
.centered-input>>>input {
    text-align: center
}
</style>
