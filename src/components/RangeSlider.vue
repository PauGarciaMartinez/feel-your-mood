<!-- TEMPLATE -->
<template>

  <div class="slider-container">
    <label for="mood">
      <slot></slot>
    </label>
    <span id="bubble" class="bubble">{{ bubble }}</span>
    <input 
      type="range" 
      id="mood" 
      name="mood" 
      min="0" 
      max="100" 
      class="slider"
      @input="updateBubble"
      v-model="value">
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/rangeSlider.js"></script>

<!-- STYLE -->
<style src="@/styles/css/range-slider.css"></style>