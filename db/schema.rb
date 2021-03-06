# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_25_035145) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "formulations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.string "classes", default: [], null: false, array: true
    t.decimal "minimum_percentage", precision: 6, scale: 3, null: false
    t.decimal "maximum_percentage", precision: 6, scale: 3, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string "name", null: false
    t.date "dob", null: false
    t.text "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prescription_details", force: :cascade do |t|
    t.bigint "ingredient_id", null: false
    t.bigint "patient_id", null: false
    t.decimal "percentage", precision: 6, scale: 3, null: false
    t.index ["ingredient_id"], name: "index_prescription_details_on_ingredient_id"
    t.index ["patient_id"], name: "index_prescription_details_on_patient_id"
  end

  create_table "recipe_items", force: :cascade do |t|
    t.bigint "formulation_id", null: false
    t.bigint "ingredient_id", null: false
    t.decimal "percentage", precision: 6, scale: 3, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["formulation_id"], name: "index_recipe_items_on_formulation_id"
    t.index ["ingredient_id"], name: "index_recipe_items_on_ingredient_id"
  end

end
