# == Schema Information
#
# Table name: products
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  category        :string           not null
#  sub_category    :string           not null
#  description     :text             not null
#  size            :string           not null
#  price           :float            not null
#  how_to_use      :text             not null
#  key_ingredients :text             not null
#  suited_to       :string
#  skin_feel       :string
#  dosage          :string
#  texture         :string
#  aroma           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :category, :sub_category, :description, :size, :price, :how_to_use, :key_ingredients, presence: true 

    has_many_attached :photos
    
end
