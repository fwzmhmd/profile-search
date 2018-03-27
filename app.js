const profile = require('./profile');

const users = process.argv.slice(2);

for (let i = 0; i < users.length; i += 2) {
    profile.get(users[i], users[i + 1])
}