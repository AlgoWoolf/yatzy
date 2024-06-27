samplephp
=========

A do nothing PHP site to show that you properly configured a PHP site


## Installation

You will need the following technologies installed.

* Java / Umple
* PHP
* PHPUnit
* Postgres

A helper `./setup.sh` script is available to get those components working.

### Java / Umple

Some models are generated using [Umple](https://try.umple.org).

This was tested on `Java 17`

```bash
java --version
```

The output should show something similar to

```
openjdk 17 2021-09-14
OpenJDK Runtime Environment Homebrew (build 17+0)
OpenJDK 64-Bit Server VM Homebrew (build 17+0, mixed mode)
```

### PHP 7.4+

To run this project, you need to PHP and a command line.
My environment (Mac OSX) comes with both already, if
yours does not, please submit a PR showing how you got
that up and running.

This was tested on `PHP 7.4`

```bash
php --version
```

The output should show something similar to

```
PHP 7.4.20 (cli) (built: Jun 11 2021 10:21:37) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
    with Zend OPcache v7.4.20, Copyright (c), by Zend Technologies
```

You will also need [PHPUnit](https://phpunit.de) installed.

```bash
phpunit --version
```

The output should show something similar to

```
PHPUnit 9.5.13 by Sebastian Bergmann and contributors.
```

### Postgres 13+

The application connects to a postgres database.
You will need to install that locally.

This was tested on `PostgreSQL 13.3`

```bash
psql --version
```

The output should show something similar to

```bash
psql (PostgreSQL) 13.3
```


## Seeding The Database

You can seed your database with

```bash
./bin/db/create
```

The output should look similar to

```
DROP DATABASE
CREATE DATABASE
CREATE SEQUENCE
CREATE TABLE
CREATE TABLE
INSERT 0 2
INSERT 0 1
```

You should then be able to access the DB using `psql`.

```
psql samplephp
```

And interact with it via SQL.

```
psql (13.3)
Type "help" for help.

samplephp=# \dt
               List of relations
 Schema |       Name        | Type  |  Owner
--------+-------------------+-------+----------
 public | actions           | table | aforward
 public | schema_migrations | table | aforward
(2 rows)
```


## Running The Tests

The tests are run using [PHPUnit](https://phpunit.de).

```bash
phpunit --bootstrap ./tests/bootstrap.php tests/
```

The output should show something similar to

```
PHPUnit 9.5.13 by Sebastian Bergmann and contributors.

...                                                                 3 / 3 (100%)

Time: 00:00.001, Memory: 18.00 MB

OK (3 tests, 3 assertions)
```

## Launching Application

To launch the app, you need `./bin/compile` the code and start the `./bin/server`.
This is available under

```bash
./server.sh
```

![Launch application](/docs/assets/launch_application.png)

You can then visit `http://localhost:4000` to see the application running.

![Visiting the home page](/docs/assets/welcome_page.png)

You can also visit these other pages

* http://localhost:4000/info.php
* http://localhost:4000/actions.php

The server should output something similar to

```
$ ./bin/server
[Tue Feb 15 09:59:19 2022] PHP 7.4.20 Development Server (http://localhost:4000) started
[Tue Feb 15 09:59:25 2022] [::1]:59849 Accepted
[Tue Feb 15 09:59:25 2022] [::1]:59850 Accepted
[Tue Feb 15 09:59:26 2022] [::1]:59849 [200]: GET /
[Tue Feb 15 09:59:26 2022] [::1]:59849 Closing
[Tue Feb 15 09:59:26 2022] [::1]:59851 Accepted
[Tue Feb 15 09:59:36 2022] [::1]:59850 [200]: POST /
[Tue Feb 15 09:59:36 2022] [::1]:59850 Closing
```