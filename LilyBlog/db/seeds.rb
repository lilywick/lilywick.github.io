# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

test_user = User.create(email: "carbajal.patricia@gmail.com", password: "petrem00", password_confirmation: "petrem00")

test_categories = Category.create([{category_name: "Pups and Pigs"}, {category_name: "Trinkets"}, {category_name: "Accoutrements"}, {category_name: "Shoes"}, {category_name: "Interior"}, {category_name: "Clothing"}, {category_name: "Things I Get A Kick Out Of"}])

test_colors = Color.create([{color_name: "Red"}, {color_name: "blue"}, {color_name: "green"}, {color_name: "black"}, {color_name: "yellow"}, {color_name: "orange"}, {color_name: "purple"}])
