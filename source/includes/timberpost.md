
# TimberPost




Name | Type | Description
---- | ---- | -----------
[author](#author) | \TimberUser/bool A TimberUser object if found, false if not | Return the author of a post
[categories](#categories) | array of TimberTerms | Get the categoires on a particular post
[category](#category) | \TimberTerm/null | Returns a category attached to a post
[children](#children) | array | Returns an array of children on the post as TimberPosts (or other claass as you define).
class | string | $class stores the CSS classes for the post (ex: "post post-type-book post-123")
[comments](#comments) | bool/array | Gets the comments on a TimberPost and returns them as an array of [TimberComments](#TimberComment) (or whatever comment class you set).
[content](#content) | string | Gets the actual content of a WP Post, as opposed to post_content this will run the hooks/filters attached to the_content. \This guy will return your posts content with WordPress filters run on it (like for shortcodes and wpautop).
[date](#date) | string | Get the date to use in your template!
[format](#format) | mixed | 
[get_preview](#get_preview) | string of the post preview | get a preview of your post, if you have an excerpt it will use that, otherwise it will pull from the post_content. If there's a <!-- more --> tag it will use that to mark where to pull through.
id | string | $id the numeric WordPress id of a post
[link](#link) | string ex: http://example.org/2015/07/my-awesome-post | get the permalink for a post object
[next](#next) | mixed | 
[parent](#parent) | bool/\TimberPost | Gets the parent (if one exists) from a post as a TimberPost object (or whatever is set in TimberPost::$PostClass)
[path](#path) | string | Gets the relative path of a WP Post, so while link() will return http://example.org/2015/07/my-cool-post this will return just /2015/07/my-cool-post
post_status | string | 		$post_status 	the status of a post ("draft", "publish", etc.)
post_type | string | 	$post_type 		the name of the post type, this is the machine name (so "my_custom_post_type" as opposed to "My Custom Post Type")
[prev](#prev) | mixed | Get the previous post in a set
slug | string | 	$slug 		the URL-safe slug, this corresponds to the poorly-named "post_name" in the WP database, ex: "hello-world"
[tags](#tags) | array | Gets the tags on a post, uses WP's post_tag taxonomy
[terms](#terms) | array | Get the terms associated with the post This goes across all taxonomies by default
[thumbnail](#thumbnail) | \TimberImage/null of your thumbnail | get the featured image as a TimberImage
[title](#title) | string | Returns the processed title to be used in templates. This returns the title of the post after WP's filters have run. This is analogous to `the_title()` in standard WP template tags.
## __construct
`__construct( mixed $pid=null)`

**returns:** `void`

If you send the constructor nothing it will try to figure out the current post id based on being inside The_Loop

Name | Type | Description
---- | ---- | -----------
$pid | mixed | 

```php
	$post = new TimberPost();
	$other_post = new TimberPost($random_post_id);
```
## __toString
`__toString()`

**returns:** `string`

Outputs the title of the post if you do something like `<h1>{{post}}</h1>`


## author
`author()`

**returns:** `\TimberUser/bool A TimberUser object if found, false if not`

Return the author of a post

```handlebars
	<h1>{{post.title}}</h1>
	<p class="byline">
	    <a href="{{post.author.link}}">{{post.author.name}}</a>
	</p>
```
## categories
`categories()`

**returns:** `array of TimberTerms`

Get the categoires on a particular post


## category
`category()`

**returns:** `\TimberTerm/null`

Returns a category attached to a post


## children
`children( string $post_type=`"any"`, bool/string/bool $childPostClass=false)`

**returns:** `array`

Returns an array of children on the post as TimberPosts (or other claass as you define).

Name | Type | Description
---- | ---- | -----------
$post_type | string | _optional_ use to find children of a particular post type (attachment vs. page for example). You might want to restrict to certain types of children in case other stuff gets all mucked in there. You can use 'parent' to use the parent's post type
$childPostClass | bool/string/bool | _optional_ a custom post class (ex: 'MyTimberPost') to return the objects as. By default (false) it will use TimberPost::$post_class value.

```handlebars
	{% if post.children %}
	    Here are the child pages:
	    {% for child in page.children %}
	        <a href="{{ child.link }}">{{ child.title }}</a>
	    {% endfor %}
	{% endif %}
```
## comments
`comments( int $count, string $order=`"wp"`, string $type=`"comment"`, string $status=`"approve"`, string $CommentClass=`"TimberComment"`)`

**returns:** `bool/array`

Gets the comments on a TimberPost and returns them as an array of [TimberComments](#TimberComment) (or whatever comment class you set).

Name | Type | Description
---- | ---- | -----------
$count | int | Set the number of comments you want to get. `0` is analogous to "all"
$order | string | use WordPress ordering or a different scheme
$type | string | For when other plugins use the comments table for their own special purposes, might be set to 'liveblog' or other depending on what's stored in yr comments table
$status | string | Could be 'pending', etc.
$CommentClass | string | What class to use when returning Comment objects. As you become a Timber pro, you might find yourself extending TimberComment for your site or app (obviously, totally optional)

```handlebars
	{# single.twig #}
	<h4>Comments:</h4>
	{% for comment in post.comments %}
		<div class="comment-{{comment.ID}} comment-order-{{loop.index}}">
			<p>{{comment.author.name}} said:</p>
			<p>{{comment.content}}</p>
		</div>
	{% endfor %}
```
## content
`content( int $page)`

**returns:** `string`

Gets the actual content of a WP Post, as opposed to post_content this will run the hooks/filters attached to the_content. \This guy will return your posts content with WordPress filters run on it (like for shortcodes and wpautop).

Name | Type | Description
---- | ---- | -----------
$page | int | 

```handlebars
	<div class="article">
	    <h2>{{post.title}}</h2>
	    <div class="content">{{ post.content }}</div>
	</div>
```
## date
`date( string $date_format=`""`)`

**returns:** `string`

Get the date to use in your template!

Name | Type | Description
---- | ---- | -----------
$date_format | string | 

```handlebars
	Published on {{ post.date }} // Uses WP's formatting set in Admin
	OR
	Published on {{ post.date | date('F jS') }} // Jan 12th
```
```html
	Published on January 12, 2015
	OR
	Published on Jan 12th
```
## edit_link
`edit_link()`

**returns:** `bool/string`




## format
`format()`

**returns:** `mixed`




## get_comment_count
`get_comment_count()`

**returns:** `int`




## get_content
`get_content( int $len, int $page)`

**returns:** `string`

Displays the content of the post with filters, shortcodes and wpautop applied

Name | Type | Description
---- | ---- | -----------
$len | int | 
$page | int | 

```handlebars
	<div class="article-text">{{post.get_content}}</div>
```
```html
	<div class="article-text"><p>Blah blah blah</p><p>More blah blah blah.</p></div>
```
## get_display_date
`get_display_date( string $use=`"post_date"`)`

**returns:** `string`

Get the human-friendly date that should actually display in a .twig template

Name | Type | Description
---- | ---- | -----------
$use | string | 


## get_field
`get_field( string $field_name)`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$field_name | string | 


## get_image
`get_image( string $field)`

**returns:** `\TimberImage`



Name | Type | Description
---- | ---- | -----------
$field | string | 


## get_method_values
`get_method_values()`

**returns:** `array`




## get_paged_content
`get_paged_content()`

**returns:** `string`




## get_pagination
`get_pagination()`

**returns:** `array`

Get a data array of pagination so you can navigate to the previous/next for a paginated post


## get_post_type
`get_post_type()`

**returns:** `mixed`

Here is my summary

```handlebars
	This post is from <span>{{ post.get_post_type.labels.plural }}</span>
```
```html
	This post is from <span>Recipes</span>
```
## get_preview
`get_preview( mixed/int $len=50, bool $force=false, string $readmore=`"Read More"`, bool $strip=true)`

**returns:** `string of the post preview`

get a preview of your post, if you have an excerpt it will use that, otherwise it will pull from the post_content. If there's a <!-- more --> tag it will use that to mark where to pull through.

Name | Type | Description
---- | ---- | -----------
$len | mixed/int | The number of words that WP should use to make the tease. (Isn't this better than [this mess](http://wordpress.org/support/topic/changing-the-default-length-of-the_excerpt-1?replies=14)?). If you've set a post_excerpt on a post, we'll use that for the preview text; otherwise the first X words of the post_content
$force | bool | What happens if your custom post excerpt is longer then the length requested? By default (`$force = false`) it will use the full `post_excerpt`. However, you can set this to true to *force* your excerpt to be of the desired length
$readmore | string | The text you want to use on the 'readmore' link
$strip | bool | Strip tags? yes or no. tell me!

```handlebars
	<p>{{post.get_preview(50)}}</p>
```
## has_term
`has_term( string/int $term_name_or_id, string $taxonomy=`"all"`)`

**returns:** `bool`



Name | Type | Description
---- | ---- | -----------
$term_name_or_id | string/int | 
$taxonomy | string | 


## import_field
`import_field( string $field_name)`

**returns:** `void`



Name | Type | Description
---- | ---- | -----------
$field_name | string | 


## link
`link()`

**returns:** `string ex: http://example.org/2015/07/my-awesome-post`

get the permalink for a post object

```handlebars
	<a href="{{post.link}}">Read my post</a>
```
## meta
`meta( mixed/string $field_name=null)`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$field_name | mixed/string | 


## modified_author
`modified_author()`

**returns:** `\TimberUser/bool A TimberUser object if found, false if not`

Get the author (WordPress user) who last modified the post

```handlebars
	Last updated by {{ post.modified_author.name }}
```
```html
	Last updated by Harper Lee
```
## modified_date
`modified_date( string $date_format=`""`)`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$date_format | string | 


## modified_time
`modified_time( string $time_format=`""`)`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$time_format | string | 


## name
`name()`

**returns:** `string`




## next
`next( bool $in_same_cat=false)`

**returns:** `mixed`



Name | Type | Description
---- | ---- | -----------
$in_same_cat | bool | 


## paged_content
`paged_content()`

**returns:** `string`




## pagination
`pagination()`

**returns:** `array`




## parent
`parent()`

**returns:** `bool/\TimberPost`

Gets the parent (if one exists) from a post as a TimberPost object (or whatever is set in TimberPost::$PostClass)

```handlebars
	Parent page: <a href="{{ post.parent.link }}">{{ post.parent.title }}</a>
```
## path
`path()`

**returns:** `string`

Gets the relative path of a WP Post, so while link() will return http://example.org/2015/07/my-cool-post this will return just /2015/07/my-cool-post

```handlebars
	<a href="{{post.path}}">{{post.title}}</a>
```
## permalink
`permalink()`

**returns:** `string`




## prev
`prev( bool $in_same_cat=false)`

**returns:** `mixed`

Get the previous post in a set

Name | Type | Description
---- | ---- | -----------
$in_same_cat | bool | 

```handlebars
	<h4>Prior Entry:</h4>
	<h3>{{post.prev.title}}</h3>
	<p>{{post.prev.get_preview(25)}}</p>
```
## tags
`tags()`

**returns:** `array`

Gets the tags on a post, uses WP's post_tag taxonomy


## terms
`terms( string $tax=`""`, bool $merge=true)`

**returns:** `array`

Get the terms associated with the post This goes across all taxonomies by default

Name | Type | Description
---- | ---- | -----------
$tax | string | What taxonomy to pull from, defaults to all of them. You can use custom ones, or built-in WordPress taxonomies (category, tag). Timber plays nice and figures out that tag/tags/post_tag are all the same (and categories/category), for custom taxonomies you're on your own.
$merge | bool | Should the resulting array be one big one (true)? Or should it be an array of sub-arrays for each taxonomy (false)?


## thumbnail
`thumbnail()`

**returns:** `\TimberImage/null of your thumbnail`

get the featured image as a TimberImage

```handlebars
	<img src="{{post.thumbnail.src}}" />
```
## title
`title()`

**returns:** `string`

Returns the processed title to be used in templates. This returns the title of the post after WP's filters have run. This is analogous to `the_title()` in standard WP template tags.

```handlebars
	<h1>{{ post.title }}</h1>
```
## update
`update( string $field, mixed $value)`

**returns:** `void`

updates the post_meta of the current object with the given value

Name | Type | Description
---- | ---- | -----------
$field | string | 
$value | mixed | 


## get_wp_link_page
`get_wp_link_page( int $i)`

**returns:** `string`



Name | Type | Description
---- | ---- | -----------
$i | int | 



### <strike>Class: slug</strike>

> **DEPRECATED** since 0.21.7



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*
