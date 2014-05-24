namespace('Foodie')

class Foodie.Recipes extends Backbone.Collection
  urlRoot: ->
    "http://localhost:3000/recipe_search/"

  initialize: (options) ->
    @url = @urlRoot() + options.searchTerm + ".json"

  model: Foodie.Recipe

  parse: (response) ->
    response.recipes
