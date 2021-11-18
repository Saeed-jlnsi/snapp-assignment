import $PassengerApi from "@/services/api/passenger"

export default {
  name: 'Passengers',
  data() {
    return {
      passengerData: {},
      dialogDelete: false,
      isEditable: false,
      valid: true,
      firstNameRules: [
        v => !!v || 'First name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phoneRules: [
        v => !!v || 'Phone is required'
      ]
    }
  },
  components: {
  },
  methods: {
    getSinglePassenger() {
      const passengerId = this.$route.params.id
      $PassengerApi.getPassenger(passengerId)
        .then(response => {
          this.passengerData = response.data
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
    onEditPassenger() {
      const passengerId = this.$route.params.id
      this.isEditable = false
      $PassengerApi.editPassenger(passengerId, this.passengerData)
        // .then(() => {
        //   this.getSinglePassenger()
        // })
    }
  },
  mounted() {
    this.getSinglePassenger()
  },
}


