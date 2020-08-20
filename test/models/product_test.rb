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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
