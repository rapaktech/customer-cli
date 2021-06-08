# Customer_CLI

# **A database of fictional customers, built to allow CRUD operations entered directly from a local machine CLI**

To use this after cloning, you'll have to set up your own .env file and add your own database connection string.

After that, run "npm link" command in the root directory cli to make it possible to run the customer-cli command globally., and add a .env file to your local machine root user directory e.g C://Users/YourPC.


# **Access commands**

* **To add a new customer to the database, run "customer-cli add" and follow the prompt**

* **To list all customers in the database, run "customer-cli list"**

* **To find an existing customer in the database, run "customer-cli find 'customer first name or last name' "**

* **To update an existing customer in the database, run "customer-cli update 'customer id' " and follow the prompt**

* **To remove an existing customer from the database, run "customer-cli remove 'customer id' "**