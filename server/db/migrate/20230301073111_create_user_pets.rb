class CreateUserPets < ActiveRecord::Migration[6.1]
  def change
    create_table :user_pets do |t|
      t.references :user, foreign_key: { on_delete: :cascade }
      t.references :pet, foreign_key: { on_delete: :cascade }
      t.timestamps
    end
  end
end
