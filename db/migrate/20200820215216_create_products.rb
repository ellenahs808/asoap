class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :size, null: false
      t.text :instructions, null: false
      t.integer :category_id, null: false
      t.integer :sub_category_id, null: false

      t.timestamps
    end
    add_index :products, :category_id, unique: true
    add_index :products, :sub_category_id, unique: true 

  end
end
