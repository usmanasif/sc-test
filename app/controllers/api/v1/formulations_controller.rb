module Api
  module V1
    class FormulationsController < BaseController
      def index
        formulations = Formulation.includes(:recipe_items).all
        render_json serialize(formulations, include: %i[recipe_items])
      end

      private

      def serialize(rel, opts = {})
        FormulationSerializer.new(rel, opts).serializable_hash
      end
    end
  end
end
