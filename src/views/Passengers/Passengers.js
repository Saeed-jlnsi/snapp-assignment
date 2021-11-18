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
      passengersData: []
    }
  },
  methods: {
    onChangeLimitHandler(perPage) {
      this.getPassengersData(perPage)
    },
    onAddPassengerHanlder(passenger) {
      $PassengerApi.addPassenger(passenger)
        .then(() => this.getPassengersData())
    },
    getPassengersData(limit=10) {
      $PassengerApi.getPassengersList(limit)
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


