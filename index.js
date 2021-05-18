const mongoose = require('mongoose');


// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/customer-cli', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// Import model
const Customer = require('./models/customer');


// Add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        mongoose.disconnect;
    }).catch(err => {
        console.log(err);
    });
}

const findCustomer = (name) => {
    // Make case insensitive
    const search = RegExp(name, 'i');
    Customer.find({$or: [{ firstName: search }, { lastName: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} Matches Found`);
        mongoose.disconnect;
    }).catch(err => {
        console.log(err);
    });
}


// Update Customer Data
const updateCustomer = (_id, customer) => {
    Customer.updateOne({_id}, customer)
        .then(customer => {
            console.info('Customer Data Updated');
            mongoose.disconnect;
        }).catch(err => console.log(err))
    ;
}


// Delete Customer Data
const removeCustomer = (_id) => {
    Customer.deleteOne({_id})
        .then(customer => {
            console.info('Customer Data Deleted');
            mongoose.disconnect;
        }).catch(err => console.log(err))
    ;
}


const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} Customers`);
            mongoose.disconnect();
        }).catch(err => console.log(err));
}


// Export all methods

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}