
# TimberTerm




Name | Type | Description
---- | ---- | -----------
[children](#children) | array | 
[edit_link](#edit_link) | string | 
[link](#link) | string | 
[meta](#meta) | string | 
[path](#path) | string | 
[posts](#posts) | array/bool/null | 
## __construct
`__construct( mixed/int $tid=null, string $tax=`""` )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$tid | mixed/int | 
$tax | string | 


## __toString
`__toString( )`

**returns:** `string`




## children
`children( )`

**returns:** `array`




## edit_link
`edit_link( )`

**returns:** `string`




## get_page
`get_page( int $i )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$i | int | 


## get_posts
`get_posts( mixed/int $numberposts=10, string $post_type=`"any"`, string $PostClass=`""` )`

**returns:** `array/bool/null`



Name | Type | Description
---- | ---- | -----------
$numberposts | mixed/int | 
$post_type | string | 
$PostClass | string | 


## get_url
`get_url( )`

**returns:** `string`




## link
`link( )`

**returns:** `string`




## meta
`meta( string $field_name )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$field_name | string | 


## path
`path( )`

**returns:** `string`




## posts
`posts( mixed/int $numberposts_or_args=10, string $post_type_or_class=`"any"`, string $post_class=`""` )`

**returns:** `array/bool/null`



Name | Type | Description
---- | ---- | -----------
$numberposts_or_args | mixed/int | 
$post_type_or_class | string | 
$post_class | string | 

```twig
	<h4>Recent posts in {{term.name}}</h4>
	<ul>
	{% for post in term.posts(3, 'post') %}
	    <li><a href="{{post.link}}">{{post.title}}</a></li>
	{% endfor %}
	</ul>
```
## title
`title( )`

**returns:** `string`




## update
`update( mixed $key, mixed $value )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$key | mixed | 
$value | mixed | 


## url
`url( )`

**returns:** `string`





### Class: TimberTerm



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

