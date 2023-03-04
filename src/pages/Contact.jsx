import React, { useState } from "react";
import { db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newPhone, setNewPhone] = useState(0);
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newStatee, setNewStatee] = useState("");
  const [newPin, setNewPin] = useState(0);

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      first_name: newFirstName,
      last_name: newLastName,
      age: newAge,
      phone: newPhone,
      email: newEmail,
      address: newAddress,
      city: newCity,
      statee: newStatee,
      pin: newPin,
    });
  };

  return (
    <div>
      <form
        style={{
          margin: "auto",
          padding: "30px",
          maxWidth: "520px",
          alignContent: "center",
        }}
      >
        <div
          className="row"
          style={{
            marginBottom: "15px",
          }}
        >
          <div className="col">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              onChange={(event) => {
                setNewFirstName(event.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              onChange={(event) => {
                setNewLastName(event.target.value);
              }}
              required
            />
          </div>
        </div>

        <div
          className="row"
          style={{
            marginBottom: "15px",
          }}
        >
          <div className="col">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your age"
              onChange={(event) => {
                setNewAge(event.target.value);
              }}
              required
            />
          </div>

          <div className="col">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your phone number"
              onChange={(event) => {
                setNewPhone(event.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
            required
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your address"
            onChange={(event) => {
              setNewAddress(event.target.value);
            }}
            required
          />
        </div>

        <div className="row">
          <div className="col">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setNewCity(event.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setNewStatee(event.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <label>Pin Code</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => {
                setNewPin(event.target.value);
              }}
              required
            />
          </div>
        </div>
      </form>
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          marginTop: "15px",
        }}
        onClick={createUser}
      >
        Create User
      </button>
    </div>
  );
};

export default Contact;
