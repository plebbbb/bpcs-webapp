(this["webpackJsonpbpcs-webapp"]=this["webpackJsonpbpcs-webapp"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(8),i=n.n(c),s=(n(13),n(2)),d=n(3),b=n(5),r=n(4),o=(n(14),n(7)),h=(n(15),n(0)),p=n(17),j=function(e){Object(b.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onChangeFHandler=function(e){a.setState(Object(o.a)({},e.target.name,e.target.files[0])),"Ifile"===e.target.name&&a.setState({FP:URL.createObjectURL(e.target.files[0])}),console.log(a.state)},a.onChangeHandler=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value)),console.log(a.state)},a.onSubmitHandler=function(){var e=new p;e.append("data_file",a.state.Dfile),e.append("base_file",a.state.Ifile),e.append("block_height",a.state.BLKHT),e.append("init_block_factor",a.state.IBF),e.append("final_block_factor",a.state.FBF),e.append("write_block_factor",a.state.WBF),fetch("https://bpcs-api.herokuapp.com/encode",{method:"POST",body:e}).then((function(e){var t=e;e.blob().then((function(e){var n=URL.createObjectURL(e),a=document.createElement("a");a.href=n,a.setAttribute("download",t.headers.get("filename")),document.body.appendChild(a),a.click(),a.parentNode.removeChild(a)}))}))},a.state={Ifile:null,Dfile:null,BLKHT:null,IBF:null,FBF:null,WBF:null,DURL:null,FP:null},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("div",{className:"flex flex-column pa3",children:[Object(h.jsx)("div",{className:"f1 pb2 tl",children:"Encode files"}),Object(h.jsxs)("div",{className:"flex pa1",children:[Object(h.jsx)("label",{className:"f4 ba ph3 pv2 mb2 dib bw1",for:"Ifile",children:"Upload Base File"}),Object(h.jsx)("input",{hidden:"true",type:"file",name:"Ifile",id:"Ifile",onChange:this.onChangeFHandler})]}),Object(h.jsxs)("div",{className:"flex pa1",children:[Object(h.jsx)("label",{className:"f4 ba ph3 pv2 mb2 dib bw1",for:"Dfile",children:"Upload Data File"}),Object(h.jsx)("input",{hidden:"true",type:"file",name:"Dfile",id:"Dfile",onChange:this.onChangeFHandler})]}),Object(h.jsxs)("div",{className:"pa1",children:[Object(h.jsx)("div",{class:"f6 b db mb2",children:"Initial complexity threshold"}),Object(h.jsx)("input",{class:"",type:"text",name:"IBF",onChange:this.onChangeHandler})]}),Object(h.jsxs)("div",{className:"pa1",children:[Object(h.jsx)("div",{class:"f6 b db mb2",children:"Final complexity threshold"}),Object(h.jsx)("input",{type:"text",name:"FBF",onChange:this.onChangeHandler})]}),Object(h.jsxs)("div",{className:"pa1",children:[Object(h.jsx)("div",{class:"f6 b db mb2",children:"Write complexity threshold"}),Object(h.jsx)("input",{type:"text",name:"WBF",onChange:this.onChangeHandler})]}),Object(h.jsxs)("div",{className:"pa1",children:[Object(h.jsx)("div",{class:"f6 b db mb2",children:"Block height"}),Object(h.jsx)("input",{type:"text",name:"BLKHT",onChange:this.onChangeHandler})]}),Object(h.jsx)("div",{className:"pv3 ph1",children:Object(h.jsx)("label",{className:"f4 ba ph3 pv1 mb2 dib bw1",onClick:this.onSubmitHandler,children:"Submit"})})]}),Object(h.jsx)("img",{class:"flex",src:this.state.FP,alt:"Upload Image"})]})}}]),n}(a.Component),f=function(e){Object(b.a)(n,e);var t=Object(r.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)(j,{})}}]),n}(a.Component),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),l(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),u()}},[[18,1,2]]]);
//# sourceMappingURL=main.eaf08d25.chunk.js.map