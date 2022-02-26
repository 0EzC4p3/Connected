Rails.application.routes.draw do
  root to: "homes#index"
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
