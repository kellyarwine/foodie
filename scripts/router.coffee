namespace('App')

class App.Router extends Backbone.Router
  routes:
    ''        : 'home'
    'english' : 'english'
    'spanish' : 'spanish'

  home: ->
    console.log 'You are home.'

  english: ->
    new App.English()

  spanish: ->
    new App.Spanish()

