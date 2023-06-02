const ShopsListItem = ({ name, products, onClick }) => {
  return (
    <li
      onClick={() => {
        onClick(products);
      }}
    >
      <p> {name}</p>
    </li>
  );
};

export default ShopsListItem;
