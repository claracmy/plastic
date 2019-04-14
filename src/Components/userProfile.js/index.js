import React from "react";
import Axios from 'axios';
import Form from "./form";

class UserProfile extends React.Component {
    state = {
        form: {
            plasticUsage: {
                cutlery: null,
                container: null,
                bag: null,
                bottle: null,
                straw: null,
                wrap: null,
            },
            additionalInfo: '',
        }
      };
    
      handleChange = ({ target: { name, value } }) => {
        const form = Object.assign({}, this.state.form, { [name]: value });
        this.setState({ form });
      };
    
      handleSubmit = e => {
        alert(this.state.order.plasticUsage.cutlery);
        e.preventDefault();
    
        Axios.post("/api/orders/new", this.state.form)
          .then(this.props.history.push("/success"))
          .catch(err => console.log(err));
      };

    render() {
         return (
            <div style={{ height: "100%", width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2 style={{ display: 'block' }}>About You </h2>
              <div> Current Number of order you did : 2 </div>
              <div></div>
              <div> Number of orders remaining before your get a free voucher </div>
              <div> Thank you for helping us make the planet plastic free! </div> 
              <div style={{ textAlign: 'center'}}>
              <button style={{ borderRadius: '5px', padding: '10px 10px', width: '150px',  color: 'white', fontWeight: 'bold', fontSize: '14px', height: '50px', display: 'block', marginTop: '40px', backgroundColor: '#04afa8' }} type="submit">Login</button>
            </div>
            </div>
        );
    }
}

export default UserProfile;
