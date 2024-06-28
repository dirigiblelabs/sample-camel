# Dirigible Integrations - Sample
A sample for dirigible integrations module.
This sample shows the following 3 topics:
- How to use the Designer to create/modify routes.
- How to invoke Dirigible `*.mjs` files via Camel routes,
- How to invoke Camel routes from Dirigible `*.mjs` files via the `sdk/integrations` API
- How to use the built in `Camel FTP` component to save data as a file in an FTP Server.


## Prerequisites
1. To run this project you need to add the following dependencies:
```
     <dependency>
            <groupId>org.apache.camel</groupId>
            <artifactId>camel-ftp</artifactId>
            <version>${camel.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.camel.springboot</groupId>
            <artifactId>camel-direct-starter</artifactId>
            <version>${camel.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.camel</groupId>
            <artifactId>camel-direct</artifactId>
            <version>${camel.version}</version>
        </dependency>
```
  to `components/engine/engine-camel/pom.xml` then build/run Eclipse Dirigible.

2. Import the `/camel` folder of this repository as a zip in Eclipse Dirigible via the import feature in the UI.

<img width="414" alt="Screenshot 2024-06-28 at 15 27 14" src="https://github.com/dirigiblelabs/sample-camel/assets/19828259/a127582e-805c-4164-ba41-c2a51bb62bc9">

## Routes

`routes.camel` contains the routes definitions for the following two routes:
  - `route-3c7a` this route can be called with a POST request to [localhost:8080/services/integ](http://localhost:8080/services/integrations/endpoint) and it will call `handler.js` with the HTTP request payload and then save the final processing result to a localhost:21 FTP server with user test and no password.
  - `route-bda8` a direct route that is called by `routeInvoker.mjs` that modifies the message provided by `routeInvoker.mjs` and returns it as a response.

<img width="1464" alt="Screenshot 2024-06-28 at 15 35 51" src="https://github.com/dirigiblelabs/sample-camel/assets/19828259/fff6ac2f-42c0-414d-a62e-b6d81ee87d19">

# Bonus
Rest services are not included in this sample, but they can be created in the `REST` tab of the camel editor and they call direct routes defined in the `Routes` tab.
  <img width="1509" alt="Screenshot 2024-06-28 at 15 37 15" src="https://github.com/dirigiblelabs/sample-camel/assets/19828259/7b9bd5cb-2dfb-451c-b30e-f40e0b63aef5">


