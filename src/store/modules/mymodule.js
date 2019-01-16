/* eslint-disable */
import moment from 'moment';

// initial state
const state = {
  startDate: "March 10, 2019",
  endDate: "March 20, 2019",
};

// getters
const getters = {
};

// actions
const actions = {
  handleStartDateSelect: function({state, commit}, e) {
    const selectedDate = e;
    if ( moment(selectedDate).isAfter(moment(state.endDate).format('MMMM D, YYYY')) ) {
      console.log('startdate is after end date, adjusting end date value')
      commit('UPDATE_PROP', {key: "endDate", value: moment(selectedDate).format('MMMM D, YYYY')})
    }
    commit('UPDATE_PROP', {key: "startDate", value: moment(selectedDate).format('MMMM D, YYYY')})
  },
  handleEndDateSelect: function({state, commit}, e) {
			const selectedDate = e
			if ( moment(selectedDate).isBefore(moment(state.startDate).format('MMMM D, YYYY')) ) {
        console.log('enddate is before start date, adjusting start date value')
        commit('UPDATE_PROP', {key: "startDate", value: moment(selectedDate).format('MMMM D, YYYY')})
      }
      commit('UPDATE_PROP', {key: "endDate", value: moment(selectedDate).format('MMMM D, YYYY')})
	},
};

// mutations
const mutations = {
  UPDATE_PROP(state, {key, value}) {
    state[key] = value
  }
};

export default {
	state,
	getters,
	actions,
	mutations,
};
