const initialState = [
  { id: 0, label: "Learn React"},
  { id: 1, label: "Learn React Native"},
  { id: 2, label: "Work", done: true},
  { id: 3, label: "Sleep", done: true },
  { id: 4, label: "Play", done: true},
  { id: 5, label: "Repeat"},
  { id: 6, label: "Listen", done: true},
  { id: 7, label: "Play again"},
  { id: 8, label: "Work again"}];

function todos(state = initialState, action){
  switch(action.type){
    case "ADD_TODO":
      const copyState = [...state];
      copyState.unshift({
        label: action.label,
        done: false,
        id: copyState.length
      });
      return copyState
    case "TOGGLE_TODO":
      const newState = state.concat();
      newState[action.index].done = !newState[action.index].done;
      return newState
    default:
      return state;
  }
}

export default todos;