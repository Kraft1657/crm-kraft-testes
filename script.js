
const clients = [
  {id:1,name:"AGEPLAST",uf:"RS",city:"CAXIAS DO SUL",ddd:"54",seller:"",area:"Plásticos",contact:"Carlos",phone:"",email:"comercial@ageplast.com.br",role:"Compras",updated:"29/09/2026"},
  {id:2,name:"AGILE QUIMICA",uf:"RS",city:"IVOTI",ddd:"51",seller:"Alessandro",area:"Plásticos",contact:"Marcelo",phone:"(51) 99999-1001",email:"contato@agile.com.br",role:"Diretor",updated:"29/09/2026"},
  {id:3,name:"ALL PARTS",uf:"RS",city:"NOVA HARTZ",ddd:"51",seller:"",area:"Calçados",contact:"Fernanda",phone:"(51) 99999-1002",email:"vendas@allparts.com.br",role:"Compras",updated:"28/09/2026"},
  {id:4,name:"ALTECNICA",uf:"RS",city:"PORTÃO",ddd:"51",seller:"Henrique",area:"Plásticos",contact:"Eduardo",phone:"(51) 99999-1003",email:"eduardo@altecnica.com.br",role:"Gerente",updated:"28/09/2026"},
  {id:5,name:"AREZZO",uf:"RS",city:"CAMPO BOM",ddd:"51",seller:"Henrique",area:"Calçados",contact:"Paulo",phone:"(51) 99999-1004",email:"paulo@arezzo.com.br",role:"Engenharia",updated:"27/09/2026"},
  {id:6,name:"ARTPLAST",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Alessandro",area:"Embalagens",contact:"Renato",phone:"(48) 99999-1005",email:"renato@artplast.com.br",role:"Diretor",updated:"27/09/2026"},
  {id:7,name:"BAGGIOPLAST",uf:"SC",city:"ORLEANS",ddd:"48",seller:"Jaime",area:"Reciclagem",contact:"Marcos",phone:"(48) 99999-1006",email:"marcos@baggioplast.com.br",role:"Produção",updated:"26/09/2026"},
  {id:8,name:"BASAL",uf:"RS",city:"CAXIAS DO SUL",ddd:"54",seller:"Henrique",area:"Plásticos",contact:"Rafael",phone:"(54) 99999-1007",email:"rafael@basal.com.br",role:"Compras",updated:"26/09/2026"},
  {id:9,name:"BEIRA RIO",uf:"RS",city:"CAMPO BOM",ddd:"51",seller:"Henrique",area:"Calçados",contact:"Fabiano",phone:"(51) 99999-1008",email:"fabiano@beirario.com.br",role:"Engenharia",updated:"25/09/2026"},
  {id:10,name:"BELLAFORMA",uf:"RS",city:"BENTO GONÇALVES",ddd:"54",seller:"Henrique",area:"Plásticos",contact:"Roberto",phone:"(54) 99999-1009",email:"roberto@bellaforma.com.br",role:"Diretor",updated:"25/09/2026"},
  {id:11,name:"BEPO",uf:"RS",city:"MONTENEGRO",ddd:"51",seller:"Alessandro",area:"Plásticos",contact:"Luciano",phone:"(51) 99999-1010",email:"luciano@bepo.com.br",role:"Gerente",updated:"24/09/2026"},
  {id:12,name:"BERLIMPLAST",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"",area:"Embalagens",contact:"Amanda",phone:"",email:"amanda@berlimplast.com.br",role:"Compras",updated:"24/09/2026"},
  {id:13,name:"BIGFER",uf:"RS",city:"FARROUPILHA",ddd:"54",seller:"Alessandro",area:"Plásticos",contact:"Tiago",phone:"(54) 99999-1012",email:"tiago@bigfer.com.br",role:"Diretor",updated:"23/09/2026"},
  {id:14,name:"BIPACK",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Cleber",area:"Embalagens",contact:"André",phone:"(48) 99999-1013",email:"andre@bipack.com.br",role:"Compras",updated:"23/09/2026"},
  {id:15,name:"BLASS",uf:"RS",city:"FLORES DA CUNHA",ddd:"54",seller:"Jaime",area:"Plásticos",contact:"Cristian",phone:"(54) 99999-1014",email:"cristian@blass.com.br",role:"Engenharia",updated:"22/09/2026"},
  {id:16,name:"BURGOPLAST",uf:"RS",city:"NOVO HAMBURGO",ddd:"51",seller:"Henrique",area:"Plásticos",contact:"Gustavo",phone:"(51) 99999-1015",email:"gustavo@burgoplast.com.br",role:"Diretor",updated:"22/09/2026"},
  {id:17,name:"CELSUS",uf:"RS",city:"NOVO HAMBURGO",ddd:"51",seller:"",area:"Plásticos",contact:"João",phone:"(51) 99999-1016",email:"joao@celsus.com.br",role:"Produção",updated:"21/09/2026"},
  {id:18,name:"CEPOS PREMIUM",uf:"RS",city:"NOVO HAMBURGO",ddd:"51",seller:"Henrique",area:"Calçados",contact:"Márcio",phone:"(51) 99999-1017",email:"marcio@cepos.com.br",role:"Compras",updated:"21/09/2026"},
  {id:19,name:"CIA PLASTIC",uf:"SC",city:"ARAQUARI",ddd:"47",seller:"Comercial",area:"Embalagens",contact:"Rogério",phone:"(47) 99999-1018",email:"rogerio@ciaplastic.com.br",role:"Diretor",updated:"20/09/2026"},
  {id:20,name:"CLEARPET",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Henrique",area:"Reciclagem",contact:"Sandro",phone:"(48) 99999-1019",email:"sandro@clearpet.com.br",role:"Produção",updated:"20/09/2026"},
  {id:21,name:"COPAZA",uf:"SC",city:"CRICIÚMA",ddd:"48",seller:"Cleber",area:"Plásticos",contact:"Ricardo",phone:"(48) 99999-1020",email:"ricardo@copaza.com.br",role:"Compras",updated:"19/09/2026"},
  {id:22,name:"COPOBRAS",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Comercial",area:"Embalagens",contact:"Alex",phone:"(48) 99999-1021",email:"alex@copobras.com.br",role:"Engenharia",updated:"19/09/2026"},
  {id:23,name:"COPOZAN",uf:"SC",city:"ORLEANS",ddd:"48",seller:"Alessandro",area:"Embalagens",contact:"Mauro",phone:"(48) 99999-1022",email:"mauro@copozan.com.br",role:"Diretor",updated:"18/09/2026"},
  {id:24,name:"CRIPLAST",uf:"SC",city:"CRICIÚMA",ddd:"48",seller:"",area:"Reciclagem",contact:"Ronaldo",phone:"",email:"ronaldo@criplast.com.br",role:"Compras",updated:"18/09/2026"},
  {id:25,name:"FLEXIPLAST",uf:"RS",city:"BARRA DO RIBEIRO",ddd:"51",seller:"Henrique",area:"Plásticos",contact:"Vitor",phone:"(51) 99999-1024",email:"vitor@flexiplast.com.br",role:"Gerente",updated:"17/09/2026"},
  {id:26,name:"GERPLAST",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Alessandro",area:"Reciclagem",contact:"Fábio",phone:"(48) 99999-1025",email:"fabio@gerplast.com.br",role:"Diretor",updated:"17/09/2026"},
  {id:27,name:"GPACK",uf:"SC",city:"IÇARA",ddd:"48",seller:"Jaime",area:"Embalagens",contact:"Murilo",phone:"(48) 99999-1026",email:"murilo@gpack.com.br",role:"Compras",updated:"16/09/2026"},
  {id:28,name:"IBMF",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Henrique",area:"Plásticos",contact:"Henrique",phone:"(48) 99999-1027",email:"henrique@ibmf.com.br",role:"Diretor",updated:"16/09/2026"},
  {id:29,name:"LOURENPLAST",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Henrique",area:"Plásticos",contact:"Anderson",phone:"(48) 99999-1028",email:"anderson@lourenplast.com.br",role:"Produção",updated:"15/09/2026"},
  {id:30,name:"METASUL",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Henrique",area:"Plásticos",contact:"Daniel",phone:"(48) 99999-1029",email:"daniel@metasul.com.br",role:"Compras",updated:"15/09/2026"}
];

const sellerColor={Henrique:"#138447",Alessandro:"#3867d6",Jaime:"#8854d0",Cleber:"#e67e22",Comercial:"#16a085"};
let crmVisible=10;
let selected=new Set();
let editId=null;

const followups=Array.from({length:27},(_,i)=>({
  id:i+1,
  company:clients[i%clients.length].name,
  seller:["Henrique","Alessandro","Jaime","Cleber","Comercial"][i%5],
  title:["Retorno de proposta","Contato comercial","Acompanhamento de visita"][i%3],
  status:i%6===0?"Concluído":"Pendente",
  days:i-8
}));
let followVisible=10;
let calendarCursor=new Date(2026,8,1);

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();

function icons(){ if(window.lucide) window.lucide.createIcons(); }
function toast(message){
  const el=$("#toast"); el.textContent=message; el.classList.add("show");
  clearTimeout(toast._t); toast._t=setTimeout(()=>el.classList.remove("show"),1800);
}

function go(page){
  $$("#nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  $$(".static-page").forEach(p=>p.classList.toggle("active",p.dataset.content===page));
  $("#main-title").textContent=page;
  $("#crumb").textContent=`Kraft Máquinas / ${page}`;
  $("#sidebar").classList.remove("open");
  icons();
}
$$("#nav button").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));

$("#theme-toggle").addEventListener("click",()=>{
  const html=document.documentElement;
  const dark=html.dataset.theme!=="dark";
  html.dataset.theme=dark?"dark":"light";
  $("#theme-toggle").innerHTML=`<i data-lucide="${dark?"sun":"moon"}"></i><span>${dark?"Claro":"Escuro"}</span>`;
  icons();
});
$("#sidebar-toggle").addEventListener("click",()=>{
  $("#app-shell").classList.toggle("sidebar-hidden");
  const hidden=$("#app-shell").classList.contains("sidebar-hidden");
  $("#sidebar-toggle").innerHTML=`<i data-lucide="${hidden?"panel-left-open":"panel-left-close"}"></i>`;
  $("#sidebar-toggle").title=hidden?"Mostrar menu lateral":"Ocultar menu lateral";
  icons();
});
$("#mobile-open").addEventListener("click",()=>$("#sidebar").classList.add("open"));
$("#mobile-close").addEventListener("click",()=>$("#sidebar").classList.remove("open"));

function filteredClients(){
  const q=norm($("#crm-search").value);
  const uf=$("#uf-filter").value;
  const seller=$("#seller-filter").value;
  const area=$("#area-filter").value;
  const special=$("#special-filter").value;
  return clients.filter(c=>{
    if(q && !norm([c.name,c.uf,c.city,c.ddd,c.seller,c.area,c.contact,c.phone,c.email,c.role].join(" ")).includes(q)) return false;
    if(uf!=="Todos"&&c.uf!==uf)return false;
    if(seller!=="Todos"&&c.seller!==seller)return false;
    if(area!=="Todos"&&c.area!==area)return false;
    if(special==="Sem telefone"&&c.phone)return false;
    if(special==="Cadastro incompleto"&&c.phone&&c.email&&c.contact)return false;
    if(special==="Possíveis duplicados")return false;
    return true;
  });
}
function sellerSelect(c){
  const options=["","Henrique","Alessandro","Jaime","Cleber","Comercial"].map(x=>`<option value="${x}" ${c.seller===x?"selected":""}>${x||"Sem vendedor"}</option>`).join("");
  const color=sellerColor[c.seller]||"#718078";
  return `<select class="cell-select seller-select row-seller" data-id="${c.id}" style="color:${color};background:${color}15">${options}</select>`;
}
function renderCRM(){
  const rows=filteredClients();
  const visible=rows.slice(0,crmVisible);
  $("#crm-body").innerHTML=visible.map(c=>`<tr>
    <td><input type="checkbox" class="row-check" data-id="${c.id}" ${selected.has(c.id)?"checked":""}></td>
    <td class="client-name" data-edit="${c.id}"><div style="display:flex;align-items:center;gap:7px">${!c.phone?'<span title="Telefone não cadastrado" style="color:#f59e0b;display:inline-flex"><i data-lucide="alert-triangle"></i></span>':""}<b>${c.name}</b></div></td>
    <td>${c.uf}</td><td>${c.city}</td><td>${c.ddd}</td><td>${sellerSelect(c)}</td><td>${c.area}</td>
    <td>${c.contact||"—"}</td><td>${c.phone||"—"}</td><td>${c.email||"—"}</td><td>${c.role||"—"}</td>
    <td>${c.updated}</td>
    <td><div class="static-row-actions"><button data-edit="${c.id}" title="Editar"><i data-lucide="pencil"></i></button><button data-delete="${c.id}" title="Excluir"><i data-lucide="trash-2"></i></button></div></td>
  </tr>`).join("");
  $("#crm-count").textContent=`Mostrando ${visible.length} de ${rows.length} cliente(s)`;
  $("#crm-more").hidden=visible.length>=rows.length;
  $("#select-all").checked=visible.length>0&&visible.every(c=>selected.has(c.id));
  $("#selected-count").textContent=`${selected.size} selecionado(s)`;
  ["#selected-count","#bulk-copy","#bulk-delete"].forEach(s=>$(s).classList.toggle("static-hidden",selected.size===0));
  icons();
  $$(".row-check").forEach(x=>x.onchange=()=>{const id=Number(x.dataset.id);x.checked?selected.add(id):selected.delete(id);renderCRM()});
  $$(".row-seller").forEach(x=>x.onchange=()=>{const c=clients.find(v=>v.id===Number(x.dataset.id));c.seller=x.value;toast("Vendedor alterado apenas no laboratório.");renderCRM()});
  $$("[data-edit]").forEach(x=>x.onclick=()=>openClient(Number(x.dataset.edit)));
  $$("[data-delete]").forEach(x=>x.onclick=()=>{const id=Number(x.dataset.delete);const i=clients.findIndex(c=>c.id===id);if(i>=0){clients.splice(i,1);selected.delete(id);toast("Cliente excluído do laboratório.");renderCRM()}});
}
["#crm-search","#uf-filter","#seller-filter","#area-filter","#special-filter"].forEach(s=>{
  $(s).addEventListener(s==="#crm-search"?"input":"change",()=>{crmVisible=10;selected.clear();renderCRM()});
});
$("#crm-more").onclick=()=>{crmVisible+=10;renderCRM()};
$("#select-all").onchange=e=>{filteredClients().slice(0,crmVisible).forEach(c=>e.target.checked?selected.add(c.id):selected.delete(c.id));renderCRM()};
$("#bulk-delete").onclick=()=>{for(const id of selected){const i=clients.findIndex(c=>c.id===id);if(i>=0)clients.splice(i,1)}selected.clear();renderCRM();toast("Clientes removidos do laboratório.")};
$("#bulk-copy").onclick=async()=>{const text=clients.filter(c=>selected.has(c.id)).map(c=>`${c.name}\t${c.city}\t${c.uf}`).join("\n");try{await navigator.clipboard.writeText(text)}catch{}toast("Lista copiada.")};
$("#csv-btn").onclick=()=>toast("Exportação CSV simulada.");
$("#xlsx-btn").onclick=()=>toast("Exportação Excel simulada.");
$("#import-btn").onclick=()=>toast("Importação simulada — nenhum arquivo real será enviado.");

function openClient(id){
  editId=id||null;
  const form=$("#client-form");
  const c=id?clients.find(x=>x.id===id):null;
  $("#client-modal-title").textContent=c?"Editar cliente":"Novo cliente";
  form.elements.name.value=c?.name||"";
  form.elements.uf.value=c?.uf||"RS";
  form.elements.city.value=c?.city||"";
  form.elements.ddd.value=c?.ddd||"";
  form.elements.seller.value=c?.seller||"";
  form.elements.area.value=c?.area||"Plásticos";
  form.elements.contact.value=c?.contact||"";
  form.elements.phone.value=c?.phone||"";
  form.elements.notes.value="";
  $("#client-modal").hidden=false;
  icons();
}
$("#new-client").onclick=()=>openClient();
$("#save-client").onclick=e=>{
  e.preventDefault();
  const f=$("#client-form").elements;
  if(!f.name.value.trim())return toast("Informe o nome do cliente.");
  if(editId){
    const c=clients.find(x=>x.id===editId);
    Object.assign(c,{name:f.name.value.trim(),uf:f.uf.value,city:f.city.value.trim(),ddd:f.ddd.value.trim(),seller:f.seller.value,area:f.area.value,contact:f.contact.value.trim(),phone:f.phone.value.trim(),updated:"29/09/2026"});
  }else{
    clients.unshift({id:Math.max(...clients.map(c=>c.id))+1,name:f.name.value.trim(),uf:f.uf.value,city:f.city.value.trim(),ddd:f.ddd.value.trim(),seller:f.seller.value,area:f.area.value,contact:f.contact.value.trim(),phone:f.phone.value.trim(),email:"",role:"",updated:"29/09/2026"});
  }
  $("#client-modal").hidden=true; crmVisible=10; renderCRM(); toast(editId?"Cliente atualizado no laboratório.":"Cliente criado no laboratório.");
};
$$("[data-close-modal]").forEach(b=>b.onclick=()=>{const id=b.dataset.closeModal;$("#"+id).hidden=true;if(b.dataset.toast)toast(b.dataset.toast)});

function renderCalendar(){
  const y=calendarCursor.getFullYear(),m=calendarCursor.getMonth();
  $("#cal-label").textContent=new Intl.DateTimeFormat("pt-BR",{month:"long",year:"numeric"}).format(calendarCursor);
  const first=new Date(y,m,1),start=new Date(y,m,1-first.getDay());
  const eventDays={2:["Visita — BEIRA RIO"],5:["Retorno — SOPRANO","Reunião — GPACK","Contato — BIGFER"],10:["Visita — COPOBRAS"],14:["Retorno — AREZZO","Reunião interna"],19:["Visita — METASUL"],23:["Follow-up — IBMF"],28:["Reunião — CLEARPET"]};
  $("#calendar-grid").innerHTML=Array.from({length:42},(_,i)=>{
    const d=new Date(start); d.setDate(start.getDate()+i);
    const out=d.getMonth()!==m; const ev=!out?(eventDays[d.getDate()]||[]):[];
    return `<div class="fake-day ${out?"out":""}"><small>${d.getDate()}</small>${ev.slice(0,2).map(x=>`<div class="fake-event">${x}</div>`).join("")}${ev.length>2?`<button class="fake-more" data-more="${d.getDate()}">+${ev.length-2} atividades</button>`:""}</div>`;
  }).join("");
  $$("[data-more]").forEach(b=>b.onclick=()=>toast(`Abrindo todas as atividades do dia ${b.dataset.more}.`));
}
$("#cal-prev").onclick=()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()-1,1);renderCalendar()};
$("#cal-next").onclick=()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,1);renderCalendar()};
$("#new-activity").onclick=()=>{$("#activity-modal").hidden=false;icons()};

function followRows(){
  const q=norm($("#follow-search").value);
  const st=$("#follow-status").value;
  const seller=$("#follow-seller").value;
  const today=new Date(2026,8,29);today.setHours(0,0,0,0);
  return followups.map(f=>{const due=new Date(today);due.setDate(due.getDate()+f.days);return {...f,due}})
    .filter(f=>{
      const overdue=f.status==="Pendente"&&f.due<today;
      if(st==="Pendentes"&&f.status!=="Pendente")return false;
      if(st==="Atrasados"&&!overdue)return false;
      if(st==="Concluídos"&&f.status!=="Concluído")return false;
      if(seller!=="Todos"&&f.seller!==seller)return false;
      if(q&&!norm(`${f.company} ${f.title} ${f.seller}`).includes(q))return false;
      return true;
    }).sort((a,b)=>a.due-b.due);
}
function renderFollow(){
  const today=new Date(2026,8,29);today.setHours(0,0,0,0);
  const rows=followRows(),visible=rows.slice(0,followVisible);
  $("#follow-list").innerHTML=visible.map(f=>{
    const overdue=f.status==="Pendente"&&f.due<today;
    return `<article class="panel"><header><div><h3>${f.company}</h3><p>${f.title} · ${f.seller} · ${f.due.toLocaleDateString("pt-BR")}</p></div><em class="${overdue?"overdue":""}">${f.status==="Concluído"?"Concluído":overdue?"Atrasado":"Pendente"}</em></header></article>`;
  }).join("");
  $("#follow-count").textContent=`Mostrando ${visible.length} de ${rows.length} follow-up(s)`;
  $("#follow-more").hidden=visible.length>=rows.length;
}
$("#follow-search").oninput=()=>{followVisible=10;renderFollow()};
$("#follow-status").onchange=()=>{followVisible=10;renderFollow()};
$("#follow-seller").onchange=()=>{followVisible=10;renderFollow()};
$("#follow-more").onclick=()=>{followVisible+=10;renderFollow()};
$("#new-follow").onclick=()=>{$("#follow-modal").hidden=false;icons()};

$("#show-reminder").onclick=()=>{$("#reminder").hidden=false;icons()};
$("#reminder-x").onclick=()=>{$("#reminder").hidden=true};
$("#remind-15").onclick=()=>{$("#reminder").hidden=true;toast("Lembrete adiado por 15 minutos no laboratório.")};
$("#open-follow").onclick=()=>{$("#reminder").hidden=true;go("Follow-ups")};
$("#complete-follow").onclick=()=>{$("#reminder").hidden=true;toast("Follow-up concluído no laboratório.")};

renderCRM();
renderCalendar();
renderFollow();
icons();
