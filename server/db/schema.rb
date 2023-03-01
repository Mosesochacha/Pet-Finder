# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_01_073111) do

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "breed"
    t.string "species"
    t.string "gender"
    t.string "image"
    t.string "description"
  end

  create_table "user_pets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "pet_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pet_id"], name: "index_user_pets_on_pet_id"
    t.index ["user_id"], name: "index_user_pets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "reset_password_token"
    t.string "name"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
  end

  add_foreign_key "user_pets", "pets"
  add_foreign_key "user_pets", "users"
end
