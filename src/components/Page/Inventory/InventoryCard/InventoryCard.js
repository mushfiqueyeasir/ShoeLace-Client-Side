import React from "react";
import { Link } from "react-router-dom";
import "./InventoryCard.css";

const InventoryCard = ({ item, handleModal, handleDelete }) => {
  const { _id, name, img, description, price, quantity, supplyerName } = item;
  let newDes = "";
  if (description.length > 160) {
    newDes = description.slice(0, 160);
  }
  const url = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  return (
    <div className="col">
      <div className="card shadow p-3 round zoom">
        <div className="cardbg round d-flex justify-content-center">
          <img src={img} className="img img-fluid" alt="..." />
        </div>
        <div className="card-body minHight">
          <h5 className="card-title text-dark">{name}</h5>
          <h5 className="card-title">{supplyerName}</h5>

          {url === _id ? (
            <p className="card-text"> {description}</p>
          ) : (
            <p className="card-text">
              {newDes ? (
                <>
                  {newDes}{" "}
                  <button
                    id={_id}
                    onClick={handleModal}
                    className="seemore"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    ...see more
                  </button>
                </>
              ) : (
                description
              )}
            </p>
          )}
        </div>
        <div className="d-flex justify-content-lg-between align-items-center justify-content-md-between justify-content-between  mx-lg-2 mx-md-2 mx-sm-2 mx-2">
          <h2 className="price">${price}</h2>
          <h2
            className={
              quantity === "0" ? "price text-danger fs-5" : "price fs-4"
            }
          >
            <span>
              <i
                className={
                  quantity === "0"
                    ? "fas fa-sort-amount-up text-danger"
                    : "fas fa-sort-amount-up text-dark"
                }
              ></i>
            </span>
            <span>{quantity === "0" ? "Sold Out" : quantity}</span>
          </h2>
          {url === _id ? (
            <></>
          ) : (
            <Link to={`/inventory/${_id}`} className="btn-grad">
              Update
            </Link>
          )}

          {url === "myItem" ? (
            <button id={_id} onClick={handleDelete} className="btn-Delete fs-4">
              <i className="fa-solid fa-trash-can text-danger"></i>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
