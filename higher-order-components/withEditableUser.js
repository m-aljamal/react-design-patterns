import { useEffect, useState } from "react";

const withEditableUSer = (Compnent, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
      async () => {
        const res = await axios.get(`/users/${userId}`);
        setOriginalUser(res.data);
        setUser(res.data);
      };
    }, []);
    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };
    // save user in backend

    const onSaveUser = async () => {
      const res = await axios.post(`/users/${userId}`, {
        user,
      });
      setOriginalUser(res.data);
      setUser(res.data);
    };
    // to back to original user if not want to change
    const onResetUser = () => {
      setUser(originalUser);
    };
    return (
      <Compnent
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
