
# TimberTheme
Need to display info about your theme? Well you've come to the right place. By default info on the current theme comes for free with what's fetched by `Timber::get_context()` in which case you can access it your theme like so:

```php
<?php
$context = Timber::get_context();
Timber::render('index.twig', $context);
?>
```
```twig
<script src="{{theme.link}}/static/js/all.js"></script>
```
```html
<script src="http://example.org/wp-content/themes/my-theme/static/js/all.js"></script>
```

Name | Type | Description
---- | ---- | -----------
## __construct
`__construct( mixed/string $slug=null )`

**returns:** `void`

Constructs a new TimberTheme object. NOTE the TimberTheme object of the current theme comes in the default `Timber::get_context()` call. You can access this in your twig template via `{{site.theme}}.

Name | Type | Description
---- | ---- | -----------
$slug | mixed/string | 

```php
    <?php
        $theme = new TimberTheme("my-theme");
        $context['theme_stuff'] = $theme;
        Timber::render('single.')
    ?>
    ```
    ```twig
    We are currently using the {{ theme_stuff.name }} theme.
    ```
    ```html
    We are currently using the My Theme theme.
    ```
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
```php
<?php
$context = Timber::get_context();
Timber::render('index.twig', $context);
?>
```
```twig
<script src="{{theme.link}}/static/js/all.js"></script>
```
```html
<script src="http://example.org/wp-content/themes/my-theme/static/js/all.js"></script>
```



*This class extends \TimberCore*
