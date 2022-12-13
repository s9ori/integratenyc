<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit61715121acb249a003feaedf3f86a48b
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wptool\\' => 7,
            'Wpsec\\twofa\\' => 12,
            'Wpsec\\captcha\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wptool\\' => 
        array (
            0 => __DIR__ . '/..' . '/wptool/wp-admin-dash/src',
        ),
        'Wpsec\\twofa\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpsec/wp-2fa-plugin/src',
        ),
        'Wpsec\\captcha\\' => 
        array (
            0 => __DIR__ . '/..' . '/wpsec/wp-captcha-plugin/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit61715121acb249a003feaedf3f86a48b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit61715121acb249a003feaedf3f86a48b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit61715121acb249a003feaedf3f86a48b::$classMap;

        }, null, ClassLoader::class);
    }
}
