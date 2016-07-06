# Progressive Static Site Generator Example with Node.js and Metalsmith

This is an example [Metalsmith](http://www.metalsmith.io/) setup for enhancing static HTML pages with dynamic content, generated from YAML front matter.

## Goals

Contributors should be able to work on the site without running `npm install` by inspecting the static HTML files in their browser.

Dynamic content, like events, should be injected into static HTML files through a build step.

## Up and running

```
$ npm install
$ npm start
```

Output files will be dynamically generated in `build/`

## File structure

### `layouts/event.html`

Handlebars template for displaying single event page

### `src/*.html`

Static HTML files; can be enhanced with Handlebars.

E.g. `src/schedule.html` contains a Handlebars `{{#each}}` helper to iterate over events.

### `src/events/`

Event data stored as YAML front matter. Create a new file to add an event.

Example file:

```
---
name: NodeTogether Berlin
location: Berlin
date: 2016-12-24
layout: event.html
---
```

### `src/events.json`

Template for JSON-representation of event feed
