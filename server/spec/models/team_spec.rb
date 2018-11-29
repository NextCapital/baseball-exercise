require "rails_helper"

describe Team do
  subject(:team) { Team.new("name") }

  describe "initialize" do
    it "sets the name" do
      expect(team.name).to eq("name")
    end
  end
end
