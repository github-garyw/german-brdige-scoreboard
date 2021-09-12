<template>
<div>
    <v-btn @click="dec">-</v-btn>
    {{value}}
    <v-btn @click="inc">+</v-btn>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

const NumberCellProps = Vue.extend({
    props: {
        value: Number,
    }
})

@Component
export default class NumberCell extends NumberCellProps {
    name = "NumberCell";

    setValue(value: number) {
        this.value = value;
    }
    inc() {
        this.value++;
    }
    dec() {
        this.value--;
    }
}
</script>

<style scoped>

</style>
