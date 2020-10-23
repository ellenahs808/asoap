# @cart_items.each do |cart_item|
#     json.set! cart_item.id do
#         json.partial! 'api/carts/cart_item', cart_item: cart_item
#     end
# end



json.cart_items do 
    @cart_items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :user_id, :product_id, :quantity
        end
    end
end



# json.products do 
#     @cart_items.each do |item|
#         json.set! item.product.id do 
#             json.extract! item.product, :id, :name, :category, :sub_category, :description, :price, :size, :how_to_use, :key_ingredients, :suited_to, :skin_feel, :dosage, :texture, :aroma
#             json.photoUrls product.photos.map { |photo| url_for(photo) }
#         end
#     end
# end
