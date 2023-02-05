import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} married</h2>
      {props.friends.map((friend, id) => {
        return <span key={id}>{friend} </span>;
      })}
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
