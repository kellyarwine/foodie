namespace('Foodie')

class Foodie.RecipeView extends Backbone.View
  template: JST['scripts/recipe_view_template.ejs']

  render: ->
    @$el.html(@template(@presenterData()))
    @

  presenterData: ->
    {
      recipeId:  @recipe().get('recipe_id')
      imageUrl:  @recipe().get('image_url')
      publisher: @recipe().get('publisher')
      title:     @recipe().get('title')
    }

  recipe: ->
    @options.model