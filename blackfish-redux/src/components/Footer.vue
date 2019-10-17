<template>
  <div class="jumbotron">
        <div class="footer">
          <div class="footleft"><a href="https://www.pexels.com/photo/alaska-animal-breaching-cetacean-289320/">Header Image</a> by <a href="https://pixabay.com/">Pixabay</a></div>
          <div class="footcenter"><router-link to="/top10">Leaderboard</router-link></div>
          <div class="footright"><a href="https://www.flickr.com/photos/88160741@N02/8360602040/">Black Water</a> by <a href="https://www.flickr.com/photos/bob_burning/">Bob Burning</a></div>
          <div class="footcenter" style="padding-top: 50px;">
            <a href="https://commons.wikimedia.org/wiki/File:Cartas_Zener.svg">Zener Cards</a> from <a href="https://commons.wikimedia.org/">Wikimedia Commons</a>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
@font-face {
    font-family: 'Font1';
    src: url('../assets/fonts/Kremlin Kommisar.ttf');
}

.footer {
  font-family: 'Font1';
  line-height: 1px;
  width: 100%;
  color: white;
  text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
}

.footleft {
  text-align: left
}

.footcenter {
  text-align: center
}

.footright {
  text-align: right
}

.jumbotron {
  background-image: url('../assets/images/footerESP.png');
  background-size: fill;
  background-position: top;
  resize: both;
  position:fixed;
  left: 0px;
  bottom: 0px;
  height: 100px;
  width: 100%;
}

a:link {
  color: #d81c1c;
}

a:visited {
  color: #e25d5d;
}

</style>
