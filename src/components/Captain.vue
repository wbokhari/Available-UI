<template>
 <div class="container">
    <div class="jumbotron">
      <h1>Game Availability </h1>
      <h2>Hi Captain </h2>
      <p>Enter Match Details</p>
      <form @submit.prevent="handleSubmit">
        <input type="text" class="form-control" v-model="matchDetails.opposition" placeholder="Enter Opposite Team Name"><br><br>
        <input type="text" class="form-control" v-model="matchDetails.groundAddress" placeholder="Enter Ground Address"><br>
       
        <p>Game Date:</p>
        <input type="date" class="form-control" v-model="matchDetails.date" placeholder="Enter Date of game"><br><br>
         <input type="text" class="form-control" v-model="matchDetails.startTime" placeholder="Start Time ex: 5:30 pm"><br><br><br>
        <button type="submit">Submit</button>
      </form>      
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      amount: 10,
      wasif: 'hello',
      name: '',
      picked: '',
      matchDetails: {
        opposition: "",
        day: "",
        date: "",
        startTime: "",
        groundAddress: ""
      }
    }
  },
   methods:{
        handleSubmit () {
          console.log(this.matchDetails, "submitted match details")
        }
    },
  components: {
  }
}
</script>
