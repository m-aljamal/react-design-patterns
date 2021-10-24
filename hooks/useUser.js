import { useEffect, useState } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async () => {
      const res = await axios.get(`/users/${userId}`);
      setUser(res.data);
    };
  }, [userId]);

  return user;
};

const UserInfo = ({userId}) => {
  const user = useUser(`/${userId}`);
  const { name, age } = user;
  return (
    <>
      <p>{name}</p>
    </>
  );
};
