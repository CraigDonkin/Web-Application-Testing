# Status Codes

- 1 - Informational

  - 100 continue
    - Request was received and the client should continue sending the body

- 2 - Request was successful

  - 200 OK
    - Successful request
  - 201 Created
    - Successful response to a PUT

- 3 - Client redirection

  - 301 Moved Permanently 
    - Redirects permanently to a different URL
  - 302 Found
    - Redirects temporarily to a different URL
  - 304 Not Modified
    - Use a cached copy of the resource

- 4 - Request Error

  - 400 bad request
    - Client submitted an invalid HTTP request
  - 401 Unauthorised
    - Need to use HTTP authentication
  - 403 Forbidden
    - No one can access the resource
  - 404 not found
    - resource doesn't exist
  - 405 Method Not Allowed
    - Method is not supported for the URL
  - 413 Request Entity too Large
    - Body is too large
  - 414 Request URI is too long
    - URL is too long

- 5 - Server error

  - 500 Internal Server Error

    - Server encountered an error 

  - 503 Service Unavailable

    - Web server may be functioning but not the application

    