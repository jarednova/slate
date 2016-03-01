
# TimberMenuItem




Name | Type | Description
---- | ---- | -----------
[children](#children) | array/bool | 
[is_external](#is_external) | bool | 
[link](#link) | string | a full URL like http://mysite.com/thing/
[name](#name) | string | 
[slug](#slug) | string | the slug of the menu item kinda-like-this

## __construct
`__construct( array/object $data )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$data | array/object | 



## __toString
`__toString( )`

**returns:** `string` the label for the menu item



## add_child
`add_child( \TimberMenuItem $item )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$item | \TimberMenuItem | 



## add_class
`add_class( mixed $class_name )`

**returns:** `void` 

add a class the menu item should have

Name | Type | Description
---- | ---- | -----------
$class_name | mixed | 



## children
`children( )`

**returns:** `array/bool` 

Get the child [TimberMenuItems](#TimberMenuItem)s of a [TimberMenuItem](#TimberMenuItem)



## external
`external( )`

**returns:** `bool` 

Checks to see if a link is external, helpful when creating rules for the target of a link



## is_external
`is_external( )`

**returns:** `bool` 

Checks to see if the menu item is an external link so if my site is `example.org`, `google.com/whatever` is an external link. Helpful when creating rules for the target of a link

###### Twig
```twig
	<a href="{{ item.link }}" target="{{ item.is_external ? '_blank' : '_self' }}">
```

## link
`link( )`

**returns:** `string` a full URL like http://mysite.com/thing/

Get the full link to a Menu Item

###### Twig
```twig
	{% for item in menu.items %}
	    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
	{% endfor %}
```

## meta
`meta( string $key )`

**returns:** `mixed` whatever value is storied in the database

Name | Type | Description
---- | ---- | -----------
$key | string | lookup key



## name
`name( )`

**returns:** `string` 

The label for the menu item



## path
`path( )`

**returns:** `string` the path of a URL like /foo

Return the relative path of a Menu Item's link

###### Twig
```twig
	{% for item in menu.items %}
	    <li><a href="{{ item.path }}">{{ item.title }}</a></li>
	{% endfor %}
```

## slug
`slug( )`

**returns:** `string` the slug of the menu item kinda-like-this

The slug for the menu item

###### Twig
```twig
	<ul>
	    {% for item in menu.items %}
	        <li class="{{item.slug}}">
	            <a href="{{item.link}}">{{item.name}}</a>
	         </li>
	    {% endfor %}
	</ul>

## title
`title( )`

**returns:** `string` the public label like Foo

Gets the public label for the menu item

###### Twig
```twig
	{% for item in menu.items %}
	    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
	{% endfor %}
```


### Class: TimberMenuItem



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

