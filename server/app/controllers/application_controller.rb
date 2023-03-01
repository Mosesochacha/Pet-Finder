class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/pets' do
    pet = Pet.all 
    pet.to_json
  end
   
  #search
  get '/pets/search/:name' do
    pet = Pet.where("name LIKE ?", "%#{params[:name]}%")
  pet.to_json 
end

get '/pets/searching/:breed' do
  pet = Pet.where("breed LIKE ?", "%#{params[:breed]}%")
  pet.to_json 
end
end