class RecipeItemSerializer < ApplicationSerializer
  set_type :recipe_items
  attributes :percentage, :ingredient_id
end
