from pydantic import BaseModel


class CustomerCreateSchema(BaseModel):
    name: str
    surname: str
    email: str
    phone_number: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Jan",
                "surname": "Kowalski",
                "email": "jan.kowalski@example.com",
                "phone_number": "000-000-000",
            }
        }


class CustomerUpdateSchema(BaseModel):
    name: str | None
    surname: str | None
    email: str | None
    phone_number: str | None

    class Config:
        schema_extra = {"example": {"name": "Jan", "surname": "Kowalski"}}


class Customer(CustomerCreateSchema):
    id: int


class OrderCreateSchema(BaseModel):
    customer_id: int
    customer_order: list[int]

    class Config:
        schema_extra = {
            "example": {
                "customer_id": 0,
                "customer_order": [0, 1, 2, 3],
            }
        }


class Order(OrderCreateSchema):
    id: int


class ProductCreateSchema(BaseModel):
    name: str
    price: float
    about: str

    class Config:
        schema_extra = {
            "example": {
                "name": "Product",
                "price": 0.0,
                "about": "Product description",
            }
        }


class Product(ProductCreateSchema):
    id: int