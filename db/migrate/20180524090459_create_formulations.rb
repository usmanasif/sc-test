class CreateFormulations < ActiveRecord::Migration[5.2]
  def change
    create_table :formulations do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
