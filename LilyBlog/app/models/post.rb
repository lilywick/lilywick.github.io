class Post < ActiveRecord::Base 
  extend ::FriendlyId 
  friendly_id :title, use: :slugged 
  validates :title, uniqueness: true 
  # validates :body, presence: true 
  validates :color, presence: true

  mount_uploader :image, AvatarUploader

end 