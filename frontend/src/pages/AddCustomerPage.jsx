import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { useState } from "react";



export const AddCustomerPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const getName = (event) => {
    setName(event.target.value);
    console.log(event)
  };
  const getSurname = (event) => {
    setSurname(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const customerData = {
      name: name,
      surname: surname,
      email: email,
      phone_number: phone_number,
    };


    const response = fetch("http://127.0.0.1:8000/customers/", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
      
    }).then((res)=>res.json())
      .then((data)=> console.log(data));


  console.log(response);

  setName("");
  setSurname("");
  setEmail("");
  setPhoneNumber("");

  }

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
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"></div>
          <Form>
            <Input value={name} onChange ={getName} type="text" name="name" placeholder="Name"/>
            <Input value={surname} onChange={getSurname} type="text" name="surname" placeholder="Surname"/>
            <Input value={email} onChange={getEmail} name="email" placeholder="Email"/>
            <Input value={phone_number} onChange={getPhoneNumber} type="text" name="phone_number" placeholder="Phone number"/>
            <Button type="submit" onClick={handleSubmitForm}>Add</Button>
          </Form>
      </div>
    </div>
  );
};
