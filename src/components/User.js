function User({ title, firstName, lastName, gender, picture }) {
  return (
    <div className={gender === "male" ? "maleUserBox" : "femaleUserBox"}>
      <h3>
        {title}. {firstName} {lastName}
      </h3>
      <p>{gender.toUpperCase()}</p>
      <img className="profilePicture" src={picture} alt={picture}></img>
    </div>
  );
}

export default User;
