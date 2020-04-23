---
id: 12
layout: "_layouts/blog.twig"
title: "Symfony 101: creating pages"
relativeUrl: "Symfony 101: creating pages"
tags:
    - "symfony"
img: "introduction-to-symfony.webp"  
outputPath: "blog/symfony/introduction-to-symfony/"
---

#### What is symfony:

Symfony is a set of open source PHP reusable components/libraries originally developed by [Fabien Potencier](https://twitter.com/fabpot).
in other words, it's a PHP MVC framework used to create websites, APIs and Console applications of different sizes and for different purposes.

#### Checking requirements:

Symfony requires version 7.2.15 of PHP in addition to some extensions which are: Ctype, iconv, JSON, PCRE, Session, SimpleXML and Tokenizer.

in most cases, these extensions are installed by default with PHP, but you should make sure that all the requirements are available by installing Symfony CLI :
```bash
$ wget https://get.symfony.com/cli/installer -O - | bash
```
after installation is finished, check the requirements by typing in this command:
```bash
$ symfony check:requirements
```
you should get this message:
```bash

Symfony Requirements Checker
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

> PHP is using the following php.ini file:
/etc/php/7.3/cli/php.ini

> Checking Symfony requirements:

.............................


 [OK]                                         
 Your system is ready to run Symfony projects

```
after we made sure all the requirements are available and met, it's time to proceed to the installation operation.

as we mentioned above, there are two ways to install Symfony, either by using Composer which is the package manager for PHP, or by using Symfony CLI.

#### Installing Symfony using composer:

Composer is the package manager for PHP. it's the tool responsible for managing the packages and dependencies you use in your projects as well as providing useful features such as autoloading.

let's open up a terminal window and type in the following command:

```bash
$ composer create-project symfony/website-skeleton my_first_project
```

after the installation is finished, you should be able to see a new folder named `my_first_project`.
this folder contains all the files necessary for starting a new website which is cool, but how do we browse the actual website in a browser? well, after installing the project, go to `my_first_project` directory and start a new Symfony server by using this command:

```bash
$ cd my_first_project
$ symfony server:start
```
seeing this message indicates that the server started and everything is working correctly:

```bash                                                                                         
 [OK] Web server listening on http://127.0.0.1:8000 (PHP CGI 7.3.11)
```

#### Installing Symfony using Symfony CLI:

Symfony CLI is the recommended way to install a new Symfony project since it offers a bunch of useful features such as a built-in web server, security checking tool and project creation on the fly. it also allows us to check the requirement before starting a new Symfony project.

```bash
$ symfony new my_first_project --full
```
Executing the command with `--full` flag is required when building a website, but don't use this flag ifn you are willing to build an API or a console application.

after installing the project, go to `my_first_project` directory and start a new Symfony server by using this command:

```bash
$ cd my_first_project
$ symfony server:start
```
seeing this message indicates that the server running correctly:

```bash                                                    
 [OK] Web server listening on http://127.0.0.1:8000 (PHP CGI 7.3.11)
```
we finished installing Symfony... now let's move to the next step 🤩!  
