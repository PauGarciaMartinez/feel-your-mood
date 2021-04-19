import RangeSlider from "@/components/RangeSlider"

export default {
  name: 'SliderList',
  emits: ['totalValue'],
  data() {
    return {
      q1: 'So, how are you feeling today?',
      q2: 'Do you feel like hanging out with friends?',
      q3: 'Overall, are you living a fulfilling life?',

      value1: 50,
      value2: 50,
      value3: 50,
    }
  },
  methods: {
    sumItUp() {
      const totalValue = 
      parseInt(this.value1) + 
      parseInt(this.value2) + 
      parseInt(this.value3);

      this.$emit('totalValue', totalValue);
    }
  },
  components: {
    RangeSlider
  }
}