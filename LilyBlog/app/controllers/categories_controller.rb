class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end


  def show
    @category = Category.find(params[:id])
    @posts = Post.where(posts_category_id: @category.id)
  end

end
