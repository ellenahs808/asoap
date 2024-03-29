class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.string :sub_category, null: false
      t.text :description, null: false
      t.string :size, null: false
      t.float :price, null: false
      t.text :how_to_use, null: false
      t.text :key_ingredients, null: false
      t.string :suited_to
      t.string :skin_feel
      t.string :dosage
      t.string :texture
      t.string :aroma

      t.timestamps
    end

    add_index :products, :name, unique: true
    add_index :products, :category
    add_index :products, :sub_category
  end
end
