(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{B4M6:function(t,n,e){"use strict";e.r(n),e.d(n,"PokedexModule",(function(){return q}));var o=e("tk/3"),a=e("PCNd"),r=e("tyNb"),i=e("fXoL"),m=e("wZkO"),c=e("ofXK");function p(t,n){if(1&t&&(i.Rb(0,"a",2,3),i.xc(2),i.Qb()),2&t){const t=n.$implicit,e=i.oc(1);i.ic("routerLink",t.path)("active",e.isActive),i.Ab(2),i.yc(t.displayName)}}let g=(()=>{class t{constructor(){this.links=[{displayName:"Kanto region's Pok\xe9dex (Generation III)",path:""}],this.activeLink=this.links[0]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-pokedex"]],decls:4,vars:1,consts:[["mat-tab-nav-bar","","color","primary","backgroundColor","primary",1,"mat-elevation-z8"],["mat-tab-link","","routerLinkActive","","style","opacity: 1;",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",2,"opacity","1",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(t,n){1&t&&(i.Rb(0,"nav",0),i.wc(1,p,3,3,"a",1),i.Qb(),i.Rb(2,"section"),i.Mb(3,"router-outlet"),i.Qb()),2&t&&(i.Ab(1),i.ic("ngForOf",n.links))},directives:[m.b,c.j,r.h,r.f,m.a,r.e],styles:["section[_ngcontent-%COMP%]{padding:1.5rem}"]}),t})();var l=e("+0xr"),d=e("M9IT"),b=e("Dh3D"),s=e("lJxs"),u=e("AytR");let f=(()=>{class t{constructor(t){this._httpService=t,this.pokedexEndPoint=u.a.pokeapiUrl+"pokedex/2/",this.pokemonEndPoint=u.a.pokeapiUrl+"pokemon/"}getAllPokemonsFromKanto(){return this._httpService.get(this.pokedexEndPoint).pipe(Object(s.a)(t=>t.pokemon_entries.map(t=>({id:t.entry_number,name:t.pokemon_species.name}))))}getPokemon(t){return this._httpService.get(`${this.pokemonEndPoint}${t}`).pipe(Object(s.a)(t=>({id:t.id,name:t.name,types:t.types.map(t=>t.type.name),abilities:t.abilities.map(t=>t.ability.name),imgPathMini:t.sprites.front_default,imgPathLarge:t.sprites.other.dream_world.front_default,stats:[{name:"hp",value:t.stats[0].base_stat},{name:"attack",value:t.stats[1].base_stat},{name:"defense",value:t.stats[2].base_stat},{name:"special-attack",value:t.stats[3].base_stat},{name:"special-defense",value:t.stats[4].base_stat},{name:"speed",value:t.stats[5].base_stat}]})))}}return t.\u0275fac=function(n){return new(n||t)(i.Vb(o.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=e("Wp6s"),P=e("XiUz"),O=e("kmnG"),C=e("qFsG"),M=e("NFeN"),k=e("Qu3c");function h(t,n){1&t&&(i.Rb(0,"th",19),i.xc(1,"# ID"),i.Qb())}function x(t,n){if(1&t&&(i.Rb(0,"td",20),i.xc(1),i.Qb()),2&t){const t=n.$implicit;i.Ab(1),i.yc(t.id)}}function y(t,n){1&t&&(i.Rb(0,"th",19),i.xc(1,"Name"),i.Qb())}function v(t,n){if(1&t&&(i.Rb(0,"td",20),i.xc(1),i.ec(2,"titlecase"),i.Qb()),2&t){const t=n.$implicit;i.Ab(1),i.yc(i.fc(2,1,t.name))}}function w(t,n){1&t&&(i.Rb(0,"th",21),i.xc(1,"Details"),i.Qb())}function R(t,n){if(1&t&&(i.Rb(0,"td",20),i.Rb(1,"a",22),i.Rb(2,"mat-icon",23),i.xc(3,"zoom_in"),i.Qb(),i.Qb(),i.Qb()),2&t){const t=n.$implicit;i.Ab(1),i.ic("routerLink",t.id)}}function L(t,n){1&t&&i.Mb(0,"tr",24)}function Q(t,n){1&t&&i.Mb(0,"tr",25)}function A(t,n){if(1&t&&(i.Rb(0,"tr",26),i.Rb(1,"td",27),i.xc(2),i.Qb(),i.Qb()),2&t){i.dc();const t=i.oc(12);i.Ab(2),i.zc('N\xe3o encontramos nenhum dado com esse filtro "',t.value,'"')}}const I=function(){return[10,20,30]};let F=(()=>{class t{constructor(t){this._pokedexSercive=t,this.displayedColumns=["pokemonId","name","actions"],this.pokedexTable=new l.l}ngOnInit(){this._pokedexSercive.getAllPokemonsFromKanto().subscribe(t=>{this.pokedexTable.data=t})}ngAfterViewInit(){this.pokedexTable.sort=this.sort,this.pokedexTable.paginator=this.paginator}applyFilter(t){this.pokedexTable.filter=t.trim().toLowerCase(),this.pokedexTable.paginator.firstPage()}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(f))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-pokedex-list"]],viewQuery:function(t,n){var e;1&t&&(i.Bc(b.a,!0),i.Bc(d.a,!0)),2&t&&(i.nc(e=i.ac())&&(n.sort=e.first),i.nc(e=i.ac())&&(n.paginator=e.first))},decls:30,vars:5,consts:[["fxFlex","","fxLayout","column"],["fxFlex","","fxLayout","column","fxLayoutAlign","center center"],["fxFlex",""],["fxLayoutAlign","center"],["matInput","","placeholder","Filter by Name or ID",3,"keyup"],["filter",""],["matSuffix","","color","primary","matTooltip","Filter by Name or ID",2,"cursor","pointer"],[1,"mat-elevation-z8","pokedex"],["mat-table","","matSort","",1,"pokedex__table",3,"dataSource"],["matColumnDef","pokemonId"],["class","pokedex__table-header","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","pokedex__table-cell","mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","actions"],["class","pokedex__table-header","mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","",1,"pokedex__table-header"],["mat-cell","",1,"pokedex__table-cell"],["mat-header-cell","",1,"pokedex__table-header"],[3,"routerLink"],["mat-raised-button","","color","primary","matTooltip","See the details of this pokemon","matTooltipPosition","right"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,n){1&t&&(i.Rb(0,"mat-card",0),i.Rb(1,"div",1),i.Rb(2,"mat-card-title-group",2),i.Rb(3,"mat-card-title",3),i.xc(4,"Pok\xe9dex"),i.Qb(),i.Rb(5,"mat-card-subtitle",3),i.xc(6,"Kanto region's Pok\xe9dex (Generation III)"),i.Qb(),i.Qb(),i.Rb(7,"div",2),i.Rb(8,"mat-form-field"),i.Rb(9,"mat-label"),i.xc(10,"Filter"),i.Qb(),i.Rb(11,"input",4,5),i.Zb("keyup",(function(t){return n.applyFilter(t.target.value)})),i.Qb(),i.Rb(13,"mat-icon",6),i.xc(14,"search"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(15,"div",7),i.Rb(16,"table",8),i.Pb(17,9),i.wc(18,h,2,0,"th",10),i.wc(19,x,2,1,"td",11),i.Ob(),i.Pb(20,12),i.wc(21,y,2,0,"th",10),i.wc(22,v,3,3,"td",11),i.Ob(),i.Pb(23,13),i.wc(24,w,2,0,"th",14),i.wc(25,R,4,1,"td",11),i.Ob(),i.wc(26,L,1,0,"tr",15),i.wc(27,Q,1,0,"tr",16),i.wc(28,A,3,1,"tr",17),i.Qb(),i.Mb(29,"mat-paginator",18),i.Qb(),i.Qb()),2&t&&(i.Ab(16),i.ic("dataSource",n.pokedexTable),i.Ab(10),i.ic("matHeaderRowDef",n.displayedColumns),i.Ab(1),i.ic("matRowDefColumns",n.displayedColumns),i.Ab(2),i.ic("pageSizeOptions",i.kc(4,I)))},directives:[_.a,P.a,P.c,P.b,_.i,_.h,_.g,O.b,O.e,C.a,M.a,O.f,k.a,l.k,b.a,l.c,l.e,l.b,l.g,l.j,l.h,d.a,l.d,b.b,l.a,r.f,l.f,l.i],pipes:[c.r],styles:[".m-0[_ngcontent-%COMP%]{margin:0}.p-0[_ngcontent-%COMP%]{padding:0}.mt-0[_ngcontent-%COMP%]{margin-top:0!important}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.mr-0[_ngcontent-%COMP%]{margin-right:0!important}.pr-0[_ngcontent-%COMP%]{padding-right:0!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.pb-0[_ngcontent-%COMP%]{padding-bottom:0!important}.ml-0[_ngcontent-%COMP%]{margin-left:0!important}.pl-0[_ngcontent-%COMP%]{padding-left:0!important}.m-1[_ngcontent-%COMP%]{margin:.5rem}.p-1[_ngcontent-%COMP%]{padding:.5rem}.mt-1[_ngcontent-%COMP%]{margin-top:.5rem!important}.pt-1[_ngcontent-%COMP%]{padding-top:.5rem!important}.mr-1[_ngcontent-%COMP%]{margin-right:.5rem!important}.pr-1[_ngcontent-%COMP%]{padding-right:.5rem!important}.mb-1[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.pb-1[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.ml-1[_ngcontent-%COMP%]{margin-left:.5rem!important}.pl-1[_ngcontent-%COMP%]{padding-left:.5rem!important}.m-2[_ngcontent-%COMP%]{margin:1rem}.p-2[_ngcontent-%COMP%]{padding:1rem}.mt-2[_ngcontent-%COMP%]{margin-top:1rem!important}.pt-2[_ngcontent-%COMP%]{padding-top:1rem!important}.mr-2[_ngcontent-%COMP%]{margin-right:1rem!important}.pr-2[_ngcontent-%COMP%]{padding-right:1rem!important}.mb-2[_ngcontent-%COMP%]{margin-bottom:1rem!important}.pb-2[_ngcontent-%COMP%]{padding-bottom:1rem!important}.ml-2[_ngcontent-%COMP%]{margin-left:1rem!important}.pl-2[_ngcontent-%COMP%]{padding-left:1rem!important}.m-3[_ngcontent-%COMP%]{margin:1.5rem}.p-3[_ngcontent-%COMP%]{padding:1.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:1.5rem!important}.pt-3[_ngcontent-%COMP%]{padding-top:1.5rem!important}.mr-3[_ngcontent-%COMP%]{margin-right:1.5rem!important}.pr-3[_ngcontent-%COMP%]{padding-right:1.5rem!important}.mb-3[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.pb-3[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.ml-3[_ngcontent-%COMP%]{margin-left:1.5rem!important}.pl-3[_ngcontent-%COMP%]{padding-left:1.5rem!important}.m-4[_ngcontent-%COMP%]{margin:2rem}.p-4[_ngcontent-%COMP%]{padding:2rem}.mt-4[_ngcontent-%COMP%]{margin-top:2rem!important}.pt-4[_ngcontent-%COMP%]{padding-top:2rem!important}.mr-4[_ngcontent-%COMP%]{margin-right:2rem!important}.pr-4[_ngcontent-%COMP%]{padding-right:2rem!important}.mb-4[_ngcontent-%COMP%]{margin-bottom:2rem!important}.pb-4[_ngcontent-%COMP%]{padding-bottom:2rem!important}.ml-4[_ngcontent-%COMP%]{margin-left:2rem!important}.pl-4[_ngcontent-%COMP%]{padding-left:2rem!important}.m-5[_ngcontent-%COMP%]{margin:2.5rem}.p-5[_ngcontent-%COMP%]{padding:2.5rem}.mt-5[_ngcontent-%COMP%]{margin-top:2.5rem!important}.pt-5[_ngcontent-%COMP%]{padding-top:2.5rem!important}.mr-5[_ngcontent-%COMP%]{margin-right:2.5rem!important}.pr-5[_ngcontent-%COMP%]{padding-right:2.5rem!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:2.5rem!important}.pb-5[_ngcontent-%COMP%]{padding-bottom:2.5rem!important}.ml-5[_ngcontent-%COMP%]{margin-left:2.5rem!important}.pl-5[_ngcontent-%COMP%]{padding-left:2.5rem!important}.m-6[_ngcontent-%COMP%]{margin:3rem}.p-6[_ngcontent-%COMP%]{padding:3rem}.mt-6[_ngcontent-%COMP%]{margin-top:3rem!important}.pt-6[_ngcontent-%COMP%]{padding-top:3rem!important}.mr-6[_ngcontent-%COMP%]{margin-right:3rem!important}.pr-6[_ngcontent-%COMP%]{padding-right:3rem!important}.mb-6[_ngcontent-%COMP%]{margin-bottom:3rem!important}.pb-6[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ml-6[_ngcontent-%COMP%]{margin-left:3rem!important}.pl-6[_ngcontent-%COMP%]{padding-left:3rem!important}.m-7[_ngcontent-%COMP%]{margin:3.5rem}.p-7[_ngcontent-%COMP%]{padding:3.5rem}.mt-7[_ngcontent-%COMP%]{margin-top:3.5rem!important}.pt-7[_ngcontent-%COMP%]{padding-top:3.5rem!important}.mr-7[_ngcontent-%COMP%]{margin-right:3.5rem!important}.pr-7[_ngcontent-%COMP%]{padding-right:3.5rem!important}.mb-7[_ngcontent-%COMP%]{margin-bottom:3.5rem!important}.pb-7[_ngcontent-%COMP%]{padding-bottom:3.5rem!important}.ml-7[_ngcontent-%COMP%]{margin-left:3.5rem!important}.pl-7[_ngcontent-%COMP%]{padding-left:3.5rem!important}.m-8[_ngcontent-%COMP%]{margin:4rem}.p-8[_ngcontent-%COMP%]{padding:4rem}.mt-8[_ngcontent-%COMP%]{margin-top:4rem!important}.pt-8[_ngcontent-%COMP%]{padding-top:4rem!important}.mr-8[_ngcontent-%COMP%]{margin-right:4rem!important}.pr-8[_ngcontent-%COMP%]{padding-right:4rem!important}.mb-8[_ngcontent-%COMP%]{margin-bottom:4rem!important}.pb-8[_ngcontent-%COMP%]{padding-bottom:4rem!important}.ml-8[_ngcontent-%COMP%]{margin-left:4rem!important}.pl-8[_ngcontent-%COMP%]{padding-left:4rem!important}.m-9[_ngcontent-%COMP%]{margin:4.5rem}.p-9[_ngcontent-%COMP%]{padding:4.5rem}.mt-9[_ngcontent-%COMP%]{margin-top:4.5rem!important}.pt-9[_ngcontent-%COMP%]{padding-top:4.5rem!important}.mr-9[_ngcontent-%COMP%]{margin-right:4.5rem!important}.pr-9[_ngcontent-%COMP%]{padding-right:4.5rem!important}.mb-9[_ngcontent-%COMP%]{margin-bottom:4.5rem!important}.pb-9[_ngcontent-%COMP%]{padding-bottom:4.5rem!important}.ml-9[_ngcontent-%COMP%]{margin-left:4.5rem!important}.pl-9[_ngcontent-%COMP%]{padding-left:4.5rem!important}.m-10[_ngcontent-%COMP%]{margin:5rem}.p-10[_ngcontent-%COMP%]{padding:5rem}.mt-10[_ngcontent-%COMP%]{margin-top:5rem!important}.pt-10[_ngcontent-%COMP%]{padding-top:5rem!important}.mr-10[_ngcontent-%COMP%]{margin-right:5rem!important}.pr-10[_ngcontent-%COMP%]{padding-right:5rem!important}.mb-10[_ngcontent-%COMP%]{margin-bottom:5rem!important}.pb-10[_ngcontent-%COMP%]{padding-bottom:5rem!important}.ml-10[_ngcontent-%COMP%]{margin-left:5rem!important}.pl-10[_ngcontent-%COMP%]{padding-left:5rem!important}.pokedex[_ngcontent-%COMP%]{position:relative;overflow:auto}@media (min-width:992px){.pokedex[_ngcontent-%COMP%]{width:50%;margin:auto}}.pokedex__table[_ngcontent-%COMP%]{width:100%}.pokedex__table-header[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff;text-transform:uppercase;font-size:.9rem;border:1px solid #673ab7}.pokedex__table-cell[_ngcontent-%COMP%]:last-child{text-align:center}.pokedex__table[_ngcontent-%COMP%]     .mat-sort-header-arrow{color:#fff}"]}),t})();var z=e("Xa2L");let D=(()=>{class t{constructor({nativeElement:t}){"loading"in HTMLImageElement.prototype&&t.setAttribute("loading","lazy")}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(i.l))},t.\u0275dir=i.Gb({type:t,selectors:[["","appLazyLoadingImg",""]]}),t})();var S=e("A5z7"),T=e("bTqV"),N=e("bv9b");function j(t,n){1&t&&(i.Rb(0,"mat-card",2),i.Mb(1,"mat-spinner"),i.Qb())}function $(t,n){if(1&t&&(i.Rb(0,"mat-chip",20),i.xc(1),i.ec(2,"titlecase"),i.Qb()),2&t){const t=n.$implicit;i.Cb("",t," mr-2 mt-2"),i.Ab(1),i.zc(" ",i.fc(2,4,t)," ")}}function E(t,n){if(1&t&&(i.Rb(0,"mat-chip",10),i.xc(1),i.ec(2,"titlecase"),i.Qb()),2&t){const t=n.$implicit;i.Ab(1),i.zc(" ",i.fc(2,1,t)," ")}}function H(t,n){if(1&t&&(i.Rb(0,"div",21),i.Rb(1,"span"),i.xc(2),i.ec(3,"uppercase"),i.Rb(4,"mat-chip"),i.xc(5),i.Qb(),i.Qb(),i.Mb(6,"mat-progress-bar",22),i.Qb()),2&t){const t=n.$implicit;i.Ab(2),i.zc("",i.fc(3,3,t.name),": "),i.Ab(3),i.yc(t.value),i.Ab(1),i.jc("value",100*t.value/256)}}function G(t,n){if(1&t){const t=i.Sb();i.Rb(0,"mat-card",3),i.Rb(1,"mat-card-header",4),i.Rb(2,"div",5),i.Mb(3,"img",6),i.Qb(),i.Rb(4,"mat-card-title",7),i.xc(5),i.ec(6,"titlecase"),i.Qb(),i.Qb(),i.Rb(7,"mat-card-content",8),i.Rb(8,"div",9),i.Rb(9,"p",10),i.xc(10),i.ec(11,"titlecase"),i.Qb(),i.Rb(12,"mat-chip-list"),i.wc(13,$,3,6,"mat-chip",11),i.Qb(),i.Qb(),i.Rb(14,"div",12),i.Rb(15,"p",10),i.xc(16),i.ec(17,"titlecase"),i.Qb(),i.Rb(18,"mat-chip-list"),i.wc(19,E,3,3,"mat-chip",13),i.Qb(),i.Qb(),i.Rb(20,"div",14),i.Rb(21,"p"),i.xc(22),i.ec(23,"titlecase"),i.Qb(),i.Rb(24,"div",3),i.wc(25,H,7,5,"div",15),i.Qb(),i.Qb(),i.Rb(26,"div",16),i.Mb(27,"img",17),i.Qb(),i.Qb(),i.Rb(28,"div",18),i.Rb(29,"button",19),i.Zb("click",(function(){return i.qc(t),i.dc().toPrevius()})),i.xc(30,"Previus Pokemon"),i.Qb(),i.Rb(31,"button",19),i.Zb("click",(function(){return i.qc(t),i.dc().toNext()})),i.xc(32,"Next Pokemon"),i.Qb(),i.Qb(),i.Qb()}if(2&t){const t=i.dc();i.Ab(3),i.jc("src",null==t.pokemon?null:t.pokemon.imgPathMini,i.rc),i.jc("alt",null==t.pokemon?null:t.pokemon.name),i.Ab(2),i.Ac("#",null==t.pokemon?null:t.pokemon.id," - ",i.fc(6,14,null==t.pokemon?null:t.pokemon.name),""),i.Ab(5),i.zc("",i.fc(11,16,null==t.pokemon?null:t.pokemon.name)," is a pokemon of type(s):"),i.Ab(3),i.ic("ngForOf",null==t.pokemon?null:t.pokemon.types),i.Ab(3),i.zc("",i.fc(17,18,null==t.pokemon?null:t.pokemon.name)," Abilities:"),i.Ab(3),i.ic("ngForOf",null==t.pokemon?null:t.pokemon.abilities),i.Ab(3),i.zc("",i.fc(23,20,null==t.pokemon?null:t.pokemon.name)," Stats:"),i.Ab(3),i.ic("ngForOf",null==t.pokemon?null:t.pokemon.stats),i.Ab(2),i.jc("src",null==t.pokemon?null:t.pokemon.imgPathLarge,i.rc),i.jc("alt",null==t.pokemon?null:t.pokemon.name),i.Ab(2),i.ic("disabled",t.minPokeId),i.Ab(2),i.ic("disabled",t.maxPokeId)}}const J=[{path:"",component:g,children:[{path:"",pathMatch:"full",component:F},{path:":pokemonId",component:(()=>{class t{constructor(t,n,e){this._pokedexSercive=t,this._route=n,this._router=e,this.isLoading=!0,this.minPokeId=!1,this.maxPokeId=!1,this._router.routeReuseStrategy.shouldReuseRoute=()=>!1,this._router.events.subscribe(t=>{t instanceof r.b&&(this._router.navigated=!1,window.scrollTo(0,0))})}ngOnInit(){this.pokemonId=+this._route.snapshot.params.pokemonId,(this.pokemonId<0||this.pokemonId>151)&&this._router.navigate(["/pokedex"]),this.isLoading=!0,this._sub=this._pokedexSercive.getPokemon(this.pokemonId).subscribe(t=>{this.pokemon=t,this.isLoading=!1}),this.minPokeId=this.pokemonId<2,this.maxPokeId=this.pokemonId>150}toPrevius(){this._router.navigate(["/pokedex/"+(this.pokemonId-1)])}toNext(){this._router.navigate(["/pokedex/"+(this.pokemonId+1)])}ngOnDestroy(){this._sub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(i.Lb(f),i.Lb(r.a),i.Lb(r.d))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-pokedex-details"]],decls:2,vars:2,consts:[["fxFlex","","fxLayout","column","fxLayoutAlign","center center","class","isLoading",4,"ngIf"],["fxFlex","","fxLayout","column",4,"ngIf"],["fxFlex","","fxLayout","column","fxLayoutAlign","center center",1,"isLoading"],["fxFlex","","fxLayout","column"],["fxFlex","","fxLayout","row","fxLayoutAlign","center","fxLayoutAlign.gt-md","flex-start center"],["mat-card-avatar",""],["mat-card-image","","appLazyLoadingImg","",3,"src","alt"],[1,"mt-1"],["fxFlex","","fxLayout","column",1,"mt-2"],["fxFlex","","fxLayout","column","fxLayout.gt-md","row","fxLayoutAlign","flex-start center"],[1,"mr-2","mt-2"],["selected","",3,"class",4,"ngFor","ngForOf"],["fxFlex","","fxLayout","column","fxLayout.gt-md","row","fxLayoutAlign","flex-start center",1,"mt-2"],["class","mr-2 mt-2",4,"ngFor","ngForOf"],["fxFlex","","fxLayout","column",1,"mt-3"],["fxFlex","","class","mb-2",4,"ngFor","ngForOf"],["fxFlex","","fxLayoutAlign","center center",1,"mt-3"],["appLazyLoadingImg","",3,"src","alt"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between",1,"mt-3"],["mat-raised-button","","color","primary",3,"disabled","click"],["selected",""],["fxFlex","",1,"mb-2"],["mode","determinate","matTooltip","Effort Value from 0 until 256","matTooltipPosition","below",1,"mt-1",3,"value"]],template:function(t,n){1&t&&(i.wc(0,j,2,0,"mat-card",0),i.wc(1,G,33,22,"mat-card",1)),2&t&&(i.ic("ngIf",n.isLoading),i.Ab(1),i.ic("ngIf",!n.isLoading))},directives:[c.k,_.a,P.a,P.c,P.b,z.b,_.d,_.b,_.e,D,_.h,_.c,S.b,c.j,T.a,S.a,N.a,k.a],pipes:[c.r,c.s],styles:[".isLoading[_ngcontent-%COMP%]{padding:5rem}.bug[_ngcontent-%COMP%]{background-color:#a8b820!important}.dragon[_ngcontent-%COMP%]{background-color:#7038f8!important}.electric[_ngcontent-%COMP%]{background-color:#f8d030!important}.fairy[_ngcontent-%COMP%]{background-color:#ee99ac!important}.fighting[_ngcontent-%COMP%]{background-color:#c03028!important}.fire[_ngcontent-%COMP%]{background-color:#f08030!important}.flying[_ngcontent-%COMP%]{background-color:#a890f0!important}.ghost[_ngcontent-%COMP%]{background-color:#705898!important}.grass[_ngcontent-%COMP%]{background-color:#78c850!important}.ground[_ngcontent-%COMP%]{background-color:#d8b75d!important}.ice[_ngcontent-%COMP%]{background-color:#98d8d8!important}.normal[_ngcontent-%COMP%]{background-color:#cacaad!important}.poison[_ngcontent-%COMP%]{background-color:#a040a0!important}.psychic[_ngcontent-%COMP%]{background-color:#f85888!important}.rock[_ngcontent-%COMP%]{background-color:#796c36!important}.steel[_ngcontent-%COMP%]{background-color:#afafbb!important}.water[_ngcontent-%COMP%]{background-color:#6890f0!important}"]}),t})()}]}];let K=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(n){return new(n||t)},imports:[[r.g.forChild(J)],r.g]}),t})(),q=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(n){return new(n||t)},providers:[f],imports:[[K,a.a,o.b]]}),t})()}}]);