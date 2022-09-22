import styles from "../styles/Profile.module.css";
const Profile = (props) => {
  console.log(props.function());
  let user = props.function();
  return (
    <div className="row">
      <div className="col-sm-3">
        <img src={user.avatar} alt="" width={"100%"} />
      </div>
      <div className="col-sm-9">
        <h1>{user.name}</h1>
        <h2 className={styles.aboutMe}>{user.lastName}</h2>
        <p>{user.email}</p>
        <p>{user.about}</p>
      </div>
    </div>
  );
};

export default Profile;
