import RangeSlider from "@/components/RangeSlider";
import APIKeys from "@/keys.js";

export default {
  name: 'SliderList',
  emits: ['totalValue', 'result'],
  data() {
    return {
      qs: [
        { question: 'So, how are you feeling today?', value: 50 },
        { question: 'Do you feel like hanging out with friends?', value: 50 },
        { question: 'Overall, are you living a fulfilling life?', value: 50 }
      ],

      totalValue: null,
      result: '',
    }
  },
  methods: {
    sumItUp() {
      this.totalValue = this.qs.reduce((v, {value}) => v + parseInt(value), 0);
      this.$emit('totalValue', this.totalValue);
    },
    async fetchMovie() {
      let genre;
      if (this.totalValue <= 50) {
        genre = ['tt0034583', 'tt0112579', 'tt0102492', 'tt0120338'];
      } else if (this.totalValue > 50 && this.totalValue <= 100) {
        genre = [];
      } else if (this.totalValue > 100 && this.totalValue <= 150) {
        genre = [];
      } else if (this.totalValue > 150 && this.totalValue <= 200) {
        genre = [];
      } else if (this.totalValue > 200 && this.totalValue <= 250) {
        genre = [];
      } else if (this.totalValue > 250 && this.totalValue <= 300) {
        genre = [];
      }
        
      const randomGenre = genre[Math.floor(Math.random() * genre.length)];
     
      try {
        let response = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-similar-movies&imdb=${randomGenre}&page=1`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": this.imdbAPIKey,
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
          }
        })

        if (!response.ok) {
          throw new Error(`HHTP error! status: ${response.status}`);
        }

        this.result = await response.json();

        this.$emit('result', this.result);

      } catch(e) {
        console.log(e)
      }
    }
  },
  components: {
    RangeSlider
  }
}