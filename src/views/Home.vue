<!-- TEMPLATE -->
<template>
  <h1 class="title">Feel your mood</h1>
  <SliderForm v-if="!result.title"
    @totalValue="mood = $event" 
    @result="result = $event" 
  />
  <Recommendation v-if="result.title"
    :moodValue="mood"
    :result="result" 
  />
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/home.js"></script>

<!-- STYLE -->
<style src="@/styles/css/home.css"></style>
