import React from 'react';

const Form = ({ handleChange, handleSubmit, order }) => {
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="cutlery">
            <span style={{ fontSize: '12px', display: 'block'}}>How many plastic cutlery pieces were provided?{" "}</span>
            <input
              style={{  border: 'none',
                borderBottom: 'solid 3px #016c68',
                width: '250px',
                padding: '10px 10px',
                outline: 'none',
                margin: '10px 0' }}
              id="cutlery"
              name="plasticUsage.cutlery"
              value={order.plasticUsage.cutlery}
              onChange={cutlery => handleChange(cutlery)}
            />
            </label>
            <label htmlFor="container">
            <span style={{ fontSize: '12px', display: 'block' }}>How many plastic containers were provided?{" "}</span>
            <input
             style={{  border: 'none',
             borderBottom: 'solid 3px #016c68',
             width: '250px',
             padding: '10px 10px',
             outline: 'none',
             margin: '10px 0' }}
              id="container"
              name="plasticUsage.container"
              value={order.plasticUsage.container}
              onChange={container => handleChange(container)}
            />
            </label>
            <label htmlFor="bag">
            <span style={{ fontSize: '12px', display: 'block' }}>How many plastic bags were provided?{" "}</span>
                <input
                style={{  border: 'none',
                borderBottom: 'solid 3px #016c68',
                width: '250px',
                padding: '10px 10px',
                outline: 'none',
                margin: '10px 0' }}
                id="bag"
                name="plasticUsage.bag"
                value={order.plasticUsage.bag}
                onChange={bag => handleChange(bag)}
                />
            </label>
          <label htmlFor="bottle">
          <span style={{ fontSize: '12px', display: 'block' }}>How many plastic bottles were provided?{" "}</span>
            <input
             style={{  border: 'none',
             borderBottom: 'solid 3px #016c68',
             width: '250px',
             padding: '10px 10px',
             outline: 'none',
             margin: '10px 0' }}
              id="bottle"
              name="plasticUsage.bottle"
              value={order.plasticUsage.bottle}
              onChange={bottle => handleChange(bottle)}
            />
          </label>
          <label htmlFor="straw">
          <span style={{ fontSize: '12px', display: 'block' }}>How many plastic straws were provided?{" "}</span>
            <input
             style={{  border: 'none',
             borderBottom: 'solid 3px #016c68',
             width: '250px',
             padding: '10px 10px',
             outline: 'none',
             margin: '10px 0' }}
              id="straw"
              name="plasticUsage.straw"
              value={order.plasticUsage.straw}
              onChange={straw => handleChange(straw)}
            />
          </label>
          <label htmlFor="wrap">
          <span style={{ fontSize: '12px', display: 'block' }}>How many plastic wraps were provided?{" "}</span>
            <input
             style={{  border: 'none',
             borderBottom: 'solid 3px #016c68',
             width: '250px',
             padding: '10px 10px',
             outline: 'none',
             margin: '10px 0' }}
              id="wrap"
              name="plasticUsage.wrap"
              value={order.plasticUsage.wrap}
              onChange={wrap => handleChange(wrap)}
            />
          </label>
          <label htmlFor="additionalInfo">
          <span style={{ fontSize: '12px', display: 'block' }}>Can you provide any additional information?{" "}</span>
            <textarea
             style={{  border: 'none',
             borderBottom: 'solid 3px #016c68',
             width: '250px',
             padding: '10px 10px',
             outline: 'none',
             margin: '10px 0' }}
              id="addtionalInfo"
              name="addtionalInfo"
              value={order.addtionalInfo}
              onChange={addtionalInfo => handleChange(addtionalInfo)}
            />
          </label>
          <div style={{ textAlign: 'center'}}>
        <button style={{
          borderRadius: '5px',
          padding: '10px 10px', 
          width: '150px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
          height: '50px',
          display: 'block',
          marginTop: '40px',
          backgroundColor: '#04afa8'
        }}
        type="submit">
          Submit
        </button>
        </div>
        </form>
        </div>
    );
  };
  
  export default Form;