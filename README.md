# Customlogin

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/sidtechno/customlogin.svg)](https://packagist.org/packages/sidtechno/customlogin) [![Total Downloads](https://img.shields.io/packagist/dt/sidtechno/customlogin.svg)](https://packagist.org/packages/sidtechno/customlogin)

A [Flarum](http://flarum.org) extension. this is use for customlogin where user email valid or not 
## Features

- **Sign up with user give some security questions answer**: when User sign up then user give three security question then hi will sign up when user forget password then he will re set his password. 

## Usage


## Installation

Install with composer:

use this code use in composer 
 
 "repositories": [
        {
            "type": "path",
            "url": "workbench/*"
        }
    ]

```sh
composer require sidtechno/customlogin:*@dev
```

## Updating

```sh
composer update sidtechno/customlogin:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://github.com/awestarry/flarum_plugin)
- [GitHub](https://github.com/awestarry/flarum_plugin)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
