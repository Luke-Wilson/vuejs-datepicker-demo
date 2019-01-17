<template>
  <div id="">
    SelectedDatePicker component
    <date-picker
      :value='defaultDate'
      @input='onInputHandler'
      :disabledDates='disabledDates'
    />
  </div>
</template>
<script>
import DatePicker from 'vuejs-datepicker'
import moment from 'moment'
export default {
  name: "SelectedDatePicker",
  data: () => ({

  }),
  props: {
    name: String,
    defaultDate: String,
    onInputHandler: Function,
    setDisabledDateStart: String,
  },
  components: {
    DatePicker
  },
  computed: {
    disabledDates() {
      const theDate = this.setDisabledDateStart == undefined ? this.defaultDate : this.setDisabledDateStart;
      if (this.name == 'end-date') {
      return {
        to: moment(theDate).toDate(),
        from: moment(theDate).add(6, 'months').toDate(),
        }
      } else {
        return {
          to: moment(moment().toDate()).toDate(),
          from: moment(theDate).add(6, 'months').toDate(),
          }
      }
    }
  },
  methods: {

  },
  updated: function(){
    console.log('SelectedDatePicker updated', this.name)
    console.log('Disabled Start', this.setDisabledDateStart)
  }
}
</script>
