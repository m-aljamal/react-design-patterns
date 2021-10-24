import { useEffect, useState } from "react";
import { useResource } from "./useResource";

export const useDataResource = (getResouceFunction) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    async () => {
      const result = await getResouceFunction;
      setResource(result.data);
    };
  }, [getResouceFunction]);

  return resource;
};

const serverResource = (resourceUrl) => async () => {
  const res = await axios.get(resourceUrl);
  return res.data;
};

const UserInfo = ({ userId }) => {
  const user = useResource(serverResource("/users/123"));
  const { name, age } = user;
  return (
    <>
      <p>{name}</p>
    </>
  );
};
