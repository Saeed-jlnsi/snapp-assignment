
export default {
  name: 'search-passengers-component',
  components: {},
  data () {
    return {
      panel: 0,
      searchData: {
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
      let query = []
      for(let key in this.searchData) {
        if(this.searchData[key]) {
          query[key] = this.searchData[key]
        }
      }
      if(Object.entries(query).length > 0) {
        this.$router.replace({path:"/passengers", query:query})
      }
    },
    onResetSearch() {
      this.searchData = Object.assign({}, {
        first_name: "",
        last_name: "",
        email: "",
        banned: false
      })
      if(Object.entries(this.$route.query).length > 0) {
        this.$router.replace("/passengers")
      }
    }
  }
}


