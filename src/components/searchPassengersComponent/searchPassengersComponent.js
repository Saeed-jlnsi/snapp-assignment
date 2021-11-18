
export default {
  name: 'search-passengers-component',
  components: {},
  props: [],
  data () {
    return {
      panel: 0
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onSwitchFilter(status) {
      this.$emit('onFilterPassengers', status)
    }
  }
}


