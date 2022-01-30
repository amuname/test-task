export const userInfo = {
	state: {
		user:{
        first_name:'FName',
        last_name:'LName',
      },
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    fNLetter({user}){
      return user.first_name[0]
    },
    lNLetter({user}){
      return user.last_name[0]
    },
    initials(state,getters){
      return `${getters.lNLetter}.${getters.fNLetter}.`
    },
    fio({ user },getters){
      return `${user.last_name}.${getters.fNLetter}.`
    },
  },
  modules: {
  }
}