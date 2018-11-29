module MlbClient
  class Scoreboard < Base
    GAME_BASE_URL = "#{BASE_URL}/components/game/mlb"

    attr_reader :year, :month, :day

    def initialize(year, month, day)
      @year = year
      @month = month
      @day = day
    end

    def fetch
      scoreboard = get(scoreboard_url)
      scoreboard.dig("data", "games", "game")
    end

    def games
      fetch.map do |game|
        Game.new(
          Team.new(game["home_team_name"]),
          Team.new(game["away_team_name"])
        )
      end
    end

    private

    # year_2015/month_10/day_12/master_scoreboard.json
    def scoreboard_url
      [
        GAME_BASE_URL,
        "year_#{year}",
        "month_#{month}",
        "day_#{day}",
        "master_scoreboard.json",
      ].join("/")
    end
  end
end
