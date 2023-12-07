import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  numbers: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
    fontWeight: "bold",
    paddingLeft: "35px",
    paddingRight: "110px",
  },

  role: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "10px",
  },
});

const Dashboard = ({ user }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes["data"]}></div>
    </>
  );
};

export default Dashboard;
