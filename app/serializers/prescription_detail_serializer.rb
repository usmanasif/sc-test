class PrescriptionDetailSerializer < ApplicationSerializer
  set_type :prescription_details
  attributes :percentage, :ingredient_id
end
