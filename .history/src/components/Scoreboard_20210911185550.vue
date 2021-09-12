<template>
<v-container>
    <v-row justify="center">
        German Bridge Scoreboard
    </v-row>

    <v-row justify="center">
        <v-simple-table dark>
            <template v-slot:default>
                <thead>
                    <tr v-for="player in players" :key="player.name">
                        <th class="text-center">
                            {{player.name}}
                        </th>
                    </tr>
                    <!-- <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Calories
                        </th>
                    </tr> -->
                </thead>
                <tbody>
                    <tr v-for="player in players" :key="player.name">
                        <td>{{ player.name }}</td>
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
    desserts = [{
            name: 'Frozen Yogurt',
            calories: 159,
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
        }
    ];
}
</script>

<style scoped></style>
