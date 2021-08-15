require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "index test action success" do
    get articles_url
    assert_response :success
  end

  test "post test action succes" do
    post articles_path, params: { title: "Ahoy!", body: "Lesfloreto" }, as: :json
    assert_response :success
  end
end
