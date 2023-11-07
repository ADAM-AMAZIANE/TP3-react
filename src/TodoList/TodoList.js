import React, { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  }

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  }

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div className="TodoList"> 
      <h1>To-Do List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Add a new item"
        className="input-text" 
      />
      <button onClick={addItem} className="add-button">Add Item</button> 
    </div>
  );
}

export default TodoList;
