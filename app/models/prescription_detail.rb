class PrescriptionDetail < ApplicationRecord
  belongs_to :ingredient
  belongs_to :patient

  validates :percentage, presence: true
end
