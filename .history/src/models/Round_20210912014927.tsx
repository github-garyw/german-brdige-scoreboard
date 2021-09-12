class Round {
    round: number;
    bids: number[];
    results: number[];
    cumScores: number[];

    constructor(round: number) {
        this.round = round;
        this.bids = [0, 0, 0, 0];
        this.results = [0, 0, 0, 0];
        this.cumScores = [0, 0, 0, 0];
    }

    calculateScores(lastScores: number[]) {
        this.cumScores = lastScores;
        for (let i = 0; i < this.bids.length; i++) {
            const bid = this.bids[i];
            const result = this.results[i];
            if (bid == result) {
                // Win
                const score = bid * bid + 10;
                this.cumScores[i] += score;
            } else {
                // Lose
                const diff = bid - result;
                const score = diff * diff;
                this.cumScores[i] -= score;
            }
        }
    }

}

export default Round;