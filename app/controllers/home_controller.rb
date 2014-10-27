class HomeController < ApplicationController
  # this serves the angular app
  def index

  end

  def current_time
    render json: { current_time: Time.zone.now, message: "The current time is #{Time.zone.now}" }
  end
end
