# Profile Search
Command line application to search Teamtreehouse users, show Total badge count & View specific topic badges

# Getting Started
### Clone the repository
Open terimnal and run:

```
git clone git@github.com:fwzmhmd/profile-search.git
```

### Prerequisites

Install Node.js from the Official [Website](https://nodejs.org)

To check if you have node installed run:
```
node -v
```

# How to Use
Search for a user and show badge count in a Topic
```
node app.js User1 topic-name
```
To search for multiple users
```
node app.js User1 topic-name User2 topic-name User3 topic-name
```
[View Topic Names](#topic-names)


# Examples
Searching for one user
```
node app.js fwzmhmd JavaScript
```
Searching for more than one user
```
node app.js fwzmhmd JavaScript chalkers Ruby
```
Searching with two word topic name
```
node app.js chalkers 'Development Tools'
```
```
node app.js chalkers "Development Tools"
```


# Topic Names

**_Note: Topic names should be typed as shown below_**

* HTML
* CSS
* Design
* JavaScript
* Ruby
* PHP
* WordPress
* iOS
* Android
* 'Development Tools'
* Business
* Python
* Java
* 'Digital Literacy'
* 'Game Development'
* C#
* Databases
* 'Virtual Reality'
* 'Data Analysis'
* APIs
* Security
* Go
* 'Quality Assurance'

_* Two word topic names must include single(') **OR** double (") quotation mark(s)._

# Authors
 **Fawaz Mohamed** - [Github](https://github.com/fwzmhmd)

# License
This project is licensed under the MIT License - see  [LICENSE](LICENSE.md) file for details

# Acknowledgments

* Teamtreehouse Public Profile API
* Inspiration from Andrew Chalkley [@chalkers](https://twitter.com/chalkers)

# Treehouse Education

<a href="http://referrals.trhou.se/fwzmhmd" target="_blank"><img src="https://static.teamtreehouse.com/assets/content/referral-badge-td.png"/></a>