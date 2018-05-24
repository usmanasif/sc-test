class CreateRecipeItems < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_items do |t|
      t.references :formulation, null: false, index: true
      t.references :ingredient, null: false, index: true

      t.decimal :percentage, null: false, precision: 6, scale: 3
      t.timestamps
    end
  end
end
