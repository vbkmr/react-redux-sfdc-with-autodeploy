# react-sfdc-with-autodeploy
a sample force.com app with react/redux front-end, using 'wercker' auto-deploy to build, test and deploy in force.com's dev, sandbox and production environment

### Flow of deployment
`'React-Redux' SPA -> bundled using 'webpack' ->  Zipped and Deployed as static resource using 'jsforce-deploy' `

### Communication between React-Redux SPA and SalesForce back-end
#### ApexController
`global class MyReactAppApexController {    
    
    //Method that handles query from React-based SPA (on VF)
    @RemoteAction
    global static List<Account> getSearchedAccounts(String queryJSON) 
    {
       	//Todo: parse queryJSON
       	//Todo: update SOQL for query params
        List<Account> searchedAccounts = [select Id, Name, AccountNumber, Phone, AnnualRevenue from Account];
        System.debug('searchedAccounts' + searchedAccounts);
        return searchedAccounts;
    }
}`

#### VisualForce Page
`<apex:page standardstylesheets="false" showheader="false" sidebar="false"  applyHtmlTag="false" applyBodyTag="false" docType="html-5.0"
           controller="MyReactAppApexController">
    <html>
        <head>
            <apex:stylesheet value="{!URLFOR($Resource.ReactSearchStatic, '/styles.css')}"/>            
        </head>
        <body>
            <div>
                <div id="root"/>
                <script src="{!URLFOR($Resource.ReactSearchStatic,'/bundle.js')}"/>
            </div>
        </body>
    </html>
</apex:page>`

### Auto-deployment tool 'wercker'
`deploy-sfdc-dev:
  steps:
    # A step that executes `npm install` command
    - npm-install
    # A step that executes `npm test` command
    # - npm-test

    # Running gulp tasks for SFDC Static resource deploy
    - script:
        name: running gulp
        code: |
          npm install -g gulp
          gulp deploy

deploy-sfdc-sandbox:
  steps:
    # A step that executes `npm install` command
    - npm-install
    # A step that executes `npm test` command
    # - npm-test

    # Running gulp tasks for SFDC Static resource deploy
    - script:
        name: running gulp
        code: |
          gulp deploy

deploy-sfdc-prod:
  steps:
    # A step that executes `npm install` command
    - npm-install
    # A step that executes `npm test` command
    # - npm-test

    # Running gulp tasks for SFDC Static resource deploy
    - script:
        name: running gulp
        code: |
          npm install -g gulp
          gulp deploy
`
