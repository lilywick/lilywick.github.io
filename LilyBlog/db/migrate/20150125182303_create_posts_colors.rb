class CreatePostsColors < ActiveRecord::Migration
  def change
    create_table :posts_colors do |t|
      t.references :post
      t.references :color
    end
  end
end
