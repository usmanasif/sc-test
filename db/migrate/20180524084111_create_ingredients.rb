class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.string :description
      t.string :classes, array: true, default: [], null: false

      t.decimal :minimum_percentage, null: false, precision: 6, scale: 3
      t.decimal :maximum_percentage, null: false, precision: 6, scale: 3

      t.timestamps
    end
  end
end
