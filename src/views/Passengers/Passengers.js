import PassengersTableComponent from "@/components/passengersTableComponent/index.vue"
import SearchPassengersComponent from "@/components/searchPassengersComponent/index.vue"

import $PassengerApi from "../../services/api/passenger"

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
    getPassengersData() {
      $PassengerApi.getPassengersList(10)
        .then(response => response.data.items)
        .then(passengers => {
          this.passengersData = passengers
        })
    }
  },
  mounted() {
    this.getPassengersData();  
  }
}


