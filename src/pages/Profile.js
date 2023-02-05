import React from "react";
import { Person } from "../components/Person";

function Profile() {
  return (
    <div>
      <Person
        name="Mika"
        email="mikabibas@gmail.com"
        age={33}
        isMarried={false}
        friends={["Maya", "Shir", "Eliya"]}
      />
    </div>
  );
}

export default Profile;
