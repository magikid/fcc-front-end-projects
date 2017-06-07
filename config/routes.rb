Rails.application.routes.draw do
  get 'twitch', to: "twitch#index"

  scope '/api/twitch' do
    get 'users/:username', to: "twitch#user"
    get 'streams/:username', to: "twitch#stream"
    get 'channels/:username', to: "twitch#channel"
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
