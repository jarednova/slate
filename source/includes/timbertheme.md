
# TimberTheme
Need to display info about your theme? Well you've come to the right place. By default info on the current theme comes for free with what's fetched by `Timber::get_context()` in which case you can access it your theme like so:

###### PHP
```php
<?php
<?php
$context = Timber::get_context();
Timber::render('index.twig', $context);
?>
```
###### Twig
```twig
<script src="{{theme.link}}/static/js/all.js"></script>
```
###### HTML
```html
<script src="http://example.org/wp-content/themes/my-theme/static/js/all.js"></script>
```

Name | Type | Description
---- | ---- | -----------
[link](#link) | string | the absolute path to the theme (ex: `http://example.org/wp-content/themes/my-timber-theme`)
name | string | the human-friendly name of the theme (ex: `My Timber Starter Theme`)
parent | TimberTheme|bool | the TimberTheme object for the parent theme (if it exists), false otherwise
parent_slug | string | the slug of the parent theme (ex: `_s`)
[path](#path) | string | the relative path to the theme (ex: `/wp-content/themes/my-timber-theme`)
slug | string | the slug of the theme (ex: `my-super-theme`)

## __construct
`__construct( mixed/string $slug=null )`

**returns:** `void` 

Constructs a new TimberTheme object. NOTE the TimberTheme object of the current theme comes in the default `Timber::get_context()` call. You can access this in your twig template via `{{site.theme}}.

Name | Type | Description
---- | ---- | -----------
$slug | mixed/string | 

###### PHP
```php
<?php
	<?php
	    $theme = new TimberTheme("my-theme");
	    $context['theme_stuff'] = $theme;
	    Timber::render('single.')
	?>
```
###### Twig
```twig
	We are currently using the {{ theme_stuff.name }} theme.
```
###### HTML
```html
	We are currently using the My Theme theme.
```

## link
`link( )`

**returns:** `string` the absolute path to the theme (ex: `http://example.org/wp-content/themes/my-timber-theme`)



## path
`path( )`

**returns:** `string` the relative path to the theme (ex: `/wp-content/themes/my-timber-theme`)



## theme_mod
`theme_mod( string $name, bool $default=false )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$name | string | 
$default | bool | 



## theme_mods
`theme_mods( )`

**returns:** `array` 




### Class: TimberTheme

> Need to display info about your theme? Well you've come to the right place. By default info on the current theme comes for free with what's fetched by `Timber::get_context()` in which case you can access it your theme like so:

###### Example
###### PHP
```php
<?php
<?php
$context = Timber::get_context();
Timber::render('index.twig', $context);
?>
```
###### Twig
```twig
<script src="{{theme.link}}/static/js/all.js"></script>
```
###### HTML
```html
<script src="http://example.org/wp-content/themes/my-theme/static/js/all.js"></script>
```



*This class extends \TimberCore*

