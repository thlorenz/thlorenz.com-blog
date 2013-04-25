# {{ meta: title }}

{{ meta: created }}
{{ meta: tags }}

I recently created [scriptie-talkie](http://thlorenz.github.io/scriptie-talkie/), a tool designed to make learning,
writing and debugging JavaScript as interactive and fast as possible. 

In order to to archieve this, the time between code changes to showing result is minimized and the
information presented is much more than just the final result of running the script.

## Is scriptie-talkie for me?

If any of the below is true for yourself, you should definitely give scriptie-talkie a try:

- you are new JavaScript and are sometimes confused exactly what specific code does and/or returns
- you like to see intermediate results while writing/debugging a script and use `console.log` or `console.dir` a lot
- you spend a lot of time in the debugger in order to understand how your code works
- you would like to include interactive code samples in your blog

## How does scriptie-talkie work?

scriptie-talkie splits your code into small snippets, evaluates each of them separately and prints out information to
answer the following questions:

- what did running the snippet return?
- how did it change my context, i.e. were variables added or removed?
- what objects in my context were updated (and how) when running the snippet?
- what errors were thrown while running the snippet?

This information is communicated as follows:

- `+` denotes that a variable or object was added to the context
- `-` denotes that a variable or object was removed from the context
- `~` denotes that a variable or object was modified
- `=>` displays the result returned when executing the snippet (omitted when the result is undefined)

## Examples

We will go through some code examples powered by
[scriptie-talkie-embed](http://thlorenz.github.io/scriptie-talkie-embed/) and things should become a lot clearer: 

{{ scriptie: variables++.js }}

On the left side you see the editor containing a short script, while the right side contains the result of
scriptie-talkie running it.

You may click on ***full view*** link in order to open the example inside a full page scriptie-talkie editor.

### The editor in the left pane

You can edit the script on the left to your delight to see the result on the right update in real time. 
Notice also that error and warning indicators are displayed on the gutter on the left side of the editor. You can see this in action
if you edit the last line so that it only contains `var b =`. Give it a try!

### Analyzing the information displayed inside the right pane

The first line `var a = 1;` adds `a` with value `1` to the context which is indicated via `+ a: 1` on the right. Notice
that anything with a line number in front of it represents the snippet that was run.

The second line `var b = a++;` does two things. It adds variable `b` with to the context and assigns `a++`
to it. This is indicated via `+ b: 1` (when `a` was assigned to `b` it still had value `1`, the increment followed
afterwards). `a++` causes `a` to be modified which is indicated by `~ a: 2`.

As you can already see this kind of detail is very helpful in understanding parts of JavaScript that may be tricky to
beginners.

### Showing difference of `++a` and `a++`

Since we talked about using scriptie-talkie as a learning aid, let demonstrate that in an example:

{{ scriptie: ++variables.js }}

Now, when executing line 2, `var b = ++a;` a is incremented before it is assigned to b and therefore assigned to `2`.

You probably agree that this is of great value for beginners trying to understand how the language works.

### Objects and return Values

Lets look at an example that deals with objects instead of just primitive types:

{{ scriptie: objects-returns.js }}

On lines 1-4 we create a car which is indicated via `+` on the right.

On line 6 we increase the price of the car. This change is indicated by displaying the car properties with the new price
in blue and compared to the old one `1001 // != 1000`

The `=> 1000` at the bottom indicates that the old price was returned (which is something not everyone is aware of).

This behavior is confirmed in the below example: 

{{ scriptie: objects-assign-returns.js }}

Now we can see that a property with the old price is added to the context when we assign the return value.

### Functions and side effects

Lets add a function to drive the car:

{{ scriptie: functions-sideeffects.js }}

As you can see the fact that driving the car 22 miles had the side effect of increasing its mileage. This fact is clearly indicated
by scriptie-talkie's output.

This may in handy for explaining features (in this case closures) to beginners. It also can help you to become aware of
everything that is actually going on when a certain snippet of your code is executing. 

### use strict

scriptie-talkie **enforces local** `use strict` i.e. inside a function, but **global** `use strict` **is only partially enforced**.

Basically only global strict violations that can be discovered by just parsing the code are shown and all others
ignored:

{{ scriptie: use-strict-global-working.js }}

We see a warning in the editor, and the violation is clearly indicated on the right.

However when a strict violation can only be discovered when the code is evaluated, global `use strict` currently is not
enforced. The below should show an error since in strict mode assigning to a frozen object throws one.

The assignment does not have any effect, since scriptie-talkie does respect that the object was frozen, but the strict
violation is ignored:

{{ scriptie: use-strict-global-notworking.js }}

Therefore in order to make sure that `use strict` is taking effect, we wrap the questionable code inside a function and
turn on strict mode inside it. This unfortunately has the disadvantage that  we don't see any intermediate results for
every statement inside of the function since it is evaluated as one chunk:

{{ scriptie: use-strict-local.js }}


## Using scriptie-talkie in your blog

It is very easy to embed scriptie-talkie code samples, like the ones here, in your blog. It comes down to simply adding
a script tag or a dependency to your [browserified](https://github.com/substack/node-browserify) bundle and including
your code inside of `<textarea>`s identified with a particular class.

### Example

#### browserify ***recommended***

```js
var scriptieTalkieEmbed = require('scriptie-talkie-embed');
scriptieTalkieEmbed();
```

#### script tag 

```html
<script type="text/javascript" src="https://github.com/thlorenz/scriptie-talkie-embed/raw/gh-pages/gh-pages/bundle.js"></script>
<script type="text/javascript">
  window.scriptieTalkieEmbed();
</script>
```

#### code sample

```html
<textarea class="scriptie-talkie">
  var o = {a : 1};
  o.a = 2;
  Object.freeze(o)
  o.a = 1; 
  o
</textarea>
```

Please find more information about [embedding scriptie-talkie here](http://thlorenz.github.io/scriptie-talkie-embed/).

Alternatively, the [Developer blOGging engine](https://github.com/thlorenz/dog) supports
[external](https://github.com/thlorenz/dog#including-external-code-snippets) and
[inlined](https://github.com/thlorenz/dog#scriptie-talkie-inlines) scriptie-talkie snippets.

## Wrapping Up

I hope you found this useful and will add [scriptie-talkie](http://thlorenz.github.io/scriptie-talkie/) to your arsenal
of tools when either learning or debugging JavaScript. I should mention that scriptie-talkie will make its way into
[replpad](http://thlorenz.github.io/replpad/) fairly soon, so you can enjoy its features right inside your terminal.

Looking forward to seeing some scriptie-talkies in your blogs!
