Feature:Login

Scenario Outline:Validate the login page of HRM

Given open the browser and enter URL
When enter username as <username>
And enter password as <password>
Then Login should be successful

Examples:
     | username| password |
     | Admin| Admin123 |
     | admin| pass |
     

