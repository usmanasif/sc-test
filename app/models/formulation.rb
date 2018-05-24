class Formulation < ApplicationRecord
  has_many :recipe_items
  has_many :ingredients, through: :recipe_items

  validates :name, presence: true
end
