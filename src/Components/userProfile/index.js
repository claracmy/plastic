import React from "react";
import ProgressBar from "./progressBar";

class UserProfile extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "40px"
          }}
        >
          <h1 style={{ display: "block", color: "#035855" }}>Sheldon Cooper</h1>
          <img
            height="120px"
            alt="profilephoto"
            style={{ borderRadius: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirqi-60a5vJbXwM25-U53wAe3yVuXhmtGtE0LoxYLEXn7rzPI"
          />
          <h2 style={{ display: "block", margin: "40px 0" }}>
            Review{" "}
            <span style={{ fontWeight: "bold", color: "#035855" }}>3</span> more
            orders to get a free milkshake!{" "}
          </h2>
          <ProgressBar />
        </div>
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ display: "block" }}>
            {" "}
            Thank you for contributing towards a plastic free world{" "}
          </h3>
          <div style={{ width: "100%" }}>
            <button
              style={{
                margin: "0 auto",
                borderRadius: "5px",
                padding: "10px 10px",
                width: "150px",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                height: "50px",
                display: "block",
                marginTop: "40px",
                backgroundColor: "#04afa8"
              }}
              type="submit"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
