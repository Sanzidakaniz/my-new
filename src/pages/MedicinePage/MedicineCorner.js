import React, { useEffect, useState } from 'react';
import Medicine from './Medicine/Medicine';
import './MedicineCorner.css';

const MedicineCorner = () => {
      // Use state for storing medicine data
      const [medicines, setMedicines] = useState([]);

      // Use effect for loading medicine data from fake data json files
      useEffect( () => {
          fetch('../../medicineData.json')
          .then(res => res.json())
          .then(data => setMedicines(data));
      }, []);

    return (
       <section>
           <div className="medicineCornerPage">
               <div className="container">
                  <div className="row justify-content-around">
                   <div className="sectionTitle">
                       <h1 className="title">Medicine Section</h1>
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-12">
                       <div className="medicineSideBar">
                         <div className="sideBarBlock">
                           <span className="subInfo">Search Medicine</span> <br />
                           <input type="text" placeholder="search medicine" />
                        </div>
                         <div className="sideBarBlock">
                           <span className="subInfo">Search by company name</span> <br />
                           <input type="text"  placeholder="company name"/>
                        </div>
                         </div>
                       </div>
                       <div className="col-lg-7 col-md-7 col-sm-12">
                   {
                       medicines.map(medicine => <Medicine key={medicine.uniqueId} medicine={medicine} />)
                   }
                   </div>
                     </div>
                   </div>
                </div>
            </section>
    );
};

export default MedicineCorner;