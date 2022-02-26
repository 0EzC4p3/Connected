# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.create(
  [
    {
      title: "Item 1",
      body: "Item 1 is the first"
    },
    {
      title: "Item 2",
      body: "Item 2 is the second"
    },
    {
      title: "Item 3",
      body: "this is Item 3"
    },
    {
      title: "Item 4",
      body: "this is Item 4"
    }
  ])