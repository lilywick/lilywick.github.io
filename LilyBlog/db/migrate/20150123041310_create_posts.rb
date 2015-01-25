class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.references :posts_category
      t.references :posts_color

      t.timestamps
    end
  end
end
