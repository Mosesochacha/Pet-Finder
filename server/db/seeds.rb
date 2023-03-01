require 'faker'
puts "🌱 Seeding spices..."

5.times do
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    location: Faker::Address.city
  )

  rand(1..3).times do
    pet = Pet.create(
      name: Faker::Creature::Animal.name,
      age: rand(1..10),
      breed: Faker::Creature::Dog.breed,
      species: Faker::Creature::Animal.name,
      gender: ['Male', 'Female'].sample,
      image: Faker::LoremPixel.image(size: '300x300', category: 'animals'),
      description: Faker::Lorem.sentence
    )

    user.pets << pet
  end
end

puts "✅ Done seeding"
