class AddPetIds < ActiveRecord::Migration[6.1]
  def change
    add_column :pets, :user_pet_ids, :integer, array: true, default: []
  end
end
