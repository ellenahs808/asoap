class Api::CartsController < ApplicationController

    def index
        # @cart_items = Cart.where(user_id: current_user.id)
        
        # if current_user 
        #     @cart_items = current_user.carts
        # else
        #     @cart_items = []
        # end 
        
        # render :index
        
        @cart_items = current_user.carts
        render :index
        # debugger
    end


    def show
        @cart_item = Cart.find(params[:id])
        render :show
    end


    def create
        @cart_items = Cart.where(user_id: current_user.id)
        @cart_item = Cart.new(cart_item_params)
        
        if @cart_item.save 
            render :show 
            # render json: @cart_item
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end


        # debugger
    end
    

    def update
        # debugger
        # @cart_item = Cart.find_by(id: params[:id])
        @cart_item = Cart.find_by(user_id: current_user.id, product_id: cart_item_params[:product_id]);

        if @cart_item
            if @cart_item.update(cart_item_params)
                render :show
            else 
                render json: @cart_item.errors.full_messages, status: 422
            end
        else
            @cart_item = Cart.find_by(id: params[:id])
                if @cart_item.update(cart_item_params)
                    render :show
                else 
                    render json: @cart_item.errors.full_messages, status: 422
                end
        end
    end

    
    def destroy
        # @cart_item = Cart.where(user_id: current_user.id)
        # debugger
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.destroy
        render :show
    end




    private
    def cart_item_params
        # debugger
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end


end
