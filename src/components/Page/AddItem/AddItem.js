import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../resources/logo.png";
import "./AddItem.css";
import { Create } from "../../../hooks/create";

const AddItem = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/inventory";

  const addItem = (event) => {
    event.preventDefault();
    const item = {
      email: user.email,
      name: event.target.name.value,
      supplyerName: event.target.supplyerName.value,
      description: event.target.description.value,
      img: event.target.img.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
    };

    Create(item, navigate(from, { replace: true }));
  };
  return (
    <div className="container mt-5 ">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={logo}
          className="img-fluid me-4 d-none d-md-block"
          alt=""
          style={{ width: "100px" }}
        />
        <h2 className="text-center fw-bold">Add Item</h2>
      </div>

      <div className="d-flex justify-content-center mb-3">
        <form onSubmit={addItem} className="form login wide  my-2">
          {/* Product name */}
          <div className="form__field">
            <label>
              <i className="fas fa-shoe-prints"></i>
            </label>
            <input
              name="name"
              type="text"
              className="form__input"
              placeholder="Item Name"
              required
            />
          </div>
          {/* Supplier Name */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-copyright"></i>
            </label>
            <input
              name="supplyerName"
              type="text"
              className="form__input"
              placeholder="Supplier Name"
              required
            />
          </div>

          {/* Description */}
          <div className="form__field">
            <label className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-book-open "></i>
            </label>
            <textarea
              rows="4"
              cols="40"
              name="description"
              type="text"
              className="form__input"
              placeholder="Description"
              required
            />
          </div>

          {/* Image */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-image"></i>
            </label>
            <input
              name="img"
              type="text"
              className="form__input"
              placeholder="Image"
              required
            />
          </div>

          {/* Price */}
          <div className="form__field">
            <label>
              <i className="fa-solid fa-dollar-sign"></i>
            </label>
            {/* <input name='price' type="number" className="form__input" placeholder="Price" required /> */}
            <input
              name="price"
              type="number"
              className="form__input"
              placeholder="Price"
              required
            />
          </div>
          {/* Quantity */}
          <div className="form__field">
            <label>
              <i className="fas fa-sort-amount-up"></i>
            </label>
            <input
              name="quantity"
              type="number"
              className="form__input"
              placeholder="Quantity"
              required
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
