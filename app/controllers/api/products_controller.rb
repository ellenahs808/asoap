class Api::ProductsController < ApplicationController
    def create
        @product = Product.new(product_params)
        
    end

    def index
        @products = Product.all

    end

    def show
        @product = User.find_by(id: params[:id])
    end

    def product_params
        params.require(:product).permit(:name, :description, :price, :size, :instructions, :category_id, :sub_category_id)
    end

end
