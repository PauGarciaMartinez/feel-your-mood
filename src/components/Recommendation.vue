<!-- TEMPLATE -->
<template>

  <header>
    <h3 v-if="moodValue <= 50">{{ a1 }}</h3>
    <h3 v-else-if="moodValue > 50 && moodValue <= 100">{{ a2 }}</h3>
    <h3 v-else-if="moodValue > 100 && moodValue <= 150">{{ a3 }}</h3>
    <h3 v-else-if="moodValue > 150 && moodValue <= 200">{{ a4 }}</h3>
    <h3 v-else-if="moodValue > 200 && moodValue <= 250">{{ a5 }}</h3>
    <h3 v-else-if="moodValue > 250 && moodValue <= 300">{{ a6 }}</h3>
  </header>
  

  <section>
    <article>
      <h4>{{ result.title }}</h4>
      <p>{{ result.year }}</p>
      <p>{{ result.description }}</p>
      <p>{{ result.rating }} </p>
      <p>{{ result.poster }} </p>
    </article>
  </section>
  

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="@/scripts/recommendation.js"></script>

<!-- STYLE -->
<style src="@/styles/css/recommendation.css"></style>