<template>
<div>
    <v-btn>-</v-btn>
    <v-btn>+</v-btn>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

const CellProps = Vue.extend({
    props: {
        bid: Number,
        result: Number,
        score: Number,
    }
})

@Component
export default class Cell extends CellProps {
    setBid(bid: number) {
        this.bid = bid;
    }
}
</script>

<style scoped>

</style>
