require "rails_helper"

module MlbClient
  describe Scoreboard do
    subject(:scoreboard) { Scoreboard.new(2000, 1, 2) }

    describe "initialize" do
      it "sets the year" do
        expect(scoreboard.year).to be(2000)
      end

      it "sets the month" do
        expect(scoreboard.month).to be(1)
      end

      it "sets the day" do
        expect(scoreboard.day).to be(2)
      end
    end

    describe "fetch" do
      it "returns the game data from the scoreboard call" do
        scoreboard_data = ["scoreboard_data"]
        scoreboard_response = {
          "data" => {
            "games" => {
              "game" => scoreboard_data
            }
          }
        }
        allow(scoreboard).to receive(:get).and_return(scoreboard_response)

        expect(scoreboard.fetch).to eq(scoreboard_data)
      end
    end
  end
end
