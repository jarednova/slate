
# TimberImage




Name | Type | Description
---- | ---- | -----------
[alt](#alt) | string alt text stored in WordPress | 
[aspect](#aspect) | \float | 
class | string | $class stores the CSS classes for the post (ex: "post post-type-book post-123")
file_loc | string | $file_loc the location of the image file in the filesystem (ex: `/var/www/htdocs/wp-content/uploads/2015/08/my-pic.jpg`)
[height](#height) | int | 
id | string | $id the numeric WordPress id of a post
[parent](#parent) | bool/\TimberPost | 
[path](#path) | string the /relative/path/to/the/file | 
post_status | string | 		$post_status 	the status of a post ("draft", "publish", etc.)
post_type | string | 	$post_type 		the name of the post type, this is the machine name (so "my_custom_post_type" as opposed to "My Custom Post Type")
slug | string | 	$slug 		the URL-safe slug, this corresponds to the poorly-named "post_name" in the WP database, ex: "hello-world"
[src](#src) | bool/string | 
[width](#width) | int | 

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




## get_dimensions
`get_dimensions( mixed/string $dim=null )`

**returns:** `array/int`



Name | Type | Description
---- | ---- | -----------
$dim | mixed/string | 


## <strike>get_url</strike>
`get_url( )`

**returns:** `string`

**DEPRECATED** use src() instead




## height
`height( )`

**returns:** `int`




## parent
`parent( )`

**returns:** `bool/\TimberPost`




## path
`path( )`

**returns:** `string the /relative/path/to/the/file`




## src
`src( string $size=`""` )`

**returns:** `bool/string`



Name | Type | Description
---- | ---- | -----------
$size | string | 


## <strike>url</strike>
`url( )`

**returns:** `string`

**DEPRECATED** use src() instead




## width
`width( )`

**returns:** `int`




## wp_upload_dir
`wp_upload_dir( )`

**returns:** `void`




## init_with_url
`init_with_url( string $url )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$url | string | 



### Class: TimberImage



*This class extends \TimberPost*

*This class implements \TimberCoreInterface*

