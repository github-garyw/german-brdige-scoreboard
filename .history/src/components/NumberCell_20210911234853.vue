<template>
<div>
    <div @click="dec">-</div>
    {{value}}
    <div @click="inc">+</div>
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

@Component({
    name: 'NumberCell'
})
export default class NumberCell extends NumberCellProps {

    value = 0;

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
