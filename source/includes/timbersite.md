
# TimberSite
TimberSite gives you access to information you need about your site. In Multisite setups, you can get info on other sites in your network.

###### PHP
```php
<?php
$context = Timber::get_context();
$other_site_id = 2;
$context['other_site'] = new TimberSite($other_site_id);
Timber::render('index.twig', $context);
```
###### Twig
```twig
My site is called {{site.name}}, another site on my network is {{other_site.name}}
```
###### HTML
```html
My site is called Jared's blog, another site on my network is Upstatement.com
```

Name | Type | Description
---- | ---- | -----------
admin_email | string | the admin email address set in the WP admin panel
charset | string | 
description | string | 
id | int | the ID of a site in multisite
language | string | the language setting ex: en-US
language_attributes | string | of language attributes for usage in the <html> tag
[link](#link) | string | 
multisite | bool | true if multisite, false if plain ole' WordPress
name | string | 
pingback_url | string | for people who like trackback spam
rdf | string | 
theme | [TimberTheme](#TimberTheme) | 
title | string | 
[url](#url) | string | 

## __construct
`__construct( mixed/string/int $site_name_or_id=null )`

**returns:** `void` 

Constructs a TimberSite object

Name | Type | Description
---- | ---- | -----------
$site_name_or_id | mixed/string/int | 

###### PHP
```php
<?php
	//multisite setup
	$site = new TimberSite(1);
	$site_two = new TimberSite("My Cool Site");
	//non-multisite
	$site = new TimberSite();
```

## __get
`__get( mixed $field )`

**returns:** `mixed` 

Name | Type | Description
---- | ---- | -----------
$field | mixed | 



## link
`link( )`

**returns:** `string` 

Returns the link to the site's home.

###### Twig
```twig
	<a href="{{ site.link }}" title="Home">
		  <img src="/wp-content/uploads/logo.png" alt="Logo for some stupid thing" />
	</a>
```
###### HTML
```html
	<a href="http://example.org" title="Home">
		  <img src="/wp-content/uploads/logo.png" alt="Logo for some stupid thing" />
	</a>
```

## url
`url( )`

**returns:** `string` 




### Class: TimberSite

> TimberSite gives you access to information you need about your site. In Multisite setups, you can get info on other sites in your network.

###### Example
###### PHP
```php
<?php
$context = Timber::get_context();
$other_site_id = 2;
$context['other_site'] = new TimberSite($other_site_id);
Timber::render('index.twig', $context);
```
###### Twig
```twig
My site is called {{site.name}}, another site on my network is {{other_site.name}}
```
###### HTML
```html
My site is called Jared's blog, another site on my network is Upstatement.com
```



*This class extends \TimberCore*

*This class implements \TimberCoreInterface*

