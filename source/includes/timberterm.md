
# TimberTerm
Terms: WordPress has got 'em, you want 'em. Categories. Tags. Custom Taxonomies. You don't care, you're a fiend. Well let's get this under control

###### PHP
```php
<?php
//Get a term by its ID
$context['term'] = new TimberTerm(6);
//Get a term when on a term archive page
$context['term_page'] = new TimberTerm();
//Get a term with a slug
$context['team'] = new TimberTerm('patriots');
//Get a team with a slug from a specific taxonomy
$context['st_louis'] = new TimberTerm('cardinals', 'baseball');
Timber::render('index.twig', $context);
```
###### Twig
```twig
<h2>{{term_page.name}} Archives</h2>
<h3>Teams</h3>
<ul>
    <li>{{st_louis.name}} - {{st_louis.description}}</li>
    <li>{{team.name}} - {{team.description}}</li>
</ul>
```
###### HTML
```html
<h2>Team Archives</h2>
<h3>Teams</h3>
<ul>
    <li>St. Louis Cardinals - Winner of 11 World Series</li>
    <li>New England Patriots - Winner of 4 Super Bowls</li>
</ul>
```

Name | Type | Description
---- | ---- | -----------
[children](#children) | array | 
[description](#description) | string | 
[edit_link](#edit_link) | string | 
[link](#link) | string | 
[meta](#meta) | string | 
name | string | the human-friendly name of the term (ex: French Cuisine)
[path](#path) | string | 
[posts](#posts) | array/bool/null | 
taxonomy | strng | the WordPress taxonomy slug (ex: `post_tag` or `actors`)
[title](#title) | string | 

## __construct
`__construct( mixed/int $tid=null, string $tax="" )`

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



## description
`description( )`

**returns:** `string` 



## edit_link
`edit_link( )`

**returns:** `string` 



## from
`from( mixed $tid, mixed $taxonomy )`

**returns:** `\static` 

Name | Type | Description
---- | ---- | -----------
$tid | mixed | 
$taxonomy | mixed | 



## <strike>get_page</strike>
**DEPRECATED** 0.20.0 this was a dumb idea

`get_page( int $i )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$i | int | 



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
`posts( mixed/int $numberposts_or_args=10, string $post_type_or_class="any", string $post_class="" )`

**returns:** `array/bool/null` 

Name | Type | Description
---- | ---- | -----------
$numberposts_or_args | mixed/int | 
$post_type_or_class | string | 
$post_class | string | 

###### Twig
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



## <strike>url</strike>
**DEPRECATED** 0.21.9 use TimberTerm::link() instead

`url( )`

**returns:** `string` 




### Class: TimberTerm

> Terms: WordPress has got 'em, you want 'em. Categories. Tags. Custom Taxonomies. You don't care, you're a fiend. Well let's get this under control

###### Example
###### PHP
```php
<?php
//Get a term by its ID
$context['term'] = new TimberTerm(6);
//Get a term when on a term archive page
$context['term_page'] = new TimberTerm();
//Get a term with a slug
$context['team'] = new TimberTerm('patriots');
//Get a team with a slug from a specific taxonomy
$context['st_louis'] = new TimberTerm('cardinals', 'baseball');
Timber::render('index.twig', $context);
```
###### Twig
```twig
<h2>{{term_page.name}} Archives</h2>
<h3>Teams</h3>
<ul>
    <li>{{st_louis.name}} - {{st_louis.description}}</li>
    <li>{{team.name}} - {{team.description}}</li>
</ul>
```
###### HTML
```html
<h2>Team Archives</h2>
<h3>Teams</h3>
<ul>
    <li>St. Louis Cardinals - Winner of 11 World Series</li>
    <li>New England Patriots - Winner of 4 Super Bowls</li>
</ul>
```



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

