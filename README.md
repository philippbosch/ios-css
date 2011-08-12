# ios-css

ios-css is a [Compass](http://compass-style.org/) extension that aims to provide [Sass](http://sass-lang.com/) mixins for generic iOS user interface elements (buttons, lists, etc.).

## Current state of development

The following mixins are currenty available:

* `ios-css/bootstrap`
* `ios-css/backgrounds`
  * `striped-background`
  * `striped-background-alarm-clock`
  * `black-background`
  * `white-background`
  * `gray-background`
* `ios-css/navigationbar`
  * `navigationbar`
  * `navigationbar-black`
  * `navigationbar-noisy`
  * `has-navigationbar`
* `ios-css/list`
  * `list`
  * `grouped-list`
  * `list-chevron`
* `ios-css/tabbar`
  * `tabbar`
  * `tabbar-image`

Examples for all of them can be found on [the website][1].


## Installation

1. Install the Gem
`gem install ios-css`
2. Create a new Compass project using ios-css
`compass create my_project -r ios-css --using ios-css`
3. Create some HTML, apply some of the [mixins][1], and compile your CSS
`compass compile` or `compass watch`
4. That's it.


## Contributing

Thanks to Git and GitHub, contributing is ridiculously easy.

1. Fork the repository on GitHub.
2. Add your code.
3. Add yourself to AUTHORS.txt.
4. Commit and push your code.
5. Send a pull request.
6. After reviewing your code it will be merged into the main repo.


[1]: http://code.pb.io/ios-css/
