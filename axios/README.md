# Axios Crash Course

> These are the files for the YouTube Axios crash course.

"start.js" is just the event listeners and empty functions. "main.js" is the completed code


Axios is a http library.
<!-- 1.	Why do we need headers in axios. -->
Https are additional pieces of information sent along with the request or response to provide the metadata about the request being sent 
Headers are the key-value pair where key represents the header name and the value represents the content of that header.



<!-- 2.	What is axios? -->
Axios is a javscript library used for making HTTP requests from web browser.
It provides the simple way to perform asynchoronous HTTP requests to interact with API’s,fetch data from servers and send data to the servers.

Promise-Based: Axios is built on top of JavaScript Promises, which makes it easy to work with asynchronous code and handle response data.
Cancel Requests: Axios supports canceling requests using a cancel token mechanism, which can be useful for cases where a user navigates away from a page before a request completes.

Error Handling: Axios provides a clean way to handle errors by using the .catch() method on promises or using the onError interceptor.

Promise API and Async/Await: Axios allows you to use the traditional Promise API or the more modern async/await syntax for handling asynchronous operations.



<!-- 3.	What are the common problems faced when you make network calls and what should you do to solve it. -->
common mistake generally people makes like they provides the baseURL and thinks it will work because the route is also required.
Mistake:- 
1.url may be the endpoint is not correct
2. code  may be the possible that there is misatake in the code
3. payloadsince axios stringify itself for us and if we do forceFull stringify(quotes at both end)it then we get an 
415 
error-means payload erro

Solution:-
Postman is the solution if it works then there is a problem in the code and if it does not work check the url or payload

