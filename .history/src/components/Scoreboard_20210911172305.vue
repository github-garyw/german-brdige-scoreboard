<template>
    <div>
        German Bridge Scoreboard
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Scoreboard extends Vue {
        data() {
            players: []
        }
    }

</script>

<style scoped>

</style>