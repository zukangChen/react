import * as types from "../action-types";
let counterCondition = {
  increment() {
    return { type: types.INCREMENT }
  },
  decrement() {
    return { type: types.DECREMENT }
  }
}
export default counterCondition
// export default{
//     increment(){
//         return {type:types.INCREMENT}
//     },
//     decrement(){
//         return {type:types.DECREMENT}
//     }
// }