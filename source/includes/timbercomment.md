
# TimberComment




Name | Type | Description
---- | ---- | -----------
[author](#author) | \TimberUser | 
[content](#content) | string | 
[date](#date) | string | 
[is_child](#is_child) | bool | 
[status](#status) | string | 

## __construct
`__construct( int $cid )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$cid | int | 


## __toString
`__toString( )`

**returns:** `void`




## author
`author( )`

**returns:** `\TimberUser`




## avatar
`avatar( mixed/int $size=92, string $default=`""` )`

**returns:** `bool/mixed/string`

Fetches the Gravatar ```handlebars {{comment.avatar(36,template_uri~"/img/dude.jpg")}} ```

Name | Type | Description
---- | ---- | -----------
$size | mixed/int | 
$default | string | 


## content
`content( )`

**returns:** `string`




## date
`date( )`

**returns:** `string`




## is_child
`is_child( )`

**returns:** `bool`




## meta
`meta( string $field_name )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$field_name | string | 


## status
`status( )`

**returns:** `string`




## get_meta_field
`get_meta_field( string $field_name )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$field_name | string | 


## get_meta_fields
`get_meta_fields( mixed/int $comment_id=null )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$comment_id | mixed/int | 



### Class: TimberComment



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

