module Api
  module V1
    class BaseController < ActionController::API
      require 'active_model/validations'

      rescue_from ActiveRecord::ActiveRecordError, with: :render_error
      rescue_from ActiveModel::ValidationError, with: :render_error

      protected

      def render_json(obj, args = {})
        render args.merge(json: obj)
      end

      def render_error(exception)
        errors = { errors: [exception.message] }
        render_json errors, status: 422
      end
    end
  end
end
