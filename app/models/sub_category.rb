# == Schema Information
#
# Table name: sub_categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class SubCategory < ApplicationRecord
    validates :name, presence: true

    has_many :products,
        class_name: :Product,
        foreign_key: :sub_category_id
end
