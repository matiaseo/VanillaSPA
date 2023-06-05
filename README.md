# HTML

## The language
This markup code consists of a tree of nested nodes.
Nodes can be elements or text.
Elements can receive attributes and have a pre-defined behavior.
Some elements are just containers, while others are more complex, enabling user input or media playback.

## head & body
Inside the **head** we can add metadata.
Inside the **body** we add all the elements we want to render in the page.

## Semantic tags
While several elements may behave in the same way, semantic tags allow us to write maintainable code, help screen readers to parse the page correctly and improves Search Engine Optimization.
https://www.w3schools.com/html/html5_semantic_elements.asp

## Important tags used in this project
* `link` tag used to load the stylesheet
* `script` tag used to load the JavaScript code
* `header` container for the page header
* `main` container for the rest of the page
* `ul` container for the *unordered list* of products
* `li` container for each *list item* (product)
* `figure` & `figcaption` for a product's image and name
* `img` to render images
* `span` as a generic text container for the description
* `b` as a *bold* text container for the price
* `div` as a generic container for the theme switcher
* `input` with attribute `type="text"` for the product filter
* `input` with attribute `type="radio"` for the theme switcher selection
* `label` linked to *radio inputs* for the theme switcher buttons

## Important attributes used
* `id` & `for` to link a label with an input (Also to find a specific element by ID from JS or CSS)
* `class` to mark an element we want to find using CSS selectors

# CSS

## Rules
Rules or rulesets have a selector, which defines which elements should be styled, and a list of declarations, with all the properties that need to be set.

## The cascade
The browser takes into consideration all property declarations applied to each element, and chooses the final style based on the origin of the ruleset, the specificity of the selectors, definition order and more.
https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade

## Selectors
Selectors are used to target the elements that should be styled.
It's possible to select elements by tag, class, id, an attribute's value, pseudo-classes, pseudo-elements or a combination.

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators

## Variables
We can use variables to define reusable values, e.g. colours we want to use on several rules.

## Animations
Animation can be created by defining keyframes when properties should have a specific value.
The CSS engine will interpolate most values to create a smooth transition between those keyframes.

## Flexbox and Grid
Powerful tools to place things in columns/rows or both.

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Understand FlexBox with a game: https://flexboxfroggy.com/

https://css-tricks.com/snippets/css/complete-guide-grid/

# JavaScript

***WIP...***