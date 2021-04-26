import SliderForm from "@/components/SliderForm";
import Recommendation from "@/components/Recommendation";
import Loader from "@/components/Loader";

export default {
  name: 'Home',
  data() {
    return {
      mood: null,
      result: {},
      load: false
    }
  },
  components: {
    SliderForm,
    Recommendation,
    Loader
  }
}