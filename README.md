# MLB Scoreboard

Welcome! This is full-stack React-Rails application that fetches Baseball data from Major League Baseball's Gameday API, and parses it into a helpful UI that displays information about every baseball game for a given date.

Click the following link if you want to see the JSON data for an example "Scoreboard" response from the Gameday API:
http://gdx.mlb.com/components/game/mlb/year_2015/month_10/day_13/master_scoreboard.json

As you can see, there's a whole lot of data there. Our server's responsibility is to fetch, and organize that data so it's easier to deal with. It's also responsible for providing a scaled-back API to our client, that only provides the necessary data.

The client's role is to talk to our server to get that scaled-back data, and display it in a human-readable UI.

As it stands, our "Scoreboard" doesn't really have much going for it. That's where you come in! You're going to help us improve and grow this app into something _actually_ useful!

## Core Concepts

### Scalability

The goal with this site (and any site really) is for it to be used and enjoyed by as many people as possible. In order to achieve that goal, it's critical that it's built from the beginning with scalability in mind. This means we need to consider each of the following:

* Performance
* Readability
* Reusability
* Testing

## Your Task

So your task will be to...

TODO: Add actual tasks.
