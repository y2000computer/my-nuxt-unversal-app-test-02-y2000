export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
      console.log('state.counter =' , state.counter );
    }
  }