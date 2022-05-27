import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { itemsId } = useParams();
  const [items, setItems] = useState({});
  const { _id, img, name, price, availableProducts, minimumOrder, description } =
    items;
  useEffect(() => {
    const url = `http://localhost:5000/item/${itemsId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const handleOrder = (event) => {
    event.preventDefault();
    const totalOrderItems = event.target.totalItems.value
    const totalOrderItemsInt = parseInt(totalOrderItems)

    if (minimumOrder < event.target.totalItems.value && availableProducts > event.target.totalItems.value) {
      const booking = {
        itemId: _id,
        item: name,
        user: user.email,
        userName: user.displayName,
        address: event.target.address.value,
        phone: event.target.phone.value,
        totalItems: totalOrderItemsInt,
        orderNote: event.target.orderNote.value
      }
      fetch('http://localhost:5000/order/add', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          toast(`Order Placed Successfully`)
          event.target.address.value = ''
          event.target.phone.value = ''
          event.target.totalItems.value = ''
          event.target.orderNote.value = ''
        }
        )
    } else {
      toast.error(`Please select total items between ${minimumOrder} to ${availableProducts
        }`)
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto md:flex  justify-evenly py-24">
        <div>
          <div className="text-center font-bold py-5">
            <h3>Name : {user?.displayName}</h3>
            <h3>Email : {user?.email}</h3>
          </div>
          <form className="w-full max-w-sm" onSubmit={handleOrder}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="address"
                >
                  Address
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  name="address"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="phone"
                >
                  Phone
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  name="phone"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="phone"
                  type="text"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="total-items"
                >
                  Total Items
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  name="totalItems"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="total-items"
                  type="text"
                  placeholder="Enter total item" required
                />

              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="note"
                >
                  Order Note
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  name="orderNote"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="note"
                  type="text"
                  placeholder="Enter note (optional)"
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow btn-primary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Order Now
                </button>
              </div>
            </div>
          </form></div>

        <div className=" md:w-[350px] lg:w-[400px] bg-white text-center pb-8 mx-auto">
          <img src={img} alt="" className="mx-auto" />
          <div className="text-primary py-4 flex gap-2 justify-center">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>{name}</p>
          <div className="flex flex-wrap gap-1 justify-center">
            <p className="text-lg font-bold p-2">
              ${price}
              <small>/unit</small>
            </p>
            <p className="text-lg font-bold p-2">
              {availableProducts}
              <small> in stock</small>
            </p>
            <p className="text-lg font-bold p-2">Minimum Order: {minimumOrder}</p>
          </div>
          <p className=" p-2 pb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
