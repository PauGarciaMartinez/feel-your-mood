<!-- TEMPLATE -->
<template>

  <form @submit="sumItUp" class="sliders-wrapper">
    <RangeSlider @updateValue="value1 = $event">
      <p>{{ q1 }}</p>
    </RangeSlider>

    <RangeSlider @updateValue="value2 = $event">
      <p>{{ q2 }}</p>
    </RangeSlider>

    <RangeSlider @updateValue="value3 = $event">
      <p>{{ q3 }}</p>
    </RangeSlider>
  </form>

  <button type="submit" class="main-btn">Find recommendations</button>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/sliderForm.js"></script>

<!-- STYLE -->
<style src="@/styles/css/slider-form.css"></style>