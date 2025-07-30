import React, { useState } from 'react';

function ItemList({ items, updateItem, deleteItem }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleUpdate = (id) => {
    updateItem(id, editName);
    setEditingId(null);
    setEditName('');
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button onClick={() => handleUpdate(item.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {item.name}
              <button onClick={() => {
                setEditingId(item.id);
                setEditName(item.name);
              }}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;