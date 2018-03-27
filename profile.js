const https = require('https');
const http = require('http');


const printError = error => {
    console.log(error.message);
}

const printMessage = (username, badgeCount, points, topic) => {
    const message = `${username} has ${badgeCount} Total Badges and ${points} Points in ${topic}`;
    console.log(message);
}

const getProfile = (username, topic) => {
    try {
        const req = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
            if (res.statusCode === 200) {
                let body = '';

                // Read the data
                res.on('data', d => body += d.toString());

                res.on('end', () => {
                    try {
                        const profile = JSON.parse(body);
                        printMessage(profile.profile_name, profile.badges.length, profile.points[topic], topic);
                    } catch (error) {
                        printError(error);
                    }
                });

            } else {
                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[res.statusCode]})`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        req.on('error', printError);
    } catch (error) {
        printError(error);
    }
}

module.exports.get = getProfile;