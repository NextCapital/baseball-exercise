class GamesController < ApplicationController
  def index
    render json: MlbClient::Scoreboard.new(2015, 10, 12).games
  end
end
