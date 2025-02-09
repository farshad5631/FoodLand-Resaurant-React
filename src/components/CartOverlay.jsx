import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const CartOverlay = ({ onClose }) => {
  const { cart, setCart, clearCart } = useContext(CartContext);
  const [editMode, setEditMode] = useState(false);
  const [editedQuantities, setEditedQuantities] = useState({});

  useEffect(() => {
    if (!editMode) {
      setEditedQuantities({});
    }
  }, [editMode]);

  const handleEditQuantity = (id, quantity) => {
    setEditedQuantities({
      ...editedQuantities,
      [id]: parseInt(quantity),
    });
  };

  const handleSave = () => {
    const updatedCart = cart.map((item) => ({
      ...item,
      quantity:
        editedQuantities[item.id] !== undefined
          ? editedQuantities[item.id]
          : item.quantity,
    }));
    setCart(updatedCart);
    setEditMode(false);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleOrder = () => {
    toast.success("Order successfully saved!");
    setTimeout(() => {
      onClose();
    }, 2000);
    clearCart();
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 overflow-scroll">
      <ToastContainer />
      <div className="bg-white p-4 rounded w-1/2 relative shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="border-b p-2 flex justify-between items-center"
            >
              <Link to={`/food/${item.id}`}>
                <span>
                  {item.title} - ${item.price}
                </span>
              </Link>
              {editMode ? (
                <input
                  type="number"
                  min="1"
                  defaultValue={item.quantity}
                  onChange={(e) => handleEditQuantity(item.id, e.target.value)}
                  className="border p-1 w-16"
                />
              ) : (
                <span>Quantity: {item.quantity}</span>
              )}
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-3xl"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-2 ml-2 rounded-3xl"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="text-xl">Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
        {editMode && (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 ml-2 rounded-3xl mt-4"
          >
            Save
          </button>
        )}
        <div className="flex flex-row justify-between">
          <button
            onClick={handleOrder}
            className="bg-yellow-500 text-white p-2 mt-4 rounded-3xl"
          >
            Order
          </button>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded-3xl"
          >
            Clear Cart
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded-3xl"
          >
            Close
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default CartOverlay;
