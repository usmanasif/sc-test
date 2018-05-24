class Ingredient < ApplicationRecord
  has_many :recipe_items

  validates :name, presence: true
  validates :description, presence: true
  validates :classes, presence: true
  validates :minimum_percentage, presence: true
  validates :maximum_percentage, presence: true
end
