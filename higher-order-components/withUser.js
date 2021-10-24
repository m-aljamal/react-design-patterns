import { useEffect } from "react";

const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      async () => {
        const res = await axios.get(`users/${userId}`);
        setUser(res.data);
      };
    });
    return <Component {...props} user={user} />;
  };
};

const UserInfo = ({ user }) => {
  const { name } = user;
  return (
    <>
      <h1>User info Component {name}</h1>
    </>
  );
};

const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  return <UserInfoWithLoader />;
}
