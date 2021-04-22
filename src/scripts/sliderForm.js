import RangeSlider from "@/components/RangeSlider";

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
      resultDetails: '',
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
            "x-rapidapi-key": process.env.VUE_APP_IMDB_API_KEY,
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
          }
        })

        if (!response.ok) {
          throw new Error(`HHTP error! status: ${response.status}`);
        }

        let allResults = await response.json();
        let allIds = allResults.movie_results.map(movie => movie.imdb_id);
        let similarPick = allIds[Math.floor(Math.random() * allIds.length)];

        try {
          let moviePick = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${similarPick}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": process.env.VUE_APP_IMDB_API_KEY,
              "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
            }
          })

          if (!moviePick.ok) {
            throw new Error(`HHTP error! status: ${moviePick.status}`);
          }

          let movieDetails = await moviePick.json();
          this.resultDetails = movieDetails;

        } catch(e) {
          console.log(e);
        }

        try {
          let imagePick = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${similarPick}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": process.env.VUE_APP_IMDB_API_KEY,
              "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
            }
          })

          if (!imagePick.ok) {
            throw new Error(`HHTP error! status: ${moviePick.status}`);
          }

          let movieImage = await imagePick.json();
          this.resultDetails.poster = movieImage.poster;

        } catch(e) {
          console.log(e);
        }

      } catch(e) {
        console.log(e)
      }

      this.$emit('result', this.resultDetails);
    }
  },
  components: {
    RangeSlider
  }
}