Rails.application.routes.draw do
  root to: 'pages#react_root'

  namespace :api, except: %i[edit new] do
    namespace :v1 do
      resources :formulations, only: :index
      resources :ingredients, only: :index
      resources :patients, only: :create
    end
  end

  get '*path', to: 'pages#react_root'
end
