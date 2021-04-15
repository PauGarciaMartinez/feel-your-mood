<!-- TEMPLATE -->
<template>

  <div class="slider-container">
    <label for="mood">
      <slot></slot>
    </label>
    <input 
      type="range" 
      id="mood" 
      name="mood" 
      min="0" 
      max="100" 
      class="slider" 
      @input="updateBubble"
      v-model="value">
      <div class="legend">
        <i class="far fa-frown"></i>
        <span id="bubble" class="bubble">{{ bubble }}</span>
        <i class="far fa-smile-beam"></i>
      </div>
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/rangeSlider.js"></script>

<!-- STYLE -->
<style src="@/styles/css/range-slider.css"></style>