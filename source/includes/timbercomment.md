
# TimberComment
The TimberComment class is used to view the output of comments. 99% of the time this will be in the context of the comments on a post. However you can also fetch a comment directly using its comment ID.

###### PHP
```php
<?php
$comment = new TimberComment($comment_id);
$context['comment_of_the_day'] = $comment;
Timber::render('index.twig', $context);
```
###### Twig
```twig
<p class="comment">{{comment_of_the_day.content}}</p>
<p class="comment-attribution">- {{comment.author.name}}</p>
```
###### HTML
```html
<p class="comment">But, O Sarah! If the dead can come back to this earth and flit unseen around those they loved, I shall always be near you; in the garish day and in the darkest night -- amidst your happiest scenes and gloomiest hours - always, always; and if there be a soft breeze upon your cheek, it shall be my breath; or the cool air fans your throbbing temple, it shall be my spirit passing by.</p>
<p class="comment-attribution">- Sullivan Ballou</p>
```

Name | Type | Description
---- | ---- | -----------
[approved](#approved) | boolean | 
[author](#author) | \TimberUser | 
[avatar](#avatar) | bool/mixed/string | 
[content](#content) | string | 
[date](#date) | string | 
[is_child](#is_child) | bool | 
[reply_link](#reply_link) | string | 
[time](#time) | string | 

## __construct
`__construct( int $cid )`

**returns:** `void` 

Name | Type | Description
---- | ---- | -----------
$cid | int | 



## __toString
`__toString( )`

**returns:** `void` 



## approved
`approved( )`

**returns:** `boolean` 

###### Twig
```twig
	{% if comment.approved %}
		Your comment is good
	{% else %}
		Do you kiss your mother with that mouth?
	{% endif %}
```

## author
`author( )`

**returns:** `\TimberUser` 

###### Twig
```twig
	<h3>Comments by...</h3>
	<ol>
	{% for comment in post.comments %}
		<li>{{comment.author.name}}, who is a {{comment.author.role}}</li>
	{% endfor %}
	</ol>
```
###### HTML
```html
	<h3>Comments by...</h3>
	<ol>
		<li>Jared Novack, who is a contributor</li>
		<li>Katie Ricci, who is a subscriber</li>
		<li>Rebecca Pearl, who is a author</li>
	</ol>
```

## avatar
`avatar( mixed/int $size=92, string $default="" )`

**returns:** `bool/mixed/string` 

Fetches the Gravatar

Name | Type | Description
---- | ---- | -----------
$size | mixed/int | 
$default | string | 

###### Twig
```twig
	<img src="{{comment.avatar(36,template_uri~"/img/dude.jpg")}}" alt="Image of {{comment.author.name}}" />
```
###### HTML
```html
	<img src="http://gravatar.com/i/sfsfsdfasdfsfa.jpg" alt="Image of Katherine Rich" />
```

## content
`content( )`

**returns:** `string` 



## date
`date( string $date_format="" )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$date_format | string | 

###### Twig
```twig
	{% for comment in post.comments %}
	<article class="comment">
	  <p class="date">Posted on {{ comment.date }}:</p>
	  <p class="comment">{{ comment.content }}</p>
	</article>
	{% endfor %}
```
###### HTML
```html
	<article class="comment">
	  <p class="date">Posted on September 28, 2015:</p>
	  <p class="comment">Happy Birthday!</p>
	</article>
```

## is_child
`is_child( )`

**returns:** `bool` 



## meta
`meta( string $field_name )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$field_name | string | 



## reply_link
`reply_link( string $reply_text="Reply" )`

**returns:** `string` 

Enqueue the WP threaded comments javascript, and fetch the reply link for various comments.

Name | Type | Description
---- | ---- | -----------
$reply_text | string | 



## time
`time( string $time_format="" )`

**returns:** `string` 

Name | Type | Description
---- | ---- | -----------
$time_format | string | 

###### Twig
```twig
	{% for comment in post.comments %}
	<article class="comment">
	  <p class="date">Posted on {{ comment.date }} at {{comment.time}}:</p>
	  <p class="comment">{{ comment.content }}</p>
	</article>
	{% endfor %}
```
###### HTML
```html
	<article class="comment">
	  <p class="date">Posted on September 28, 2015 at 12:45 am:</p>
	  <p class="comment">Happy Birthday!</p>
	</article>
```


### Class: TimberComment

> The TimberComment class is used to view the output of comments. 99% of the time this will be in the context of the comments on a post. However you can also fetch a comment directly using its comment ID.

###### Example
###### PHP
```php
<?php
$comment = new TimberComment($comment_id);
$context['comment_of_the_day'] = $comment;
Timber::render('index.twig', $context);
```
###### Twig
```twig
<p class="comment">{{comment_of_the_day.content}}</p>
<p class="comment-attribution">- {{comment.author.name}}</p>
```
###### HTML
```html
<p class="comment">But, O Sarah! If the dead can come back to this earth and flit unseen around those they loved, I shall always be near you; in the garish day and in the darkest night -- amidst your happiest scenes and gloomiest hours - always, always; and if there be a soft breeze upon your cheek, it shall be my breath; or the cool air fans your throbbing temple, it shall be my spirit passing by.</p>
<p class="comment-attribution">- Sullivan Ballou</p>
```



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

