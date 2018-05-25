module Api
  module V1
    class PatientsController < BaseController
      def create
        patient = Patient.create!(create_params)
        render_json serialize(patient, include: %[prescription_details])
      end

      private

      def serialize(rel, opts = {})
        PatientSerializer.new(rel, opts).serializable_hash
      end

      def create_params
        params
          .require(:patient)
          .permit(
            :name,
            :dob,
            :address,
            prescription_details_attributes: %i[
              ingredient_id
              percentage
            ]
          )
      end
    end
  end
end
