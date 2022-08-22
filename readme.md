# UI and API tests with Playwright and Calliope.pro
## Summary
The test considers of two parts: 
- UI test written in Playwright and TypeScript
- API tests written in postman and run in CI/CD environment with Newman

The tests are hosted in Github actions and the run results are visible in `actions` tab. They can also be triggered manually from there.

## Run tests locally
Clone the repo
Install the dependencies with `npm i`  
### UI tests
Run the tests with `npm run test`
### API tests
Run the tests with `npm run test:api`


## Run test on GitHub actions
Go to Actions to see the avaliable workflows.
The worflows, both for API and UI tests are set to be triggered by a push or pull request to main branch. They will be automatically run when you do so. In case you want to run them manually click `run workflow`

## Tests results in Calliope.pro
Calliope.pro does not support generic Playwright json format and jUnit xml reporter was used instead. Unfortunately due to a bug in the app jUnit xml files are not processed properly and the API requests from CI/CD fails with an error. The errors can be viewed [here](https://app.calliope.pro/profiles/4443?start_date=2022-08-22T17%253A23%253A56.000Z&end_date=2022-08-22T18%253A43%253A28.000Z&filters=%257B%2522duration%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253Afalse%257D%252C%2522failed%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253Atrue%257D%252C%2522other%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253A%25221%2522%257D%252C%2522broken%2522%253A%257B%2522hidden%2522%253Atrue%252C%2522fill%2522%253A%25221%2522%257D%252C%2522skipped%2522%253A%257B%2522hidden%2522%253Atrue%252C%2522fill%2522%253A%25221%2522%257D%252C%2522unknown%2522%253A%257B%2522hidden%2522%253Atrue%252C%2522fill%2522%253A%25221%2522%257D%252C%2522passed%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253A%25221%2522%257D%252C%2522stacked%2522%253Atrue%252C%2522combine_others%2522%253Atrue%257D).   
It is however possible to upload the results created in Playwright manually - they can be viewed [here](https://app.calliope.pro/profiles/4443?start_date=2022-08-22T17%253A29%253A11.000Z&end_date=2022-08-22T19%253A13%253A06.000Z&filters=%257B%2522duration%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253Afalse%257D%252C%2522failed%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253Atrue%257D%252C%2522other%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253A%25221%2522%257D%252C%2522broken%2522%253A%257B%2522hidden%2522%253Atrue%252C%2522fill%2522%253A%25221%2522%257D%252C%2522skipped%2522%253A%257B%2522hidden%2522%253Atrue%252C%2522fill%2522%253A%25221%2522%257D%252C%2522unknown%2522%253A%257B%2522hidden%2522%253Atrue%252C%2522fill%2522%253A%25221%2522%257D%252C%2522passed%2522%253A%257B%2522hidden%2522%253Afalse%252C%2522fill%2522%253A%25221%2522%257D%252C%2522stacked%2522%253Atrue%252C%2522combine_others%2522%253Atrue%257D)

## Improvements to Calliope.pro
While setting up the test suite it turned out that it does not support Playwright or Postman json reports format - they would be a nice add to the product.

As a critical bug has been found during the setup it seems that the most important improvement is fixing the API connector for jUnit XML reports.
There are certain parts of the product's documentation, especially the ones covering the integration with GithubActions, that could be more explicit and improving it would speed up the setup process.
There are also minor UX improvements, that could benefit the user, for example providing a new user with pre-set Company and Group, which would speed up starting process, and create a more user-friendly first impression.

## Approach and test selection
### UI tests
The UI tests cover some very basic UI actions, such as click, input and wait. However not very impressive, they are the most common actions in UI Automation and therefore were selected for this demo. They assure that the user will be able to perform those basic workflows when interacting with the platform.
### API tests
The API tests cover a CRUD action for part of the shop and utilize different REST methods like GET, POST, PUT and DELETE and therfore cover most of the actions avaliable for the /pets endpoint. They assure that the connection with the database works correctly and that the user can interact with that part of the system.

### Improvements to the test suite
The test suite is just a demonstration of the framework's capabilities and should not be considered complete. UI tests cover only a small fraction of the website and API tests cover only one endpoint. They would need to be expanded to provide a wider test coverage for the app.
As for the framework itself it does not implement a BDD layer with tools like cucumber as it's a QA for QA task for the sake of this assignment. It would be worth considering adding a Cucumber feature structure on existing tests and page objects for it to be more business-people friendly.
Another nice-to-have would be a Slack integration, that would send the results to a given channel after the tests complete. This could be easily done by adding `action-slack` to the yaml configuration of GithubActions
