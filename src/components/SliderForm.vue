<!-- TEMPLATE -->
<template>
  <div>
    <form class="sliders-wrapper" v-for="q in qs" :key="q">
      <RangeSlider @updateValue="q.value = $event">
        <p>{{ q.question }}</p>
      </RangeSlider>
    </form>

    <button 
      type="submit" 
      class="main-btn" 
      @click="sumItUp(), fetchMovie()">
      Find recommendations
    </button>
  </div>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/sliderForm.js"></script>

<!-- STYLE -->
<style src="@/styles/css/slider-form.css"></style>