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
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      { message: "Logged in successfully" }.to_json
    else
      if user && !user.authenticate(params[:password])
        { error: "Incorrect password" }.to_json
      else
        { error: "User not found" }.to_json
      end
    end
  end

  # Logout
  post "/user/logout" do
    session[:user_id] = nil
    redirect "/"
  end

  # Add pet
  post "/add/pet" do
    pet = Pet.new(
      name: params[:name],
      breed: params[:breed],
      age: params[:age],
      image: params[:image],
      species: params[:species],
      description: params[:description],
      user_id: user.id,
    )
  
    if pet.valid?
      pet.save
      status 201
      { message: "Pet added successfully" }.to_json
    else
      status 422
      { error: "Failed to add pet" }.to_json
    end
  end
  

  # View all pets
  get "/pets" do
    pets = Pet.all
    pets.to_json
  end

  # View all pets for current user
  get "/pets/user" do
    user = User.find_by(id: session[:user_id])
    if user
      pets = user.pets
      if pets.empty?
        { alert: "You haven't added any pets yet" }.to_json
      else
        { message: "Here are your pets", pets: pets }.to_json
      end
    else
      { error: "You must be logged in to view your pets" }.to_json
    end
  rescue => e
    { error: e.message }.to_json
  end

  # Search pets by name
  get "/pets/search/name/:name" do
    pets = Pet.where("name LIKE ?", "#{params[:name]}%")
    pets.to_json
  end

  # Search pets by breed
  get "/pets/search/breed/:breed" do
    pets = Pet.where("breed LIKE ?", "#{params[:breed]}%")
    pets.to_json
  end

 # Update pet details
 put "/pets/update/:id" do
  pet = Pet.find_by(id: params[:id])
  if pet
    if pet.user_id == session[:user_id]
      pet.update(
        name: params[:name],
        breed: params[:breed],
        age: params[:age],
        description: params[:description],
        image: params[:image],
        species: params[:species]
      )
      pet.to_json
    else
      { error: "You are not authorized to update this pet" }.to_json
    end
  else
    { error: "Pet not found" }.to_json
  end
end


# Retrieve all users
get '/users' do
  users = User.all
  users.to_json
end

# Delete pet
# Delete pet
delete "/pets/delete/:id" do
  begin
    pet = Pet.find(params[:id])
    if pet.user_pet_ids.include?(session[:user_id])
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
