import RangeSlider from "@/components/RangeSlider"

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

      result: '',
      responseAvailable: false,
      apiKey: '426aef7e46msh1efabc60fe00542p157833jsn436bd09d04b2'
    }
  },
  methods: {
    sumItUp() {
      const totalValue = 
      parseInt(this.value1) + 
      parseInt(this.value2) + 
      parseInt(this.value3);

      this.$emit('totalValue', totalValue);
    },
    async fetchAPIData() {
      this.responseAvailable = false;
      try {
        let response = await fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=ni", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": this.apiKey,
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
          }
        })

        if (!response.ok) {
          throw new Error(`HHTP error! status: ${response.status}`);
        }

        this.result = await response.json();
        this.responseAvailable = true;

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