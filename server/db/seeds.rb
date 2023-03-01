require 'faker'
puts "🌱 Seeding spices..."

animal_terms = ['cat', 'dog', 'rabbit', 'hamster', 'bird']

5.times do
  user = User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    location: Faker::Address.city
  )

  rand(1..3).times do |i|
    pet = Pet.create(
      name: Faker::Creature::Animal.name,
      age: rand(1..10),
      breed: Faker::Creature::Dog.breed,
      species: Faker::Creature::Animal.name,
      gender: ['Male', 'Female'].sample,
      image: Faker::LoremFlickr.image(size: '300x300', search_terms: [animal_terms[i % animal_terms.length]]),
      description: Faker::Lorem.sentence
    )

    user.pets << pet
  end
end

puts "✅ Done seeding"
