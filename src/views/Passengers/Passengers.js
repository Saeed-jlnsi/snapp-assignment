import PassengersTableComponent from "@/components/passengersTableComponent/index.vue"
import SearchPassengersComponent from "@/components/searchPassengersComponent/index.vue"

import $PassengerApi from "../../services/api/passenger"

export default {
  name: 'Passengers',

  components: {
    PassengersTableComponent,
    SearchPassengersComponent
  },
  mounted() {
      $PassengerApi.getPassengersList(10).then(response => console.log(response))
  }
}


