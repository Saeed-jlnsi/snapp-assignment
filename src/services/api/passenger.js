import $axios from "../config/axios";

class Passenger {
    getPassengersList(limit) {
        return $axios.get("/passenger?limit=" + limit)
    }
    getPassenger(params) {
        return $axios.get("/passenger/" + params)
    }
    searchPassenger(query) {
        return $axios.get("/passenger?" + query)
    }
    addPassenger(payload) {
        return $axios.post("/passenger", payload)
    }
    editPassenger(params) {
        return $axios.patch("/passenger/" + params)
    }
    deletePassenger(params) {
        return $axios.delete("/passenger/" + params)
    }
    
}

export default new Passenger()