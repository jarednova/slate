
# TimberImage




Name | Type | Description
---- | ---- | -----------
class | string | $class stores the CSS classes for the post (ex: "post post-type-book post-123")
id | string | $id the numeric WordPress id of a post
post_status | string | 		$post_status 	the status of a post ("draft", "publish", etc.)
post_type | string | 	$post_type 		the name of the post type, this is the machine name (so "my_custom_post_type" as opposed to "My Custom Post Type")
slug | string | 	$slug 		the URL-safe slug, this corresponds to the poorly-named "post_name" in the WP database, ex: "hello-world"
## __construct
`__construct( int $iid )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$iid | int | 


## __toString
`__toString( )`

**returns:** `string`




## alt
`alt( )`

**returns:** `string alt text stored in WordPress`




## aspect
`aspect( )`

**returns:** `\float`




## get_alt
`get_alt( )`

**returns:** `string`




## get_dimensions
`get_dimensions( mixed/string $dim=null )`

**returns:** `array/int`



Name | Type | Description
---- | ---- | -----------
$dim | mixed/string | 


## get_height
`get_height( )`

**returns:** `int`




## get_parent
`get_parent( )`

**returns:** `bool/\TimberImage`




## get_path
`get_path( )`

**returns:** `string`




## get_src
`get_src( string $size=`""` )`

**returns:** `bool/string`



Name | Type | Description
---- | ---- | -----------
$size | string | 


## get_url
`get_url( )`

**returns:** `string`




## get_width
`get_width( )`

**returns:** `int`




## height
`height( )`

**returns:** `int`




## init
`init( bool/int $iid=false )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$iid | bool/int | 


## src
`src( string $size=`""` )`

**returns:** `bool/string`



Name | Type | Description
---- | ---- | -----------
$size | string | 


## url
`url( )`

**returns:** `string`




## width
`width( )`

**returns:** `int`




## wp_upload_dir
`wp_upload_dir( )`

**returns:** `void`





### <strike>Class: slug</strike>

> **DEPRECATED** since 0.21.7



*This class extends \TimberPost*

*This class implements \TimberCoreInterface*

