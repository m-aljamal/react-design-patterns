import React from "react";

export const UserInfoForm = withEditableUSer(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const [name, age] = user || {};

    return user ? (
      <form>
        <input
          name="name"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <input
          name="age"
          value={age}
          onChange={(e) => onChangeUser({ age: e.target.value })}
        />
        <button onClick={onResetUser}>reset user</button>
        <button onClick={onSaveUser}>save user</button>
      </form>
    ) : (
      <p>Loading.....</p>
    );
  },
  "/123" // user id
);

// with geriall higher order components
export const UserInfoForm = withEditableResourse(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const [name, age] = user || {};

    return user ? (
      <form>
        <input
          name="name"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <input
          name="age"
          value={age}
          onChange={(e) => onChangeUser({ age: e.target.value })}
        />
        <button onClick={onResetUser}>reset user</button>
        <button onClick={onSaveUser}>save user</button>
      </form>
    ) : (
      <p>Loading.....</p>
    );
  },
  "/users/123", //path
  "user" // name
);
