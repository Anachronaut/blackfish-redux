<template>
    <div class="card add-Top10 m-2 p-2">
        <form>
            <h4 class="card-title">YOU WON!</h4>

            <div class="form-group">
                <label for="initials">Initials (3 letter max.)</label>
                <input id="initials" class="form-control" pattern="[A-Z]{3}" maxlength="3" v-model.trim="newTop10Initials">
            </div>
            <button class="btn btn-primary" v-on:click="addPlayer">Add</button>
        </form>
    </div>
</template>

<script>

  export default {
    name: 'NewTop10Form',
    data() {
      return {
        newPosition: null,
        newTop10Initials: '',
        newScore: null
      }
    },
    mounted() {
      this.$parent.$on('point-update', (newScore) => {          //Receive score data from Canvas.vue
                console.log(newScore);
          this.newScore = newScore;
                console.log(this.newScore);
        })
    },
    methods: {
      addPlayer() {                                             //Emit player object to App.vue to be sent to Top10s database
        let _this = this;
            console.log("formmethod:"+_this.newScore)
        let player = {position: null, initials: this.newTop10Initials, score: _this.newScore}
        _this.$emit('submit-player', player)
            console.log(player)
        }
      }
}
</script>

<style>
  input {
    text-align: center;
}
</style>
