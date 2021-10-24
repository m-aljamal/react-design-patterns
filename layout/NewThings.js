export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
// {...{ [resourceName]: item }}  will be resourceName={item} = person={item} it is the props of ItemComponent

const PersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age:{age} years
    </p>
  );
};
const ProductListItem = ({ product }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age:{age} years
    </p>
  );
};

function App() {
  return (
    <>
      <RegularList
        items={props} // array of people list
        resourceName="person"
        itemComponent={PersonListItem}
      />
      <RegularList
        items={products} // array of products list
        resourceName="product"
        itemComponent={ProductListItem}
      />
    </>
  );
}

const Left = () => {
  return <div>Left</div>;
};
const Right = () => {
  return <div>Right</div>;
};

const AppSplit = () => {
  return (
    <SplitScreen>
      <Left />
      <Right />
    </SplitScreen>
  );
};

const SplitScreen = ({ children }) => {
  const [left, right] = children;

  return (
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};
