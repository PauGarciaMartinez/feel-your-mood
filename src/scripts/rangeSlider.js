export default {
  data() {
    return {

    }
  },
  mounted() {
    const range = document.getElementById('mood');
    const bubble = document.getElementById('bubble');
    
    range.addEventListener('input', e => {
      bubble.innerHTML = range.value;
    });
    
    function setBubble(range, bubble) {
      const val = range.value;
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 100;
      const newVal = Number(((val - min) * 100) / (max - min));
      bubble.innerHTML = val;
    
      // Sorta magic numbers based on size of the native UI thumb
      bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }

    range.addEventListener('input', e => {
      setBubble(range, bubble);
    });
  }
}







