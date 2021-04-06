import { useEffect, useState } from "react";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [numberOfBoxes, setNumberOfBoxes] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    const baseUrl =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=100";
    let url = baseUrl;

    if (numberOfBoxes) {
      url = `https://randomuser.me/api/?results=${numberOfBoxes}&gender=${filter}`;
    }

    if (filter) {
      url = `https://randomuser.me/api/?results=${numberOfBoxes}&gender=${filter}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, [numberOfBoxes, filter]);

  function renderUsers() {
    const allUsers = users.map((user) => (
      <User
        key={user.email}
        title={user.name.title}
        firstName={user.name.first}
        lastName={user.name.last}
        gender={user.gender}
        picture={user.picture.thumbnail}
      />
    ));
    return allUsers;
  }

  function handleOnChange(event) {
    const inputElement = event.target;
    if (inputElement.value === "" || inputElement.value === null) {
      setNumberOfBoxes("100");
    } else {
      setNumberOfBoxes(inputElement.value);
    }
  }

  function handleFilter(event) {
    const inputValue = event.target.value;
    if (inputValue === "female") {
      setFilter("female");
    } else if (inputValue === "male") {
      setFilter("male");
    } else if (inputValue === "all") {
      setFilter("");
    }
  }

  return (
    <div>
      <label>Number of boxes:</label>
      <input onChange={handleOnChange}></input>
      <p>Number of results: {users.length}</p>
      <div>
        <select onClick={handleFilter}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div>{renderUsers()}</div>
    </div>
  );
}

export default UserList;
