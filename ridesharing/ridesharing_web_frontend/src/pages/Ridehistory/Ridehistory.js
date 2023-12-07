import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Image from "../../components/Image";

const useStyles = makeStyles({
  list: {
    padding: "15px 30px 10px",
    border: "1px solid green",
    width: "380px",
    height: "550px",
    overflow: "scroll",
  },

  item: {
    padding: "15px",
  },
});

const Ridehistory = () => {
  const classes = useStyles();
  const [rideData, setRideData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/get-ride-data")
      .then((response) => {
        setRideData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ride history:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className={classes["item"]}>
        <b>Ride History</b>
        <ul className={classes["list"]}>
          {rideData.map((ride) => (
            <li key={ride.id}>
              {`Date and time: ${ride.dateAndTime}`}
              <ul>
                <li>{`Pickup: ${ride.pickupLocation}`}</li>
                <li>{`Destination: ${ride.destinationLocation}`}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Image />
    </div>
  );
};

export default Ridehistory;
