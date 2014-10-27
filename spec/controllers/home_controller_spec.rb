require 'rails_helper'

describe HomeController do
  describe 'GET index' do
    it 'should render the index template' do
      get :index
      expect(response).to render_template(:index)
    end
  end

  describe 'GET server/time' do
    it 'gets the server time in a json response' do
      get :current_time
      expect(JSON.parse(response.body).keys).to include('current_time')
      expect(JSON.parse(response.body).keys).to include('message')
    end
  end
end
