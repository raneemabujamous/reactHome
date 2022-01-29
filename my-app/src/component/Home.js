// import axios from "axios";
// import React, { Component } from "react";
// import { CardApi } from "./CardApi";
// export class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiData: [],
//     };
//   }
//   componentDidMount = async (req, res) => {
//     const apireq = await axios.get(
//       `https://api.artic.edu/api/v1/artworks?limit=10`
//     );
//     console.log(apireq);
//     this.setState({
//       apiData: apireq.data,
//     });
//   };

//   render() {
//     return (
//       <>
//         <CardApi apiData={this.state.apiData} />
//       </>
//     );
//   }
// }

// export default Home;
