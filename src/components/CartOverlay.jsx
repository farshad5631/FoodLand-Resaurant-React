// import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../context/CartContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";

// const CartOverlay = ({ onClose }) => {
//   const { cart, setCart, clearCart } = useContext(CartContext);
//   const [editMode, setEditMode] = useState(false);
//   const [editedQuantities, setEditedQuantities] = useState({});

//   useEffect(() => {
//     if (!editMode) {
//       setEditedQuantities({});
//     }
//   }, [editMode]);

//   const handleEditQuantity = (id, quantity) => {
//     setEditedQuantities({
//       ...editedQuantities,
//       [id]: parseInt(quantity),
//     });
//   };

//   const handleSave = () => {
//     const updatedCart = cart.map((item) => ({
//       ...item,
//       quantity:
//         editedQuantities[item.id] !== undefined
//           ? editedQuantities[item.id]
//           : item.quantity,
//     }));
//     setCart(updatedCart);
//     setEditMode(false);
//   };

//   const handleDelete = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
//   };

//   const handleOrder = () => {
//     toast.success("Order successfully saved!");
//     setTimeout(() => {
//       onClose();
//     }, 2000);
//     clearCart();
//   };

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 overflow-scroll">
//       <ToastContainer />
//       <div className="bg-white p-4 rounded w-1/2 relative shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li
//               key={item.id}
//               className="border-b p-2 flex justify-between items-center"
//             >
//               <Link to={`/food/${item.id}`}>
//                 <span>
//                   {item.title} - ${item.price}
//                 </span>
//               </Link>
//               {editMode ? (
//                 <input
//                   type="number"
//                   min="1"
//                   defaultValue={item.quantity}
//                   onChange={(e) => handleEditQuantity(item.id, e.target.value)}
//                   className="border p-1 w-16"
//                 />
//               ) : (
//                 <span>Quantity: {item.quantity}</span>
//               )}
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-3xl"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(item.id)}
//                 className="bg-red-500 text-white px-4 py-2 ml-2 rounded-3xl"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-4">
//           <h3 className="text-xl">Total Price: ${totalPrice.toFixed(2)}</h3>
//         </div>
//         {editMode && (
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white px-4 py-2 ml-2 rounded-3xl mt-4"
//           >
//             Save
//           </button>
//         )}
//         <div className="flex flex-row justify-between">
//           <button
//             onClick={handleOrder}
//             className="bg-yellow-500 text-white p-2 mt-4 rounded-3xl"
//           >
//             Order
//           </button>
//           <button
//             onClick={clearCart}
//             className="bg-red-500 text-white px-4 py-2 mt-4 rounded-3xl"
//           >
//             Clear Cart
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-red-500 text-white px-4 py-2 mt-4 rounded-3xl"
//           >
//             Close
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CartOverlay;

import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CartOverlay = ({ onClose }) => {
  const { cart, setCart, clearCart } = useContext(CartContext);
  const [editMode, setEditMode] = useState(false);
  const [editedQuantities, setEditedQuantities] = useState({});

  // Reset edits when exiting edit mode
  useEffect(() => {
    if (!editMode) setEditedQuantities({});
  }, [editMode]);

  // Update quantity in local state
  const handleEditQuantity = (id, value) => {
    setEditedQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, parseInt(value) || 1),
    }));
  };

  // Save edited quantities
  const handleSave = () => {
    const updatedCart = cart.map((item) => ({
      ...item,
      quantity: editedQuantities[item.id] ?? item.quantity,
    }));
    setCart(updatedCart);
    setEditMode(false);
  };

  // Remove item
  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Place order
  const handleOrder = () => {
    toast.success("Order successfully saved!");
    setTimeout(onClose, 1500);
    clearCart();
  };

  // Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-start sm:items-center z-50 overflow-y-auto p-2">
      <ToastContainer />

      {/* Modal */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Empty state */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 py-6">Your cart is empty</p>
        ) : (
          <>
            {/* Cart Items */}
            <ul className="space-y-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="border rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  {/* Title + price */}
                  <Link
                    to={`/food/${item.id}`}
                    className="font-medium hover:underline"
                  >
                    {item.title} - ${item.price}
                  </Link>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    {editMode ? (
                      <input
                        type="number"
                        min="1"
                        defaultValue={item.quantity}
                        onChange={(e) =>
                          handleEditQuantity(item.id, e.target.value)
                        }
                        className="border rounded px-2 py-1 w-16"
                      />
                    ) : (
                      <span className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => setEditMode(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="mt-5 border-t pt-3">
              <h3 className="text-lg font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </h3>
            </div>

            {/* Save button (Edit mode) */}
            {editMode && (
              <button
                onClick={handleSave}
                className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 rounded-full"
              >
                Save Changes
              </button>
            )}

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button
                onClick={handleOrder}
                className="w-full sm:w-auto flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full"
              >
                Order
              </button>

              <button
                onClick={clearCart}
                className="w-full sm:w-auto flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-full"
              >
                Clear Cart
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
