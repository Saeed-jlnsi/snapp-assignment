
export default {
  name: 'search-passengers-component',
  components: {},
  data () {
    return {
      panel: 0,
      searchObject: {
        first_name: "",
        last_name: "",
        email: "",
        banned: false
      },
      items: [
        {label: 'First Name', key: 'first_name'}, 
        {label: 'Last Name', key: 'last_name'}, 
        {label: 'Email', key: 'email'}
      ],
      searchType: {label: 'Email', key: 'email'}
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onSearch() {
      this.$emit('onSearchPassengers', this.searchObject)
    }
  }
}


