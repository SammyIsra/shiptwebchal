### Find Github Fr

http://sammyis-githubfriends.surge.sh/find/sammyisra

## To use
Go to the website and type a github username. If you want to show to your friends how popular you are on Github, send them the address `http://sammyis-githubfriends.surge.sh/find/<your github username>`

## To install
Cloning this repo and running `npm install` should be enough to install the application. The solution was built with Node v8.0.0 and NPM v5.0.0.

## Technologies
To start this section off, this applciation was bootstrapped with `create-react-app`, a very good starting point for most React applications and particularly good when the development time is very constrained. No configuration work means less time spent on webpack and more on building the final product. 

The application was built with React, and uses Redux for data management (with some help from Redux-Thunk). React Router v4 was used for routing, and Jest was used for testing. Webpack is used for bundling the application for production.

 - **React**: I decided to use React because I would spend the least time trying to figure out how to do things, and more time actually developing. 
 - **Create React App**: Once I selected the framework/platform/library I needed to use, I needed to spend as little time as possible setting the environment up. Create React App is made specifically for this scenario: it is a fantastic starting point for React applications.
 - **Surge**: Surge is, in my opinion, the easiest way to deploy front end applications. Setup time is nearly nil, and one can see the final product in minutes. Plus, I am still in the free tier of the service.
 - **Redux(and Redux-Thunk)**: Redux and Redux Thunk are two parts of the application that I added with scalability in mind. Redux would make it easier to manage large application state and Thunk would help with async API calls in the action creators. However, I do admit that I regret adding these. The application as it stands does not actually benefit from the organization that Redux provides because it is diminute in complexity. All Redux states could be managed in component level and actions are not so complicated as to require something like Thunk to controll them. On top of that, they added a new layer of complexity that slowed down development speed and made testing unnecessarily difficult. Redux and Thunk are amazing in what they do, but they are unnecessary in an application of this complexity regardless of scale. Note that in a larger applciation, I would absolutelly use Redux and Thunk since they do prove useful in scenarios where React alone falls short. 
 - **React Router v4**: Added so that profiles could be shared directly (via `http://sammyis-githubfriends.surge.sh/find/<your github username>`) and deciding when to show which pages. Also a technology that I added with scalability in mind and later regretted. The application has two pages: Home and UserPage. Neither is so complex as to need routing of this kind. Also added a layer of complexity to testing. As with Redux, routing is indispensable on larger applications.
 - **Jest**: Not exactly a technology chosen by me, since it comes with Create React App. But I did decide not to remove it. Jest provides snapshot testing, which is an approach to testing that I have been wanting to try but haven't had an excuse to. Snapshot testing is different than standard unit testing. In standard testing you define a success state manually and then expect the test to match it. Snapshot testing lets you run the test first and define a success state *from a successful test run*. Meaning that I first make a "control run" to determine what a success is, and then compare each future test result to that. Snapshot tests do save some time and are interesting, I am looking forward to trying them out more in the future. 
 - **Webpack**: Again, not exactly chosen by me but I would have added it anyway if I had not used Create React App. These days an application bundler is indispensable.

## For the future
There are some tests that I could not create because of the complexity that Redux, Thunk, and routing added. In the future I would either remove these technologies and rewrite the tests, or spend a day or two learning how to write tests around them. 

I intentionally kept styling as minimalistic and barebones as possible. If given more time, the visual language of the application would stay the same: simple. I would, however, add some minor animations to make the loading of follower lists and the navigation less jagged 
