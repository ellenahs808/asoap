# json.partial! 'api/carts/cart_item', { cart_item: @cart_item }



json.extract! @cart_item, :id, :product_id, :user_id, :quantity