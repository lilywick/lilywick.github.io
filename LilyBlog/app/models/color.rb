class Color < ActiveRecord::Base 
  has_many :posts_colors
  has_many :posts, :through => :posts_colors
end 