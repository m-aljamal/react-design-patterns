import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async () => {
      const res = await axios.get("/user");
      setUser(res.data);
    };
  }, []);

  return user;
};

const UserInfo = () => {
  const user = useCurrentUser();
  const { name, age } = user;
  return (
    <>
      <p>{name}</p>
    </>
  );
};
