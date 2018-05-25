# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
require 'csv'

csv_base = Rails.root.join('db', 'seed_csvs')

if Ingredient.all.empty?
  CSV.foreach("#{csv_base}/ingredients.csv", headers: true) do |row|
    ingredient = row.to_hash
    ingredient['classes'] = JSON.parse(row['classes'])
    Ingredient.create!(ingredient) # { |i| i.id = row['id'] }
  end
end

if Formulation.all.empty?
  CSV.foreach("#{csv_base}/formulations.csv", headers: true) do |row|
    formulation = row.to_hash.except('u1', 'u2')
    Formulation.create!(formulation)
  end
end

if RecipeItem.all.empty?
  CSV.foreach("#{csv_base}/formulation_ingredients.csv", headers: true) do |row|
    item = row.to_hash
    RecipeItem.create!(item)
  end
end
