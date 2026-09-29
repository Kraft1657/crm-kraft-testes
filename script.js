
const clients=[
{id:1,name:"AGEPLAST",uf:"RS",city:"CAXIAS DO SUL",ddd:"54",seller:"Sem vendedor",area:"Plásticos",contact:"Carlos",phone:"",email:"comercial@ageplast.com.br",role:"Compras",updated:"29/09/2026"},
{id:2,name:"AGILE QUIMICA",uf:"RS",city:"IVOTI",ddd:"51",seller:"Alessandro",area:"Plásticos",contact:"Marcelo",phone:"(51) 99999-1001",email:"contato@agile.com.br",role:"Diretor",updated:"29/09/2026"},
{id:3,name:"ALL PARTS",uf:"RS",city:"NOVA HARTZ",ddd:"51",seller:"Sem vendedor",area:"Calçados",contact:"Fernanda",phone:"(51) 99999-1002",email:"vendas@allparts.com.br",role:"Compras",updated:"28/09/2026"},
{id:4,name:"ALTECNICA",uf:"RS",city:"PORTÃO",ddd:"51",seller:"Henrique",area:"Plásticos",contact:"Eduardo",phone:"(51) 99999-1003",email:"eduardo@altecnica.com.br",role:"Gerente",updated:"28/09/2026"},
{id:5,name:"AREZZO",uf:"RS",city:"CAMPO BOM",ddd:"51",seller:"Henrique",area:"Calçados",contact:"Paulo",phone:"(51) 99999-1004",email:"paulo@arezzo.com.br",role:"Engenharia",updated:"27/09/2026"},
{id:6,name:"ARTPLAST",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Alessandro",area:"Embalagens",contact:"Renato",phone:"(48) 99999-1005",email:"renato@artplast.com.br",role:"Diretor",updated:"27/09/2026"},
{id:7,name:"BAGGIOPLAST",uf:"SC",city:"ORLEANS",ddd:"48",seller:"Jaime",area:"Reciclagem",contact:"Marcos",phone:"(48) 99999-1006",email:"marcos@baggioplast.com.br",role:"Produção",updated:"26/09/2026"},
{id:8,name:"BASAL",uf:"RS",city:"CAXIAS DO SUL",ddd:"54",seller:"Henrique",area:"Plásticos",contact:"Rafael",phone:"(54) 99999-1007",email:"rafael@basal.com.br",role:"Compras",updated:"26/09/2026"},
{id:9,name:"BEIRA RIO",uf:"RS",city:"CAMPO BOM",ddd:"51",seller:"Henrique",area:"Calçados",contact:"Fabiano",phone:"(51) 99999-1008",email:"fabiano@beirario.com.br",role:"Engenharia",updated:"25/09/2026"},
{id:10,name:"BELLAFORMA",uf:"RS",city:"BENTO GONÇALVES",ddd:"54",seller:"Henrique",area:"Plásticos",contact:"Roberto",phone:"(54) 99999-1009",email:"roberto@bellaforma.com.br",role:"Diretor",updated:"25/09/2026"},
{id:11,name:"BEPO",uf:"RS",city:"MONTENEGRO",ddd:"51",seller:"Alessandro",area:"Plásticos",contact:"Luciano",phone:"(51) 99999-1010",email:"luciano@bepo.com.br",role:"Gerente",updated:"24/09/2026"},
{id:12,name:"BERLIMPLAST",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Sem vendedor",area:"Embalagens",contact:"Amanda",phone:"",email:"amanda@berlimplast.com.br",role:"Compras",updated:"24/09/2026"},
{id:13,name:"BIGFER",uf:"RS",city:"FARROUPILHA",ddd:"54",seller:"Alessandro",area:"Plásticos",contact:"Tiago",phone:"(54) 99999-1012",email:"tiago@bigfer.com.br",role:"Diretor",updated:"23/09/2026"},
{id:14,name:"BIPACK",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Cleber",area:"Embalagens",contact:"André",phone:"(48) 99999-1013",email:"andre@bipack.com.br",role:"Compras",updated:"23/09/2026"},
{id:15,name:"BLASS",uf:"RS",city:"FLORES DA CUNHA",ddd:"54",seller:"Jaime",area:"Plásticos",contact:"Cristian",phone:"(54) 99999-1014",email:"cristian@blass.com.br",role:"Engenharia",updated:"22/09/2026"},
{id:16,name:"BURGOPLAST",uf:"RS",city:"NOVO HAMBURGO",ddd:"51",seller:"Henrique",area:"Plásticos",contact:"Gustavo",phone:"(51) 99999-1015",email:"gustavo@burgoplast.com.br",role:"Diretor",updated:"22/09/2026"},
{id:17,name:"CELSUS",uf:"RS",city:"NOVO HAMBURGO",ddd:"51",seller:"Sem vendedor",area:"Plásticos",contact:"João",phone:"(51) 99999-1016",email:"joao@celsus.com.br",role:"Produção",updated:"21/09/2026"},
{id:18,name:"CEPOS PREMIUM",uf:"RS",city:"NOVO HAMBURGO",ddd:"51",seller:"Henrique",area:"Calçados",contact:"Márcio",phone:"(51) 99999-1017",email:"marcio@cepos.com.br",role:"Compras",updated:"21/09/2026"},
{id:19,name:"CIA PLASTIC",uf:"SC",city:"ARAQUARI",ddd:"47",seller:"Comercial",area:"Embalagens",contact:"Rogério",phone:"(47) 99999-1018",email:"rogerio@ciaplastic.com.br",role:"Diretor",updated:"20/09/2026"},
{id:20,name:"CLEARPET",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Henrique",area:"Reciclagem",contact:"Sandro",phone:"(48) 99999-1019",email:"sandro@clearpet.com.br",role:"Produção",updated:"20/09/2026"},
{id:21,name:"COPAZA",uf:"SC",city:"CRICIÚMA",ddd:"48",seller:"Cleber",area:"Plásticos",contact:"Ricardo",phone:"(48) 99999-1020",email:"ricardo@copaza.com.br",role:"Compras",updated:"19/09/2026"},
{id:22,name:"COPOBRAS",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Comercial",area:"Embalagens",contact:"Alex",phone:"(48) 99999-1021",email:"alex@copobras.com.br",role:"Engenharia",updated:"19/09/2026"},
{id:23,name:"COPOZAN",uf:"SC",city:"ORLEANS",ddd:"48",seller:"Alessandro",area:"Embalagens",contact:"Mauro",phone:"(48) 99999-1022",email:"mauro@copozan.com.br",role:"Diretor",updated:"18/09/2026"},
{id:24,name:"CRIPLAST",uf:"SC",city:"CRICIÚMA",ddd:"48",seller:"Sem vendedor",area:"Reciclagem",contact:"Ronaldo",phone:"",email:"ronaldo@criplast.com.br",role:"Compras",updated:"18/09/2026"},
{id:25,name:"FLEXIPLAST",uf:"RS",city:"BARRA DO RIBEIRO",ddd:"51",seller:"Henrique",area:"Plásticos",contact:"Vitor",phone:"(51) 99999-1024",email:"vitor@flexiplast.com.br",role:"Gerente",updated:"17/09/2026"},
{id:26,name:"GERPLAST",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Alessandro",area:"Reciclagem",contact:"Fábio",phone:"(48) 99999-1025",email:"fabio@gerplast.com.br",role:"Diretor",updated:"17/09/2026"},
{id:27,name:"GPACK",uf:"SC",city:"IÇARA",ddd:"48",seller:"Jaime",area:"Embalagens",contact:"Murilo",phone:"(48) 99999-1026",email:"murilo@gpack.com.br",role:"Compras",updated:"16/09/2026"},
{id:28,name:"IBMF",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Henrique",area:"Plásticos",contact:"Henrique",phone:"(48) 99999-1027",email:"henrique@ibmf.com.br",role:"Diretor",updated:"16/09/2026"},
{id:29,name:"LOURENPLAST",uf:"SC",city:"SÃO LUDGERO",ddd:"48",seller:"Henrique",area:"Plásticos",contact:"Anderson",phone:"(48) 99999-1028",email:"anderson@lourenplast.com.br",role:"Produção",updated:"15/09/2026"},
{id:30,name:"METASUL",uf:"SC",city:"BRAÇO DO NORTE",ddd:"48",seller:"Henrique",area:"Plásticos",contact:"Daniel",phone:"(48) 99999-1029",email:"daniel@metasul.com.br",role:"Compras",updated:"15/09/2026"}
];

let visible=10, selected=new Set(), editing=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const norm=v=>String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
function icons(){ if(window.lucide) window.lucide.createIcons(); }
function toast(msg){const e=$("#toast");e.textContent=msg;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),1800)}
function go(page){
  $$("#nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  $$(".lab-only-page").forEach(s=>s.classList.toggle("active",s.dataset.content===page));
  $("#header-title").textContent=page;$("#breadcrumb").textContent=`Kraft Máquinas / ${page}`;
  $("#sidebar").classList.remove("open");icons();
}
$$("#nav button").forEach(b=>b.onclick=()=>go(b.dataset.page));

$("#theme-toggle").onclick=()=>{
  const dark=document.documentElement.dataset.theme==="dark";
  document.documentElement.dataset.theme=dark?"light":"dark";
  $("#theme-toggle").innerHTML=`<i data-lucide="${dark?"moon":"sun"}"></i><span>${dark?"Escuro":"Claro"}</span>`;icons();
};
$("#sidebar-toggle").onclick=()=>{
  $("#app-shell").classList.toggle("sidebar-hidden");
  const hidden=$("#app-shell").classList.contains("sidebar-hidden");
  $("#sidebar-toggle").innerHTML=`<i data-lucide="${hidden?"panel-left-open":"panel-left-close"}"></i>`;icons();
};
$("#mobile-open").onclick=()=>$("#sidebar").classList.add("open");
$("#mobile-close").onclick=()=>$("#sidebar").classList.remove("open");

function rows(){
  const q=norm($("#crm-search").value),uf=$("#uf-filter").value,seller=$("#seller-filter").value,area=$("#area-filter").value,special=$("#special-filter").value;
  return clients.filter(c=>{
    if(q&&!norm([c.name,c.uf,c.city,c.ddd,c.seller,c.area,c.contact,c.phone,c.email,c.role].join(" ")).includes(q))return false;
    if(uf!=="Todos"&&c.uf!==uf)return false;
    if(seller!=="Todos"&&c.seller!==seller)return false;
    if(area!=="Todos"&&c.area!==area)return false;
    if(special==="Sem telefone"&&c.phone)return false;
    if(special==="Cadastro incompleto"&&c.phone&&c.email&&c.contact)return false;
    if(special==="Possíveis duplicados")return false;
    return true;
  });
}
function sellerOptions(c){return ["Sem vendedor","Henrique","Alessandro","Jaime","Cleber","Comercial"].map(x=>`<option ${c.seller===x?"selected":""}>${x}</option>`).join("")}
function render(){
  const all=rows(), list=all.slice(0,visible);
  $("#crm-body").innerHTML=list.map(c=>`<tr>
    <td><input class="row-check" data-id="${c.id}" type="checkbox" ${selected.has(c.id)?"checked":""}></td>
    <td class="client-name"><b>${c.name}</b></td>
    <td><input value="${c.uf}" readonly></td>
    <td><input value="${c.city}" style="width:150px;min-width:150px" readonly></td>
    <td><input value="${c.ddd}" readonly></td>
    <td><select class="cell-select seller-select row-seller" data-id="${c.id}">${sellerOptions(c)}</select></td>
    <td><select class="cell-select"><option>${c.area}</option></select></td>
    <td>${c.contact||"—"}</td><td>${c.phone||"—"}</td><td>${c.email||"—"}</td><td>${c.role||"—"}</td><td>${c.updated}</td>
    <td><div class="row-actions"><button data-edit="${c.id}" title="Editar"><i data-lucide="pencil"></i></button><button data-del="${c.id}" title="Excluir"><i data-lucide="trash-2"></i></button></div></td>
  </tr>`).join("");
  $("#crm-count").textContent=`Mostrando ${list.length} de ${all.length} cliente(s)`;
  $("#load-more").hidden=list.length>=all.length;
  $("#select-all").checked=list.length>0&&list.every(c=>selected.has(c.id));
  const show=selected.size>0;$("#selected-label").hidden=!show;$("#copy-selected").hidden=!show;$("#delete-selected").hidden=!show;$("#selected-label").textContent=`${selected.size} selecionado(s)`;
  icons();
  $$(".row-check").forEach(x=>x.onchange=()=>{const id=Number(x.dataset.id);x.checked?selected.add(id):selected.delete(id);render()});
  $$(".row-seller").forEach(x=>x.onchange=()=>{clients.find(c=>c.id===Number(x.dataset.id)).seller=x.value;toast("Vendedor alterado somente no laboratório.");render()});
  $$("[data-edit]").forEach(x=>x.onclick=()=>openModal(Number(x.dataset.edit)));
  $$("[data-del]").forEach(x=>x.onclick=()=>{const i=clients.findIndex(c=>c.id===Number(x.dataset.del));if(i>=0)clients.splice(i,1);render();toast("Cliente removido somente do laboratório.")});
}
["#crm-search","#uf-filter","#seller-filter","#area-filter","#special-filter"].forEach(s=>$(s).addEventListener(s==="#crm-search"?"input":"change",()=>{visible=10;selected.clear();render()}));
$("#load-more").onclick=()=>{visible+=10;render()};
$("#select-all").onchange=e=>{rows().slice(0,visible).forEach(c=>e.target.checked?selected.add(c.id):selected.delete(c.id));render()};
$("#delete-selected").onclick=()=>{for(const id of selected){const i=clients.findIndex(c=>c.id===id);if(i>=0)clients.splice(i,1)}selected.clear();render();toast("Clientes removidos somente do laboratório.")};
$("#copy-selected").onclick=()=>toast("Clientes copiados.");
$("#csv").onclick=()=>toast("Exportação CSV simulada.");
$("#excel").onclick=()=>toast("Exportação Excel simulada.");
$("#import-btn").onclick=()=>toast("Importação simulada.");

function openModal(id=null){
  editing=id;const c=id?clients.find(x=>x.id===id):null,f=$("#client-form").elements;
  $("#modal-title").textContent=c?"Editar cliente":"Novo cliente";
  f.name.value=c?.name||"";f.uf.value=c?.uf||"RS";f.city.value=c?.city||"";f.ddd.value=c?.ddd||"";f.seller.value=c?.seller||"Sem vendedor";f.area.value=c?.area||"Plásticos";f.contact.value=c?.contact||"";f.phone.value=c?.phone||"";f.notes.value="";
  $("#client-modal").hidden=false;icons();
}
$("#new-client").onclick=()=>openModal();
$("#modal-x").onclick=$("#cancel-modal").onclick=()=>$("#client-modal").hidden=true;
$("#save-client").onclick=e=>{
  e.preventDefault();const f=$("#client-form").elements;if(!f.name.value.trim())return toast("Informe o nome do cliente.");
  if(editing){Object.assign(clients.find(x=>x.id===editing),{name:f.name.value.trim(),uf:f.uf.value,city:f.city.value.trim(),ddd:f.ddd.value.trim(),seller:f.seller.value,area:f.area.value,contact:f.contact.value.trim(),phone:f.phone.value.trim(),updated:"29/09/2026"});}
  else clients.unshift({id:Math.max(...clients.map(c=>c.id))+1,name:f.name.value.trim(),uf:f.uf.value,city:f.city.value.trim(),ddd:f.ddd.value.trim(),seller:f.seller.value,area:f.area.value,contact:f.contact.value.trim(),phone:f.phone.value.trim(),email:"",role:"",updated:"29/09/2026"});
  $("#client-modal").hidden=true;visible=10;render();toast(editing?"Cliente atualizado no laboratório.":"Cliente criado no laboratório.");
};

const topScroll=$("#top-scroll"),bottomScroll=$("#bottom-scroll");
topScroll.onscroll=()=>bottomScroll.scrollLeft=topScroll.scrollLeft;
bottomScroll.onscroll=()=>topScroll.scrollLeft=bottomScroll.scrollLeft;

$("#bell").onclick=()=>{$("#reminder").hidden=false;icons()};
$("#reminder-x").onclick=()=>$("#reminder").hidden=true;
$("#remind15").onclick=()=>{$("#reminder").hidden=true;toast("Lembrete adiado no laboratório.")};
$("#open-follow").onclick=()=>{$("#reminder").hidden=true;go("Follow-ups")};
$("#complete").onclick=()=>{$("#reminder").hidden=true;toast("Follow-up concluído no laboratório.")};

render();icons();
