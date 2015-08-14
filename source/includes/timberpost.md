
# TimberPost
This is the object you use to access or extend WordPress posts, Think of it as Timber's (more accessible) version of WP_Post

## __construct
**returns:** `void`

If you send the constructor nothing it will try to figure out the current post id based on being inside The_Loop

Type | Name | Description
---- | ---- | -----------
mixed | $pid | 

```php
	$post = new TimberPost();
	$other_post = new TimberPost($random_post_id);
```
## __toString
**returns:** `string`

Outputs the title of the post if you do something like `<h1>{{post}}</h1>`


## author
**returns:** `bool/\TimberUser`

Return the author of a post

```twig
	By <a href="{{post.author.link}}">{{ post.author.name }}</a>
```
## categories
**returns:** `array of TimberTerms`

Get the categoires on a particular post


## category
**returns:** `\TimberTerm/null`




## children
**returns:** `array`

Get the children of a post

Type | Name | Description
---- | ---- | -----------
string | $post_type | use to find children of a particular post type (attachment vs. page for example)
bool/string/bool | $childPostClass | a custom post class (ex: 'MyTimberPost') to return the objects as

```twig
	{% if post.children %}
	    Here are the child pages:
	    {% for child in page.children %}
	        <a href="{{ child.link }}">{{ child.title }}</a>
	    {% endfor %}
	{% endif %}
```
	                                   by default (false) it will use TimberPost::$post_class value
## comments
**returns:** `bool/array`

Get the comments on your post

```twig
	My Post's Comments:
	{% for comment in post.comments %}
	    <div class="comment comment-id-{{comment.id}}">
	        <p>{{ comment.content }}</p>
	    </div>
	{% endfor %}
```
## content
**returns:** `string`

Gets the actual content of a WP Post, as opposed to post_content this will run the hooks/filters attached to the_content

Type | Name | Description
---- | ---- | -----------
int | $page | 

```twig
	<div class="article">
	    {{ post.content }}
	</div>
```
## date
**returns:** `string`

Get the date to use in your template!

Type | Name | Description
---- | ---- | -----------
string | $date_format | 

```twig
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
**returns:** `bool/string`




## format
**returns:** `mixed`




## get_comment_count
**returns:** `int`




## get_content
**returns:** `string`

Displays the content of the post with filters, shortcodes and wpautop applied

Type | Name | Description
---- | ---- | -----------
int | $len | 
int | $page | 

```twig
	<div class="article-text">{{post.get_content}}</div>
```
```html
	<div class="article-text"><p>Blah blah blah</p><p>More blah blah blah.</p></div>
```
## get_display_date
**returns:** `string`

Get the human-friendly date that should actually display in a .twig template

Type | Name | Description
---- | ---- | -----------
string | $use | 


## get_field
**returns:** `mixed`



Type | Name | Description
---- | ---- | -----------
string | $field_name | 


## get_image
**returns:** `\TimberImage`



Type | Name | Description
---- | ---- | -----------
string | $field | 


## get_method_values
**returns:** `array`




## get_paged_content
**returns:** `string`




## get_pagination
**returns:** `array`

Get a data array of pagination so you can navigate to the previous/next for a paginated post


## get_post_type
**returns:** `mixed`

Here is my summary

```twig
	This post is from <span>{{ post.get_post_type.labels.plural }}</span>
```
```html
	This post is from <span>Recipes</span>
```
## get_preview
**returns:** `string`

get a preview of your post, if you have an excerpt it will use that, otherwise it will pull from the post_content. If there's a <!-- more --> tag it will use that to mark where to pull through.

Type | Name | Description
---- | ---- | -----------
mixed/int | $len | the number of words you want
bool | $force | 
string | $readmore | 
bool | $strip | 

```twig
	<p>{{post.get_preview(50)}}</p>
```
## has_term
**returns:** `bool`



Type | Name | Description
---- | ---- | -----------
string/int | $term_name_or_id | 
string | $taxonomy | 


## import_field
**returns:** `void`



Type | Name | Description
---- | ---- | -----------
string | $field_name | 


## link
**returns:** `string ex: http://example.org/2015/07/my-awesome-post`

get the permalink for a post object

```twig
	<a href="{{post.link}}">Read my post</a>
```
## meta
**returns:** `mixed`



Type | Name | Description
---- | ---- | -----------
mixed/string | $field_name | 


## modified_author
**returns:** `bool/\TimberUser`

Get the author (WordPress user) who last modified the post

```twig
	Last updated by {{ post.modified_author.name }}
```
```html
	Last updated by Harper Lee
```
## modified_date
**returns:** `string`



Type | Name | Description
---- | ---- | -----------
string | $date_format | 


## modified_time
**returns:** `string`



Type | Name | Description
---- | ---- | -----------
string | $time_format | 


## name
**returns:** `string`




## next
**returns:** `mixed`



Type | Name | Description
---- | ---- | -----------
bool | $in_same_cat | 


## paged_content
**returns:** `string`




## pagination
**returns:** `array`




## parent
**returns:** `bool/[\TimberPost](#class-timberpost)`

Gets the parent (if one exists) from a post as a TimberPost object (or whatever is set in TimberPost::$PostClass)

```twig
	Parent page: <a href="{{ post.parent.link }}">{{ post.parent.title }}</a>
```
## path
**returns:** `string`

Gets the relative path of a WP Post, so while link() will return http://example.org/2015/07/my-cool-post this will return just /2015/07/my-cool-post

```twig
	<a href="{{post.path}}">{{post.title}}</a>
```
## permalink
**returns:** `string`




## post_class
**returns:** `string a space-seperated list of classes`

Get the CSS classes for a post. For usage you should use `{{post.class}}` instead of `{{post.post_class}}`

Type | Name | Description
---- | ---- | -----------
string | $class | additional classes you want to add

```twig
	<article class="{{ post.class }}">
	   {# Some stuff here #}
	</article>
```
	 
```html
	<article class="post-2612 post type-post status-publish format-standard has-post-thumbnail hentry category-data tag-charleston-church-shooting tag-dylann-roof tag-gun-violence tag-hate-crimes tag-national-incident-based-reporting-system">
	   {# Some stuff here #}
	</article>
```
## prev
**returns:** `mixed`

Get the previous post in a set

Type | Name | Description
---- | ---- | -----------
bool | $in_same_cat | 

```twig
	<h4>{{ post.prev.title}}</h4>
```
## tags
**returns:** `array`

Gets the tags on a post, uses WP's post_tag taxonomy


## terms
**returns:** `array`

Get the terms associated with the post This goes across all taxonomies by default

Type | Name | Description
---- | ---- | -----------
string | $tax | 


## thumbnail
**returns:** `null/\TimberImage`

get the featured image as a TimberImage

```twig
	<img src="{{post.thumbnail.src}}" />
```
## title
**returns:** `string`

Returns the processed title to be used in templates

```twig
	<h1>{{ post.title }}</h1>
```
## update
**returns:** `void`

updates the post_meta of the current object with the given value

Type | Name | Description
---- | ---- | -----------
string | $field | 
mixed | $value | 


## get_wp_link_page
**returns:** `string`



Type | Name | Description
---- | ---- | -----------
int | $i | 



### Class: TimberPost

> This is the object you use to access or extend WordPress posts, Think of it as Timber's (more accessible) version of WP_Post



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

