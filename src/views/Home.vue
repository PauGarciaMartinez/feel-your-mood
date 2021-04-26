<!-- TEMPLATE -->
<template>

  <h1 class="title">Feel your mood</h1>
  
  <transition name="fade" mode="out-in">
    <SliderForm v-if="!load && !result.title"
      @totalValue="mood = $event" 
      @result="result = $event"
      @load="load = $event" 
    />
  </transition>

  <transition name="fade" mode="out-in">
    <Loader v-if="load && !result.title" />
  </transition>
  
  <transition name="fade" mode="out-in">
    <Recommendation v-if="result.title"
      :moodValue="mood"
      :result="result"
      @load="load = $event" 
    />
  </transition>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/home.js"></script>

<!-- STYLE -->
<style src="@/styles/css/home.css"></style>
