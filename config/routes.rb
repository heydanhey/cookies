Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/sessions', to: 'sessions#create'
  get '/sessions', to: 'sessions#access'
end
