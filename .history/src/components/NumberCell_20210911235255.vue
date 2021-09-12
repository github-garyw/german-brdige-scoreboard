<template>
<div>
    <span @click="dec"> - </span>
    {{value}}
    <span @click="inc"> + </span>
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
        editing: Boolean,
    }
})

@Component({
    name: 'NumberCell'
})
export default class NumberCell extends NumberCellProps {

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
