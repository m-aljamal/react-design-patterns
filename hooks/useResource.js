import { useEffect, useState } from "react";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    async () => {
      const res = await axios.get(resourceUrl);
      setResource(res.data);
    };
  }, [resourceUrl]);

  return resource;
};

const UserInfo = ({ userId }) => {
  const user = useResource(`users/${userId}`);
  const product = useResource("products/123");
  const { name, age } = user;
  return (
    <>
      <p>{name}</p>
    </>
  );
};
