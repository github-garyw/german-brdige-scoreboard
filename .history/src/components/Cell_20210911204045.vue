<template>
<div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

const CellProps = Vue.extend({
    props: {
        bid: number
        result: number
        score: number
    }
})

@Component
export default class Cell extends CellProps {
    
    created() {

    }
}
</script>

<style scoped>

</style>
