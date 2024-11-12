const parent=document.getElementById("root");
const element=React.createElement("h1",{},"This is new heading");
const root=ReactDOM.createRoot(parent);
    //   root.render(element);
const h1=React.createElement("h1",{},"Shopping cart");
     root.render([element,h1]);
const item1=React.createElement("li",{},"Item 1");
const item2=React.createElement("li",{},"Item 2");
const list=React.createElement("ol",{},Item1,Item2);
     root.render([element,h1,list]);
     