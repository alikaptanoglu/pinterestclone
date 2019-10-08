Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
  # namespace :api do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:create, :update, :index, :destroy]
    resources :pins, only: [:create, :update, :index, :destroy]
  end

  root "static_pages#root"
end