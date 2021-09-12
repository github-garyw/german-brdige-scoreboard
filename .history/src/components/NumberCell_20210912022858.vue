<template>
<span>
    <p v-if="editing" @click="dec"> - </p>
    {{value}}
    <p v-if="editing" @click="inc"> + </p>
</span>
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
        limit: Number,
    }
})

@Component({
    name: 'NumberCell'
})
export default class NumberCell extends NumberCellProps {

    onCreate() {
        this.editing = false;
    }
    setValue(value: number) {
        this.value = value;
    }
    inc() {
        if (this.value == this.limit) {
            return;
        }
        this.value++;
        this.$emit('update:value', this.value);
    }
    dec() {
        if (this.value == 0) {
            return;
        }
        this.value--;
        this.$emit('update:value', this.value);
    }
}
</script>

<style scoped>

</style>
