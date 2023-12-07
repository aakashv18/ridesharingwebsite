import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import authMethods from "../../utils/authMethods";
import { useGlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import userApi from "../../apis/user.api";

const useStyles = makeStyles({
  functions: {
    backgroundColor: "white",
    width: "100%",
    "@media(max-width:1200px)": {
      width: "100vw",
    },
  },

  diffIcon: {
    padding: "17px 30px 17px 20px",
    color: "green",
  },

  tabs: {
    display: "flex",
    borderBottom: "1px solid silver",
    padding: "12px 20px 12px 20px",
  },

  tab1: {
    display: "flex",
    borderBottom: "1px solid silver",
    padding: "12px 20px 12px 20px",
  },

  menuItems: {
    paddingTop: "20px",
    color: "black",
  },
});

const Menu = () => {
  const [status, setStatus] = useState(false);
  const { authState } = useGlobalContext();

  useEffect(() => {
    getStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let getStatus = async () => {
    let id = authState.id;
    await userApi.getStatus(
      id,
      (res) => {
        setStatus(res);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes["functions"]}>
        <div className={classes["tab1"]}>
          <div className={classes["diffIcon"]}>
            <AdminPanelSettingsIcon />
          </div>
          <div className={classes["menuItems"]}>
            Profile Verification - {status ? "Verified" : "Pending"}
          </div>
        </div>

        <div className={classes["tabs"]}>
          <div className={classes["diffIcon"]}>
            <DirectionsCarIcon />
          </div>
          <div className={classes["menuItems"]}>My Vehicles</div>
        </div>

        <div className={classes["tabs"]}>
          <div className={classes["diffIcon"]}>
            <SettingsIcon />
          </div>
          {status === true ? (
            <div className={classes["menuItems"]}>Already Uploaded</div>
          ) : (
            <Link to="/upload-docs" className={classes["menuItems"]}>
              Upload Docs
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
