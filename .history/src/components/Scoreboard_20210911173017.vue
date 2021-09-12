<template>
    <div>
        German Bridge Scoreboard
        <!-- {{players}} -->
        <md-table>
        <md-table-row v-for="book in books" v-bind:key="book.key">

        </md-table-row>
        </md-table>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Scoreboard extends Vue {
        players = [{key:"A"}, {key:"C"}]
        
    }

</script>

<style scoped>

</style>