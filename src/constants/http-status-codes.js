const httpStatusCodes = [
  {
    id: -1,
    name: "-1 Timeout"
  },
  {
    id: 100,
    name: "100 Continue"
  },
  {
    id: 101,
    name: "101 Switching Protocols"
  },
  {
    id: 102,
    name: "102 Processing (WebDAV; RFC 2518)"
  },
  {
    id: 200,
    name: "200 OK"
  },
  {
    id: 201,
    name: "201 Created"
  },
  {
    id: 202,
    name: "202 Accepted"
  },
  {
    id: 203,
    name: "203 Non-Authoritative Information (since HTTP/1.1)"
  },
  {
    id: 204,
    name: "204 No Content"
  },
  {
    id: 205,
    name: "205 Reset Content"
  },
  {
    id: 206,
    name: "206 Partial Content (RFC 7233)"
  },
  {
    id: 207,
    name: "207 Multi-Status (WebDAV; RFC 4918)"
  },
  {
    id: 208,
    name: "208 Already Reported (WebDAV; RFC 5842)"
  },
  {
    id: 226,
    name: "226 IM Used (RFC 3229)"
  },
  {
    id: 300,
    name: "300 Multiple Choices"
  },
  {
    id: 301,
    name: "301 Moved Permanently"
  },
  {
    id: 302,
    name: "302 Found"
  },
  {
    id: 303,
    name: "303 See Other (since HTTP/1.1)"
  },
  {
    id: 304,
    name: "304 Not Modified (RFC 7232)"
  },
  {
    id: 305,
    name: "305 Use Proxy (since HTTP/1.1)"
  },
  {
    id: 306,
    name: "306 Switch Proxy"
  },
  {
    id: 307,
    name: "307 Temporary Redirect (since HTTP/1.1)"
  },
  {
    id: 308,
    name: "308 Permanent Redirect (RFC 7538)"
  },
  {
    id: 400,
    name: "400 Bad Request"
  },
  {
    id: 401,
    name: "401 Unauthorized (RFC 7235)"
  },
  {
    id: 402,
    name: "402 Payment Required"
  },
  {
    id: 403,
    name: "403 Forbidden"
  },
  {
    id: 404,
    name: "404 Not Found"
  },
  {
    id: 405,
    name: "405 Method Not Allowed"
  },
  {
    id: 406,
    name: "406 Not Acceptable"
  },
  {
    id: 407,
    name: "407 Proxy Authentication Required (RFC 7235)"
  },
  {
    id: 408,
    name: "408 Request Timeout"
  },
  {
    id: 409,
    name: "409 Conflict"
  },
  {
    id: 410,
    name: "410 Gone"
  },
  {
    id: 411,
    name: "411 Length Required"
  },
  {
    id: 412,
    name: "412 Precondition Failed (RFC 7232)"
  },
  {
    id: 413,
    name: "413 Payload Too Large (RFC 7231)"
  },
  {
    id: 414,
    name: "414 URI Too Long (RFC 7231)"
  },
  {
    id: 415,
    name: "415 Unsupported Media Type"
  },
  {
    id: 416,
    name: "416 Range Not Satisfiable (RFC 7233)"
  },
  {
    id: 417,
    name: "417 Expectation Failed"
  },
  {
    id: 418,
    name: "418 I'm a teapot (RFC 2324)"
  },
  {
    id: 421,
    name: "421 Misdirected Request (RFC 7540)"
  },
  {
    id: 422,
    name: "422 Unprocessable Entity (WebDAV; RFC 4918)"
  },
  {
    id: 423,
    name: "423 Locked (WebDAV; RFC 4918)"
  },
  {
    id: 424,
    name: "424 Failed Dependency (WebDAV; RFC 4918)"
  },
  {
    id: 426,
    name: "426 Upgrade Required"
  },
  {
    id: 428,
    name: "428 Precondition Required (RFC 6585)"
  },
  {
    id: 429,
    name: "429 Too Many Requests (RFC 6585)"
  },
  {
    id: 431,
    name: "431 Request Header Fields Too Large (RFC 6585)"
  },
  {
    id: 451,
    name: "451 Unavailable For Legal Reasons"
  },
  {
    id: 500,
    name: "500 Internal Server Error"
  },
  {
    id: 501,
    name: "501 Not Implemented"
  },
  {
    id: 502,
    name: "502 Bad Gateway"
  },
  {
    id: 503,
    name: "503 Service Unavailable"
  },
  {
    id: 504,
    name: "504 Gateway Timeout"
  },
  {
    id: 505,
    name: "505 HTTP Version Not Supported"
  },
  {
    id: 506,
    name: "506 Variant Also Negotiates (RFC 2295)"
  },
  {
    id: 507,
    name: "507 Insufficient Storage (WebDAV; RFC 4918)"
  },
  {
    id: 508,
    name: "508 Loop Detected (WebDAV; RFC 5842)"
  },
  {
    id: 510,
    name: "510 Not Extended (RFC 2774)"
  },
  {
    id: 511,
    name: "511 Network Authentication Required (RFC 6585)"
  },
  {
    id: 103,
    name: "103 Checkpoint"
  },
  {
    id: 420,
    name: "420 Method Failure (Spring Framework)"
  },
  {
    id: 420,
    name: "420 Enhance Your Calm (Twitter)"
  },
  {
    id: 450,
    name: "450 Blocked by Windows Parental Controls (Microsoft)"
  },
  {
    id: 498,
    name: "498 Invalid Token (Esri)"
  },
  {
    id: 499,
    name: "499 Token Required (Esri)"
  },
  {
    id: 499,
    name: "499 Request has been forbidden by antivirus"
  },
  {
    id: 509,
    name: "509 Bandwidth Limit Exceeded (Apache Web Server/cPanel)"
  },
  {
    id: 530,
    name: "530 Site is frozen"
  },
  {
    id: 440,
    name: "440 Login Timeout"
  },
  {
    id: 449,
    name: "449 Retry With"
  },
  {
    id: 451,
    name: "451 Redirect"
  },
  {
    id: 444,
    name: "444 No Response"
  },
  {
    id: 495,
    name: "495 SSL Certificate Error"
  },
  {
    id: 496,
    name: "496 SSL Certificate Required"
  },
  {
    id: 497,
    name: "497 HTTP Request Sent to HTTPS Port"
  },
  {
    id: 499,
    name: "499 Client Closed Request"
  },
  {
    id: 520,
    name: "520 Unknown Error"
  },
  {
    id: 521,
    name: "521 Web Server Is Down"
  },
  {
    id: 522,
    name: "522 Connection Timed Out"
  },
  {
    id: 523,
    name: "523 Origin Is Unreachable"
  },
  {
    id: 524,
    name: "524 A Timeout Occurred"
  },
  {
    id: 525,
    name: "525 SSL Handshake Failed"
  },
  {
    id: 526,
    name: "526 Invalid SSL Certificate"
  }
];

export default httpStatusCodes;
