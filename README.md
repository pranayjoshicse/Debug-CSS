![](icon_128.png)

# Debug CSS

A lightweight extension for Google chrome to show outline of all the element exist on page.

while working on web page development the one of the difficult part is to position the element as required and check which element affecting the other one.

This chrome extension allows user to see outline on every element of the page. Hold the keyboard Ctrl button and hover element it will show the element details along with the value.

----------

# Usage

Post installation simply click on the extension icon to turn it On or Off.

If you are a keyboard shortcut lover like me simply hit `Alt+Shift+C ` key to toggle the extension.


----------

# How it works?

This extension works on CSS outline attribute:

add the below code snippet in any CSS of a web page 


`
  * {
	outline: 1px solid red;
  }`

The extension does the same the only thing is; it gives different color to different element(s) while the code snippet adds red outline to every element.  

----------

# In Action



- Once installed extension will be listed to the `chrome:\\extension URL` and a small icon will be available next to address bar

![](img\listing.png)




- Click the extension icon to toggle debug CSS or use shortcut key (Shift+Alt+C)

![](img\inAction.PNG)


To get more detail about any element hold Ctrl key and hover on it, a info bar at the bottom of the page will display details about the element such as its type (e.g. div, nav, section etc), class(es) applied to it along with its Id.

![](img\inActionWithInfo.PNG)

----------

# Other work and repository

[A lightweight customizable plugin for jQuery to show horizontal length in form of vertical progress bar.](https://github.com/pranayjoshicse/VerLim.js)


[listed on jqueryscript.net](https://www.jqueryscript.net/other/Simple-Custom-Reading-Indicator-with-jQuery-VerLim-js.html)

[Demo](https://www.jqueryscript.net/demo/Simple-Custom-Reading-Indicator-with-jQuery-VerLim-js/)


----------

# More about me

[twitter.](https://twitter.com/pranayjoshicse)
[about me.](https://about.me/pranayjoshi)


----------


# License

The MIT License (MIT)

Copyright (c) 2018 Pranay Joshi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.