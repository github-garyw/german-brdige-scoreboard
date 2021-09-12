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

    calculateScores(lastScores: number[]){
        console.log(`calculateScores ${lastScores}`);
        console.log(`calculateScores ${this.bids}`);
        for (let i in this.bids) {
            console.log(i);
        }
        // for(let i in this.bids) {
        //     let bid = this.bids[i];
        //     let result = this.results[i];

        //     if (bid == result) {
        //         // Win
        //         let score = bid * bid + 10;
        //         this.cumScores[i] += score;
        //     } else {
        //         let diff = bid - result;
        //         let score = diff * diff;
        //         this.cumScores[i] -= score;
        //     }
        // }
    }

}

export default Round;