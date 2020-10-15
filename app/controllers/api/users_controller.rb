class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            # redirect_to api_user_url(@user)
            # render "api/users/show"
            # render json: ["You are now logged in."]
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private
    def user_params
        # debugger
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end

end
