
# TimberMenu
In Timber, you can use TimberMenu() to make a standard Wordpress menu available to the Twig template as an object you can loop through. And once the menu becomes available to the context, you can get items from it in a way that is a little smoother and more versatile than Wordpress's wp_nav_menu. (You need never again rely on a crazy "Walker Function!"). The first thing to do is to initialize the menu using TimberMenu(). This will make the menu available as an object to work with in the context. (TimberMenu can include a Wordpress menu slug or ID, or it can be sent with no parameter--and guess the right menu.)

###### PHP
```php
<?php
<?php
# functions.php
add_filter('timber/context', 'add_to_context');
function add_to_context($data){
	// So here you are adding data to Timber's context object, i.e...
 	$data['foo'] = 'I am some other typical value set in your functions.php file, unrelated to the menu';
  	// Now, in similar fashion, you add a Timber menu and send it along to the context.
	  	$data['menu'] = new TimberMenu(); // This is where you can also send a WordPress menu slug or ID
    return $data;
}
# index.php (or any PHP file)
// Since you want a menu object available on every page, I added it to the universal Timber context via the functions.php file. You could also this in each PHP file if you find that too confusing.
$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
Timber::render('index.twig', $context);
?>
```
###### Twig
```twig
<nav>
	<ul class="main-nav">
	{% for item in menu.get_items %}
     	<li class="nav-main-item {{item.classes | join(' ')}}"><a class="nav-main-link" href="{{item.get_link}}">{{item.title}}</a>
        	{% if item.get_children %}
          	<ul class="nav-drop">
              {% for child in item.get_children %}
              	<li class="nav-drop-item"><a href="{{child.get_link}}">{{child.title}}</a></li>
              {% endfor %}
             </ul>
          {% endif %}
          </li>
   {% endfor %}
   </ul>
</nav>
```

Name | Type | Description
---- | ---- | -----------
id | integer | $id the ID# of the menu, corresponding to the wp_terms table
items | TimberMenuItem[]|null | $items you need to iterate through
name | string | $name of the menu (ex: `Main Navigation`)
title | string | $name of the menu (ex: `Main Navigation`)

## __construct
`__construct( int/string $slug )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$slug | int/string | 



## find_parent_item_in_menu
`find_parent_item_in_menu( array $menu_items, int $parent_id )`

**returns:** `\TimberMenuItem/null` 

Name | Type | Description
---- | ---- | -----------
$menu_items | array | 
$parent_id | int | 



## get_items
`get_items( )`

**returns:** `array` 




### Class: TimberMenu

> In Timber, you can use TimberMenu() to make a standard Wordpress menu available to the Twig template as an object you can loop through. And once the menu becomes available to the context, you can get items from it in a way that is a little smoother and more versatile than Wordpress's wp_nav_menu. (You need never again rely on a crazy "Walker Function!"). The first thing to do is to initialize the menu using TimberMenu(). This will make the menu available as an object to work with in the context. (TimberMenu can include a Wordpress menu slug or ID, or it can be sent with no parameter--and guess the right menu.)

###### Example
###### PHP
```php
<?php
<?php
# functions.php
add_filter('timber/context', 'add_to_context');
function add_to_context($data){
	// So here you are adding data to Timber's context object, i.e...
 	$data['foo'] = 'I am some other typical value set in your functions.php file, unrelated to the menu';
  	// Now, in similar fashion, you add a Timber menu and send it along to the context.
	  	$data['menu'] = new TimberMenu(); // This is where you can also send a WordPress menu slug or ID
    return $data;
}
# index.php (or any PHP file)
// Since you want a menu object available on every page, I added it to the universal Timber context via the functions.php file. You could also this in each PHP file if you find that too confusing.
$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
Timber::render('index.twig', $context);
?>
```
###### Twig
```twig
<nav>
	<ul class="main-nav">
	{% for item in menu.get_items %}
     	<li class="nav-main-item {{item.classes | join(' ')}}"><a class="nav-main-link" href="{{item.get_link}}">{{item.title}}</a>
        	{% if item.get_children %}
          	<ul class="nav-drop">
              {% for child in item.get_children %}
              	<li class="nav-drop-item"><a href="{{child.get_link}}">{{child.title}}</a></li>
              {% endfor %}
             </ul>
          {% endif %}
          </li>
   {% endfor %}
   </ul>
</nav>
```



*This class extends \TimberCore*

