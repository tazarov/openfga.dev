"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"What is OpenFGA","href":"/docs/authorization-and-openfga","docId":"content/authorization-and-openfga"},{"type":"link","label":"Concepts","href":"/docs/concepts","docId":"content/concepts"},{"type":"link","label":"Configuration Language","href":"/docs/configuration-language","docId":"content/configuration-language"},{"type":"category","collapsible":true,"collapsed":false,"label":"Getting Started","items":[{"type":"link","label":"Setup OpenFGA Server","href":"/docs/getting-started/setup-openfga","docId":"content/getting-started/setup-openfga"},{"type":"link","label":"Install SDK Client","href":"/docs/getting-started/install-sdk","docId":"content/getting-started/install-sdk"},{"type":"link","label":"Create a Store","href":"/docs/getting-started/create-store","docId":"content/getting-started/create-store"},{"type":"link","label":"Setup SDK Client for Store","href":"/docs/getting-started/setup-sdk-client","docId":"content/getting-started/setup-sdk-client"},{"type":"link","label":"Configure Authorization Model","href":"/docs/getting-started/configure-model","docId":"content/getting-started/configure-model"},{"type":"link","label":"Update Relationship Tuples","href":"/docs/getting-started/update-tuples","docId":"content/getting-started/update-tuples"},{"type":"link","label":"Perform a Check","href":"/docs/getting-started/perform-check","docId":"content/getting-started/perform-check"},{"type":"link","label":"Integrate Within a Framework","href":"/docs/getting-started/framework","docId":"content/getting-started/framework"}],"href":"/docs/getting-started"},{"type":"category","collapsible":true,"collapsed":true,"label":"Modeling Guides","items":[{"type":"link","label":"Get Started with Modeling","href":"/docs/modeling/getting-started","docId":"content/modeling/getting-started"},{"type":"link","label":"Direct Access","href":"/docs/modeling/direct-access","docId":"content/modeling/direct-access"},{"type":"link","label":"User Groups","href":"/docs/modeling/user-groups","docId":"content/modeling/user-groups"},{"type":"link","label":"Roles and Permissions","href":"/docs/modeling/roles-and-permissions","docId":"content/modeling/roles-and-permissions"},{"type":"link","label":"Parent-Child Objects","href":"/docs/modeling/parent-child","docId":"content/modeling/parent-child"},{"type":"link","label":"Blocklists","href":"/docs/modeling/blocklists","docId":"content/modeling/blocklists"},{"type":"link","label":"Public Access","href":"/docs/modeling/public-access","docId":"content/modeling/public-access"},{"type":"link","label":"Multiple Restrictions","href":"/docs/modeling/multiple-restrictions","docId":"content/modeling/multiple-restrictions"},{"type":"link","label":"Custom Roles","href":"/docs/modeling/custom-roles","docId":"content/modeling/custom-roles"},{"type":"link","label":"Contextual and Time-Based Authorization","href":"/docs/modeling/contextual-time-based-authorization","docId":"content/modeling/contextual-time-based-authorization"},{"type":"link","label":"Authorization Through Organization Context","href":"/docs/modeling/organization-context-authorization","docId":"content/modeling/organization-context-authorization"},{"type":"category","collapsed":true,"collapsible":true,"label":"Building Blocks","items":[{"type":"link","label":"Direct Relationships","href":"/docs/modeling/building-blocks/direct-relationships","docId":"content/modeling/building-blocks/direct-relationships"},{"type":"link","label":"Concentric Relationships","href":"/docs/modeling/building-blocks/concentric-relationships","docId":"content/modeling/building-blocks/concentric-relationships"},{"type":"link","label":"Object to Object Relationships","href":"/docs/modeling/building-blocks/object-to-object-relationships","docId":"content/modeling/building-blocks/object-to-object-relationships"},{"type":"link","label":"Usersets","href":"/docs/modeling/building-blocks/usersets","docId":"content/modeling/building-blocks/usersets"}],"href":"/docs/modeling/building-blocks"},{"type":"category","collapsible":true,"collapsed":true,"label":"Advanced Use-Cases","items":[{"type":"link","label":"Google Drive","href":"/docs/modeling/advanced/gdrive","docId":"content/modeling/advanced/gdrive"},{"type":"link","label":"GitHub","href":"/docs/modeling/advanced/github","docId":"content/modeling/advanced/github"},{"type":"link","label":"Slack","href":"/docs/modeling/advanced/slack","docId":"content/modeling/advanced/slack"},{"type":"link","label":"IoT","href":"/docs/modeling/advanced/iot","docId":"content/modeling/advanced/iot"},{"type":"link","label":"Entitlements","href":"/docs/modeling/advanced/entitlements","docId":"content/modeling/advanced/entitlements"}],"href":"/docs/modeling/advanced"},{"type":"category","collapsed":true,"collapsible":true,"label":"Migrations","items":[{"type":"link","label":"Migrating Relations","href":"/docs/modeling/migrating/migrating-relations","docId":"content/modeling/migrating/migrating-relations"}]}],"href":"/docs/modeling"},{"type":"category","label":"Interacting with the API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage User Access","href":"/docs/interacting/managing-user-access","docId":"content/interacting/managing-user-access"},{"type":"link","label":"Manage Group Access","href":"/docs/interacting/managing-group-access","docId":"content/interacting/managing-group-access"},{"type":"link","label":"Manage Group Membership","href":"/docs/interacting/managing-group-membership","docId":"content/interacting/managing-group-membership"},{"type":"link","label":"Manage Relationships Between Objects","href":"/docs/interacting/managing-relationships-between-objects","docId":"content/interacting/managing-relationships-between-objects"},{"type":"link","label":"Transactional Writes","href":"/docs/interacting/transactional-writes","docId":"content/interacting/transactional-writes"},{"type":"link","label":"Relationship Queries","href":"/docs/interacting/relationship-queries","docId":"content/interacting/relationship-queries"},{"type":"link","label":"Get Tuple Changes","href":"/docs/interacting/read-tuple-changes","docId":"content/interacting/read-tuple-changes"},{"type":"link","label":"Search with Permissions","href":"/docs/interacting/search-with-permissions","docId":"content/interacting/search-with-permissions"}],"href":"/docs/interacting"}]},"docs":{"content/authorization-and-openfga":{"id":"content/authorization-and-openfga","title":"Authorization and OpenFGA","description":"Introduction to Authorization and OpenFGA","sidebar":"docs"},"content/concepts":{"id":"content/concepts","title":"Concepts","description":"The  service answers  checks by determining whether a relationship exists between an object and a user. Checks takes into consideration the authorization model of the system and the relationship tuples present in the system at that time in order to make a decision.","sidebar":"docs"},"content/configuration-language":{"id":"content/configuration-language","title":"Configuration Language","description":"The \'s Configuration Language is used to build a representation of a system\'s . It informs  on what the  in the system are and how they could relate to one another. It describes the  possible on an object of a certain type and lists the conditions under which one is related to that object.","sidebar":"docs"},"content/getting-started/configure-model":{"id":"content/getting-started/configure-model","title":"Configure Authorization Model","description":"How to configure authorization model for a store","sidebar":"docs"},"content/getting-started/create-store":{"id":"content/getting-started/create-store","title":"Create a Store","description":"How to create a store","sidebar":"docs"},"content/getting-started/framework":{"id":"content/getting-started/framework","title":"Integrate Within a Framework","description":"This section will illustrate how to integrate  within a framework environment, such as Fastify or Fiber.","sidebar":"docs"},"content/getting-started/install-sdk":{"id":"content/getting-started/install-sdk","title":"Install SDK Client","description":"To get started, install the  SDK packages.","sidebar":"docs"},"content/getting-started/overview":{"id":"content/getting-started/overview","title":"Getting Started","description":"The following will provide a step by step guide on how to get started with .","sidebar":"docs"},"content/getting-started/perform-check":{"id":"content/getting-started/perform-check","title":"Perform a Check","description":"This section will illustrate how to perform a  request to determine whether a  has a certain  with an .","sidebar":"docs"},"content/getting-started/setup-openfga":{"id":"content/getting-started/setup-openfga","title":"Setup OpenFGA Server","description":"Setup the OpenFGA server","sidebar":"docs"},"content/getting-started/setup-sdk-client":{"id":"content/getting-started/setup-sdk-client","title":"Setup SDK Client for Store","description":"Setting up an OpenFGA SDK client","sidebar":"docs"},"content/getting-started/update-tuples":{"id":"content/getting-started/update-tuples","title":"Update Relationship Tuples","description":"This section will illustrate how to update .","sidebar":"docs"},"content/interacting/managing-group-access":{"id":"content/interacting/managing-group-access","title":"Managing Group Access","description":"In this guide you will learn how to give a group of users access to a particular object.","sidebar":"docs"},"content/interacting/managing-group-membership":{"id":"content/interacting/managing-group-membership","title":"Managing Group Membership","description":"In this guide you will learn how to update a user\'s membership to a group by adding and removing them from it.","sidebar":"docs"},"content/interacting/managing-relationships-between-objects":{"id":"content/interacting/managing-relationships-between-objects","title":"Managing Relationships Between Objects","description":"In this guide you will learn how to give a user access to a particular object through a relationship with another object.","sidebar":"docs"},"content/interacting/managing-user-access":{"id":"content/interacting/managing-user-access","title":"Managing User Access","description":"In this guide you will learn how to give a  access to a particular .","sidebar":"docs"},"content/interacting/overview":{"id":"content/interacting/overview","title":"Interacting with the API","description":"This section helps you integrate  with your system. To do this, you will learn how to programmatically write authorization related data to .","sidebar":"docs"},"content/interacting/read-tuple-changes":{"id":"content/interacting/read-tuple-changes","title":"How to get tuple changes","description":"This section illustrates how to call the Read Changes API to get the list of relationship tuple changes that happened in your store, in the exact order that they happened. The API response includes tuples that have been added or removed in your store. It does not include other changes, like updates to your authorization model and adding new assertions.","sidebar":"docs"},"content/interacting/relationship-queries":{"id":"content/interacting/relationship-queries","title":"Relationship Queries: Check, Read, Expand, and ListObjects","description":"An overview of how to use the Check, Read, Expand, and ListObject APIs.","sidebar":"docs"},"content/interacting/search-with-permissions":{"id":"content/interacting/search-with-permissions","title":"Search With Permissions","description":"The recommended ways to integrate FGA into your search","sidebar":"docs"},"content/interacting/transactional-writes":{"id":"content/interacting/transactional-writes","title":"Transactional Writes","description":"In this guide you will learn how to update multiple  in a single transaction.","sidebar":"docs"},"content/modeling/advanced/entitlements":{"id":"content/modeling/advanced/entitlements","title":"Entitlements","description":"Modeling Entitlements for a System","sidebar":"docs"},"content/modeling/advanced/gdrive":{"id":"content/modeling/advanced/gdrive","title":"Google Drive","description":"Modeling Google Drive permissions","sidebar":"docs"},"content/modeling/advanced/github":{"id":"content/modeling/advanced/github","title":"GitHub","description":"Modeling GitHub permissions","sidebar":"docs"},"content/modeling/advanced/iot":{"id":"content/modeling/advanced/iot","title":"IoT","description":"Modeling Fine Grained Authorization for an IoT Security Camera System","sidebar":"docs"},"content/modeling/advanced/overview":{"id":"content/modeling/advanced/overview","title":"Advanced Use-Cases","description":"This section will present advanced use cases and patterns for authorization modeling with .","sidebar":"docs"},"content/modeling/advanced/slack":{"id":"content/modeling/advanced/slack","title":"Slack","description":"Modeling Authorization for Slack","sidebar":"docs"},"content/modeling/blocklists":{"id":"content/modeling/blocklists","title":"Blocklists","description":"In this guide you\'ll see how to model preventing users from accessing objects using . For example, blocking users from accessing a document, even if it has been already shared with them.","sidebar":"docs"},"content/modeling/building-blocks/concentric-relationships":{"id":"content/modeling/building-blocks/concentric-relationships","title":"Concentric Relationships","description":"Modeling Concepts: Concentric Relationships","sidebar":"docs"},"content/modeling/building-blocks/direct-relationships":{"id":"content/modeling/building-blocks/direct-relationships","title":"Direct Relationships","description":"Modeling Concepts: Direct Relationships","sidebar":"docs"},"content/modeling/building-blocks/object-to-object-relationships":{"id":"content/modeling/building-blocks/object-to-object-relationships","title":"Object to Object Relationships","description":"In this guide you\'ll learn how to model your application with  that are not specifically tied to a user. For example, a folder is a parent of a document.","sidebar":"docs"},"content/modeling/building-blocks/overview":{"id":"content/modeling/building-blocks/overview","title":"Building Blocks","description":"This section has guides that on the building blocks of authorization model.","sidebar":"docs"},"content/modeling/building-blocks/usersets":{"id":"content/modeling/building-blocks/usersets","title":"Usersets","description":"What Is A Userset?","sidebar":"docs"},"content/modeling/contextual-time-based-authorization":{"id":"content/modeling/contextual-time-based-authorization","title":"Contextual and Time-Based Authorization","description":"This section explores some methods available to you to tackle some use-cases where the expected authorization check may depend on certain dynamic or contextual data (such as time, location, ip address, weather) that have not been written to the  store.","sidebar":"docs"},"content/modeling/custom-roles":{"id":"content/modeling/custom-roles","title":"Custom Roles","description":"Model custom & dynamically changing roles in your system","sidebar":"docs"},"content/modeling/direct-access":{"id":"content/modeling/direct-access","title":"Direct Access","description":"In this guide you will learn how to grant a  access to an  (such as a certain document) in .","sidebar":"docs"},"content/modeling/getting-started":{"id":"content/modeling/getting-started","title":"Get Started with Modeling","description":"An introduction to modeling","sidebar":"docs"},"content/modeling/migrating/migrating-relations":{"id":"content/modeling/migrating/migrating-relations","title":"Migrating Relations","description":"In the lifecycle of software development, you will need to make updates or changes to the . In this guide, you will learn best practices for changing your existing authorization model. With these recommendations, you will minimize downtime and ensure your relationship models stay up to date.","sidebar":"docs"},"content/modeling/migrating/migrating-schema-1-1":{"id":"content/modeling/migrating/migrating-schema-1-1","title":"Migrating Models To Schema 1.1","description":"has introduced a new DSL schema version with several changes that we"},"content/modeling/multiple-restrictions":{"id":"content/modeling/multiple-restrictions","title":"Multiple Restrictions","description":"In this guide we are going to model requiring multiple authorizations before allowing users to perform actions on particular objects using .","sidebar":"docs"},"content/modeling/organization-context-authorization":{"id":"content/modeling/organization-context-authorization","title":"Authorization Through Organization Context","description":"This section tackles cases where a user may have access to a particular resource through their presence in a particular organization, and they should have that access only when logged in within the context of that organization.","sidebar":"docs"},"content/modeling/overview":{"id":"content/modeling/overview","title":"Modeling Guides","description":"This section has guides, concepts and examples that help you define an authorization model.","sidebar":"docs"},"content/modeling/parent-child":{"id":"content/modeling/parent-child","title":"Parent-Child Objects","description":"In this guide you will learn how to indicate  between , and how users relationships to one object can affect their relationship with another. For example: how a editor of a folder can be an editor of all documents the folder is a parent of.","sidebar":"docs"},"content/modeling/public-access":{"id":"content/modeling/public-access","title":"Public Access","description":"In this guide you will learn how to grant public access to an , such as a certain document, using .","sidebar":"docs"},"content/modeling/roles-and-permissions":{"id":"content/modeling/roles-and-permissions","title":"Roles and Permissions","description":"In this guide you will learn how to model roles and permissions model within  using the  and .","sidebar":"docs"},"content/modeling/user-groups":{"id":"content/modeling/user-groups","title":"User Groups","description":"In this guide you will learn how to add users to groups and grant groups access to an  using .","sidebar":"docs"}}}')}}]);