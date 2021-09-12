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
                            <v-text-field :label=player.key class="centered-input" v-bind=player.name>
                                {{player.name}}
                            </v-text-field>
                        </th>
                        <th>
                            <template v-if="isSetNameStep() === true">
                                <v-btn color="primary" @click="onNameSet">
                                    Set
                                </v-btn>
                            </template>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="round in rounds" :key="round.round">
                        <td>
                            {{ round.round }}
                        </td>
                        <td v-for="player in players" :key="player.name">
                            {{ player.key }}
                        </td>
                        <td>
                            <template v-if="isBidding(round.round) === true">
                                <v-btn color="primary" @click="onBid">
                                    Bid
                                </v-btn>
                            </template>
                            <template v-if="isGameStart(round.round) === true">
                                <v-btn color="primary" @click="onGameDone">
                                    Next
                                </v-btn>
                            </template>
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
import Round from "../models/Round";

enum Step {
    SetName,
    Bid,
    GameStart
}

@Component
export default class Scoreboard extends Vue {

    step = Step.SetName;
    currentRound = 0;
    rounds: Round[] = [];
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
    totalScores = [];

    nextRound() {
        let round = new Round(++this.currentRound);
        this.rounds.push(round);
    }

    onNameSet() {
        console.log(`onNameSet`);
        this.step = Step.Bid;
        this.nextRound();
    }

    onBid() {
        console.log(`onBid`);
        this.step = Step.GameStart;
    }

    onGameDone() {
        console.log(`onGameDone`);
        this.nextRound();
        this.step = Step.Bid;
    }

    isSetNameStep() {
        return this.step === Step.SetName;
    }

    isBidding(round: number) {
        return this.currentRound == round && this.step === Step.Bid;
    }

    isGameStart(round: number) {
        return this.currentRound == round && this.step === Step.GameStart;
    }

}
</script>

<style scoped>
.centered-input>>>input {
    text-align: center
}
</style>
