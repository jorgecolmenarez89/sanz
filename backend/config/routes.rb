Rails.application.routes.draw do
  resources :users
  get '/history', to: 'calc#index'
  post '/calc', to: 'calc#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
