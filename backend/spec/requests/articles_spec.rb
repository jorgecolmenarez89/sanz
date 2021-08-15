require 'rails_helper'

RSpec.describe "Articles", type: :request do
  describe "GET /index" do
    pending "add some examples (or delete) #{__FILE__}"
  end
  post articles_path, Article: {title: 'primero', body: 'segundo'}
  get users_path
  expect(response.body).to include 'Saved article'
  expect(response).to have_http_status(200)
end
