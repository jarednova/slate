
# TimberComment




Name | Type | Description
---- | ---- | -----------

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

Fetches the Gravatar ```twig {{comment.avatar(36,template_uri~"/img/dude.jpg")}} ```

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




## init
`init( \integer $cid )`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$cid | \integer | 


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




## avatar_default
`avatar_default( string $default, string $email, string $size, string $host )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$default | string | 
$email | string | 
$size | string | 
$host | string | 


## avatar_email
`avatar_email( )`

**returns:** `string`




## avatar_host
`avatar_host( string $email_hash )`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$email_hash | string | 


## avatar_out
`avatar_out( string $default, string $host, string $email_hash, string $size )`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$default | string | 
$host | string | 
$email_hash | string | 
$size | string | 


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

