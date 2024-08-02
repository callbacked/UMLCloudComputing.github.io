"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[457],{4664:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(4848),t=i(8453);const o={sidebar_position:1},r="Git Basics",a={id:"tutorials/Git Version Control/Basics/Git Basics",title:"Git Basics",description:"What is Git?",source:"@site/docs/tutorials/Git Version Control/Basics/Git Basics.md",sourceDirName:"tutorials/Git Version Control/Basics",slug:"/tutorials/Git Version Control/Basics/Git Basics",permalink:"/docs/tutorials/Git Version Control/Basics/Git Basics",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/tutorials/Git Version Control/Basics/Git Basics.md",tags:[],version:"current",lastUpdatedBy:"Gurpranked",lastUpdatedAt:172263532e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/category/basics"},next:{title:"Getting Started",permalink:"/docs/tutorials/Git Version Control/Basics/Getting Started"}},l={},c=[{value:"What is Git?",id:"what-is-git",level:2},{value:"What does Git do?",id:"what-does-git-do",level:2},{value:"Git vs Github",id:"git-vs-github",level:2},{value:"Installation",id:"installation",level:2},{value:"Git via CLI",id:"git-via-cli",level:2},{value:"Configuring Git",id:"configuring-git",level:2},{value:"Git Help",id:"git-help",level:2}];function d(s){const e={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"git-basics",children:"Git Basics"}),"\n",(0,n.jsx)(e.h2,{id:"what-is-git",children:"What is Git?"}),"\n",(0,n.jsx)(e.p,{children:"Git is a version control system that helps collaborate on code and keep track of code changes. It was created by Linus Torvalds in 2005 and has been maintained by Junio Hamano since then."}),"\n",(0,n.jsx)(e.h2,{id:"what-does-git-do",children:"What does Git do?"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Manage projects with ",(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#repository-repo",children:(0,n.jsx)(e.strong,{children:"repositories"})}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Clone"})," a project to work with a local copy."]}),"\n",(0,n.jsxs)(e.li,{children:["Control changes with ",(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#stage",children:(0,n.jsx)(e.strong,{children:"Staging"})})," and ",(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#commit",children:(0,n.jsx)(e.strong,{children:"Committing"})}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#branch",children:(0,n.jsx)(e.strong,{children:"Branch"})})," and ",(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#merge",children:(0,n.jsx)(e.strong,{children:"Merge"})})," to work on different parts and versions of a project."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#pull",children:(0,n.jsx)(e.strong,{children:"Pull"})})," the latest version of the project a local copy."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#push",children:(0,n.jsx)(e.strong,{children:"Push"})})," local updates to a project."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"git-vs-github",children:"Git vs Github"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Git and Github are ",(0,n.jsx)("mark",{children:"not"})," the same."]}),"\n",(0,n.jsx)(e.li,{children:"Github makes tools that use Git."}),"\n",(0,n.jsx)(e.li,{children:"Github is the world's largest host of source control and is owned by Microsoft."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(e.p,{children:["Git can be ",(0,n.jsx)(e.a,{href:"https://git-scm.com/",children:"downloaded"})," for free!"]}),"\n",(0,n.jsx)(e.h2,{id:"git-via-cli",children:"Git via CLI"}),"\n",(0,n.jsx)(e.p,{children:"To start using Git, open your command shell."}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:["Windows: Can use Git bash which is included in Git for Windows.",(0,n.jsx)("br",{}),"\nLinux & Mac: Built-in terminal."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Let's check for a proper install by running the following command in the command shell:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"git --version\n"})}),"\n",(0,n.jsxs)(e.p,{children:["If installed properly, the output should be in format ",(0,n.jsx)(e.code,{children:"git version X.Y"}),"."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"[user@localhost] $  git --version\n                    git version 2.33.1.windows.1\n"})}),"\n",(0,n.jsx)(e.h2,{id:"configuring-git",children:"Configuring Git"}),"\n",(0,n.jsxs)(e.p,{children:["When performing git ",(0,n.jsx)(e.a,{href:"/docs/tutorials/Git%20Version%20Control/Basics/#commit",children:(0,n.jsx)(e.strong,{children:"commits"})}),", git needs to know who you are. ",(0,n.jsx)("br",{}),"\nConfigure the username and email for git with the following commands:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'git config --global user.name "YOUR_USERNAME"\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:'git config --global user.email "USER@example.com" \n'})}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"--global"})," to set the username and email for ",(0,n.jsx)(e.strong,{children:"every repository"})," on your computer. ",(0,n.jsx)("br",{})," Remove ",(0,n.jsx)(e.code,{children:"global"})," if you only want to the credentials for the current repo."]})}),"\n",(0,n.jsx)(e.h2,{id:"git-help",children:"Git Help"}),"\n",(0,n.jsx)(e.p,{children:"Git comes with integrated documentation for all of it's commands. It is good developer practice to utilize docuemtnation for a program when learning or when confused on how a particular part works."}),"\n",(0,n.jsx)(e.p,{children:"In order to access git's help documentation use any of the two commands:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"git"}),(0,n.jsx)(e.em,{children:(0,n.jsx)(e.code,{children:"command"})}),(0,n.jsx)(e.code,{children:"-help"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mo,{children:"\u2192"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.3669em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"})]})})]})," All available options for the the specified ",(0,n.jsx)(e.em,{children:(0,n.jsx)(e.code,{children:"command"})})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"git help --all"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mo,{children:"\u2192"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\rightarrow"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.3669em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"})]})})]})," All possible commands"]}),"\n"]})]})}function h(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}},8453:(s,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var n=i(6540);const t={},o=n.createContext(t);function r(s){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function a(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),n.createElement(o.Provider,{value:e},s.children)}}}]);