const fetch = require('node-fetch');
const isEmpty = require('lodash/isEmpty');
const filter = require('lodash/filter');
const toLower = require('lodash/toLower');

class UserService {
    async getUsers(filters) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            let users = await response.json();
            if(!isEmpty(filters)) {
                for(let attr in filters) {
                    users = filter(users, user => toLower(user[attr]).includes(toLower(filters[attr])));
                }
            }
            return users;
        } catch (err) {
            throw Error(err);
        }
    }
}

module.exports = new UserService();