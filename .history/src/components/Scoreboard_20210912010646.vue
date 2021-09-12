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
                        <th v-for="player in players" :key="player.key" class="text-left">
                            <v-text-field :label=player.title class="centered-input" :value=player.name />
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
                        <td v-for="player in players" :key="player.key">
                            <span>
                                <NumberCell :value.sync=currentRound.bids[player.key] :editing=isBidding(round.round)></NumberCell>
                                <span v-show=!isBidding(round.round)>/</span>
                                <NumberCell v-show=!isBidding(round.round) :value.sync=currentRound.results[player.key] :editing=isGameStart(round.round)></NumberCell>
                                <span v-show=!isCurrentRoundIdx(round.round)>/</span>
                                <NumberCell v-show=!isCurrentRoundIdx(round.round) :value.sync=currentRound.scores[player.key] :editing=false></NumberCell>
                            </span>
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
import NumberCell from "./NumberCell.vue";

enum Step {
    SetName,
    Bid,
    GameStart
}

@Component({
    name: 'Scoreboard',
    components: {
        NumberCell
    }
})
export default class Scoreboard extends Vue {
    step = Step.SetName;
    currentRoundIdx = 0;
    currentRound: Round | null = null;
    rounds: Round[] = [];
    players = [{
            key: 0,
            title: "Player 1",
            name: "",
            bid: 0,
            result: 0,
            score: 0,
        },
        {
            key: 1,
            title: "Player 2",
            name: "",
            bid: 0,
            result: 0,
            score: 0,
        },
        {
            key: 2,
            title: "Player 3",
            name: "",
            bid: 0,
            result: 0,
            score: 0,
        },
        {
            key: 3,
            title: "Player 4",
            name: "",
            bid: 0,
            result: 0,
            score: 0,
        },
    ];
    totalScores = [];

    nextRound() {

        for (let index in this.players) {
            this.players[index].bid = 0;
            this.players[index].bid = 0;
        }

        this.currentRound = new Round(++this.currentRoundIdx);
        this.rounds.push(this.currentRound);
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

    isCurrentRoundIdx(round: number) {
        return this.currentRoundIdx == round;
    }

    isSetNameStep() {
        return this.step === Step.SetName;
    }

    isBidding(round: number) {
        return this.currentRoundIdx == round && this.step === Step.Bid;
    }

    isGameStart(round: number) {
        return this.currentRoundIdx == round && this.step === Step.GameStart;
    }

}
</script>

<style scoped>
.centered-input>>>input {
    text-align: center
}
</style>
