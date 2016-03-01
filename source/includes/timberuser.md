
# TimberUser
This is used in Timber to represent users retrived from WordPress. You can call `$my_user = new TimberUser(123);` directly, or access it through the `{{ post.author }}` method.

###### PHP
```php
<?php
$context['current_user'] = new TimberUser();
$context['post'] = new TimberPost();
Timber::render('single.twig', $context);
```
###### Twig
```twig
<p class="current-user-info">Your name is {{ current_user.name }}</p>
<p class="article-info">This article is called "{{ post.title }}" and it's by {{ post.author.name }}
```
###### HTML
```html
<p class="current-user-info">Your name is Jesse Eisenberg</p>
<p class="article-info">This article is called "Consider the Lobster" and it's by David Foster Wallace
```

Name | Type | Description
---- | ---- | -----------
description | string | The description from WordPress
first_name | string | The first name of the user
id | int | The ID from WordPress
last_name | string | The last name of the user
[link](#link) | string | http://example.org/author/lincoln
[name](#name) | string | the human-friendly name of the user (ex: "Buster Bluth")
[path](#path) | string | ex: /author/lincoln
[slug](#slug) | string | ex baberaham-lincoln

## __construct
`__construct( bool/int/bool $uid=false )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$uid | bool/int/bool | 



## __toString
`__toString( )`

**returns:** `string` a fallback for TimberUser::name()

###### Twig
```twig
	This post is by {{ post.author }}
```
###### HTML
```html
	This post is by Jared Novack
```

## get_custom
`get_custom( )`

**returns:** `array/null` 



## <strike>get_link</strike>
**DEPRECATED** 0.21.9

`get_link( )`

**returns:** `string` The link to a user's profile page



## get_meta_field
`get_meta_field( string $field_name )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$field_name | string | 



## <strike>get_path</strike>
**DEPRECATED** 0.21.8

`get_path( )`

**returns:** `string` ex: /author/lincoln



## <strike>get_permalink</strike>
**DEPRECATED** 0.21.8

`get_permalink( )`

**returns:** `string` 



## link
`link( )`

**returns:** `string` http://example.org/author/lincoln



## meta
`meta( string $field_name )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$field_name | string | 



## name
`name( )`

**returns:** `string` the human-friendly name of the user (ex: "Buster Bluth")



## path
`path( )`

**returns:** `string` ex: /author/lincoln



## <strike>permalink</strike>
**DEPRECATED** 0.21.8

`permalink( )`

**returns:** `string` 



## slug
`slug( )`

**returns:** `string` ex baberaham-lincoln




### Class: TimberUser

> This is used in Timber to represent users retrived from WordPress. You can call `$my_user = new TimberUser(123);` directly, or access it through the `{{ post.author }}` method.

###### Example
###### PHP
```php
<?php
$context['current_user'] = new TimberUser();
$context['post'] = new TimberPost();
Timber::render('single.twig', $context);
```
###### Twig
```twig
<p class="current-user-info">Your name is {{ current_user.name }}</p>
<p class="article-info">This article is called "{{ post.title }}" and it's by {{ post.author.name }}
```
###### HTML
```html
<p class="current-user-info">Your name is Jesse Eisenberg</p>
<p class="article-info">This article is called "Consider the Lobster" and it's by David Foster Wallace
```



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

