<template>
<div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component
export default class Cell extends Vue {
    data() {
        return {
            bid : 0,
            result : 0,
            score : 0,
        }
    }
    created() {

    }

}
</script>

<style scoped>

</style>
