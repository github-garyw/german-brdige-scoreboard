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
                        <th v-for="player in players" :key="player.key" class="text-left highlight">
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
                            {{ round.round + 1}}
                        </td>
                        <td v-for="player in players" :key="player.key">
                            <span>
                                <NumberCell :value.sync=rounds[round.round].bids[player.key] :editing=isBidding(round.round) :limit=roundLimit></NumberCell>

                                <span v-show=!isBidding(round.round)>/</span>

                                <NumberCell v-show=!isBidding(round.round) :value.sync=rounds[round.round].results[player.key] :limit=roundLimit :editing=isGameStart(round.round)></NumberCell>

                                <span v-show=!isCurrentRoundIdx(round.round)>/</span>

                                <NumberCell v-show=!isCurrentRoundIdx(round.round) :value.sync=rounds[round.round].cumScores[player.key] :limit=roundLimit :editing=false></NumberCell>
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
    // currentRound: Round | null = null;
    rounds: Round[] = [];
    roundLimit = 0;
    players = [{
            key: 0,
            title: "Player 1",
            name: "",
        },
        {
            key: 1,
            title: "Player 2",
            name: "",
        },
        {
            key: 2,
            title: "Player 3",
            name: "",
        },
        {
            key: 3,
            title: "Player 4",
            name: "",
        },
    ];

    nextRound() {
        let round = new Round(this.currentRoundIdx);
        let avg = Math.round((this.currentRoundIdx + 1) / 4);
        round.bids = [avg, avg, avg, avg];
        this.rounds.push(round);
        this.roundLimit = Math.min(this.currentRoundIdx + 1, 13);
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
        this.calcuateScores();

        this.currentRoundIdx++;
        this.nextRound();
        this.step = Step.Bid;
    }

    calcuateScores() {
        let currentRound = this.rounds[this.currentRoundIdx];
        let lastRoundScores = (this.currentRoundIdx == 0) ? [0, 0, 0, 0] : this.rounds[this.currentRoundIdx - 1].cumScores;
        currentRound.calculateScores(lastRoundScores);
    }

    isCurrentRoundIdx(round: number) {
        return this.currentRoundIdx == round;
    }

    isSetNameStep() {
        return this.step === Step.SetName;
    }

    isBidding(round: number) {
        return this.isCurrentRoundIdx(round) && this.step === Step.Bid;
    }

    isGameStart(round: number) {
        return this.isCurrentRoundIdx(round) && this.step === Step.GameStart;
    }

}
</script>

<style scoped>

.centered-input>>>input {
    text-align: center
}

.highlight {
    background: "ffffff";
}

</style>
