namespace('App')

class App.Router extends Backbone.Router
  routes:
    ''        : 'home'
    'english' : 'english'
    'spanish' : 'spanish'

  home: ->
    console.log 'You are home.'

  english: ->
    @navigate(new App.English())

  spanish: ->
    @navigate(new App.Spanish())

