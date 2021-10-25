import React from 'react';
import { useHistory } from 'react-router';

const ErrorPage = () => {
      const history = useHistory();
      const handleBackHome = () => {
            history.push('/home');
      }
    return (
        <section>
            <div className="errorPageArea text-center" style={{padding: "150px 0px"}}>
                <div className="errorImg">  
                <h1>Page Not Found</h1>
                    <br />
                    <button onClick={handleBackHome} className="btn-info rounded p-1 text-white">Back Home</button>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;