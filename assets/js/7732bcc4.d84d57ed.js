"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[374],{7301:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const o={sidebar_position:4},a="Staging Area",l={id:"tutorials/Git Version Control/Basics/Staging Area",title:"Staging Area",description:"Git-Staging-Diagram-1",source:"@site/docs/tutorials/Git Version Control/Basics/Staging Area.md",sourceDirName:"tutorials/Git Version Control/Basics",slug:"/tutorials/Git Version Control/Basics/Staging Area",permalink:"/docs/tutorials/Git Version Control/Basics/Staging Area",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/tutorials/Git Version Control/Basics/Staging Area.md",tags:[],version:"current",lastUpdatedBy:"Gurpranked",lastUpdatedAt:172315066e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"New Files",permalink:"/docs/tutorials/Git Version Control/Basics/New Files"},next:{title:"Commits",permalink:"/docs/tutorials/Git Version Control/Basics/Commit"}},r={},d=[{value:"Staging more than one file",id:"staging-more-than-one-file",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"staging-area",children:"Staging Area"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Git-Staging-Diagram-1",src:i(2455).A+"",width:"4096",height:"2856"})}),"\n",(0,s.jsx)(n.p,{children:"As you are working on a project, you add, edit, and remove files. When you reach a satisfactory point, you should add the files to a staging area."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:"Staged"})," files are ready to be ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#commit",children:"committed"})," to your working repository."]}),"\n",(0,s.jsxs)(n.p,{children:["Back to our ",(0,s.jsx)(n.code,{children:"newProject"}),", we can now make ",(0,s.jsx)(n.code,{children:"index.html"})," as a tracked file by simple adding it to the staging area using ",(0,s.jsx)(n.code,{children:"git add"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[user@localhost] $ git add index.html\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now ",(0,s.jsx)(n.code,{children:"index.html"})," should be ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:"staged"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'[user@localhost] $ git status\n                  On branch master\n\n                  No commits yet\n\n                  Changes to be committed:\n                    (use "git rm --cached <file>..." to unstage)\n                            new file:   index.html\n'})}),"\n",(0,s.jsx)(n.p,{children:"In other words, the file is now added to the staging area!"}),"\n",(0,s.jsx)(n.h3,{id:"staging-more-than-one-file",children:"Staging more than one file"}),"\n",(0,s.jsxs)(n.p,{children:["It's often that we end up modifying more than one file within a project before we decide to ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:"stage"})," them. Let's see how to ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:"stage"})," them all at once:"]}),"\n",(0,s.jsxs)(n.p,{children:["Let's start by adding a ",(0,s.jsx)(n.code,{children:"README.md"})," file to our repository to describe it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[user@localhost] $ vim README.md\n"})}),"\n",(0,s.jsx)(n.p,{children:"and add the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"# Hello world\nThis repository exists as part of a git tutorial!\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Recall to use the ",(0,s.jsx)(n.code,{children:":wq"})," command in ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#vim",children:"Vim"})," to write and quit."]})}),"\n",(0,s.jsxs)(n.p,{children:["Let's also add a CSS file called ",(0,s.jsx)(n.code,{children:"styles.css"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[user@localhost] $ vim styles.css\n"})}),"\n",(0,s.jsx)(n.p,{children:"and add the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"@keyframes ani {\n    from {background-color: #4038e6;}\n    to {backgorund-color: #9e99ff;}\n}\nbody {\n    background-color: #4038e6;\n    animation-name: ani;\n    animation-duration: 4s;\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Again, recall to use the ",(0,s.jsx)(n.code,{children:":wq"})," command in ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#vim",children:"Vim"})," to write and quit."]})}),"\n",(0,s.jsxs)(n.p,{children:["Finally let's update ",(0,s.jsx)(n.code,{children:"index.html"})," to include our new stylesheet (",(0,s.jsx)(n.code,{children:"styles.css"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[user@localhost] $ vim index.html\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>Hello World!</title>\n        <link rel="stylesheet" href="styles.css">\n    </head>\n\n    <body>\n        <h1>Hello world!</h1>\n        <p>This is the first file in my new Git Repo.</p>\n    </body>\n</html>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Once again, recall to use the ",(0,s.jsx)(n.code,{children:":wq"})," command in ",(0,s.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#vim",children:"Vim"})," to write and quit."]})}),"\n",(0,s.jsx)(n.p,{children:"Now let's add all these new files and changes to our staging area using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:" git add --all\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"--all"})," option will stage all changes which includes any new files, modified files, or deleted files."]}),"\n",(0,s.jsxs)(n.p,{children:["Now checking via ",(0,s.jsx)(n.code,{children:"git status"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'[user@localhost] $ git status\n                   On branch master\n  \n                   No commits yet\n\n                   Changes to be committed:\n                   (use "git rm --cached <file>..." to unstage)\n                           new file:   README.md\n                           new file:   index.html\n                           new file:   styles.css\n'})}),"\n",(0,s.jsx)(n.p,{children:"We can now do commits since all three files are in the staging area!"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The alternative option synonymous with ",(0,s.jsx)(n.code,{children:"--all"})," is ",(0,s.jsx)(n.code,{children:"-A"}),". Hence, ",(0,s.jsx)(n.code,{children:"git add --all"})," is equivalent to ",(0,s.jsx)(n.code,{children:"git add -A"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2455:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/git-workflow-1-26bb79ba25896726e72693c71acf4a45.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);