#!/usr/bin/env node

const program = require('commander');

const { prompt } = require('inquirer');

const { addCustomer, findCustomer ,updateCustomer, removeCustomer, listCustomers} = require('./index');

const dotenv = require('dotenv').config();

const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer First Name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
];



program
    .version('1.0.0')
    .description('Client Management System')
;


// Add Command
program
    .command('add')
    .alias('a')
    .description('Add a New Customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers));
    })
;


// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('Update Customer Data')
    .action((_id) => {
        prompt(questions).then(answers => updateCustomer(_id, answers)).catch(err => console.log(err));
    })
;


// Find Command
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer by firstname or lastname')
    .action(name => findCustomer(name))
;


// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('Delete a customer from database')
    .action(_id => removeCustomer(_id))
;


// List Command
program
    .command('list')
    .alias('l')
    .description('List all customers in the database')
    .action(() => listCustomers())
;


program.parse(process.argv);