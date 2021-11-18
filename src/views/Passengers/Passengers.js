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
    onFilterPassengersHandler(filterStatus) {
      if(filterStatus) {
        this.passengersData = this.passengersData.filter(passenger => passenger.banned)
      } else {
        this.getPassengersData()
      }
    },
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
  },
  mounted() {
    this.getPassengersData();
  }
}


