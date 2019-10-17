<template>
  <div id="app">
    <Header/>
    <br style="line-height:50px;">
    <RouterView align="center"></RouterView>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Canvas from './components/Canvas.vue'
import Leaderboard from './components/Leaderboard.vue'

export default {
  name: 'app',
  data: function() {
    return {
      newScore: null
    }
  },
  mounted() {
    let _this = this;

    this.$on('point-change', (newScore) => {          //Receives score data from Canvas.vue
            console.log("import:"+newScore);
      this.newScore = newScore;
            console.log("imported:"+_this.newScore);
      _this.$emit('point-update', _this.newScore);    //Sends score data received from Canvas.vue to NewTop10Form.vue
    });

    this.$on('submit-player', (player) => {           //NOT WORKING(?): Receive player stats from Canvas.vue
            console.log(_this.player);                //Bugs before log prevents from checking if functioning
      _this.$emit('submit-player', _this.player);     //NOT WORKING: Send player stats from Canvas.vue
    })
  },
  components: {
    Header, Footer, Canvas, Leaderboard
  },
  methods: {
    newPlayerAdded(player) { //NOT WORKING: Send player stats to Top10s database
      this.$bfService.addPlayer(player).then( player => {
        this.updatePlayers()
      })
    },
    playerDeleted(player) { //NOT WORKING: Delete player object from Top10s database
      this.$bfService.deletePlayer(player.id).then( () => {
        this.updatePlayers()
      })
    },
    updatePlayers() {       //NOT WORKING: Update player object in Top10s database
      this.$bfService.getAll().then( players => {
        this.players = players
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
