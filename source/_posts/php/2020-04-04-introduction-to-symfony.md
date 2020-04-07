---
id: 11
layout: "_layouts/blog.twig"
title: "Symfony 101: introduction and installation"
relativeUrl: "Symfony 101: introduction and installation"
tags: 
    - "php"
img: "2020-01-24-how-to-install-xampp.jpg"  
outputPath: "blog/php/introduction-to-symfony/"
---

#### What is symfony?

in this article, we will talk about how to get starte with symfony...

According to the official website, Symfony is a set of open source PHP reusable components/libraries originally developed by [Fabien Potencier](https://twitter.com/fabpot). 
in other words, it's a PHP MVC framework used to create website, APIs and Console applications of different sizes and for different purposes.



#### How to install Symfony?

Symfony requires PHP version 7.2.15 at least in addition to some extensions which are: Ctype, iconv, JSON, PCRE, Session, SimpleXML and Tokenizer.

in most cases, these extensions are installed by default with PHP, but you should make sure that all requirements are available by listing all the extensions using the following command:

```bash
php -m 
```
this will print a list of all installed PHP extensions on your machine.

after making sure all the requirements are available and met, proceed to the installation operation. as we mentioned above, there are two ways to install Symfony, either by using Composer which is the package manager for PHP, or by using Symfony CLI.

1 - using composer:

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```php
namespace GuzzleHttp\Exception;

use Psr\Http\Message\StreamInterface;

/**
 * Exception thrown when a seek fails on a stream.
 */
class SeekException extends \RuntimeException implements GuzzleException
{
    private $stream;

    public function __construct(StreamInterface $stream, $pos = 0, $msg = '')
    {
        $this->stream = $stream;
        $msg = $msg ?: 'Could not seek the stream to position ' . $pos;
        parent::__construct($msg);
    }

    /**
     * @return StreamInterface
     */
    public function getStream()
    {
        return $this->stream;
    }
}
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
<script id="asciicast-303295" src="https://asciinema.org/a/303295.js" data-rows="25" async></script>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.