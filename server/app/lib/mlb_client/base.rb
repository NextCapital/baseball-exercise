module MlbClient
  require 'net/http'

  RequestError = Class.new(StandardError)

  class Base
    BASE_URL = "http://gdx.mlb.com"

    def get(url)
      response = Net::HTTP.get(URI(url))
      raise RequestError , "Invalid URL: #{url}" if response =~ /^<\?xml/

      JSON.parse(response)
    end
  end
end
