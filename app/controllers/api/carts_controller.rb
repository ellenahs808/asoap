class Api::CartsController < ApplicationController

    def index
        # @cart_items = Cart.where(user_id: current_user.id)
        if current_user 
            @cart_items = current_user.cart_items 
        else
            @cart_items = []
        end 

        render :index
    end


    def show
        @cart_item = Cart.find(params[:id])
        render :show
    end


    def create
        # @cart_items = Cart.where(user_id: current_user.id)
        # @cart_item = Cart.find_by(user_id: current_user.id, product_id: cart_item_params[:product_id])

        # if current_user
        #     if @cart_item.nil?
        #         @cart_item = Cart.new(cart_item_params)
        #         debugger
        #         @cart_item.user_id = current_user.id
        #         @cart_item.save 
        #         # render :index
        #         console.log("Cart Created")
        #     else
        #         new_quantity = @cart_item.quantity + params[:cart_item][:quantity][:user_id].to_i
        #         @cart_item.update(quantity: new_quantity)
        #         render :index
        #     end
        # else
        #     render json: ['Please Sign In'], status: 422
        # end

        @cart_item = Cart.new(cart_item_params)
        # debugger
      
        if @cart_item.save 
            # render :show 
            render json: @cart_item
        else 
            # render json: @cart_item.errors.full_messages, status: 422
            render json: {message: "Failed to add cart"}, status: 422

        end

    end
    

    def update
        # @cart_items = Cart.where(user_id: current_user.id)

        # @cart_item = Cart.find(params[:id])

        # if @cart_item.update(cart_item_params)
        #     render :index
        # else
        #     render json: ['Something went wrong, please try again'], status: 422
        # end

        @cart_item = Cart.find_by(id: params[:id])

        if @cart_item.update(cart_item_params)
            render :show
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    
    def destroy
        # @cart_items = Cart.where(user_id: current_user.id)
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.destroy
        render :index 
    end



    private
    def cart_item_params
        # debugger
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end


end
