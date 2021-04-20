<!-- TEMPLATE -->
<template>

  <h3 v-if="moodValue <= 50">Hey... things are gonna be fine!</h3>
  <h3 v-else-if="moodValue > 50 && moodValue <= 100">C'mon, it's not a great day... but you're alright!</h3>
  <h3 v-else-if="moodValue > 100 && moodValue <= 150">Well... that's pretty good, actually</h3>
  <h3 v-else-if="moodValue > 150 && moodValue <= 200">Well... that's pretty good, actually</h3>
  <h3 v-else-if="moodValue > 200 && moodValue <= 250">Ouuu yeah! Let's eat the world today!</h3>
  <h3 v-else-if="moodValue > 250 && moodValue <= 300">You're overpowered!!! Ecstasy ON!</h3>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/recommendation.js"></script>

<!-- STYLE -->
<style src="@/styles/css/recommendation.css"></style>