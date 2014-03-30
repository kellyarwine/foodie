namespace('App')

class App.English extends Backbone.View

  initialize: ->
    event.preventDefault()
    @search = 'carnitas'
    console.log 'hello'
    f2f = new App.Food2Fork()
    console.log f2f.fetch()