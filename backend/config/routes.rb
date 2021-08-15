Rails.application.routes.draw do
  resources :articles
  get '/history', to: 'calc#index'
  post '/calc', to: 'calc#create'
end
