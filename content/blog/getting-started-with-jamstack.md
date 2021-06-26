---
title: Getting started with JAMstack
image: /img/jamstack.jpeg
date: 2021-06-26T07:42:22.846Z
description: NetlifyCMS is a great tool for simple JAMstack portfolios and
  personal blogs. These are some tips and tricks that personally helped me go a
  long way.
content: >-
  ## Introduction


  JAMstack has been all the rage recently --and for good reason-- because it enables developers and content creators to move a lot faster with getting their content online.


  There are a lot of options for the stacks to use with JAMstack, you first need a frontend --this usually being an SSG (Static Site Generation) enabled javascript framework-- and a backend to manage all the dynamic data you want to display on your site, simple right?


  Short answer is no. There are a lot of options for both requirements, and if you're not a seasoned frontend developer it's easy to get lost due to the amount of options available. 


  **But don't panic just yet!** In this article I'll try to make it as simple as possible to start creating your own JAMstack website.


  ## What is JAMstack anyway?


  > Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.

  >

  > The core principles of [pre-rendering](https://jamstack.org/glossary/pre-render), and [decoupling](https://jamstack.org/glossary/decoupling), enable sites and applications to be delivered with greater confidence and resilience than ever before.


  This is how [jamstack.org](https://jamstack.org/) (a Netlify-started movement) explains it, which is a very good resource to get familiar with the technology, but in this article we'll get started by doing instead of reading.


  ## Getting started


  First we need to choose a frontend framework with SSG to get started with. There are two popular choices in this step, those being [React](https://reactjs.org/) and [Vue](https://vuejs.org/), with each of them having separate tools to use for SSG.


  Some examples for **React** based tools being:


  * [Next.js](https://nextjs.org/)

  * [Gatsby](https://www.gatsbyjs.org/)

  * [Hugo](https://gohugo.io/)


  And some **Vue** based tools being:


  * [Nuxt.js](https://nuxtjs.org/)

  * [Gridsome](https://gridsome.org/)


  We'll be using [Nuxt.js](https://nuxtjs.org/) which is a fantastic and easy to use solution, with a lot of starter templates, an amazing community, and stellar documentation.


  Next we'll be choosing a headless CMS to hold our dynamic data. There are a ***lot*** of options here too like:


  * [Ghost](https://ghost.org/)

  * [Strapi](https://strapi.io/)

  * [Sanity](https://www.sanity.io/)

  * [NetlifyCMS](https://www.netlifycms.org/)


  We'll be using [NetlifyCMS](https://www.netlifycms.org/) which is the easiest, fastest, and cheapest solution to get started with. Being git hosted as opposed to something like Strapi which you need to host on something like Digital Ocean or Heroku, and being completely free to use with automatic deployments to use with something like Netlify or Vercel
---
