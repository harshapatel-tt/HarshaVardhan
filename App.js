import React, { useState } from 'react';
import AddForm from './AddForm';
import ItemList from './itemlist';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name: name
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id, newName) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div>
      <h2>CRUD Item Manager</h2>
      <AddForm addItem={addItem} />
      <ItemList
        items={items}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;