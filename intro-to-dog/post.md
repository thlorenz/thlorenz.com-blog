# {{ meta: title }}

{{ meta: created }}
{{ meta: tags }}

## The blog post about the blog with which it was published

I decided that it would be the meta thing to do, so here it goes.

I will start with a short introduction on what DOG is, why I wrote it and then
launch straight into a short tutorial on how to create, publish and then serve your own blog with it.

## How I came to write another blogging engine

I feel like I need to justify this decision, since blog engines seem to be one of the things we have too much of already.

What I wanted of a blogging engine was the following:

1. runs on nodejs
2. markdown based
3. first class code snippet support to allow:
    - inlined snippets
    - snippets pulled in from external file on the fly
    - code highlighting
4. meta tag support to pull in the followint information:
    - post title
    - creation and updated dates
    - post tags
5. simple to use command line for:
    - post preview
    - post publish including title and tags information
    - including styles
6. easy stylability
7. easy interface to provide the rendered html for each post so I can serve it however I choose to


