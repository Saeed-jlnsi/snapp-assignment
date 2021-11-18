<template>
    <div></div>
</template>

<script>
  import $PassengerApi from "../../services/api/passenger"
  export default {
    name: 'Passengers',

    components: {
    },
    mounted() {
        $PassengerApi.getPassengersList(10).then(response => console.log(response))
    }
  }
</script>