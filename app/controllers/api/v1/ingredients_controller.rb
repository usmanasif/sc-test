module Api
  module V1
    class IngredientsController < BaseController
      def index
        ingredients = Ingredient.all
        render_json serialize(ingredients)
      end

      private

      def serialize(rel, opts = {})
        IngredientSerializer.new(rel, opts).serializable_hash
      end
    end
  end
end
