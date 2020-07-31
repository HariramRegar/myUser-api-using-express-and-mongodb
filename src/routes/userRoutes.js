import { addnewUser,
    getUsers,
    getUserWithID,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

const routes = (app) => {
app.route('/users')
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getUsers)
    
    // Post endpoint
    .post((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, addnewUser);

app.route('/users/:userID')
    // get a specific contact
    .get((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getUserWithID)

    // updating a specific contact
    .put((req,res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, updateUser)

    // deleting a specific contact
    .delete(
        (req,res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, deleteUser);
}

export default routes;
