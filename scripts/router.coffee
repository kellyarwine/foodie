namespace('Foodie')

class Foodie.Router extends Backbone.Router
  routes:
    ''              : 'home'
    'recipe_search' : 'recipeSearch'

  home: ->
    console.log 'You are home.'

  recipeSearch: ->
    recipeSearchView = new Foodie.RecipeSearchView()
    $('body').append(recipeSearchView.render().$el)

