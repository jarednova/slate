
# TimberHelper




Name | Type | Description
---- | ---- | -----------

[transient](#transient) | mixed | A utility for a one-stop shop for Transients
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


## download_url
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


## get_comment_form
`get_comment_form( mixed $post_id=null, array $args=array() )`

**returns:** `string`

Gets the comment form for use on a single article page

Name | Type | Description
---- | ---- | -----------
$post_id | mixed | 
$args | array | 


## get_current_url
`get_current_url( )`

**returns:** `mixed`




## get_full_path
`get_full_path( mixed $src )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$src | mixed | 


## get_image_path
`get_image_path( mixed $iid )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$iid | mixed | 


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


## get_params
`get_params( mixed $i=-1 )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$i | mixed | 


## get_path_base
`get_path_base( )`

**returns:** `mixed`




## get_post_by_meta
`get_post_by_meta( mixed $key, mixed $value )`

**returns:** `int`



Name | Type | Description
---- | ---- | -----------
$key | mixed | 
$value | mixed | 


## get_posts_by_meta
`get_posts_by_meta( mixed $key, mixed $value )`

**returns:** `array/int`



Name | Type | Description
---- | ---- | -----------
$key | mixed | 
$value | mixed | 


## get_rel_path
`get_rel_path( mixed $src )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$src | mixed | 


## get_rel_url
`get_rel_url( mixed $url, bool $force=false )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$force | bool | 


## get_term_id_by_term_taxonomy_id
`get_term_id_by_term_taxonomy_id( mixed $ttid )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$ttid | mixed | 


## get_wp_title
`get_wp_title( string $separator=`" "`, string $seplocation=`"left"` )`

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


## is_external
`is_external( mixed $url )`

**returns:** `bool`



Name | Type | Description
---- | ---- | -----------
$url | mixed | 


## is_local
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


## is_url
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



Name | Type | Description
---- | ---- | -----------
$function | \callback | 
$args | array | 


## osort
`osort( mixed $array, mixed $prop )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$array | mixed | 
$prop | mixed | 


## paginate_links
`paginate_links( string $args=`""` )`

**returns:** `array`



Name | Type | Description
---- | ---- | -----------
$args | string | 


## prepend_to_url
`prepend_to_url( mixed $url, mixed $path )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$url | mixed | 
$path | mixed | 


## preslashit
`preslashit( mixed $path )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$path | mixed | 


## remove_double_slashes
`remove_double_slashes( mixed $url )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$url | mixed | 


## start_timer
`start_timer( )`

**returns:** `\float`




## stop_timer
`stop_timer( mixed $start )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$start | mixed | 


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

```php
	$favorites = Timber::transient('user-'.$uid.'-favorites', function() use ($uid) {
	 	//some expensive query here that's doing something you want to store to a transient
	 	return $favorites;
	}, 600);
	Timber::context['favorites'] = $favorites;
	Timber::render('single.twig', $context);
```
## trim_words
`trim_words( mixed $text, mixed $num_words=55, mixed $more=null, string $allowed_tags=`"p a span b i br"` )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$text | mixed | 
$num_words | mixed | 
$more | mixed | 
$allowed_tags | string | 


## twitterify
`twitterify( mixed $ret )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$ret | mixed | 



### Class: TimberHelper



