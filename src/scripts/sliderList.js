import RangeSlider from "@/components/RangeSlider"

export default {
  name: 'SliderList',
  data() {
    return {
      q1: 'Overall, are you living a fulfilling life?',
      q2: 'Do you feel like hanging out with friends?',
      q3: 'Are you doing well in love?'
    }
  },
  components: {
    RangeSlider
  }
}