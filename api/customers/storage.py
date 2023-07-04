from functools import lru_cache

from .schema import Customer, Order, Product

CustomerStorageType = dict[int, Customer]
OrdersStorageType = dict[int, Order]
ProductsStorageType = dict[int, Product]

CUSTOMERS: CustomerStorageType = {}
ORDERS: OrdersStorageType = {
    0: Order(
        customer_id=0,
        customer_order=[0,1,2],
        id=0,
    ),
    1: Order(
        customer_id=1,
        customer_order=[3,4,5],
        id=1,
    ),
}
PRODUCTS: ProductsStorageType = {
    0: Product(id=0, name="Product", price=100.0, about="Lorem ipsum dolor sit amet"),
    1: Product(id=1, name="Product1", price=100.0, about="Lorem ipsum dolor sit amet"),
    2: Product(id=2, name="Product2", price=200.0, about="Lorem ipsum dolor sit amet"),
    3: Product(id=3, name="Product3", price=300.0, about="Lorem ipsum dolor sit amet"),
    4: Product(id=4, name="Product4", price=400.0, about="Lorem ipsum dolor sit amet"),
    5: Product(id=5, name="Product5", price=500.0, about="Lorem ipsum dolor sit amet"),
}


@lru_cache(maxsize=1)
def get_customers_storage() -> CustomerStorageType:
    return CUSTOMERS


@lru_cache(maxsize=1)
def get_orders_storage() -> OrdersStorageType:
    return ORDERS


@lru_cache(maxsize=1)
def get_products_storage() -> ProductsStorageType:
    return PRODUCTS