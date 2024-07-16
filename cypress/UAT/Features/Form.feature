Feature:Simple form
Scenario:to validate simple form

Given user a simple form from URL.

When user enter firstname,lastname,email,contact,message.

And user clicks on submit button.

Then Alert with a success message is displayed.