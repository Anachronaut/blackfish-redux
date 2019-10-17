<template>
  <div class="jumbotron">
    <div class="titles">
      <h1 class="display-4"><div class="title">BLACKFISH</div></h1>
      <br style="line-height:8px;">
      <h1 class="display-4"><div class="subtitle">PROJECT OMEGA</div></h1><br>
      <br style="line-height:50px;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @font-face {
      font-family: 'Font1';
      src: url('../assets/fonts/Boo City.ttf');
  }

  @font-face {
      font-family: 'Font2';
      src: url('../assets/fonts/Kremlin Kommisar.ttf');
  }

  .titles {
  line-height: 1px;
  text-align: center;
  }

  .title {
    font-family: 'Font2';
    font-size: 72px;
    color: black;
    text-shadow:
		-1px -1px 0 #fff,
		1px -1px 0 #fff,
		-1px 1px 0 #fff,
		1px 1px 0 #fff;
  }

  .jumbotron {
    background-image: url('../assets/images/headerOrca.jpeg');
    background-size: cover;
    background-position: 50% 50%;
    height:100px;
  }

  .subtitle {
  font-family: 'Font1';
  font-size: 32px;
  color: white;
  text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
}
</style>
