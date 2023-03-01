class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :breed
      t.string :species
      t.string :gender
      t.string :image
      t.string :description
    end
  end
end
