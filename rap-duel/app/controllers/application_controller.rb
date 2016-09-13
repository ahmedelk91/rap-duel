class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  root to: 'application#angular'

  def angular
    render 'layout/application'
  end
end
