<template>
    <div>
        German Bridge Scoreboard
        <!-- {{players}} -->
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Scoreboard extends Vue {
        players = []
        
    }

</script>

<style scoped>

</style>