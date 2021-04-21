<!-- TEMPLATE -->
<template>

  <form class="sliders-wrapper" v-for="q in qs">
    <RangeSlider @updateValue="q.value = $event">
      <p>{{ q.question }}</p>
    </RangeSlider>
  </form>

  <button 
    type="submit" 
    class="main-btn" 
    @click="sumItUp(), fetchAPIData()">
    Find recommendations
  </button>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/sliderForm.js"></script>

<!-- STYLE -->
<style src="@/styles/css/slider-form.css"></style>