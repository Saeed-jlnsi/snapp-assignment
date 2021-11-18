export default {
  name: 'passengers-table-component',
  components: {},
  props: {
    passengersList: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      dialog: false,
      itemsPerPage: 10,
      headers: [
        {
          text: 'First Name',
          align: 'start',
          sortable: false,
          value: 'first_name',
        },
        {
          text: 'Last Name',
          align: 'start',
          sortable: false,
          value: 'last_name',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'email',
        },
        {
          text: 'Phone',
          align: 'start',
          sortable: false,
          value: 'phone',
        },
        {
          text: 'Balance ($)',
          align: 'start',
          sortable: true,
          value: 'balance',
        },
        {
          text: 'Ride Status',
          align: 'start',
          sortable: false,
          value: 'ride_status',
        },
        {
          text: 'Banned',
          align: 'start',
          sortable: false,
          value: 'banned',
        },
        {
          text: 'Registration Time',
          align: 'start',
          sortable: true,
          value: 'createdAt',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      passengers: [],
      passenger: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        number_masked: "",
        note: ""
      },
      defaultData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        number_masked: "",
        note: ""
      },
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

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  methods: {
    onChangePerPage (perPageItem) {
      this.$emit("onChangeLimit", perPageItem)
    },
    onAddPassenger() {
      if(this.$refs.form.validate()) {
        this.$emit("onAddPassenger", this.passenger)
        this.close()
      }
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.passenger = Object.assign({}, this.defaultData)
      })
    },
  },
}


