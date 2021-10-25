import React from 'react';
// import './Home.css';
import './Home.css';
import HomeImg from '../images/download.jpg';
import FeaturedService from './FeaturedService/FeaturedService';
import useLoadData from '../../customHooks/LoadServiceData/useLoadData';
import useDoctorsData from '../../customHooks/LoadDoctors/useDoctorsData';
import FeaturedDoctors from './FeaturedDoctors/FeaturedDoctors';

const Home = () => {
      // Get service data from use service custom hook
      const [services] = useLoadData();

      // Get doctors data from use doctors custom hook
      const [doctors] = useDoctorsData();
    return (
      <div className="homePage">
        <div className="homeSection">
           <div className="container">
               <div className="row align-items-center">
                   <div className="col-lg-6 col-md-6 col-sm-6">
                       <div className="homeImg">
                           <img src={HomeImg} alt="Homeimage" />
                       </div>
                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-6">
                       
                         <div className="themeDetails">
                           <h2 className="themeTitle">Provide Better Clinical Care for Patients</h2>
                           <p className="themePera">SK MediCare try to provide best care and treatment to all patients.We have expert doctors to provide necessary treatment.</p>
                           <button className="regularBtn">see details &nbsp;<i className="fas fa-arrow-right"></i></button>
                       </div>
                   </div>
               </div>
           </div>
        </div>

        {/* services section */}

        <div className="FeaturedService">
            <div className="container">
              <div className="row">
                  <div className="sectionTitle">
                      <h1 className="title"><span className="highlight">Our Services</span> </h1>
                  </div>
                  {
                    services.map(service => <FeaturedService key={service.uniqueId} service={service} />)
                  }
              </div>
            </div>
        </div>


        {/* Doctors Section  */}

        <div className="doctorsSection">
            <div className="container">
                <div className="row">
                <div className="sectionTitle">
                      <h1 className="title"> <span className="highlight">Our Doctors</span> </h1>
                  </div>
                   {
                       doctors.map(doctor => <FeaturedDoctors key={doctor.uniqueId} doctors={doctor} />)
                   }
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;