$url = 'https://api.github.com/user/repos';
$headers = array(
'Authorization' => 'Basic ' . base64_encode( $s9ori . ':' . $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 )
);
$response = wp_remote_get( $url, array( 'headers' => $headers ) );
$body = wp_remote_retrieve_body( $response );
$data = json_decode( $body );