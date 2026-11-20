
import { useState } from "react";
import notifications from "./notifications.js";
import "./App.css";

function Notification({ name, children, onClear }) {
  return (
    <div className="notification">
      <h3>{name}</h3>
      <p>{children}</p>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(notifications);

  function clearNotification(id) {
    const updatedItems = items.filter(
      (item) => item.id !== id
    );
    setItems(updatedItems);
  }

  function clearAll() {
    setItems([]);
  }

  return (
    <div className="app">
      <h1>Notifications</h1>

      <p>You have {items.length} notifications</p>

      <button onClick={clearAll}>Clear All</button>

      {items.map((item) => (
        <Notification
          key={item.id}
          name={item.name}
          onClear={() => clearNotification(item.id)}
        >
          {item.message}
        </Notification>
      ))}
    </div>
  );
}

export default App;
