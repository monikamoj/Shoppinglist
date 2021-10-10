import "./ListItem.css";

export const ListItem = ({ shoppingItem, onListItemUpdate }) => {
  return (
    <span className="list-item" onClick={() => onListItemUpdate(shoppingItem)}>
      {shoppingItem.name}
    </span>
  );
};
