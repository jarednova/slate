
# TimberMenuItem




Name | Type | Description
---- | ---- | -----------
[children](#children) | array/bool | Get the child [TimberMenuItems](#TimberMenuItem)s of a [TimberMenuItem](#TimberMenuItem)
[is_external](#is_external) | bool | Checks to see if a link is external, helpful when creating rules for the target of a link
[link](#link) | string a full URL like http://mysite.com/thing/ | Get the full link to a Menu Item
[name](#name) | string | The label for the menu item
[slug](#slug) | string | The slug for the menu item
## __construct
`__construct( array/object $data)`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$data | array/object | 


## __toString
`__toString()`

**returns:** `void`




## add_child
`add_child( \TimberMenuItem $item)`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$item | \TimberMenuItem | 


## add_class
`add_class( mixed $class_name)`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$class_name | mixed | 


## children
`children()`

**returns:** `array/bool`

Get the child [TimberMenuItems](#TimberMenuItem)s of a [TimberMenuItem](#TimberMenuItem)


## external
`external()`

**returns:** `bool`

Checks to see if a link is external, helpful when creating rules for the target of a link


## is_external
`is_external()`

**returns:** `bool`

Checks to see if a link is external, helpful when creating rules for the target of a link

```handlebars
	
```
## link
`link()`

**returns:** `string a full URL like http://mysite.com/thing/`

Get the full link to a Menu Item

```handlebars
	{% for item in menu.items %}
	    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
	{% endfor %}
```
## meta
`meta( \unknown $key)`

**returns:** `mixed whatever value is storied in the database`



Name | Type | Description
---- | ---- | -----------
$key | \unknown | string lookup key


## name
`name()`

**returns:** `string`

The label for the menu item


## path
`path()`

**returns:** `string the path of a URL like /foo`

Return the relative path of a Menu Item's link

```handlebars
	{% for item in menu.items %}
	    <li><a href="{{ item.path }}">{{ item.title }}</a></li>
	{% endfor %}
```
## slug
`slug()`

**returns:** `string`

The slug for the menu item

```handlebars
	<ul>
	    {% for item in menu.items %}
	        <li class="{{item.slug}}">
	            <a href="{{item.link}}">{{item.name}}</a>
	         </li>
	    {% endfor %}
	</ul>
## title
`title()`

**returns:** `string the public label like Foo`

Gets the public label for the menu item

```handlebars
	{% for item in menu.items %}
	    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
	{% endfor %}
```

### Class: object_type



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

