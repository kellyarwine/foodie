namespace('App')

class App.Router extends Backbone.Router
  routes:
    '': 'home'

  home: ->
    @navigate(new App.View())
