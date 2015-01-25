class CreateColors < ActiveRecord::Migration
  def change
    create_table :colors do |t|
      t.string "color_name"
      t.references :posts_color
    end
  end
end
