
# TimberMenuItem


## __construct
**returns:** `void`



Type | Name | Description
---- | ---- | -----------
array/object | $data | 


## __toString
**returns:** `void`




## add_child
**returns:** `void`



Type | Name | Description
---- | ---- | -----------
\TimberMenuItem | $item | 


## add_class
**returns:** `void`



Type | Name | Description
---- | ---- | -----------
mixed | $class_name | 


## children
**returns:** `array/bool`




## external
**returns:** `bool`

Checks to see if a link is external, helpful when creating rules for the target of a link


## is_external
**returns:** `bool`




## link
**returns:** `string a full URL like http://mysite.com/thing/`

Get the full link to a Menu Item

```twig
	{% for item in menu.items %}
	    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
	{% endfor %}
```
## meta
**returns:** `mixed whatever value is storied in the database`



Type | Name | Description
---- | ---- | -----------
\unknown | $key | string lookup key


## name
**returns:** `string`




## path
**returns:** `string the path of a URL like /foo`

Return the relative path of a Menu Item's link

```twig
	{% for item in menu.items %}
	    <li><a href="{{ item.path }}">{{ item.title }}</a></li>
	{% endfor %}
```
## permalink
**returns:** `string a full URL like http://mysite.com/thing/`

Gets the link a menu item points at


## slug
**returns:** `string`




## title
**returns:** `string the public label like Foo`

Gets the public label for the menu item

```twig
	{% for item in menu.items %}
	    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
	{% endfor %}
```
## update_child_levels
**returns:** `void`





### Class: TimberMenuItem



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

