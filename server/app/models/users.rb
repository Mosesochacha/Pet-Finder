require 'bcrypt'

class User < ActiveRecord::Base
  has_many :user_pets
  has_many :pets , through: :user_pets

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true

  has_secure_password
end
