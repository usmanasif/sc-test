class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name, null: false
      t.date :dob, null: false
      t.text :address, null: false

      t.timestamps
    end
  end
end
