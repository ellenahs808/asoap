class Api::ProductsController < ApplicationController

    def index
        @products = Product.with_attached_photos.all
        # @products = Product.all 
        render :index 
    end

    def show
        # debugger
        @product = Product.with_attached_photos.find(params[:id])
        # render :show
        # @product = Product.find_by(id: params[:id])
        if @product
            render :show
        else
            render json: ['Product not found'], status: 404
        end
    end

 

end




    # def index 
    #     @products = Product.all 
    #     render :index 
    # end

    # def show 
    #     @product = Product.find_by(id: params[:id])
    #     if @product
    #         render :show
    #     else
    #         render json: ['Product not found'], status: 404
    #     end
    # end