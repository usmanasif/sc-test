class IngredientSerializer < ApplicationSerializer
  set_type :ingredients
  attributes :name, :description, :classes, :minimum_percentage, :maximum_percentage
end
