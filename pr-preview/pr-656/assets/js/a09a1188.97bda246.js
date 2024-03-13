"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1217],{89802:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(85893),r=t(11151),i=t(5270);const o={sidebar_position:2,slug:"/modeling/building-blocks/usersets",description:"Modeling with userset"},a="Usersets",l={id:"content/modeling/building-blocks/usersets",title:"Usersets",description:"Modeling with userset",source:"@site/docs/content/modeling/building-blocks/usersets.mdx",sourceDirName:"content/modeling/building-blocks",slug:"/modeling/building-blocks/usersets",permalink:"/pr-preview/pr-656/docs/modeling/building-blocks/usersets",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/building-blocks/usersets.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/modeling/building-blocks/usersets",description:"Modeling with userset"},sidebar:"docs",previous:{title:"Object to Object Relationships",permalink:"/pr-preview/pr-656/docs/modeling/building-blocks/object-to-object-relationships"},next:{title:"Advanced Use-Cases",permalink:"/pr-preview/pr-656/docs/modeling/advanced"}},c={},d=[{value:"What Is A Userset?",id:"what-is-a-userset",level:2},{value:"How Do Check Requests Work With Usersets?",id:"how-do-check-requests-work-with-usersets",level:2},{value:"How Do Expand Requests Work With Usersets?",id:"how-do-expand-requests-work-with-usersets",level:2},{value:"Internals",id:"internals",level:2},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"usersets",children:"Usersets"}),"\n",(0,n.jsx)(i.AH,{}),"\n",(0,n.jsx)(s.h2,{id:"what-is-a-userset",children:"What Is A Userset?"}),"\n",(0,n.jsxs)(s.p,{children:["A userset represents a set or collection of ",(0,n.jsx)(i.uH,{section:"what-is-a-user",linkName:"users"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Usersets can be used to indicate that a group of users in the system have a certain ",(0,n.jsx)(i.uH,{section:"what-is-a-relation",linkName:"relation"})," with an ",(0,n.jsx)(i.uH,{section:"what-is-an-object",linkName:"object"}),". This can be used to assign permissions to groups of users rather than specific ones, allowing us to represent the permissions in our system using less tuples and granting us flexibility in granting or denying access in bulk."]}),"\n",(0,n.jsxs)(s.p,{children:["In ",(0,n.jsx)(i.rZ,{format:i.v7.ShortForm}),", usersets are represented via this notation: ",(0,n.jsx)(s.code,{children:"object#relation"}),", where ",(0,n.jsx)(i.uH,{section:"what-is-an-object",linkName:"object"})," is made up of a ",(0,n.jsx)(i.uH,{section:"what-is-a-type",linkName:"type"})," and an object identifier. For example:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"company:xyz#employee"})," represents all users that are related to ",(0,n.jsx)(s.code,{children:"company:xyz"})," as ",(0,n.jsx)(s.code,{children:"employee"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"tweet:12345#viewer"})," represents all users that are related to ",(0,n.jsx)(s.code,{children:"tweet:12345"})," as ",(0,n.jsx)(s.code,{children:"viewer"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-do-check-requests-work-with-usersets",children:"How Do Check Requests Work With Usersets?"}),"\n",(0,n.jsx)(s.p,{children:"Imagine the following authorization model:"}),"\n",(0,n.jsx)(i.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"org",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{reader:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"user"},{type:"org",relation:"member"}]}}}}]}}),"\n",(0,n.jsx)(s.p,{children:"Now let us assume that the store has the following tuples:"}),"\n",(0,n.jsx)(i.Wz,{relationshipTuples:[{_description:'Userset "Members of the xyz org" can read the budget document',user:"org:xyz#member",relation:"reader",object:"document:budget"},{_description:'Anne is part of the userset "Members of the xyz org"',user:"user:anne",relation:"member",object:"org:xyz"}]}),"\n",(0,n.jsxs)(s.p,{children:["If we call the ",(0,n.jsx)(i.uH,{section:"what-is-a-check-request",linkName:"check API"})," to see if user ",(0,n.jsx)(s.code,{children:"anne"})," has a ",(0,n.jsx)(s.code,{children:"reader"})," relationship with ",(0,n.jsx)(s.code,{children:"document:budget"}),", ",(0,n.jsx)(i.rZ,{format:i.v7.ShortForm})," will check whether ",(0,n.jsx)(s.code,{children:"anne"})," is part of the userset that does have a ",(0,n.jsx)(s.code,{children:"reader"})," relationship. Because she is part of that userset, the request will return true:"]}),"\n",(0,n.jsx)(i.uT,{user:"user:anne",relation:"reader",object:"document:budget",allowed:!0}),"\n",(0,n.jsx)(s.h2,{id:"how-do-expand-requests-work-with-usersets",children:"How Do Expand Requests Work With Usersets?"}),"\n",(0,n.jsx)(s.p,{children:"Imagine the following authorization model:"}),"\n",(0,n.jsx)(i.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{writer:{this:{}},reader:{union:{child:[{this:{}},{computedUserset:{relation:"writer"}}]}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"user"},{type:"org",relation:"member"}]},writer:{directly_related_user_types:[{type:"user"},{type:"org",relation:"member"}]}}}}]}}),"\n",(0,n.jsxs)(s.p,{children:["If we wanted to see which users and usersets have a ",(0,n.jsx)(s.code,{children:"reader"})," relationship with ",(0,n.jsx)(s.code,{children:"document:budget"}),", we can call the ",(0,n.jsx)(s.a,{href:"/api/service#Relationship%20Queries/Expand",children:"Expand API"}),". The response will contain a userset tree where the leaf nodes are specific user IDs and usersets. For example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "tree": {\n    "root": {\n      "type": "document:budget#reader",\n      "union": {\n        "nodes": [\n          {\n            "type": "document:budget#reader",\n            "leaf": {\n              "users": {\n                "users": ["user:bob"]\n              }\n            }\n          },\n          {\n            "type": "document:budget#reader",\n            "leaf": {\n              "computed": {\n                "userset": "document:budget#writer"\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["As you can see from the response above, with usersets we can express ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/configuration-language#the-union-operator",children:"unions"})," of user groups. We can also express ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/configuration-language#the-intersection-operator",children:"intersections"})," and ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/configuration-language#the-exclusion-operator",children:"exclusions"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"internals",children:"Internals"}),"\n",(0,n.jsx)(s.p,{children:"Using the type definitions in the authorization model, some of the situations we can represent are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["that a user is ",(0,n.jsx)(s.strong,{children:"not"})," in a set of users having a certain relation to an object, even if a relationship tuple exists in the system. See ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/modeling/building-blocks/direct-relationships#2-with-direct-relationships-disabled",children:"Disabling Direct Relationships"})]}),"\n",(0,n.jsxs)(s.li,{children:["that a user has a certain relationship with an object if they are in the ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/configuration-language#the-union-operator",children:"union"}),", ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/configuration-language#the-intersection-operator",children:"intersection"})," or ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/configuration-language#the-exclusion-operator",children:"exclusion"})," of usersets."]}),"\n",(0,n.jsxs)(s.li,{children:["that a user being in a set of users having a certain relation to an object can result in them having another relation to the object. See ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/modeling/building-blocks/concentric-relationships",children:"Concentric Relationships"})]}),"\n",(0,n.jsxs)(s.li,{children:["that the user being in a set of users having a certain relation to an object and that object is in a set of users having a certain relation to another object, can imply that the original user has a certain relationship to the final object. See ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-656/docs/modeling/building-blocks/object-to-object-relationships",children:"Object-to-Object Relationships"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["When executing the Check API of the form ",(0,n.jsx)(s.code,{children:"check(user, relation, object)"}),", ",(0,n.jsx)(i.rZ,{format:i.v7.ShortForm})," will perform the following steps:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["In the authorization model, look up ",(0,n.jsx)(s.code,{children:"type"})," and its ",(0,n.jsx)(s.code,{children:"relation"}),". Start building a tree where the root node will be the definition of that ",(0,n.jsx)(s.code,{children:"relation"}),", which can be a union, exclusion, or intersection of usersets, or it can be direct users."]}),"\n",(0,n.jsx)(s.li,{children:"Expand all the usersets involved into new nodes in the tree. This means recursively finding all the users that are members of the usersets. If there are direct relationships with users, create leaf nodes."}),"\n",(0,n.jsxs)(s.li,{children:["Check whether ",(0,n.jsx)(s.code,{children:"user"})," is a leaf node in the tree. If the API finds one match, it will return immediately and will not expand the remaining nodes."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Image showing the path  traverses to find if a user is in the userset related to an object",src:t(80787).Z+"",width:"1411",height:"1027"})}),"\n",(0,n.jsx)(s.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,n.jsx)(i.$q,{description:"See the following sections for more information:",relatedLinks:[{title:"Managing Group Membership",description:"How to add users to a userset",link:"../../interacting/managing-group-membership",id:"../../interacting/managing-group-membership.mdx"},{title:"Managing Group Access",description:"How to add permissions to a userset",link:"../../interacting/managing-group-access",id:"../../interacting/managing-group-access.mdx"}]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},80787:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/usersets-check-tree-68f05e3f382b35ea6be97c5115223351.png"}}]);