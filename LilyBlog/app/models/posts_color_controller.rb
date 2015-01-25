class PostsColor < ActiveRecord::Base 
  belongs_to :post
  belongs_to :color
end 