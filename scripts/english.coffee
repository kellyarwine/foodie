namespace('App')

class App.English extends Backbone.View

  initialize: ->
    event.preventDefault()
    @search = 'carnitas'
    console.log 'hello'
    f2f = new App.Food2Fork()
    f2f.fetch(
      dataType: 'jsonp'
      jsonpCallback: 'foo'
    )

  foo: ->
    console.log "callback"