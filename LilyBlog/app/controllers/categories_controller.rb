class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end


  def show
    @posts = Post.where(posts_category_id: (params[:id]))
  end

end
