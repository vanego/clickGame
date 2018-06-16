import React, { Component } from 'react';
import './Furniture.css';

function Furniture() {
    return (
        <div className="row">
            <div className="col-sm-12 furnitureDiv">Furniture</div>
        </div>
    )
}

// class Muebles extends Component {
//     render() {

//         let array = ["yellowChair", "tub", "rug", "hamock2", "hamock", "greenChair", "desk", "console", "bed", "armChair"];

//         let images = array.map(image => {
//             return <img key={image} src={require(`./Images/${image}.png`)} alt="" className="img-responsive" />
//         });

//         return (
//             <div className="container">
//                 <footer className="row">
//                     <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//                         <h4>Some text</h4>
//                     </div>
//                     <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
//                         {images}
//                     </div>
//                 </footer>
//             </div>
//         );
//     }
// }

export default Furniture;