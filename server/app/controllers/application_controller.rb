class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  enable :sessions

  # Add user
  post '/user/register' do
    user = User.create(
      name: params[:name],
      email: params[:email],
      location: params[:location],
      password: params[:password]
    )
    if user.valid?
      session[:user_id] = user.id
      { message: "User created successfully" }.to_json
    else
      { error: "Registration failed" }.to_json
    end
  end

  # Login
  post '/user/login' do
    user = User.find_by(email: params[:email], password: params[:password])
    if user
      session[:user_id] = user.id
      { message: "Logged in successfully" }.to_json
    else
      { error: "Invalid email or password" }.to_json
    end
  end

  # Logout
  post '/user/logout' do
    session[:user_id] = nil
    { message: "Logout successfully" }.to_json
  end

  # Add pet
  post '/add/pet' do
    user = User.find_by(id: session[:user_id])
    if user
      pet = Pet.create(
        name: params[:name],
        breed: params[:breed],
        age: params[:age],
        user_id: user.id
      )
      if pet.valid?
        { message: "Pet added successfully" }.to_json
      else
        { error: "Failed to add pet" }.to_json
      end
    else
      { error: "You must be logged in to add a pet" }.to_json
    end
  end

  # View all pets
  get '/pets' do
    pets = Pet.all
    pets.to_json
  end

  # View all pets for current user
  get '/pets/user' do
    user = User.find_by(id: session[:user_id])
    if user
      pets = user.pets
      pets.to_json
    else
      { error: "You must be logged in to view your pets" }.to_json
    end
  end

  # Search pets by name
  get '/pets/search/name/:name' do
    pets = Pet.where("name LIKE ?", "%#{params[:name]}%")
    pets.to_json
  end

  # Search pets by breed
  get '/pets/search/breed/:breed' do
    pets = Pet.where("breed LIKE ?", "%#{params[:breed]}%")
    pets.to_json
  end

  # Update pet details
     
