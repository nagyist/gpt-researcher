"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4151],{5680:(e,r,t)=>{t.d(r,{xA:()=>i,yg:()=>y});var a=t(6540);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),g=p(t),u=s,y=g["".concat(l,".").concat(u)]||g[u]||h[u]||n;return t?a.createElement(y,c(c({ref:r},i),{},{components:t})):a.createElement(y,c({ref:r},i))}));function y(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,c=new Array(n);c[0]=u;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[g]="string"==typeof e?e:s,c[1]=o;for(var p=2;p<n;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3471:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>c,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=t(8168),s=(t(6540),t(5680));const n={},c="PIP Package",o={unversionedId:"gpt-researcher/gptr/pip-package",id:"gpt-researcher/gptr/pip-package",isDocsHomePage:!1,title:"PIP Package",description:"PyPI version",source:"@site/docs/gpt-researcher/gptr/pip-package.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/pip-package",permalink:"/docs/gpt-researcher/gptr/pip-package",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/pip-package.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Running on Linux",permalink:"/docs/gpt-researcher/getting-started/linux-deployment"},next:{title:"Agent Example",permalink:"/docs/gpt-researcher/gptr/example"}},l=[{value:"Steps to Install GPT Researcher",id:"steps-to-install-gpt-researcher",children:[],level:2},{value:"Example Usage",id:"example-usage",children:[],level:2},{value:"Specific Examples",id:"specific-examples",children:[{value:"Example 1: Research Report",id:"example-1-research-report",children:[],level:3},{value:"Example 2: Resource Report",id:"example-2-resource-report",children:[],level:3},{value:"Example 3: Outline Report",id:"example-3-outline-report",children:[],level:3}],level:2},{value:"Integration with Web Frameworks",id:"integration-with-web-frameworks",children:[{value:"FastAPI Example",id:"fastapi-example",children:[],level:3},{value:"Flask Example",id:"flask-example",children:[],level:3}],level:2},{value:"Getters and Setters",id:"getters-and-setters",children:[{value:"Get Research Sources",id:"get-research-sources",children:[],level:3},{value:"Get Research Context",id:"get-research-context",children:[],level:3},{value:"Get Research Costs",id:"get-research-costs",children:[],level:3},{value:"Get Research Images",id:"get-research-images",children:[],level:3},{value:"Get Research Sources",id:"get-research-sources-1",children:[],level:3},{value:"Set Verbose",id:"set-verbose",children:[],level:3},{value:"Add Costs",id:"add-costs",children:[],level:3}],level:2},{value:"Advanced Usage",id:"advanced-usage",children:[{value:"Customizing the Research Process",id:"customizing-the-research-process",children:[],level:3},{value:"Handling Research Results",id:"handling-research-results",children:[],level:3},{value:"Working with Research Context",id:"working-with-research-context",children:[],level:3}],level:2}],p={toc:l},i="wrapper";function g(e){let{components:r,...t}=e;return(0,s.yg)(i,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"pip-package"},"PIP Package"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://badge.fury.io/py/gpt-researcher"},(0,s.yg)("img",{parentName:"a",src:"https://badge.fury.io/py/gpt-researcher.svg",alt:"PyPI version"})),"\n",(0,s.yg)("a",{parentName:"p",href:"https://colab.research.google.com/github/assafelovic/gpt-researcher/blob/master/docs/docs/examples/pip-run.ipynb"},(0,s.yg)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"}))),(0,s.yg)("p",null,"\ud83c\udf1f ",(0,s.yg)("strong",{parentName:"p"},"Exciting News!")," Now, you can integrate ",(0,s.yg)("inlineCode",{parentName:"p"},"gpt-researcher")," with your apps seamlessly!"),(0,s.yg)("h2",{id:"steps-to-install-gpt-researcher"},"Steps to Install GPT Researcher"),(0,s.yg)("p",null,"Follow these easy steps to get started:"),(0,s.yg)("ol",{start:0},(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Pre-requisite"),": Ensure Python 3.10+ is installed on your machine \ud83d\udcbb"),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Install gpt-researcher"),": Grab the official package from ",(0,s.yg)("a",{parentName:"li",href:"https://pypi.org/project/gpt-researcher/"},"PyPi"),".")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"pip install gpt-researcher\n")),(0,s.yg)("ol",{start:2},(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Environment Variables:")," Create a .env file with your OpenAI API key or simply export it")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY={Your OpenAI API Key here}\n")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"export TAVILY_API_KEY={Your Tavily API Key here}\n")),(0,s.yg)("ol",{start:3},(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("strong",{parentName:"li"},"Start using GPT Researcher in your own codebase"))),(0,s.yg)("h2",{id:"example-usage"},"Example Usage"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nimport asyncio\n\nasync def get_report(query: str, report_type: str):\n    researcher = GPTResearcher(query, report_type)\n    research_result = await researcher.conduct_research()\n    report = await researcher.write_report()\n    \n    # Get additional information\n    research_context = researcher.get_research_context()\n    research_costs = researcher.get_costs()\n    research_images = researcher.get_research_images()\n    research_sources = researcher.get_research_sources()\n    \n    return report, research_context, research_costs, research_images, research_sources\n\nif __name__ == "__main__":\n    query = "what team may win the NBA finals?"\n    report_type = "research_report"\n\n    report, context, costs, images, sources = asyncio.run(get_report(query, report_type))\n    \n    print("Report:")\n    print(report)\n    print("\\nResearch Costs:")\n    print(costs)\n    print("\\nNumber of Research Images:")\n    print(len(images))\n    print("\\nNumber of Research Sources:")\n    print(len(sources))\n')),(0,s.yg)("h2",{id:"specific-examples"},"Specific Examples"),(0,s.yg)("h3",{id:"example-1-research-report"},"Example 1: Research Report"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'query = "Latest developments in renewable energy technologies"\nreport_type = "research_report"\n')),(0,s.yg)("h3",{id:"example-2-resource-report"},"Example 2: Resource Report"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'query = "List of top AI conferences in 2023"\nreport_type = "resource_report"\n')),(0,s.yg)("h3",{id:"example-3-outline-report"},"Example 3: Outline Report"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'query = "Outline for an article on the impact of AI in education"\nreport_type = "outline_report"\n')),(0,s.yg)("h2",{id:"integration-with-web-frameworks"},"Integration with Web Frameworks"),(0,s.yg)("h3",{id:"fastapi-example"},"FastAPI Example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\nfrom gpt_researcher import GPTResearcher\nimport asyncio\n\napp = FastAPI()\n\n@app.get("/report/{report_type}")\nasync def get_report(query: str, report_type: str) -> dict:\n    researcher = GPTResearcher(query, report_type)\n    research_result = await researcher.conduct_research()\n    report = await researcher.write_report()\n    \n    source_urls = researcher.get_source_urls()\n    research_costs = researcher.get_costs()\n    research_images = researcher.get_research_images()\n    research_sources = researcher.get_research_sources()\n    \n    return {\n        "report": report,\n        "source_urls": source_urls,\n        "research_costs": research_costs,\n        "num_images": len(research_images),\n        "num_sources": len(research_sources)\n    }\n\n# Run the server\n# uvicorn main:app --reload\n')),(0,s.yg)("h3",{id:"flask-example"},"Flask Example"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Pre-requisite"),": Install flask with the async extra."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"pip install 'flask[async]'\n")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, request, jsonify\nfrom gpt_researcher import GPTResearcher\n\napp = Flask(__name__)\n\n@app.route(\'/report/<report_type>\', methods=[\'GET\'])\nasync def get_report(report_type):\n    query = request.args.get(\'query\')\n    researcher = GPTResearcher(query, report_type)\n    research_result = await researcher.conduct_research()\n    report = await researcher.write_report()\n    \n    source_urls = researcher.get_source_urls()\n    research_costs = researcher.get_costs()\n    research_images = researcher.get_research_images()\n    research_sources = researcher.get_research_sources()\n    \n    return jsonify({\n        "report": report,\n        "source_urls": source_urls,\n        "research_costs": research_costs,\n        "num_images": len(research_images),\n        "num_sources": len(research_sources)\n    })\n\n# Run the server\n# flask run\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Run the server")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"flask run\n")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example Request")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:5000/report/research_report?query=what team may win the nba finals?"\n')),(0,s.yg)("h2",{id:"getters-and-setters"},"Getters and Setters"),(0,s.yg)("p",null,"GPT Researcher provides several methods to retrieve additional information about the research process:"),(0,s.yg)("h3",{id:"get-research-sources"},"Get Research Sources"),(0,s.yg)("p",null,"Sources are the URLs that were used to gather information for the research."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"source_urls = researcher.get_source_urls()\n")),(0,s.yg)("h3",{id:"get-research-context"},"Get Research Context"),(0,s.yg)("p",null,"Context is all the retrieved information from the research. It includes the sources and their corresponding content."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"research_context = researcher.get_research_context()\n")),(0,s.yg)("h3",{id:"get-research-costs"},"Get Research Costs"),(0,s.yg)("p",null,"Costs are the number of tokens consumed during the research process."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"research_costs = researcher.get_costs()\n")),(0,s.yg)("h3",{id:"get-research-images"},"Get Research Images"),(0,s.yg)("p",null,"Retrieves a list of images found during the research process."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"research_images = researcher.get_research_images()\n")),(0,s.yg)("h3",{id:"get-research-sources-1"},"Get Research Sources"),(0,s.yg)("p",null,"Retrieves a list of research sources, including title, content, and images."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"research_sources = researcher.get_research_sources()\n")),(0,s.yg)("h3",{id:"set-verbose"},"Set Verbose"),(0,s.yg)("p",null,"You can set the verbose mode to get more detailed logs."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"researcher.set_verbose(True)\n")),(0,s.yg)("h3",{id:"add-costs"},"Add Costs"),(0,s.yg)("p",null,"You can also add costs to the research process if you want to track the costs from external usage."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},"researcher.add_costs(0.22)\n")),(0,s.yg)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,s.yg)("h3",{id:"customizing-the-research-process"},"Customizing the Research Process"),(0,s.yg)("p",null,"You can customize various aspects of the research process by passing additional parameters when initializing the GPTResearcher:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'researcher = GPTResearcher(\n    query="Your research query",\n    report_type="research_report",\n    report_format="APA",\n    tone="formal and objective",\n    max_subtopics=5,\n    verbose=True\n)\n')),(0,s.yg)("h3",{id:"handling-research-results"},"Handling Research Results"),(0,s.yg)("p",null,"After conducting research, you can process the results in various ways:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'# Conduct research\nresearch_result = await researcher.conduct_research()\n\n# Generate a report\nreport = await researcher.write_report()\n\n# Generate a conclusion\nconclusion = await researcher.write_report_conclusion(report)\n\n# Get subtopics\nsubtopics = await researcher.get_subtopics()\n\n# Get draft section titles for a subtopic\ndraft_titles = await researcher.get_draft_section_titles("Subtopic name")\n')),(0,s.yg)("h3",{id:"working-with-research-context"},"Working with Research Context"),(0,s.yg)("p",null,"You can use the research context for further processing or analysis:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-python"},'# Get the full research context\ncontext = researcher.get_research_context()\n\n# Get similar written contents based on draft section titles\nsimilar_contents = await researcher.get_similar_written_contents_by_draft_section_titles(\n    current_subtopic="Subtopic name",\n    draft_section_titles=["Title 1", "Title 2"],\n    written_contents=some_written_contents,\n    max_results=10\n)\n')),(0,s.yg)("p",null,"This comprehensive documentation should help users understand and utilize the full capabilities of the GPT Researcher package."))}g.isMDXComponent=!0}}]);