<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '1117301_GzM');

/** MySQL database username */
define('DB_USER', '1117301_GzM');

/** MySQL database password */
define('DB_PASSWORD', 'II7z0oPbpO6gYn');

/** MySQL hostname */
define('DB_HOST', 'userdb1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8>B+/vt.I~-~=.[O+9G Mk{f/u jCvK9z=VOl5h[ft++EH)(QZWr$P)f1GIpVgPF');
define('SECURE_AUTH_KEY',  '{HM,O<4DqQ}!MQ(S})$f-u0D$6<KJq^oLc|]Q&69&-.D~VJ~oin*=1#7Bm5+Z3[2');
define('LOGGED_IN_KEY',    ')F;kasI@=`;)-umEP)tmuHl||~+Dw]n%:}+|Iln~jk$*P@+UY&rGJR_MY+jt`X)e');
define('NONCE_KEY',        'G0QNbMyVkhuX-s2vu~x7Wn;jMYJn,E*6T+([AKQ (eMK%2s4?B~G:mi7C2.aqXK-');
define('AUTH_SALT',        '&ySsa9YyNA!<dCne{Wz[l5IL8>FG+{Ib.9;}%5(&c+}1n#5]y!<wK|Jc,nDD1Hx{');
define('SECURE_AUTH_SALT', 'PM`C;%Av:)i]@?0yw ][jr&{>f2GE-Ry7JhjD#^;68=v&01=)ae7w3{jjD,TSEP>');
define('LOGGED_IN_SALT',   ' ++0@couD.`EBG(,Fr br|f,ZjGK_]O|>YUxgU[fbV=or_~|RiEkyF2</(+f_1x!');
define('NONCE_SALT',       'FWB8veAL=eHrxlx?>-)`8n2}{q1J`h7iwZ4@_$S|~*,T!3sWTK^M66`Co!Z]E*c4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
