# HTML

## The language
This markup language consists of a tree of nested nodes.
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
* `id`
* `for`
* `class`

# CSS

## Rules
Rules or rulesets have a selector, which defines which elements should be styled, and a list of declarations, with all the properties that need to be set.

## The cascade
The browser takes into consideration all property declarations applied to each element, and chooses the final style based on the origin of the ruleset, the specificity of the selectors, definition order and more.
https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade


***WIP...***