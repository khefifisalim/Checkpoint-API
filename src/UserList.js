import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

const UserList = () => {
  const [personsdata, setPersonsdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setPersonsdata(res.data);
    };
    getData();
  }, []);
  return (
    <div style={{ margin: "50px" }} className="container">
      {personsdata.map((user, i) => {
        return (
          <Card style={{ width: "18rem", backgroundColor: "blueviolet" }}>
            <Card.Header>name:{user.name}</Card.Header>
            <Card.Header>username:{user.username}</Card.Header>
            <Card.Header>email:{user.email}</Card.Header>
            <Card.Header>phone:{user.phone}</Card.Header>
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;
