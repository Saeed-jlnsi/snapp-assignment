
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
      dialogDelete: false,
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
          sortable: false,
          value: 'balance',
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
          sortable: false,
          value: 'createdAt',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      passengers: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
    } 
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Passenger' : 'Edit Passenger'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },
  mounted() {
    this.passengers = this.passengersList
  },

  methods: {
    initialize () {
      this.passengers = []
    },

    editItem (item) {
      this.editedIndex = this.passengers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.passengers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.passengers.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.passengers[this.editedIndex], this.editedItem)
      } else {
        this.passengers.push(this.editedItem)
      }
      this.close()
    },
  },
}


