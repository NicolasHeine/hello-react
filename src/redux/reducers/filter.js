function filter(state = "all", action){
  switch(action.type){
    case "SET_FILTER":
      return action.value;
    default:
      return state;
  }
}

export default filter;