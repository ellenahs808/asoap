class Api::ProductsController < ApplicationController

    def index
        @products = Product.all

    end

    def show
        @product = User.find_by(id: params[:id])
    end

    def product_params
        params.require(:product).permit(:name, :category, :sub_category, :description, :size, :price, :how_to_use, :key_ingredients)
    end

end
