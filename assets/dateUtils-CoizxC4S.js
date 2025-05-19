const r=e=>{if(!e)return"";const t=new Date(e);return isNaN(t.getTime())?e:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(t)};export{r as f};
