# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, :product_id, :quantity, presence: true


    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id

        
    belongs_to :product,
        class_name: :Product,
        foreign_key: :product_id
end
