import React, { Component } from 'react';
import { useParams } from "react-router-dom";
function ListItem() {
  const { id } = useParams()
  console.log('id', id)
  return (
    <div>
      liebiao item {id}
    </div>
  )
}
// class ListItem extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <div>
//         我是
//       </div>
//     );
//   }
//   componentDidMount() {
//     console.log('dsa', this.props)
//   }
// }

export default ListItem;