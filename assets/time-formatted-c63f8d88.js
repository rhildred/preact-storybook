class t extends HTMLElement{render(){let e=new Date(this.getAttribute("datetime")||Date.now());this.innerHTML=new Intl.DateTimeFormat("default",{year:this.getAttribute("year")||void 0,month:this.getAttribute("month")||void 0,day:this.getAttribute("day")||void 0,hour:this.getAttribute("hour")||void 0,minute:this.getAttribute("minute")||void 0,second:this.getAttribute("second")||void 0,timeZoneName:this.getAttribute("time-zone-name")||void 0}).format(e)}connectedCallback(){this.rendered||(this.render(),this.rendered=!0)}static get observedAttributes(){return["datetime","year","month","day","hour","minute","second","time-zone-name"]}attributeChangedCallback(e,i,d){this.render()}}customElements.define("time-formatted",t);
//# sourceMappingURL=time-formatted-c63f8d88.js.map
