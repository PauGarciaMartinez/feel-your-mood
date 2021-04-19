<!-- TEMPLATE -->
<template>

  <form class="sliders-wrapper">
    <RangeSlider @updateValue="value1 = $event">
      <p>{{ q1 }}</p>
    </RangeSlider>

    <RangeSlider>
      <p>{{ q2 }}</p>
    </RangeSlider>

    <RangeSlider>
      <p>{{ q3 }}</p>
    </RangeSlider>
  </form>

  <button type="submit" class="main-btn">Find recommendations</button>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/sliderForm.js"></script>

<!-- STYLE -->
<style src="@/styles/css/slider-form.css"></style>