class FormulationSerializer < ApplicationSerializer
  set_type :formulations
  attributes :name

  has_many :recipe_items
end
