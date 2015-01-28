# qsObject
A javascript function for getting the query string and converting it to an object for use in the DOM.


qsObject attempts to read the query string from the url. (Or will accept a query string passed to it, for example from an anchor tag.)

it will parse the string and return it as a javascript object. for use within other scripts.


example usage
```JavaScript
qsObject("Login.jsp?regnum=4995&password=&submitted=true#test")
```
returns 
```JavaScript
Object {regnum: "4995", password: "", submitted: "true", Id: "test"}
```
