---
title: API - Problems
---

# CS2KZ API problems

## Client status codes
Problems that happen on the client, these are user errors in most cases.

- 400 Bad Request: Invalid body/query/url parameters or otherwise malformed request.
- 401 Unauthorized: Not authenticated, please log in first.
- 403 Forbidden: Insufficient permissions to perform the action.
- 404 Not Found: The resource was not found, double check the url.

## Server status codes
Problems that happen on the server, these are not user error.

- 500 Internal Server Error: Something went wrong while processing the request
