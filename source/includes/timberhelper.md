
# TimberHelper
As the name suggests these are helpers for Timber (and you!) when developing. You can find additional (mainly internally-focused helpers) in TimberURLHelper



Name | Type | Description
---- | ---- | -----------
[ob_function](#ob_function) | string | 
[start_timer](#start_timer) | \float | 
[transient](#transient) | mixed | 

## array_to_object
`array_to_object( mixed $array )`

**returns:** `\stdClass` 

Name | Type | Description
---- | ---- | -----------
$array | mixed | 



## array_truncate
`array_truncate( mixed $array, mixed $len )`

**returns:** `array` 

Name | Type | Description
---- | ---- | -----------
$array | mixed | 
$len | mixed | 



## close_tags
`close_tags( mixed $html )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$html | mixed | 



## <strike>download_url</strike>
**DEPRECATED** 0.18.0

`download_url( mixed $url, mixed $timeout=300 )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$timeout | mixed | 



## error_log
`error_log( mixed $arg )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$arg | mixed | that you want to error_log



## function_wrapper
`function_wrapper( mixed $function_name, array $defaults=array(), bool $return_output_buffer=false )`

**returns:** `\TimberFunctionWrapper` 

Name | Type | Description
---- | ---- | -----------
$function_name | mixed | 
$defaults | array | 
$return_output_buffer | bool | 



## <strike>get_comment_form</strike>
**DEPRECATED** 0.21.8 use `{{ function('comment_form') }}` instead

`get_comment_form( mixed $post_id=null, array $args=array() )`

**returns:** `string` 

Gets the comment form for use on a single article page

Name | Type | Description
---- | ---- | -----------
$post_id | mixed | 
$args | array | 



## <strike>get_current_url</strike>
**DEPRECATED** 0.18.0

`get_current_url( )`

**returns:** `mixed` 



## <strike>get_full_path</strike>
**DEPRECATED** 0.18.0

`get_full_path( mixed $src )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$src | mixed | 



## get_object_by_property
`get_object_by_property( mixed $array, mixed $key, mixed $value )`

**returns:** `array/null` 

Name | Type | Description
---- | ---- | -----------
$array | mixed | 
$key | mixed | 
$value | mixed | 



## get_object_index_by_property
`get_object_index_by_property( mixed $array, mixed $key, mixed $value )`

**returns:** `bool/int` 

Name | Type | Description
---- | ---- | -----------
$array | mixed | 
$key | mixed | 
$value | mixed | 



## <strike>get_params</strike>
**DEPRECATED** 0.18.0

`get_params( mixed $i=-1 )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$i | mixed | 



## <strike>get_path_base</strike>
**DEPRECATED** 0.18.0

`get_path_base( )`

**returns:** `mixed` 



## <strike>get_post_by_meta</strike>
**DEPRECATED** 0.20.0

`get_post_by_meta( mixed $key, mixed $value )`

**returns:** `int` 

Name | Type | Description
---- | ---- | -----------
$key | mixed | 
$value | mixed | 



## <strike>get_posts_by_meta</strike>
**DEPRECATED** 0.20.0

`get_posts_by_meta( mixed $key, mixed $value )`

**returns:** `array/int` 

Name | Type | Description
---- | ---- | -----------
$key | mixed | 
$value | mixed | 



## <strike>get_rel_path</strike>
**DEPRECATED** 0.18.0

`get_rel_path( mixed $src )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$src | mixed | 



## <strike>get_rel_url</strike>
**DEPRECATED** 0.18.0

`get_rel_url( mixed $url, bool $force=false )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$force | bool | 



## <strike>get_term_id_by_term_taxonomy_id</strike>
**DEPRECATED** 0.21.8

`get_term_id_by_term_taxonomy_id( mixed $ttid )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$ttid | mixed | 



## get_wp_title
`get_wp_title( string $separator=" ", string $seplocation="left" )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$separator | string | 
$seplocation | string | 



## is_array_assoc
`is_array_assoc( mixed $arr )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$arr | mixed | 



## <strike>is_external</strike>
**DEPRECATED** 0.18.0

`is_external( mixed $url )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 



## <strike>is_local</strike>
**DEPRECATED** 0.18.0

`is_local( mixed $url )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 



## is_true
`is_true( mixed $value )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$value | mixed | 



## <strike>is_url</strike>
**DEPRECATED** 0.18.0

`is_url( mixed $url )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 



## iseven
`iseven( mixed $i )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$i | mixed | 



## isodd
`isodd( mixed $i )`

**returns:** `bool` 

Name | Type | Description
---- | ---- | -----------
$i | mixed | 



## ob_function
`ob_function( \callback $function, array $args=array() )`

**returns:** `string` 

Calls a function with an output buffer. This is useful if you have a function that outputs text that you want to capture and use within a twig template.

Name | Type | Description
---- | ---- | -----------
$function | \callback | 
$args | array | 

###### PHP
```php
<?php
	function the_form() {
	    echo '<form action="form.php"><input type="text" /><input type="submit /></form>';
	}
		$context = Timber::get_context();
	$context['post'] = new TimberPost();
	$context['my_form'] = TimberHelper::ob_function('the_form');
	Timber::render('single-form.twig', $context);
```
###### Twig
```twig
	<h1>{{ post.title }}</h1>
	{{ my_form }}
```
###### HTML
```html
	<h1>Apply to my contest!</h1>
	<form action="form.php"><input type="text" /><input type="submit /></form>
```

## osort
`osort( mixed $array, mixed $prop )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$array | mixed | 
$prop | mixed | 



## paginate_links
`paginate_links( string $args="" )`

**returns:** `array` 

Name | Type | Description
---- | ---- | -----------
$args | string | 



## <strike>prepend_to_url</strike>
**DEPRECATED** 0.18.0

`prepend_to_url( mixed $url, mixed $path )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$path | mixed | 



## <strike>preslashit</strike>
**DEPRECATED** 0.18.0

`preslashit( mixed $path )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$path | mixed | 



## <strike>remove_double_slashes</strike>
**DEPRECATED** 0.18.0

`remove_double_slashes( mixed $url )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$url | mixed | 



## start_timer
`start_timer( )`

**returns:** `\float` 

For measuring time, this will start a timer



## stop_timer
`stop_timer( mixed $start )`

**returns:** `string` 

For stopping time and getting the data

Name | Type | Description
---- | ---- | -----------
$start | mixed | 

###### PHP
```php
<?php
	$start = TimberHelper::start_timer();
	// do some stuff that takes awhile
	echo TimberHelper::stop_timer( $start );
```

## transient
`transient( mixed $slug, \callable $callback, mixed $transient_time, mixed $lock_timeout=5, bool $force=false )`

**returns:** `mixed` 

A utility for a one-stop shop for Transients

Name | Type | Description
---- | ---- | -----------
$slug | mixed | 
$callback | \callable |      Callback that generates the data that's to be cached
$transient_time | mixed | 
$lock_timeout | mixed | 
$force | bool | 

###### PHP
```php
<?php
	$favorites = Timber::transient('user-'.$uid.'-favorites', function() use ($uid) {
	 	//some expensive query here that's doing something you want to store to a transient
	 	return $favorites;
	}, 600);
	Timber::context['favorites'] = $favorites;
	Timber::render('single.twig', $context);
```

## trim_words
`trim_words( mixed $text, mixed $num_words=55, mixed $more=null, string $allowed_tags="p a span b i br blockquote" )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$text | mixed | 
$num_words | mixed | 
$more | mixed | 
$allowed_tags | string | 




### Class: TimberHelper

> As the name suggests these are helpers for Timber (and you!) when developing. You can find additional (mainly internally-focused helpers) in TimberURLHelper



