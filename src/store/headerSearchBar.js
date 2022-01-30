export const headerSearchBar = {
	state: {
      searchBarNotFocused : true,
      filterInput : '',
      filterOptions : {
				dateFrom1:{
					label:'Дата от',
					value:'',
				},
				dateTo1:{
					label:'Дата до',
					value:'',
				},
				dateFrom2:{
					label:'Дата от',
					value:'',
				},
				dateTo2:{
					label:'Дата до',
					value:'',
				},
				clientName1:{
					label:'Имя клиента',
					value:'',
				},
				phone1:{
					label:'Телефон',
					value:'',
				},
				clientName2:{
					label:'Имя клиента',
					value:'',
				},
				phone2:{
					label:'Телефон',
					value:'',
				},
      },
      filterOptionsOpened : false,
  },
	mutations: {
		focusChange(state) {
      state.searchBarNotFocused = !state.searchBarNotFocused 
    },
    filterHandleInput(state,addValue) {
      state.filterInput = state.filterInput.concat(addValue)
    },
    filterOptionsVisibilityChange(state) {
      state.filterOptionsOpened = !state.filterOptionsOpened 
    },
    filterHandleOptions(state, { name, data }) {
			state[name] = data
    },
  },
	actions: {
		focusChange(context) {
      context.commit('focusChange')
    },
    filterHandleInput(context,addValue) {
      context.commit('filterHandleInput', addValue)
    },
    filterOptionsVisibilityChange(context){
			context.commit('filterOptionsVisibilityChange')
    },
    filterHandleOptions(context, { name, data }) {
			context.commit('filterHandleOptions', { name, data })
    },
  },
	getters: {
    searchBarFocus({ searchBarNotFocused }) {
      return searchBarNotFocused
    },
    filterInputChange({ filterInput }) {
      return filterInput
    },
    filterOpened({ filterOptionsOpened }) {
			return filterOptionsOpened
    },
    filterOptions({ filterOptions }) {
      return filterOptions
    },
  },
  modules: {
  }
}