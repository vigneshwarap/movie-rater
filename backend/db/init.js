// Switch to or create the 'movieRater' database
db = db.getSiblingDB('movieRater');

// Create collections
db.createCollection('users');

// Insert seed data into 'users' collection
db.users.insertMany([
    { name: 'Alice', email: 'alice@test.com', role: 'admin' },
    { name: 'Bob', email: 'bob@test.com', role: 'user' }
]);


print('Database `movieRater` initialized with collections and seed data.');