<template>
 <div class="container">
    <div class="jumbotron">
      <h1>Game Availability </h1>
      <span>Your Game vs {{ matchDetails.opposition }} on {{matchDetails.day}} {{matchDetails.date}} starting at {{matchDetails.startTime}}</span>
      <p>Ground Address: {{ matchDetails.groundAddress }}</p>
      <form @submit.prevent="handleSubmit">
        <input type="text" class="form-control" v-model="name" placeholder="Enter Name">
        <p> Are you available? </p>
        <input type="radio" id="yes" value="Yes" v-model="picked">
        <label for="yes">Yes</label>
        <br>
        <input type="radio" id="no" value="No" v-model="picked">
        <label for="no">No</label>
        <br><br>
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
        opposition: "Avengers",
        day: "Monday",
        date: "6/28",
        startTime: "5 pm",
        groundAddress: "Mcqueen Park Tempe"
      }
    }
  },
   methods:{
        handleSubmit () {
          console.log(this.name, this.picked, "submitted availability")
        }
    },
  components: {
  }
}
</script>
