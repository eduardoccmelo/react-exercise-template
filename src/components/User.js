function User({ title, firstName, lastName, gender, picture }) {
  return (
    <div className={gender === "male" ? "maleUserBox" : "femaleUserBox"}>
      <h2>
        {title}. {firstName} {lastName}
      </h2>
      <p>{gender}</p>
      <img src={picture} alt={picture}></img>
    </div>
  );
}

export default User;
