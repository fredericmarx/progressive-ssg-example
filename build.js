var Metalsmith = require('metalsmith')
var collections = require('metalsmith-collections')
var dateFormatter = require('metalsmith-date-formatter')
var inPlace = require('metalsmith-in-place')
var layouts = require('metalsmith-layouts')
var path = require('metalsmith-path')
var serve = require('metalsmith-serve')
var watch = require('metalsmith-watch')

var metalsmith = Metalsmith(__dirname)
  .use(path())
  .use(collections({
    events: {
      pattern: 'events/*',
      sortBy: 'date'
    }
  }))
  .use(dateFormatter({
    format: 'YYYY-MM-DD'
  }))
  .use(layouts('handlebars'))
  .use(inPlace({
    engine: 'handlebars'
  }))
  .use(watch({
    paths: {
      '${source}/**/*': true,
      'layouts/**/*': '**/*'
    }
  }))
  .use(serve())
  .build(function (err) {
    if (err) throw err
  })
