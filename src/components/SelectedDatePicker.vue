<template>
  <div id="">
    SelectedDatePicker component
    <date-picker
      :value='defaultDate'
      @input='onInputHandler'
    />
  </div>
</template>
<script>
import DatePicker from 'vuejs-datepicker'

export default {
  name: "SelectedDatePicker",
  data: () => ({

  }),
  props: {
    name: String,
    defaultDate: String,
    onInputHandler: Function,
  },
  components: {
    DatePicker
  },
  methods: {

  },
  updated() {
    console.log('SelectedDatePicker updated', this.name)
  }
}
</script>
