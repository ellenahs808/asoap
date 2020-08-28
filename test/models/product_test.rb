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
#  how_to_use      :text             not null
#  key_ingredients :text             not null
#  suited_to       :string
#  skin_feel       :string
#  dosage          :string
#  texture         :string
#  aroma           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  price           :float
#
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
