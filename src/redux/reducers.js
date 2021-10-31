import { LOGIN, REMOVE, EDIT, ADD } from "./actions";

var arr = JSON.parse(localStorage.getItem("array"));
// var arr= JSON.parse(localStorage.getItem("array"));

console.log(arr);
var array = arr ? arr : [];
// const array=[
//   {
//     id:1,
//     number:10,
//     status:'no',
//     name:'asas',
//     date:'2020-11-13'
//   }
// ]
var initState = {
  array: array
};
function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      console.log("đã login");
      break;
    case REMOVE:
      state.array = state.array.filter((item) => item.id !== action.id);
      localStorage.removeItem("array");
      localStorage.setItem("array",JSON.stringify(state.array));
      return {...state}
    case EDIT:
      var oldID = -1;
      state.array.map((item, index) => {
        if (item.id == action.item.id) oldID = index;
      });
      var editProduct = action.item;
      if (oldID !== -1) {
        state.array[oldID] = editProduct;
      }
      localStorage.removeItem("array");
      localStorage.setItem("array", JSON.stringify(state.array));
      return state;
    case ADD:
      state.array.push(action.item);
      localStorage.removeItem("array");
      localStorage.setItem("array",JSON.stringify(state.array))
      return state;
    default:
      return state;
  }
}
export default reducer;
