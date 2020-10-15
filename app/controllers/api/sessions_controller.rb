class Api::SessionsController < ApplicationController


    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            # render json: ["You are logged in!"]
            render "api/users/show"

        else
            render json: ["Invalid email or password"], status: 401
        end
    end


    def destroy
        # @user = User.find(params[:id])
        if logged_in?
            logout!
            # render json: {}
            render json: ["You are now logged out!"]
            # render "api/users/show"
        else
            render json: ["You are not signed in"], status: 404
        end
    end

end
