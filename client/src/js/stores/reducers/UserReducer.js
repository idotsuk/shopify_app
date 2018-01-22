let itemIndex;

const reducer = (
  state = {first_name: null, last_name : null, id: null, logged_in: false, products :[]},
  action
) => {
  //console.log(action.type);
  switch (action.type) {
    case "LOG_IN":

    state = Object.assign({},
        state,
        {first_name: action.first_name,
        last_name:action.last_name,
        id: action.id,
        logged_in:true
        })
      console.log(state)
      break;

      case "LOG_OUT":

      state = Object.assign({},
          state,
          {first_name: null,
          last_name:null,
          id: null,
          logged_in:false
          })
        console.log(state)
        break;
  

      


      
  }
  console.log(state);return state;
};
export default reducer;
