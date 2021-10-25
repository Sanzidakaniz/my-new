import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="aboutUsPage">
           <div className="aboutHospital">
                <div className="container">
                    <div className="row">
                        <h2 style={{color:"#444", fontSize: "45px", fontWeight: 700, textAlign: "center", marginBottom: "40px"}}>About SK MediCare</h2>
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <div className="aboutInfo">
                              
                                <p className="themeDesc"> Our hospital name is "SK MediCare".SK MediCare was founded by the eminent cardiac surgeon, Dr.SK Mahmud in 2009.SK MediCare is established with the sole mission to deliver world-class, holistic and affordable healthcare to all the patients around the world.This 1250 bedded hospital is one of the largest multi-super specialty institutes located in the National Capital Region. Further,SK MediCare is JCI, NABH and NABL accredited which assures safe and quality patient care under best doctors and supported by world-class infrastructure and technology.SK MediCare offers 40 specialties and has more than 800 experienced doctors practicing here. Annually, this globally-renowned hospital treats around 20,000 international patients.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="detailImg">
                                <img style={ {borderRadius: "10px"}} height="350" width="100%" src="https://www.ayurmade.com/wp-content/uploads/2021/07/111-1.jpg" alt="ceoImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;