import SliderForm from "@/components/SliderForm";
import Recommendation from "@/components/Recommendation";

export default {
  name: 'Home',
  data() {
    return {
      mood: null,
      result: {}
    }
  },
  components: {
    SliderForm,
    Recommendation
  }
}