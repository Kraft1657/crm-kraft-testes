const clients=[
{name:"AGEPLAST",city:"Caxias do Sul",uf:"RS",seller:"Sem vendedor"},
{name:"AGILE QUIMICA",city:"Ivoti",uf:"RS",seller:"Alessandro"},
{name:"AREZZO",city:"Campo Bom",uf:"RS",seller:"Henrique"},
{name:"BEIRA RIO",city:"Campo Bom",uf:"RS",seller:"Henrique"},
{name:"BELLAFORMA",city:"Bento Gonçalves",uf:"RS",seller:"Henrique"},
{name:"BIGFER",city:"Farroupilha",uf:"RS",seller:"Alessandro"},
{name:"BURGOPLAST",city:"Novo Hamburgo",uf:"RS",seller:"Jaime"},
{name:"COPAZA",city:"Criciúma",uf:"SC",seller:"Cleber"},
{name:"COPOBRAS",city:"São Ludgero",uf:"SC",seller:"Comercial"},
{name:"CRIPLAST",city:"Criciúma",uf:"SC",seller:"Sem vendedor"},
{name:"FLEXIPLAST",city:"Barra do Ribeiro",uf:"RS",seller:"Henrique"},
{name:"GERPLAST",city:"Braço do Norte",uf:"SC",seller:"Alessandro"},
{name:"GPACK",city:"Içara",uf:"SC",seller:"Jaime"},
{name:"IBMF",city:"Braço do Norte",uf:"SC",seller:"Henrique"},
{name:"LOURENPLAST",city:"São Ludgero",uf:"SC",seller:"Henrique"},
{name:"MC PLAST",city:"Orleans",uf:"SC",seller:"Sem vendedor"},
{name:"METASUL",city:"Braço do Norte",uf:"SC",seller:"Henrique"},
{name:"POSSAMAI",city:"Criciúma",uf:"SC",seller:"Alessandro"},
{name:"SANTA LUZIA",city:"Braço do Norte",uf:"SC",seller:"Henrique"},
{name:"TOTAL PLAST",city:"Criciúma",uf:"SC",seller:"Sem vendedor"}
];

const followups=Array.from({length:24},(_,i)=>({
company:clients[i%clients.length].name,
title:i%3===0?"Retorno de proposta":i%3===1?"Contato comercial":"Acompanhamento",
status:i%5===0?"Concluído":"Pendente",
days:i-6
}));

let crmVisible=10,followVisible=10;
const $=s=>document.querySelector(s);

document.querySelectorAll(".nav-btn").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".nav-btn").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(btn.dataset.page).classList.add("active");
  $("#page-title").textContent=btn.textContent;
});

function renderCRM(){
  const q=$("#crm-search").value.toLowerCase().trim();
  const seller=$("#seller-filter").value;
  const rows=clients.filter(c=>(!q||`${c.name} ${c.city} ${c.uf}`.toLowerCase().includes(q))&&(seller==="Todos"||c.seller===seller));
  $("#crm-table").innerHTML=rows.slice(0,crmVisible).map(c=>`<tr><td><b>${c.name}</b></td><td>${c.city}</td><td>${c.uf}</td><td><span class="seller">${c.seller}</span></td></tr>`).join("");
  $("#crm-count").textContent=`Mostrando ${Math.min(crmVisible,rows.length)} de ${rows.length} cliente(s)`;
  $("#load-more-crm").hidden=crmVisible>=rows.length;
}
$("#crm-search").oninput=()=>{crmVisible=10;renderCRM()};
$("#seller-filter").onchange=()=>{crmVisible=10;renderCRM()};
$("#load-more-crm").onclick=()=>{crmVisible+=10;renderCRM()};

function isoDate(d){return d.toISOString().slice(0,10)}
function renderFollowups(){
  const q=$("#follow-search").value.toLowerCase().trim();
  const st=$("#follow-status").value;
  const today=new Date(); today.setHours(0,0,0,0);
  const rows=followups.map(f=>{
    const d=new Date(today);d.setDate(d.getDate()+f.days);return {...f,date:d}
  }).filter(f=>{
    const overdue=f.status==="Pendente"&&f.date<today;
    if(st==="Pendentes"&&f.status!=="Pendente")return false;
    if(st==="Atrasados"&&!overdue)return false;
    if(st==="Concluídos"&&f.status!=="Concluído")return false;
    return !q||`${f.company} ${f.title}`.toLowerCase().includes(q)
  }).sort((a,b)=>a.date-b.date);
  $("#follow-list").innerHTML=rows.slice(0,followVisible).map(f=>{
    const overdue=f.status==="Pendente"&&f.date<today;
    return `<div class="follow-item"><div><h3>${f.company}</h3><p>${f.title} · ${f.date.toLocaleDateString("pt-BR")}</p></div><span class="tag ${f.status==="Concluído"?"done":overdue?"overdue":""}">${f.status==="Concluído"?"Concluído":overdue?"Atrasado":"Pendente"}</span></div>`
  }).join("");
  $("#follow-count").textContent=`Mostrando ${Math.min(followVisible,rows.length)} de ${rows.length} follow-up(s)`;
  $("#load-more-follow").hidden=followVisible>=rows.length;
  const all=followups.map(f=>{const d=new Date(today);d.setDate(d.getDate()+f.days);return {...f,date:d}});
  $("#st-pending").textContent=all.filter(f=>f.status==="Pendente").length;
  $("#st-overdue").textContent=all.filter(f=>f.status==="Pendente"&&f.date<today).length;
  const next=new Date(today);next.setDate(next.getDate()+7);
  $("#st-next7").textContent=all.filter(f=>f.status==="Pendente"&&f.date>=today&&f.date<=next).length;
  $("#st-done").textContent=all.filter(f=>f.status==="Concluído").length;
}
$("#follow-search").oninput=()=>{followVisible=10;renderFollowups()};
$("#follow-status").onchange=()=>{followVisible=10;renderFollowups()};
$("#load-more-follow").onclick=()=>{followVisible+=10;renderFollowups()};

let cursor=new Date();
function renderCalendar(){
  const y=cursor.getFullYear(),m=cursor.getMonth();
  $("#month-label").textContent=new Intl.DateTimeFormat("pt-BR",{month:"long",year:"numeric"}).format(cursor);
  const first=new Date(y,m,1),start=new Date(y,m,1-first.getDay());
  const events={};
  [2,5,5,10,14,14,14,19,23,28].forEach((day,i)=>{
    const key=isoDate(new Date(y,m,day));
    (events[key]??=[]).push(["Visita","Retorno","Reunião"][i%3]);
  });
  $("#calendar-grid").innerHTML=Array.from({length:42},(_,i)=>{
    const d=new Date(start);d.setDate(start.getDate()+i);
    const key=isoDate(d),muted=d.getMonth()!==m;
    return `<div class="day ${muted?"muted":""}"><span class="date-num">${d.getDate()}</span>${(events[key]||[]).slice(0,2).map(e=>`<div class="event">${e}</div>`).join("")}${(events[key]||[]).length>2?`<div class="event">+${events[key].length-2} atividades</div>`:""}</div>`
  }).join("");
}
$("#prev-month").onclick=()=>{cursor=new Date(cursor.getFullYear(),cursor.getMonth()-1,1);renderCalendar()};
$("#next-month").onclick=()=>{cursor=new Date(cursor.getFullYear(),cursor.getMonth()+1,1);renderCalendar()};

renderCRM();renderFollowups();renderCalendar();
