class Post < ActiveRecord::Base 
  extend ::FriendlyId 
  friendly_id :title, use: :slugged 
  validates :title, presence: true 
  # validates :body, presence: true 
  has_many :posts_categories
  has_many :posts_colors
  has_many :categories, :through => :posts_categories
  has_many :colors, :through => :posts_colors
  mount_uploader :image, ImageUploader

end 