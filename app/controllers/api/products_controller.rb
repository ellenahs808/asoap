class Api::ProductsController < ApplicationController

    def index
        @products = Product.all

    end

    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end

    def create
        @product = Product.new(product_params)

    end


    # def create
    #     message = Message.create! params.require(:message).permit(:title, :content)
    #     message.images.attach(params[:message][:images])
    #     redirect_to message
    # end

    def product_params
        params.require(:product).permit(:name, :category, :sub_category, :description, :size, :price, :how_to_use, :key_ingredients)
    end

end
