# == Schema Information
#
# Table name: products
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  description     :text             not null
#  price           :float            not null
#  size            :string           not null
#  instructions    :text             not null
#  category_id     :integer          not null
#  sub_category_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :description, :price, :size, :instructions, presence: true
    validates :category_id, :sub_category_id, presence: true, uniqueness: true

    belongs_to :category,
        class_name: :Category, 
        foreign_key: :category_id

    belongs_to :sub_category
        class_name: :SubCategory,
        foreign_key: :sub_category_id

end
