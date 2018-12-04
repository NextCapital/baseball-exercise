require "rails_helper"

describe Game do
  subject(:game) { Game.new("home_team", "away_team") }

  describe "initialize" do
    it "sets the sets the home team" do
      expect(game.home_team).to eq("home_team")
    end

    it "sets the away team" do
      expect(game.away_team).to eq("away_team")
    end
  end
end
