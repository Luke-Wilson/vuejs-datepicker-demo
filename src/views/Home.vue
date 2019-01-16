<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Start Date</h1>
    <h3>{{mymodule.startDate}}</h3>
    <SelectedDatePicker name="start-date" :defaultDate='mymodule.startDate' :onInputHandler='handleStartDateSelect'/>

    <h1>End Date</h1>
    <h3>{{mymodule.endDate}}</h3>
    <SelectedDatePicker name="end-date" :defaultDate='mymodule.endDate' :onInputHandler='handleEndDateSelect'/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SelectedDatePicker from '@/components/SelectedDatePicker'


export default {
  name: 'home',
  components: {
    SelectedDatePicker
  },
  computed: {
    ...mapState(['mymodule'])
  },
  methods: {
    ...mapActions([
      'handleStartDateSelect',
      'handleEndDateSelect',
    ]),
  },
}
</script>
