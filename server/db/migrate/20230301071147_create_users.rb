class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email  , unique: true , index: true
      t.string :password_digest
      t.string :reset_password_token
      t.string :name
      t.string :location
      t.timestamps
    end
  end
end
