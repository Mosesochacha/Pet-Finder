class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"
  enable :sessions
  

  # Add user
  post "/user/register" do
    begin
      user = User.create(
        name: params[:name],
        email: params[:email],
        location: params[:location],
        password: params[:password],
        password_confirmation: params[:password_confirmation],
      )
      if user.valid?
        session[:user_id] = user.id
        { message: "User created successfully" }.to_json
      else
        { error: user.errors.full_messages }.to_json
      end
    rescue ActiveRecord::RecordNotUnique => e
      { error: "Email address already registered" }.to_json
    rescue ActiveRecord::RecordInvalid => e
      { error: e.record.errors.full_messages.join(", ") }.to_json
    rescue => e
      { error: "Registration failed" }.to_json
    end
  end

  # Login
  post "/user/login" do
    user = User.find_by(email: params[:email])
    if user.nil?
      { error: "User not found" }.to_json
    elsif user.authenticate(params[:password])
      session[:user_id] = user.id
      { message: "Logged in successfully" }.to_json
    else
      { error: "Incorrect password" }.to_json
    end
  end
  

  # Logout
  post "/user/logout" do
    session[:user_id] = nil
    { message: "Logged out successfully" }.to_json
  rescue StandardError => e
    { error: e.message }.to_json
  end

  
 # r add a new pet
 post "/add/pet/:id" do
  user = User.find_by(id: params[:id])
  if user
    pet = Pet.new(
      name: params[:name],
      breed: params[:breed],
      age: params[:age],
      image: params[:image],
      species: params[:species],
      description: params[:description],
      user_id: user.id
    )
    if pet.valid?
      pet.save
        status 201
        { message: "Pet added successfully" }.to_json
    else
      status 422
      { error: pet.errors.full_messages }.to_json
    end
  else
    status 422
    { error: "You must be logged in to add a pet" }.to_json
  end
else{
  error: "failito add"
}
end

  # View all pets
  get "/pets" do
    pets = Pet.all
    pets.to_json
  end
    
  # View all pets for current user
get "/current/user/:id" do
  pet = Pet.find_by(user_id: params[:id])
  if pet
    { message: "Here is your pet", pet: pet }.to_json
  else
    { message: "You haven't added any pets yet" }.to_json
  end
rescue => e
  { error: e.message }.to_json
end




  # Search pets by name
  get "/pets/search/name/:name" do
    begin
      pets = Pet.where("name LIKE ?", "#{params[:name]}%")
      pets.to_json
    rescue => e
      { error: e.message }.to_json
    end
  end
  

  # Search pets by breed
  get "/pets/search/breed/:breed" do
    begin
      pets = Pet.where("breed LIKE ?", "#{params[:breed]}%")
      pets.to_json
    rescue StandardError => e
      { error: e.message }.to_json
    end
  end

 # Update pet details
 put "/pets/update/:id" do
  begin
    pet = Pet.find_by(id: params[:id])

    if pet.nil?
      status 404
      return { error: "Pet not found" }.to_json
    end

    unless pet.user_id == session[:user_id]
      status 403
      return { error: "You are not authorized to update this pet" }.to_json
    end

    new_user_id = params[:new_user_id].to_i

    if new_user_id.zero?
      status 400
      return { error: "Invalid new user ID provided" }.to_json
    end

    if !pet.update(
      name: params[:name],
      breed: params[:breed],
      age: params[:age],
      description: params[:description],
      image: params[:image],
      species: params[:species]
    )
      status 422
      return { error: "Failed to update pet" }.to_json
    end
    { message: "Pet updated successfully" }.to_json

  rescue StandardError => e 
    status 500
    { error: e.message }.to_json
  end
end

get '/user/:email' do
  user = User.find_by(email: params[:email])
  user.to_json
end

# Retrieve all users
get '/users' do
  users = User.all
  users.to_json
end

# Delete pet
delete "/pets/delete/:id" do
  begin
    pet = Pet.find(params[:id])
    if pet.user_id == user.id
      pet.destroy
      { message: "Pet deleted successfully" }.to_json
    else
      { error: "You are not authorized to delete this pet" }.to_json
    end
  rescue StandardError => e 
    { error: e.message }.to_json
  end
end




end
