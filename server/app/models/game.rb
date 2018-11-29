class Game
  attr_reader :home_team, :away_team

  def initialize(home_team, away_team)
    @home_team, @away_team = home_team, away_team
  end
end
