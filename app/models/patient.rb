class Patient < ApplicationRecord
  has_many :prescription_details

  validates :name, presence: true
  validates :address, presence: true
  validates :dob, presence: true
end
