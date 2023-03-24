# Colour Association Frontend

Since this app is built with headless WordPress, this is the frontend part of the application built using **REACT** with Typescript. I used ReactQuery for querying data, apollo for generating types from WordPress GraphQL api.

## Headless WordPress?

WordPress is a Content Management System (CMS). That really explains everything about what it is. You can manage your pages from there, creating your posts for your blog etc.

WordPress is usually used as both Backend and Frontend. It is built in PHP so you build everything in it.

### Here comes the headless

WordPress has evolved in years to a powerful tool. You can now use it **only as a Backend** and pull your data from it via API. And you can use whatever you want as a frontend. That is basically what _headless_ means.

I work with WordPress and React separately all the time, that is why I used headless WP, I wanted to merge these two skills together.

I hope you liked my introduction guys :\* (Honza here sending kisses)

## Local setup

You will need to have nodejs and npm (or other package managers as yarn) downloaded if u don't have them now. [Here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is the guide on how to do it.

Write following to the console in the root directory of the project:

Download the project dependencies

```
npm i
```

Run your project

```
npm run start
```

and as this is just a frontend part and our backend is already running on a server, you should be good to go on **localhost:3000**!
