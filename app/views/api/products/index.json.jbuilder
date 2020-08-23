@products.each do |product|
    json.set! product.id do
        json.partial! "api/products/product", product: product
            json.photoUrls product.photos.map { |file| url_for(file) }
    end
end




# @products.each do |product|
#     json.set! product.id do
#         json.extract! product,
#             :id,
#             :name,
#             :category,
#             :sub_category,
#             :description,
#             :size,
#             :price,
#             :how_to_use,
#             :key_ingredients,
#             :suited_to,
#             :skin_feel,
#             :dosage,
#             :texture,
#             :aroma
#     end
# end