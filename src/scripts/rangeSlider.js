export default {
  emits: ['updateValue'],
  data() {
    return {
      bubble: 50,
      value: 50
    }
  },
  methods: {
    updateBubble() {
      this.bubble = this.value;
      this.$emit('updateValue', this.value);
    }
  }
}







