"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[315],{4840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(4848),r=t(8453);const o={sidebar_position:8},l="Merge Conflicts",s={id:"tutorials/Git Version Control/Basics/Merge Conflicts",title:"Merge Conflicts",description:"Let's continue work on our original hello-world-pictures branch by adding another image to our project.",source:"@site/docs/tutorials/Git Version Control/Basics/Merge Conflicts.md",sourceDirName:"tutorials/Git Version Control/Basics",slug:"/tutorials/Git Version Control/Basics/Merge Conflicts",permalink:"/docs/tutorials/Git Version Control/Basics/Merge Conflicts",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/tutorials/Git Version Control/Basics/Merge Conflicts.md",tags:[],version:"current",lastUpdatedBy:"Gurpranked",lastUpdatedAt:1724118743e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Merging",permalink:"/docs/tutorials/Git Version Control/Basics/Merging"},next:{title:"Exersises",permalink:"/docs/tutorials/Git Version Control/Basics/Exercises"}},c={},d=[{value:"What is a Merge Conflict?",id:"what-is-a-merge-conflict",level:2},{value:"Understanding the format of a conflicting merge",id:"understanding-the-format-of-a-conflicting-merge",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"merge-conflicts",children:"Merge Conflicts"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's continue work on our original ",(0,i.jsx)(n.code,{children:"hello-world-pictures"})," branch by adding another image to our project."]}),"\n",(0,i.jsxs)(n.p,{children:["First we need to change to the ",(0,i.jsx)(n.code,{children:"hello-world-pictures"})," branch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git checkout hello-world-pictures\r\nSwitched to branch 'hello-world-pictures'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Second, Let's obtain the ",(0,i.jsx)(n.a,{href:"https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png",children:"image"})," we need to add (from the same working directory as ",(0,i.jsx)(n.code,{children:"index.html"}),"):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"wget https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png > hello.png\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Linux & Mac:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/hello-world.png > hello.png\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Second, we need open ",(0,i.jsx)(n.code,{children:"index.html"})," for editing and adding in our new ",(0,i.jsx)(n.a,{href:"https://newactivationkey.com/wp-content/uploads/2020/01/hello-world-1024x576.png",children:"image"})," and then add the code for our new image:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>Hello World!</title>\r\n        <link rel="stylesheet" href="styles.css">\r\n    </head>\r\n\r\n    <body>\r\n        <h1>Hello world!</h1>\r\n        <div>\r\n            <img src="git.png" alt="Git Logo" style="width:100%;max-width:960px">\r\n        </div>\r\n        <p>This is the first file in my new Git Repo.</p>\r\n        <p>A new line in our file!</p>\r\n        <div>\r\n            <img src="hello.png" alt="Hello World" style="width:100%;max-width:640px">\r\n        </div>\r\n    </body>\r\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After saving and exiting, we need to ",(0,i.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:"stage"})," all the changes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git add --all\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now let's ",(0,i.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#commit",children:"commit"})," the changes to the ",(0,i.jsx)(n.code,{children:"hello-world-pictures"})," branch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git commit -m "feat: Added hello world image"\r\n[hello-world-pictures 9356dc6] feat: added hello world image\r\n 2 files changed, 3 insertions(+), \r\n create mode 100644 hello.png\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now let's merge the changes from ",(0,i.jsx)(n.code,{children:"hello-world-pictures"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git checkout master\r\n[user@localhost] $ git merge hello-world-pictures\r\nCONFLICT (content): Merge conflict in index.html\r\nAutomatic merge failed; fix conflicts and then commit the result.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Yikes! We've encountered a ",(0,i.jsx)(n.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#merge-conflict",children:"merge conflict"}),"!"]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-merge-conflict",children:"What is a Merge Conflict?"}),"\n",(0,i.jsx)(n.p,{children:"A Merge Conflict is an issue where git is unable to automatically adjust edit differences between two commits. More specifically, it is due to two branches modifying the same region within a file or multiple files."}),"\n",(0,i.jsxs)(n.p,{children:["In the situation above, the conflict is within ",(0,i.jsx)(n.code,{children:"index.html"}),". We can confirm this using ",(0,i.jsx)(n.code,{children:"git status"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git status\r\nOn branch master\r\nYou have unmerged paths.\r\n  (fix conflicts and run "git commit")\r\n  (use "git merge --abort" to abort the merge)\r\n\r\nChanges to be committed:\r\n        new file:   git.png\r\n        new file:   hello.png\r\n\r\nUnmerged paths:\r\n  (use "git add <file>..." to mark resolution)\r\n        both modified:   index.html\n'})}),"\n",(0,i.jsxs)(n.p,{children:["From the report, we can see that the issue is within ",(0,i.jsx)(n.code,{children:"index.html"})," however, both the image files are staged to be committed."]}),"\n",(0,i.jsxs)(n.p,{children:["Let's fix our merge conflict by opening the faulty file (",(0,i.jsx)(n.code,{children:"index.html"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>Hello World!</title>\r\n        <link rel="stylesheet" href="styles.css">\r\n    </head>\r\n    <body>\r\n        <h1>Hello world!</h1>\r\n        <div>\r\n            <img src="git.png" alt="Git Logo" style="width:100%;max-width:960px">\r\n        </div>\r\n        <p>This is the first file in my new Git Repo.</p>\r\n        <<<<<<< HEAD\r\n        <p>Copyright UML Cloud Computing Club &copy;</p>\r\n        =======\r\n        <p>A new line within our page!</p>\r\n        <div>\r\n            <img src="hello.png" alt="Hello World" style="width;max-width:960px">\r\n        </div>\r\n        >>>>>>> hello-world-pictures\r\n    </body>\r\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"understanding-the-format-of-a-conflicting-merge",children:"Understanding the format of a conflicting merge"}),"\n",(0,i.jsxs)(n.p,{children:["Within the example above there are new lines within ",(0,i.jsx)(n.code,{children:"index.html"})," that were not placed earlier. The dividing symbols ",(0,i.jsx)(n.code,{children:"<<<"})," and ",(0,i.jsx)(n.code,{children:">>>"})," indicate the changes from each of the two branches. ",(0,i.jsx)("br",{}),"\r\nThe divided region from HEAD to the ",(0,i.jsx)(n.code,{children:"==="})," symbols indicates the version of the line from the master branch. The dividing region from ",(0,i.jsx)(n.code,{children:"==="})," to hello-world-pictures indicates the changes on the same line that were sourced from the ",(0,i.jsx)(n.code,{children:"hello-world-pictures"})," branch."]}),"\n",(0,i.jsxs)(n.p,{children:["We need to edit our file to contain content of both the ",(0,i.jsx)(n.code,{children:"master"})," and ",(0,i.jsx)(n.code,{children:"hello-world-pictures"})," branch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>Hello World!</title>\r\n        <link rel="stylesheet" href="styles.css">\r\n    </head>\r\n    <body>\r\n        <h1>Hello world!</h1>\r\n        <div>\r\n            <img src="git.png" alt="Git Logo" style="width:100%;max-width:960px">\r\n        </div>\r\n        <p>This is the first file in my new Git Repo.</p>\r\n        <p>Copyright UML Cloud Computing Club &copy;</p>\r\n        <p>A new line within our page!</p>\r\n        <div>\r\n            <img src="hello.png" alt="Hello World" style="width;max-width:960px">\r\n        </div>\r\n    </body>\r\n</html>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now that ",(0,i.jsx)(n.code,{children:"index.html"})," has been corrected, let's stage it and then check the status of the repo:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git add index.html\r\n[user@localhost] $ git status\r\nOn branch master\r\nAll conflicts fixed but you are still merging.\r\n  (use "git commit" to conclude merge)\r\n\r\nChanges to be committed:\r\n        new file:   git.png\r\n        new file:   hello.png\r\n        modified:   index.html\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now the conflict has been marked as fixed by git. We can now commit fixes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'[user@localhost] $ git commit -m "fix: Resolved merge conflicts in index.html"\r\n[master 49a3336] fix: resolved merge conflicts with index.html\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, since we're done using the ",(0,i.jsx)(n.code,{children:"hello-world-pictures"})," branch, we can delete it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[user@localhost] $ git branch -d hello-world-pictures\r\nDeleted branch hello-world-pictures (was 6ceb75e).\n"})}),"\n",(0,i.jsx)(n.p,{children:"Congratulations, you sucessfully managed to resolve a merge conflict using the aramada of tools provided by git! Moreover, now you should be experienced in using the power of git to employ version control on your project to enhance their maintainability and collaborative potential!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);