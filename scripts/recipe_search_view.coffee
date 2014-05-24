namespace('Foodie')

class Foodie.RecipeSearchView extends Backbone.View
  template: JST['scripts/recipe_search_view_template.ejs']

  events:
    'click [data-id="save"]'  : 'save'
    'click [data-id="search"]': 'appendRecipes'

  render: ->
    @$el.html(@template)
    @

  appendRecipes: ->
    @$('[data-id=recipes]').empty()
    recipes = new Foodie.Recipes({ searchTerm: @$('[data-id=recipe-search-term]').val() })
    $.when(
      recipes.fetch()
    ).done( =>
      @renderRecipes(recipes)
    )
    @

  renderRecipes: (recipes) ->
    _.each recipes.models, (recipe) =>
      recipeView = new Foodie.RecipeView( { model: recipe } )
      console.log recipeView.render().el
      @$('[data-id=recipes]').append(recipeView.render().el)

  save: ->
    event.preventDefault();
    recipe_ids = $("form").serialize()
    @recipes = new Foodie.Recipes({recipe_ids: recipe_ids})
    @recipes.fetch()