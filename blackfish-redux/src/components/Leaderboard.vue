<template>
  <div>
      <div id="board-table">
        <h4 class="table-title">Blackfish Top 10</h4>
        <table class="header-table">
          <tr>
            <th class="th1">Name |</th>
            <th class="th1">Score</th>
          </tr>
        </table>
        <table class="table-content">
          <PlayerRow
            v-for="player in tTen" v-bind:key="player.score"
            v-bind:player="player">
          </PlayerRow>
        </table>
      </div>
  </div>
</template>

<script>
  import PlayerRow from '@/components/PlayerRow.vue';

  export default {
    name: 'Leaderboard',
    components: { PlayerRow },
    data() {
      return {
        tTen:[],
        newScore: null
      }
    },
    mounted() {
      var _this = this;
      this.getAll()
    },
    methods: {
      getAll() {  //get all players from Top10s database
        this.$bfService.getAll().then(data => {
          this.tTen = data
        })
      }
    }
  }
</script>

<style>
  #board-table {
    display: table-header-group;

    font-family: 'Font2';
    font-size: 19px;
    color: black;
  }

  .table-content {
    border: 1px solid black;
    font-size: 16px;
    color: white;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }

  .header-table {
  }

</style>
