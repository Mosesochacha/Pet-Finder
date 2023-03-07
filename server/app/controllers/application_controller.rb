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
  begin
    
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
    rescue => e
      { error: "login failed" }.to_json
      end
  end
 

  # Logout
  post "/user/logout" do
    session[:user_id] = nil
    { message: "Logged out successfully" }.to_json
  rescue StandardError => e
    { error: e.message }.to_json
  end

  
   # Add a new pet
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
  end


  # View all pets
  get "/pets" do
    pets = Pet.all
    pets.to_json
  end

    

# Retrieve all users with there pets
get '/users/:id' do
  user = User.includes(:pets).find_by(id: params[:id])
  user.to_json(include: :pets)
end

  # Search pets by name
  get "/pets/search/name/:name" do
    begin
      name = params[:name]
      raise "Name parameter missing" if name.nil? || name.empty?
  
      pets = Pet.where("name LIKE ?", "#{name}%")
      if pets.empty?
        status 404
        { error: "No pets found with the given name" }.to_json
      else
        pets.to_json
      end
    rescue => e
      status 400
      { error: e.message }.to_json
    end
  end
  
  

  # Search pets by breed
  get "/pets/search/breed/:breed" do
    begin
      sanitized_breed = ActiveRecord::Base.sanitize_sql_like(params[:breed])
      pets = Pet.where("LOWER(breed) LIKE LOWER(?)", "#{sanitized_breed}%")
      if pets.empty?
        halt 404, { error: "No pets found with the given breed" }.to_json
      else
        pets.to_json
      end
    rescue StandardError => e
      { error: e.message }.to_json
    end
  end
  

# Update pet details
put "/pets/update/:id" do
  begin
    pet = Pet.find_by(id: params[:id])
    user =  User.find(id: pet.user_id)

    if pet.nil?
      status 404
      return { error: "Pet not found" }.to_json
    end

    unless pet.user_id == user.id
      status 404
      return { error: "not found" }.to_json
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
    status 403
    { error: "You are not authorized to delete this pet" }.to_json
  end
end



# email
get '/user/:email' do
  user = User.find_by(email: params[:email])
  user.to_json
end


delete "/pets/delete/:id" do
  begin
    pet = Pet.find_by(id: params[:id])
    current_user = User.find(id: pet.user_id)
    if pet.user_id == current_user.id
      pet.destroy
      status 204
    else
      status 404
      { error: "Not found" }.to_json
    end
  rescue ActiveRecord::RecordNotFound => e
    status 403
    { error: "You are not authorized to delete this pet" }.to_json
  end
end





end
