import React from "react";
import ProgressBar from './progressBar';


class UserProfile extends React.Component {

    render() {
         return (
            <div style={{ height: "100%", width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2 style={{ display: 'block' }}>About You </h2>
              <div> Current Number of order you did </div>
              <div style={{ display: 'block' }}> 2 </div>
              <div></div>
              <div style={{ display: 'block' }}> Number of orders remaining before your get a free voucher </div>
              <ProgressBar
              percentage={40}
              />
              <div style={{ display: 'block' }}> 8 </div>
              <div  style={{ display: 'block' }}> Thank you for helping us make the world plastic free! </div>
              <div style={{ textAlign: 'center'}}>

              <button style={{ borderRadius: '5px', padding: '10px 10px', width: '150px',  color: 'white', fontWeight: 'bold', fontSize: '14px', height: '50px', display: 'block', marginTop: '40px', backgroundColor: '#04afa8' }} type="submit">Logout
              </button>
            </div>
            </div>
        );
    }
}

export default UserProfile;
