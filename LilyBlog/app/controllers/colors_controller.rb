class ColorsController < ApplicationController

  def index
    @colors = Color.all
  end


  def show
    @posts = Post.where(posts_color_id: (params[:id]))
  end


end
