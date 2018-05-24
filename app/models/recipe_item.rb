class RecipeItem < ApplicationRecord
  belongs_to :ingredient
  belongs_to :formulation

  validates :percentage, presence: true
end
