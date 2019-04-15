# EcoScore
A chrome browser extension that rewards users with food coupons in exchange for plastic food packaging data on popular online food delivery websites

## Inspiration
```
5.2 billion food containers are used each year, with 0.3 billion ending up as litre. 
```
and 
```
Together, food and packaging/containers account for almost 45%
of the materials landfilled in the United States - United States Environmental Protection Agency
```

While looking up APIs/databases on food companies' plastic usage, we found out that there's a general lack of data and industry transparency in the area. That is when we came up with the idea to crowd-source that information. Taking inspiration from `Honey`, a popular chrome web browser that automatically applies vouchers on e-commerce websites, we've come up with a web browser extension that would capture when the user is ordering food online... 

We would rewards users that provide data about restaurant's plastic usage and with that information build a grading system that can be used by food delivery websites to: 
- increase social impact and improve brand identity
- empower customers to make an informed choice when it comes to their environmental impact when ordering food online
- gain insight into customer behaviour
- increase returning customers/ build brand loyalty

For customers they can: 
- get free vouchers/offers
- gain more awareness about how much plastic they used when ordering food online day-to-day

And to monetise the EcoScore idea, we would: 
- Offer customer behaviour insight
- Offer restaurant plastic usage insight
- Offer marketing opportunities with restaurants by providing rewards to be used in their restaurants 


## What it does
- The chrome browser extension should popup and run a content-script when the url matches an order confirmation page. It selects elements of the DOM on the confirmation page to identify the restaurant that the user ordered from.
- When the user receives their food, they can fill in information about how much plastic cutlery, plastic bags, plastic containers, etc were provided.
- This information gets added to the restaurant data and eventually we will be able to build up a reliable profile for how much plastic the restaurant uses and cumulate a rating for them. 
- On the other hand, the user's review count goes up and they get closer to their next reward.
   

## How we built it
- React 
- Node.js
- Express
- MongoDB
- Chrome extension dev tools
  In less than 24 hours, we've spun up a MVP with a working backend API, database and some usage on frontend. Due to the lack of time, some functionalities are not fully performing. 

## Challenges we ran into
- Our tech team was composed of two front-end developer so it was a challenge to connect the back-end and the front-end.
- Being a mixed team we spent a lot of time galvanising ideas and allocating tasks based on each other's talents. 
- Google chrome extension are tricky to debug so it was harder to debug than a regular app.



## Accomplishments that we're proud of
- Working together as a team of devs and non-devs
- Coming with a novel idea that is applicable to every day users, without requiring the user to necessarily be a hard-core recyclist.
- Creating our first chrome extension. 
- Creating a full stack app. 

## What we learned
- All-nighters are not ideal once you're over 25 years old. 
- It is is important to make customers aware and alert that the smallest steps we take as an individual really contributed to a bigger issue.
- We brushed up our skills on backend frameworks. Ideas are easy but the feasibility might be a problem in a short time framework hence wireframe, communication and not getting sidetracked are key.

## What's next for EcoScore
- Expanding beyond food delivery industry and target other industries such as e-commerce.
- Once EcoScore collect enough data and it is being recognised as certification of being sustainable. It could be extended to other type of business that generates plastic wastes.  The rewards systems could become more complex by adding levels and by creating competitions using social media as a channel.
- Technical fixes ( authentication, verification, saved sessions)

# How to use

To run this locally, you should have yarn/npm, node and mongo installed. 
1. Clone the repo
2. ```
cd plastic
```
3. ```
yarn build 
```
4. on Chrome, open extensions and check `dev mode`. Click `load unpacked` and select the `public` folder within the directory.
5. On a separate terminal window, run `mongod`.
6. On a separate terminal window, run `node server.js`

