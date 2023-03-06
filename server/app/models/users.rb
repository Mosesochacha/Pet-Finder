require 'bcrypt'

class User < ActiveRecord::Base
  has_many :pets 
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  has_secure_password
end
