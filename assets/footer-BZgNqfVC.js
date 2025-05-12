import{r as i,K as F,M as Y,j as e,P as V,Q as R,T as X,U as G,m as C,A as S,a as D,y as M}from"./index-D_KUTxaW.js";import{B as P}from"./button-OvuP43gu.js";import{I as j}from"./input-02tcqISh.js";import{T as k}from"./textarea-B1ynwL3X.js";import{C as H,a as _,c as E,b as L,d as J}from"./card-DF951rpD.js";import{L as c}from"./label-B3hebcxE.js";import{u as Z}from"./index-QXf5UfBP.js";import ee from"./DashboardLayout-DRjBcjbl.js";import{C as se}from"./ConfirmationDialog-BYmEFZUF.js";import{M as T}from"./mail-eF5f0C7E.js";import{P as A}from"./phone-CUQnxrJx.js";import{M as I}from"./map-pin-DZAbqWeI.js";import{C as ae}from"./clock-DKBBA3I4.js";import{L as te}from"./link-2-DzvrB7vq.js";import{S as re}from"./save-9E2hC7GN.js";import"./avatar-D-R_yj31.js";import"./chevron-down-H6rY0mfd.js";import"./menu-BGQUB8ly.js";import"./house-C6NN6fJ0.js";import"./settings-DYwBo6MX.js";import"./user-B1QCur1v.js";import"./proxy-RVCT0Wq0.js";import"./index-DJpw51L2.js";var b="Switch",[ie,Ie]=V(b),[oe,ne]=ie(b),B=i.forwardRef((s,t)=>{const{__scopeSwitch:r,name:o,checked:n,defaultChecked:g,required:u,disabled:l,value:p="on",onCheckedChange:f,form:h,...a}=s,[m,d]=i.useState(null),v=F(t,w=>d(w)),y=i.useRef(!1),N=m?h||!!m.closest("form"):!0,[x,z]=Y({prop:n,defaultProp:g??!1,onChange:f,caller:b});return e.jsxs(oe,{scope:r,checked:x,disabled:l,children:[e.jsx(R.button,{type:"button",role:"switch","aria-checked":x,"aria-required":u,"data-state":Q(x),"data-disabled":l?"":void 0,disabled:l,value:p,...a,ref:v,onClick:X(s.onClick,w=>{z(O=>!O),N&&(y.current=w.isPropagationStopped(),y.current||w.stopPropagation())})}),N&&e.jsx(K,{control:m,bubbles:!y.current,name:o,value:p,checked:x,required:u,disabled:l,form:h,style:{transform:"translateX(-100%)"}})]})});B.displayName=b;var U="SwitchThumb",W=i.forwardRef((s,t)=>{const{__scopeSwitch:r,...o}=s,n=ne(U,r);return e.jsx(R.span,{"data-state":Q(n.checked),"data-disabled":n.disabled?"":void 0,...o,ref:t})});W.displayName=U;var le="SwitchBubbleInput",K=i.forwardRef(({__scopeSwitch:s,control:t,checked:r,bubbles:o=!0,...n},g)=>{const u=i.useRef(null),l=F(u,g),p=Z(r),f=G(t);return i.useEffect(()=>{const h=u.current;if(!h)return;const a=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(a,"checked").set;if(p!==r&&d){const v=new Event("click",{bubbles:o});d.call(h,r),h.dispatchEvent(v)}},[p,r,o]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...n,tabIndex:-1,ref:l,style:{...n.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});K.displayName=le;function Q(s){return s?"checked":"unchecked"}var $=B,ce=W;const q=i.forwardRef(({className:s,...t},r)=>e.jsx($,{className:C("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...t,ref:r,children:e.jsx(ce,{className:C("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));q.displayName=$.displayName;async function de(){try{const s=await fetch(`${D}Footer`);if(!s.ok)throw new Error("Network response was not ok");return(await s.json()).data}catch(s){console.error("Error fetching Data in footer:",s)}}async function he(s){const t=new FormData;s.Image&&t.append("Image",s.Image),s.Description&&t.append("Description",s.Description),s.Copyright&&t.append("Copyright",s.Copyright),s.Address&&t.append("Address",s.Address),s.Phone&&t.append("Phone",s.Phone),s.Email&&t.append("Email",s.Email),s.WorkingHours&&t.append("WorkingHours",s.WorkingHours),s.SocialMediaHTML&&t.append("SocialMediaHTML",s.SocialMediaHTML);const r=await fetch(`${D}Footer`,{method:"PUT",credentials:"include",body:t});if(!r.ok)throw new Error("Network response was not ok");return(await r.json()).data}const Fe=()=>{const[s,t]=i.useState({logo:"",copyright:"© 2025 IPA",description:"Empowering education through technology.",email:"ipa@ipaegy.com",phone:"+201000998187",address:"Kafr Elsheikh, Egypt",workingHours:"9 AM - 5 PM",showSocialMedia:!0,socialMediaHtml:`
      <div class="flex gap-4">
       <!-- Facebook -->
<a
  href="https://facebook.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-blue-600 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-facebook-f"></i>
</a>

<!-- YouTube -->
<a
  href="https://youtube.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-red-600 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-youtube"></i>
</a>

<a
  href="https://wa.me/201234567890" 
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-green-500 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-whatsapp"></i>
</a>

<!-- LinkedIn -->
<a
  href="https://linkedin.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-blue-700 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-linkedin-in"></i>
</a>

<a
  href="https://instagram.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-blue-700 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-instagram"></i>
</a>

      </div>
    `}),[r,o]=i.useState(""),[n,g]=i.useState(null);i.useRef(null);const[u,l]=i.useState(!1);i.useEffect(()=>{de().then(a=>{a&&(t({logo:S+a.logoUrl||"",copyright:a.copyright||"",description:a.description||"",email:a.email||"",phone:a.phone||"",address:a.address||"",workingHours:a.workingHours||"",showSocialMedia:!!a.socialMediaHTML,socialMediaHtml:a.socialMediaHTML||""}),o(S+a.logoUrl||""))})},[]);const p=a=>{const m=a.target.files[0];if(!m)return;g(m);const d=new FileReader;d.onloadend=()=>{o(d.result),t({...s,logo:d.result})},d.readAsDataURL(m)},f=async()=>{try{await he({Image:n||void 0,Description:s.description,Copyright:s.copyright,Address:s.address,Phone:s.phone,Email:s.email,WorkingHours:s.workingHours,SocialMediaHTML:s.showSocialMedia?s.socialMediaHtml:""}),M.success("Footer settings saved successfully!")}catch{M.error("Failed to save footer settings.")}},h=()=>{t({logo:"",copyright:"© 2025 IPA",description:"Empowering education through technology.",email:"ipa@ipaegy.com",phone:"+201000998187",address:"Kafr Elsheikh, Egypt",workingHours:"9 AM - 5 PM",showSocialMedia:!0,socialMediaHtml:`
      <div class="flex gap-4">
       <!-- Facebook -->
<a
  href="https://facebook.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-blue-600 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-facebook-f"></i>
</a>

<!-- YouTube -->
<a
  href="https://youtube.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-red-600 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-youtube"></i>
</a>

<a
  href="https://wa.me/201234567890" 
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-green-500 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-whatsapp"></i>
</a>

<!-- LinkedIn -->
<a
  href="https://linkedin.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-blue-700 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-linkedin-in"></i>
</a>

<a
  href="https://instagram.com"
  target="_blank"
  class="w-7 h-7 flex items-center justify-center text-blue-700 bg-white rounded-full hover:bg-gray-100 transition shadow"
>
  <i class="fab fa-instagram"></i>
</a>

      </div>
    `}),o("")};return e.jsxs(ee,{children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs(H,{children:[e.jsx(_,{children:e.jsx(E,{className:"text-xl",children:"Footer Settings"})}),e.jsx(L,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(c,{children:"Footer Logo"}),e.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[e.jsx("div",{className:"border rounded-md p-2 w-full",children:e.jsx("input",{type:"file",onChange:p,className:"w-full text-sm",accept:"image/*"})}),(r||s.logo)&&e.jsx("img",{src:r||s.logo,alt:"Logo Preview",className:"w-16 h-16 rounded-md object-contain border"})]})]}),e.jsxs("div",{children:[e.jsx(c,{children:"Copyright Text"}),e.jsx(j,{value:s.copyright,onChange:a=>t({...s,copyright:a.target.value}),placeholder:"© 2024 IPA. All rights reserved."})]}),e.jsxs("div",{children:[e.jsx(c,{children:"Description"}),e.jsx(k,{value:s.description,onChange:a=>t({...s,description:a.target.value}),rows:3,placeholder:"Company description for footer"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(c,{className:"flex items-center gap-2",children:[e.jsx(T,{className:"w-4 h-4"}),"Email Address"]}),e.jsx(j,{value:s.email,onChange:a=>t({...s,email:a.target.value}),placeholder:"contact@company.com"}),e.jsxs(c,{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4"}),"Phone Number"]}),e.jsx(j,{value:s.phone,onChange:a=>t({...s,phone:a.target.value}),placeholder:"+20 123 456 7890"}),e.jsxs(c,{className:"flex items-center gap-2",children:[e.jsx(I,{className:"w-4 h-4"}),"Physical Address"]}),e.jsx(j,{value:s.address,onChange:a=>t({...s,address:a.target.value}),placeholder:"123 Business St., City, Country"}),e.jsxs(c,{className:"flex items-center gap-2",children:[e.jsx(ae,{className:"w-4 h-4"}),"Working Hours"]}),e.jsx(k,{value:s.workingHours,onChange:a=>t({...s,workingHours:a.target.value}),rows:2,placeholder:"Mon-Fri: 9AM - 5PM\\nSat: 10AM - 2PM"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(c,{children:"Social Media Section"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(q,{checked:s.showSocialMedia,onCheckedChange:a=>t({...s,showSocialMedia:a})}),e.jsx("span",{className:"text-sm",children:s.showSocialMedia?"Visible":"Hidden"})]})]}),s.showSocialMedia&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(c,{children:"Social Media HTML Code"}),e.jsx(k,{value:s.socialMediaHtml,onChange:a=>t({...s,socialMediaHtml:a.target.value}),rows:10,placeholder:"Paste your HTML code for social media icons here",className:"font-mono text-sm"})]}),e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx(c,{className:"block mb-2",children:"Preview:"}),e.jsx("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:s.socialMediaHtml}})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsxs("p",{className:"font-medium flex items-center gap-2",children:[e.jsx(te,{className:"w-4 h-4"}),"Quick Links:"]}),e.jsxs("ul",{className:"list-disc pl-5 mt-1 space-y-1",children:[e.jsx("li",{children:e.jsx("a",{href:"https://fontawesome.com",target:"_blank",rel:"noopener",className:"text-blue-600 hover:underline",children:"Font Awesome Icons"})}),e.jsx("li",{children:e.jsx("a",{href:"https://heroicons.com",target:"_blank",rel:"noopener",className:"text-blue-600 hover:underline",children:"Hero Icons"})}),e.jsx("li",{children:e.jsx("a",{href:"https://simpleicons.org",target:"_blank",rel:"noopener",className:"text-blue-600 hover:underline",children:"Simple Icons"})})]})]})]})]})]})}),e.jsxs(J,{className:"flex justify-end gap-2 border-t pt-4",children:[e.jsx(P,{variant:"outline",onClick:h,children:"Reset to Default"}),e.jsxs(P,{onClick:()=>l(!0),className:"gap-2",children:[e.jsx(re,{className:"w-4 h-4"}),"Save Changes"]})]})]}),e.jsxs(H,{children:[e.jsx(_,{children:e.jsx(E,{className:"text-xl",children:"Footer Preview"})}),e.jsx(L,{className:"bg-gray-50 p-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[s.logo&&e.jsx("img",{src:s.logo,alt:"Company Logo",className:"h-12 object-contain"}),e.jsx("p",{className:"text-gray-600 text-sm",children:s.description}),s.showSocialMedia&&e.jsx("div",{className:"pt-2",dangerouslySetInnerHTML:{__html:s.socialMediaHtml}})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:"Contact Us"}),e.jsxs("div",{className:"space-y-2 text-sm text-gray-600",children:[e.jsxs("p",{className:"flex items-start gap-2",children:[e.jsx(I,{className:"w-4 h-4 mt-0.5 flex-shrink-0"}),s.address]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(T,{className:"w-4 h-4"}),s.email]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-4 h-4"}),s.phone]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:"Working Hours"}),e.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-line",children:s.workingHours})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:"Quick Links"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-600",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-blue-600 hover:underline",children:"rashad"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-blue-600 hover:underline",children:"rashad"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-blue-600 hover:underline",children:"rashad"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-blue-600 hover:underline",children:"rashad"})})]})]})]}),e.jsx("div",{className:"border-t mt-8 pt-6 text-center text-sm text-gray-500",children:s.copyright})]})})]})]}),u&&e.jsx(se,{message:"Are you sure you want to update the footer settings?",onConfirm:()=>{l(!1),f()},onCancel:()=>l(!1)})]})};export{Fe as default};
