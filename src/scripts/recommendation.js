export default {
  name: 'Recommendation',
  props: ['moodValue'],
  data() {
    return {
      result: '',
      responseAvailable: false,
      apiKey: '426aef7e46msh1efabc60fe00542p157833jsn436bd09d04b2'
    }
  },
  methods: {
    fetchAPIData() {
      this.responseAvailable = false;

      fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=matrix", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": this.apiKey,
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
      })
      .then(response => { 
          if(response.ok){
              return response.json()    
          } else{
              alert("Server returned " + response.status + " : " + response.statusText);
          }                
      })
      .then(response => {
          this.result = response.body; 
          this.responseAvailable = true;
      })
      .catch(err => {
          console.log(err);
      });
    }
  }
}