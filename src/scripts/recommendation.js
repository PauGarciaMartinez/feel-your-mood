export default {
  name: 'Recommendation',
  props: ['moodValue', 'result'],
  data() {
    return {
      a1: 'Hey... things are gonna be fine!',
      a2: "C'mon, it's not a great day... but you're alright!",
      a3: "Well... that's pretty good, actually",
      a4: "That's it, chillin' and vibin'... keep going!",
      a5: "Ouuu yeah! Let's eat the world today",
      a6: "You're overpowered!!! Ecstasy ON!",

      intro: "It's time to embrace your feelings. According to your mood, we recommend you to watch this movie:" 
    }
  },
  methods: {
    goBack() {
      this.result.title = "";
    }
  }
}