class CreatePrescriptionDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :prescription_details do |t|
      t.references :ingredient, index: true, null: false
      t.references :patient, index: true, null: false
      t.decimal :percentage, null: false, precision: 6, scale: 3
    end
  end
end
