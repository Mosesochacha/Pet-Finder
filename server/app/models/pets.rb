class Pet < ActiveRecord::Base
  has_many :user_pets
  has_many :pets , through: :user_pets
end