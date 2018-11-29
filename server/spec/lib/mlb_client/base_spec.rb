require "net/http"
require "rails_helper"

module MlbClient
  describe Base do
    describe "requests" do
      let(:url) { "www.url.com" }
      let(:uri) { URI(url) }

      it "delegates 'get' to Net::HTTP" do
        mock_response = { key: :value }.to_json

        expect(::Net::HTTP)
          .to receive(:get)
          .with(uri)
          .and_return(mock_response)

        response = Base.new.get(url)
        expect(response["key"]).to eq("value")
      end
    end
  end
end
