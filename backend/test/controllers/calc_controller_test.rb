require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "index test calc action success" do
    get '/history'
    assert_response :success
  end

  test "post test calc action succes" do
    post calc_path, params: { "numbers": ["3","6","2","true"] }, as: :json
    assert_response :success
  end
end