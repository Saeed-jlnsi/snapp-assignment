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
    onSearchPassengersHandler(searchData) {
      const query = {}
      Object.keys(searchData).forEach(key =>  {
        if(searchData[key]) {
          if(key !== "banned") {
            query[key] = {contains: searchData[key]}
          } else {
            query[key] = searchData[key]
          }
        }
      })
      if(Object.entries(query).length > 0) {
        this.searchPassenger(JSON.stringify(query))
      }
    },
    searchPassenger(query) {
      $PassengerApi.searchPassenger(query)
        .then(response => response.data.items)
          .then(result => {
            this.passengersData = result
          })
    }
  },
  mounted() {
    this.getPassengersData();
  }
}


