import React, { Component } from 'react';
import './Furniture.css';
import furnitures from '../furnitures.json';

class Furnitures extends Component {
    render() {
        const furnitureCards = [];
        for (let index = 0; index < furnitures.length; index++) {
            const myFurniture = furnitures[index];
            const myFurnitureImage = myFurniture.image;
            const myFurnitureCard = <FurnitureCard imgId={myFurniture.id} key={myFurniture.id} imgUrl={myFurnitureImage} clickFunction={this.handleClick} />
            furnitureCards.push(myFurnitureCard);
        }

        return furnitureCards;
    }
    handleClick(id) {
        console.log(id);
    }
}

function FurnitureCard(props) {
    return (
        <div className="card col-sm-3" onClick={() => props.clickFunction(props.imgId)} style={{ width: 300 }}>
            <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
        </div >
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

export default Furnitures;