import { useState, useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";

export const ProductsPage = () => {
  const [Product, setProduct] = useState([]);

  const fetchProduct = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };

  useEffect(() => {
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
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <ul>
            {Product.map((item) => (
              <li key={item.id}>
                <p>
                  <b>Name: </b>{item.name}
                </p>
                <p>
                  <b>Price: </b>{item.price}$
                </p>
                <p>
                  <b>About: </b>{item.about}
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