import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";

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

const UserTable = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiEndpoint = "https://localhost:8000/api/user/get-all-user";

    axios
      .get(apiEndpoint)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    const deleteEndpoint = `https://localhost:8000/api/user/delete-user/${userId}`;

    axios
      .delete(deleteEndpoint)
      .then((response) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="container">
      <table className={classes["table"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
