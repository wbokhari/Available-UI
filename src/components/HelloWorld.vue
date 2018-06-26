<template>
 <div class="container">
    <div class="jumbotron">
      <h1>Game Availability </h1>
      <p> Enter your Name </p>
      <form @submit.prevent="handleSubmit">
        <input type="text" class="form-control" v-model="name" aria-label="Enter Name">
        <p>Name is: {{ name }}</p>
        <p> Are you available? </p>
        <input type="radio" id="yes" value="Yes" v-model="picked">
        <label for="yes">Yes</label>
        <br>
        <input type="radio" id="no" value="No" v-model="picked">
        <label for="no">No</label>
        <br>
        <button type="submit">Submit</button>
      </form>
      <br>
      <span>Picked: {{ picked }}</span>
      <br>
      <span>Match Details: {{ matchDetails }}</span>
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
