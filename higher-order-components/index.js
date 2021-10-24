// higher order components are components that
// returning another components not jsx
// they are fuctions that return components
// why we need:
// used to share complex behavior between multiple components
// like container componetns
// adding extral functionalty to existing componetn

// example:

// small leter for the name
// they are never used to display jsx
const printProps = (Component) => {
  return (props) => {
    console.log(props);
    <Component {...props} />;
  };
};


const UserInf = ({user}) =>{
    const {name} = user
    return(
        <>
        <h1>User info Component {name}</h1>
        </>
    )
}

const UserInfoWrapped = printProps(UserInfo)

function App(){
<UserInfoWrapped a={1}/>
}