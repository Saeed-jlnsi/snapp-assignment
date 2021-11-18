import $PassengerApi from "@/services/api/passenger"

export default {
  name: 'Passengers',
  data() {
    return {
      passenger: {},
      dialogDelete: false
    }
  },
  components: {
  },
  methods: {
    getSinglePassenger() {
      const passengerId = this.$route.params.id
      $PassengerApi.getPassenger(passengerId)
        .then(response => {
          this.passenger = response.data
        })
    },
    onDeletePassenger() {
      this.dialogDelete = true;
    },
    deletePassenger() {
      const passengerId = this.$route.params.id
      $PassengerApi.deletePassenger(passengerId)
        .then(() => {
          this.$router.replace("/passengers")
        })
    },
    closeDelete () {
      this.dialogDelete = false
    },
  },
  mounted() {
    this.getSinglePassenger()
  },
}


