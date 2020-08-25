class Api::ProductsController < ApplicationController

    def index
        @products = Product.with_attached_photos.all
        # @products = Product.all 
        render :index 
    end

    def show
        @product = Product.with_attached_photos.find(params[:id])
        render :show
    end

 

end


