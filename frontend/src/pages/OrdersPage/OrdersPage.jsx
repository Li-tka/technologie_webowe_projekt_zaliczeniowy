import { useState, useEffect } from "react";

import { MainNav } from "@/components/MainNav";

import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";

export const OrdersPage = () => {
  const [ordersData, setOrder] = useState([]);
  const [Product, setProduct] = useState([]);

  const fetchOrder = () => {
    fetch("http://127.0.0.1:8000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      });
  };

  const fetchProduct = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchOrder();
    fetchProduct();
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <ul>
            {ordersData.map((item) => (
              <li key={item.id}>
                <p>
                  <b>Customer ID: </b>{item.customer_id}
                </p>
                <p>
                  <b>Order ID: </b>{item.customer_order.join(", ")}
                </p>
                <p>
                  <b>Products: </b>
                  {Product.reduce((result, product) => {
                        if (item.customer_order.includes(product.id)) {
                            result.push(product.name);
                        }
                        return result;
                    }, []).join(", ")}
                </p>
                <br></br>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};