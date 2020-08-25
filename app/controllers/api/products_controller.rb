class Api::ProductsController < ApplicationController

    def index
        @products = Product.with_attached_photos.all
        # @products = Product.all 
        render :index 
    end

    def show
        # debugger
        @product = Product.with_attached_photos.find_by(id: params[:id])
        # @product = Product.with_attached_photos.find(params[:id])
        render :show
    end

 

end


