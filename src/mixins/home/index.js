
export default {
  beforeCreate() {
    console.log('mixin beforeCreate');
  },
  created() {
    console.log('mixin created');
  },
  beforeMount() {
    console.log('mixin beforeMount');
  },
  mounted() {
    console.log('mixin mounted');
  },
}