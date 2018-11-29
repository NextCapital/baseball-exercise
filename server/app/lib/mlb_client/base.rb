module MlbClient
  class Base
    BASE_URL = "http://gdx.mlb.com"

    def get(url)
      response = Net::HTTP.get(URI(url))
      JSON.parse(response)
    end
  end
end
