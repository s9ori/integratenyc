<?php

namespace GoDaddy\WordPress\MWC\Common\Exceptions;

use GoDaddy\WordPress\MWC\Common\Repositories\SentryRepository;

/**
 * Sentry Exception Class that serves as a base to report to sentry.
 */
class SentryException extends BaseException
{
    /**
     * Deconstruct.
     */
    public function __destruct()
    {
        if (SentryRepository::loadSDK()) {
            \Sentry\captureException($this);
        }

        parent::__destruct();
    }
}
