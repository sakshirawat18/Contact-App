import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { Link } from "react-router-dom";

const Home = () => {
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);

  const updateUser = async(id)=>{
    const userDoc= doc(db,"users",id);
    const newFields = { }
    await updateDoc(userDoc, newFields);

  }

  const deleteUser = async(id)=>{
    const userDoc= doc(db,"users",id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", margin: "85px" }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>no.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row"></th>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.address} {user.city} {user.statee} {user.pin}</td>
                  <td>
                    <Link to="/update/:id">
                      <button className="btn btn-sm btn-outline-success" style={{marginRight: "5px"}}>Edit</button>
                    </Link>
                    <button className="btn btn-sm btn-outline-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
