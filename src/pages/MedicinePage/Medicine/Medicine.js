import React from 'react';

const Medicine = (props) => {
      // Let's destructuring the data from objects
      const {medicineName, medicineImg,unitQnt,price} = props.medicine;

      // Handle cart button
      const handleCart = () => {
            alert("I am currently working on it!");
      }
    return (
            <div className="medicineCard">
                <div className="medicineImg">
                    <img src={medicineImg} alt="medicineImg" />
                </div>
                <div className="medicineInfo">
                    <h3 className="medicineName">{medicineName}</h3>
                    <span className="subInfo">Quantity : 10pcs</span> &nbsp;&nbsp;
                    <span className="subInfo">Price : ${price} </span>&nbsp;&nbsp;
                    <span className="subInfo">Piece : {unitQnt}P (pcs)</span>
                </div>
                <div className="medicineAction">
                    <button onClick={handleCart} className="emergencyBtn fas fa-shopping-cart"></button>
                </div>
            </div>
    );
};

export default Medicine;