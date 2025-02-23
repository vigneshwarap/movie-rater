// Switch to or create the 'movieRater' database
db = db.getSiblingDB('movieRater');

// Create collections
//db.createCollection('users');
db.createCollection('test');

// Insert seed data into 'users' collection
// db.users.insertMany([
//     { username: 'Alice', email: 'alice@test.com', password : 'test', role: 'admin' },
//     { username: 'Bob', email: 'bob@test.com', password : 'test2', role: 'user' }
// ]);


print('Database `movieRater` initialized with collections and seed data.');