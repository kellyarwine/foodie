namespace('Foodie')

class Foodie.Recipe extends Backbone.Model
  url: ->
    "http://localhost:3000/recipe/#{@get('recipe_id')}"
