class SessionsController < ApplicationController
  before_action only: [:destroy, :access] do 
    authenticate_cookie
  end

  def access
    render json: {key: 'you did it'}
  end

  def destroy
    user = current_user
    if user  
      cookies.delete(:jwt)
      render json: {status: 'OK', code: 200}
    else
      render json: {status: 'session not found', code: 404}
    end
  end

  def create
    email = params["email"]
    password = params["password"]
    if email && password
      token = JsonWebToken.encode({ email: email }) #User.handle_login(email, password)
      if token
        cookies.signed[:jwt] = { value: token, httponly: true }
        render json: { 
          user_id: email,
          name: 'hello',
        }
      else
        render json: {status: 'incorrect email or password', code: 422}  
      end
    else
      render json: {status: 'specify email address and password', code: 422}
    end
  end
end
