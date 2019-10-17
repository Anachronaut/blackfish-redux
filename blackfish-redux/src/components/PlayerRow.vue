<template>
  <div>
      <tr class="player-row">
        <th class="th2">{{ player.initials }}</th>
        <th class="th2">{{ player.score }}</th>
      </tr>
  </div>
</template>

<script>
export default {
  name: 'PlayerRow',
  props: {
    player: Object,
  }
}
</script>

<style>

.th2 {
  width: 50px;
  text-align: center;
}
</style>
