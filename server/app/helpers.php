<?php

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http as HTTP;

/**
 * Send log to universal logger
 */
if (!function_exists('log_msg')) {
    function log_msg($msg) {
        if ($msg instanceof Collection) {
            $msg = $msg->toArray();
        }

        $msg = print_r($msg, true);

        HTTP::post('https://log.martinsz.lv/api/add-log', [
            'log' => $msg,
            'secret_key' => 'QETCY!!U@KnL_k4TNKMHV*Nq7z9s',
        ]);
    }
}