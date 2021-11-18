import PassengersTableComponent from "@/components/passengersTableComponent/index.vue"
import SearchPassengersComponent from "@/components/searchPassengersComponent/index.vue"

import $PassengerApi from "@/services/api/passenger"

export default {
  name: 'Passengers',

  components: {
    PassengersTableComponent,
    SearchPassengersComponent
  },
  data() {
    return {
      passengersData: [],
      limitData: 10,
    }
  },
  watch: {
    "$route.query": {
      deep: true,
      immediate: true,
      handler(newVal) {
        if(Object.entries(newVal).length > 0) {
          this.searchPassenger();
        } else {
          this.getPassengersData()
        }
      }
    }
  },
  methods: {
    onChangeLimitHandler(perPage) {
      this.limitData = perPage
      this.getPassengersData(this.limitData)
    },
    onAddPassengerHanlder(passenger) {
      $PassengerApi.addPassenger(passenger)
        .then(() => this.getPassengersData())
    },
    getPassengersData() {
      $PassengerApi.getPassengersList(this.limitData)
        .then(response => response.data.items)
        .then(result => {
          this.passengersData = result
        })
    },
    searchPassenger() {
      const query = {}
      Object.keys(this.$route.query).forEach(key =>  {
        if(key !== "banned") {
          query[key] = {contains: this.$route.query[key]}
        } else {
          query[key] = JSON.parse(this.$route.query[key])
        }
      })
      console.log(query)
      $PassengerApi.searchPassenger(JSON.stringify(query))
        .then(response => response.data.items)
          .then(result => {
            if(result.length === 1) {
              this.$router.replace(`/passenger/${result[0].id}`)
            } else {
              this.passengersData = result
            }
          })
    }
  },
}


