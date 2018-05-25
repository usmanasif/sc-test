class PatientSerializer < ApplicationSerializer
  set_type :patients
  attributes :name, :dob, :address

  has_many :prescription_details
end
