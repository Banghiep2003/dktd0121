// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: thayduy.ggsk
// Generated 2024-06-01T07:48:29

function pano2vrSkin(player,base) {
	player.addVariable('vis_video_youtube', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._webscreentint=document.createElement('div');
		el.ggId="WebScreenTint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 82.9167%;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : hidden;';
		hs+='width : 81.875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._webscreentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webscreentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webscreentint);
		el=me._webpageloading=document.createElement('div');
		els=me._webpageloading__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageLoading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Please wait, page loading...<\/b>";
		el.appendChild(els);
		me._webpageloading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageloading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((118-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._webpageloading);
		el=me._webpagedisplay=document.createElement('div');
		els=me._webpagedisplay__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageDisplay";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 74.1667%;';
		hs+='left : 14.38%;';
		hs+='position : absolute;';
		hs+='top : 11.67%;';
		hs+='visibility : hidden;';
		hs+='width : 72.9688%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._webpagedisplay.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpagedisplay.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpagedisplay);
		el=me._webpageclose=document.createElement('div');
		els=me._webpageclose__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMzJweCIgeD0iMHB4IiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dH'+
			'A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._webpageclose__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._webpageclose__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMzJweCIgeD0iMHB4IiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dH'+
			'A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeT0iMHB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._webpageclose__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="WebPageClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 63px;';
		hs+='top : 39px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._webpageclose.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageclose.onclick=function (e) {
			me._webpagedisplay.ggText="";
			me._webpagedisplay.ggTextDiv.innerHTML=me._webpagedisplay.ggText;
			if (me._webpagedisplay.ggUpdateText) {
				me._webpagedisplay.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._webpagedisplay.ggUpdatePosition) {
				me._webpagedisplay.ggUpdatePosition();
			}
			me._webpagedisplay.ggTextDiv.scrollTop = 0;
			me._webpagedisplay.style[domTransition]='none';
			me._webpagedisplay.style.visibility='hidden';
			me._webpagedisplay.ggVisible=false;
			me._webscreentint.style[domTransition]='none';
			me._webscreentint.style.visibility='hidden';
			me._webscreentint.ggVisible=false;
			me._webpageloading.style[domTransition]='none';
			me._webpageloading.style.visibility='hidden';
			me._webpageloading.ggVisible=false;
			me._webpageclose.style[domTransition]='none';
			me._webpageclose.style.visibility='hidden';
			me._webpageclose.ggVisible=false;
		}
		me._webpageclose.onmouseover=function (e) {
			me._webpageclose__img.style.visibility='hidden';
			me._webpageclose__imgo.style.visibility='inherit';
			me.elementMouseOver['webpageclose']=true;
			me._websiteclose.logicBlock_visible();
		}
		me._webpageclose.onmouseout=function (e) {
			me._webpageclose__img.style.visibility='inherit';
			me._webpageclose__imgo.style.visibility='hidden';
			me.elementMouseOver['webpageclose']=false;
			me._websiteclose.logicBlock_visible();
		}
		me._webpageclose.ontouchend=function (e) {
			me.elementMouseOver['webpageclose']=false;
			me._websiteclose.logicBlock_visible();
		}
		me._webpageclose.ggUpdatePosition=function (useTransition) {
		}
		el=me._websiteclose=document.createElement('div');
		els=me._websiteclose__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebSiteClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 38px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 78px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Close<\/b>";
		el.appendChild(els);
		me._websiteclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._websiteclose.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['webpageclose'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._websiteclose.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._websiteclose.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._websiteclose.style[domTransition]='';
				if (me._websiteclose.ggCurrentLogicStateVisible == 0) {
					me._websiteclose.style.visibility=(Number(me._websiteclose.style.opacity)>0||!me._websiteclose.style.opacity)?'inherit':'hidden';
					me._websiteclose.ggVisible=true;
				}
				else {
					me._websiteclose.style.visibility="hidden";
					me._websiteclose.ggVisible=false;
				}
			}
		}
		me._websiteclose.ggUpdatePosition=function (useTransition) {
		}
		me._webpageclose.appendChild(me._websiteclose);
		me.divSkin.appendChild(me._webpageclose);
		el=me._video_screentint_youtube=document.createElement('div');
		el.ggId="video_screentint_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_youtube.style[domTransition]='';
				if (me._video_screentint_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_youtube.style.visibility=(Number(me._video_screentint_youtube.style.opacity)>0||!me._video_screentint_youtube.style.opacity)?'inherit':'hidden';
					me._video_screentint_youtube.ggVisible=true;
				}
				else {
					me._video_screentint_youtube.style.visibility="hidden";
					me._video_screentint_youtube.ggVisible=false;
				}
			}
		}
		me._video_screentint_youtube.onclick=function (e) {
			player.setVariableValue('vis_video_youtube', false);
		}
		me._video_screentint_youtube.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_screentint_youtube);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style[domTransition]='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxNiIgcj0iMCIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgY3g9IjE2IiByPSIwIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGN4PSIxNiIgcj0iMCIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAu'+
			'MiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiBjeD0iMTYiIHI9IjAiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW'+
			'5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgcj0iMCIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIGN4PSIxNiIgcj0iMCIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgY3g9IjE2IiByPSIwIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgcj0iMCIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3g9IjE2IiByPSIwIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
			me._popup_video_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_youtube.ggVideoNotLoaded ==false && me._popup_video_youtube.ggDeactivate) { me._popup_video_youtube.ggDeactivate(); }
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._popup_video_youtube.ggYoutubeApiReady();}
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style[domTransition]='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me._video_popup_close_youtube=document.createElement('div');
		els=me._video_popup_close_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_popup_close_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_youtube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_youtube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_popup_close_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_youtube.style[domTransition]='';
				if (me._video_popup_close_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_youtube.style.visibility=(Number(me._video_popup_close_youtube.style.opacity)>0||!me._video_popup_close_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_close_youtube.ggVisible=true;
				}
				else {
					me._video_popup_close_youtube.style.visibility="hidden";
					me._video_popup_close_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_close_youtube.onclick=function (e) {
			player.setVariableValue('vis_video_youtube', false);
		}
		me._video_popup_close_youtube.onmouseover=function (e) {
			me._video_popup_close_youtube__img.style.visibility='hidden';
			me._video_popup_close_youtube__imgo.style.visibility='inherit';
		}
		me._video_popup_close_youtube.onmouseout=function (e) {
			me._video_popup_close_youtube__img.style.visibility='inherit';
			me._video_popup_close_youtube__imgo.style.visibility='hidden';
		}
		me._video_popup_close_youtube.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_popup_close_youtube);
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_changenode = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube && hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube && hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 314px;';
		hs+='position : absolute;';
		hs+='top : 243px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			skin._webpagedisplay.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
			skin._webpagedisplay.ggTextDiv.innerHTML=skin._webpagedisplay.ggText;
			if (skin._webpagedisplay.ggUpdateText) {
				skin._webpagedisplay.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._webpagedisplay.ggUpdatePosition) {
				skin._webpagedisplay.ggUpdatePosition();
			}
			skin._webpagedisplay.ggTextDiv.scrollTop = 0;
			skin._webpagedisplay.style[domTransition]='none';
			skin._webpagedisplay.style.visibility=(Number(skin._webpagedisplay.style.opacity)>0||!skin._webpagedisplay.style.opacity)?'inherit':'hidden';
			skin._webpagedisplay.ggVisible=true;
			skin._webscreentint.style[domTransition]='none';
			skin._webscreentint.style.visibility=(Number(skin._webscreentint.style.opacity)>0||!skin._webscreentint.style.opacity)?'inherit':'hidden';
			skin._webscreentint.ggVisible=true;
			skin._webpageclose.style[domTransition]='none';
			skin._webpageclose.style.visibility=(Number(skin._webpageclose.style.opacity)>0||!skin._webpageclose.style.opacity)?'inherit':'hidden';
			skin._webpageclose.ggVisible=true;
			skin._webpageloading.style[domTransition]='none';
			skin._webpageloading.style.visibility=(Number(skin._webpageloading.style.opacity)>0||!skin._webpageloading.style.opacity)?'inherit':'hidden';
			skin._webpageloading.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMzJweCIgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlck'+
			'V4dGVuc2lvbnMvMy4wLyIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeT0iMHB4Ij4KIDxnIGlkPSJMYXllcl8xIi8+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNMjguMDg0LDE2JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTYuNDc3LTUuMjctMTEuNzQ2LTExLjc0Ni0xMS43NDZDOS44NjEsNC4yNTQsNC41OTIsOS41MjIsNC41OTIsMTZjMCw2LjQzMiw1LjIsMTEuNjcsMTEuNjE1LDExLjc0MSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4wMzcsMC4wMDQsMC4wNzIsMC4wMDYsMC'+
			'4xMDcsMC4wMDZjMC4wMTIsMCwwLjAyMi0wLjAwMiwwLjAzMi0wLjAwMkMyMi44MTksMjcuNzQsMjguMDg0LDIyLjQ3MywyOC4wODQsMTZ6IE01Ljk5MywxNi42ODYmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aDMuMzA0YzAuMDU2LDEuNjU2LDAuMzA2LDMuMjA5LDAuNzE2LDQuNkg3LjQyQzYuNjA4LDE5LjkyLDYuMTAzLDE4LjM1OSw1Ljk5MywxNi42ODZ6IE0yNi42ODQsMTUuMzEyaC0zLjM1MiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDU1LTEuNjUxLTAuMzAzLTMuMi0wLjcxMi00LjU4NmgyLjY0NEMyNi4wNywxMi4wODYsMjYuNTcyLDEzLjY0NiwyNi42ODQsMTUuMzEyeiBNMjEu'+
			'OTU3LDE1LjMxMmgtNC45MzJ2LTQuNTg2aDQuMTMmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjYwNywxMi4wOTQsMjEuODk0LDEzLjY1NywyMS45NTcsMTUuMzEyeiBNMTcuMDI1LDkuMzUxVjUuNzE5YzEuNDE4LDAuMzQzLDIuNjg5LDEuNjkyLDMuNTg5LDMuNjMySDE3LjAyNXogTTE1LjY1MSw1LjcwNyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2My42NDRoLTMuNjM1QzEyLjkyNCw3LjM5MSwxNC4yMTMsNi4wMzMsMTUuNjUxLDUuNzA3eiBNMTUuNjUxLDEwLjcyN3Y0LjU4NmgtNC45NzdjMC4wNjMtMS42NTYsMC4zNDctMy4yMTksMC44LTQuNTg2SDE1LjY1MXomI3hhOyYjeDk7JiN4OT'+
			'smI3g5OyYjeDk7IE05LjI5NywxNS4zMTJINS45OTNjMC4xMDgtMS42NjYsMC42MTQtMy4yMjYsMS40Mi00LjU4NmgyLjU5OEM5LjYwMiwxMi4xMTMsOS4zNTMsMTMuNjYxLDkuMjk3LDE1LjMxMnogTTEwLjY3NCwxNi42ODZoNC45NzcmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7djQuNmgtNC4xNzRDMTEuMDIyLDE5LjkxNCwxMC43MzcsMTguMzQ4LDEwLjY3NCwxNi42ODZ6IE0xNS42NTEsMjIuNjZ2My42MzNjLTEuNDM1LTAuMzI0LTIuNzIyLTEuNjc4LTMuNjMtMy42MzNIMTUuNjUxeiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTTE3LjAyNSwyNi4yODFWMjIuNjZoMy41ODNDMTkuNzExLDI0'+
			'LjU5NCwxOC40NCwyNS45MzksMTcuMDI1LDI2LjI4MXogTTE3LjAyNSwyMS4yODV2LTQuNmg0LjkzMiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDYzLDEuNjYyLTAuMzUsMy4yMjktMC44MDUsNC42SDE3LjAyNXogTTIzLjMzMiwxNi42ODZoMy4zNTJjLTAuMTExLDEuNjc0LTAuNjE3LDMuMjM0LTEuNDI4LDQuNmgtMi42MzkmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIzLjAyNywxOS44OTUsMjMuMjc3LDE4LjM0MiwyMy4zMzIsMTYuNjg2eiBNMjQuMjg5LDkuMzUxaC0yLjE0NWMtMC40NDctMS4xMDItMS4wMDItMi4wNjQtMS42NDUtMi44NDgmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeD'+
			'k7QzIxLjk3Myw3LjE1MiwyMy4yNyw4LjEzMiwyNC4yODksOS4zNTF6IE0xMi4xMDMsNi41MzhjLTAuNjMsMC43NzYtMS4xNzcsMS43MjctMS42MTYsMi44MTNIOC4zODUmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzkuMzkxLDguMTUyLDEwLjY1OSw3LjE4NiwxMi4xMDMsNi41Mzh6IE04LjM5NywyMi42NmgyLjA5NGMwLjQzOCwxLjA4MiwwLjk4MSwyLjAyNywxLjYwOSwyLjgwMSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTAuNjYyLDI0LjgxNCw5LjM5OCwyMy44NTQsOC4zOTcsMjIuNjZ6IE0yMC41MDIsMjUuNDk0YzAuNjM5LTAuNzc5LDEuMTkyLTEuNzM4LDEuNjM4LTIuODM0aDIuMTQm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIzLjI2LDIzLjg3MywyMS45NywyNC44NSwyMC41MDIsMjUuNDk0eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgPC9nPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTYuMTk3LDI3Ljg0QzkuNzQ3LDI3Ljc3LDQuNDkyLDIyLjQ1OCw0LjQ5MiwxNmMwLTYuNTMyLDUuMzE0LTExLjg0NiwxMS44NDYtMTEuODQ2JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi41MzIsMCwxMS44NDYsNS4zMTQsMTEuODQ2LDExLjg0NmMwLDYuNTI3LTUuMzEsMTEuODQtMTEuODM3LDExLjg0NGwtMC4wMzIsMC4wMDJDMTYuMjc2LDI3Ljg0NiwxNi4yMzcsMjcuODQ0LDE2Lj'+
			'E5NywyNy44NHomI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTIuMTc4LDIyLjc2YzAuODk0LDEuODU3LDIuMDgzLDMuMDU5LDMuMzczLDMuNDA1VjIyLjc2SDEyLjE3OHogTTE3LjEyNSwyNi4xNTFjMS4yNzEtMC4zNjIsMi40NDQtMS41NTksMy4zMjUtMy4zOTJoLTMuMzI1JiN4YTsmI3g5OyYjeDk7JiN4OTtWMjYuMTUxeiBNMjIuMjA3LDIyLjc2Yy0wLjM4NSwwLjkzNS0wLjg0NiwxLjc2My0xLjM3MSwyLjQ3YzEuMjE5LTAuNTk3LDIuMzI1LTEuNDQyLDMuMjI2LTIuNDdIMjIuMjA3eiBNOC42MTQsMjIuNzYmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjg3OCwxLjAwMiwxLjk1OCwxLjgzNSwzLjE1MSwy'+
			'LjQzMmMtMC41MTUtMC42OTktMC45NjUtMS41MTUtMS4zNDItMi40MzJIOC42MTR6IE02LjEsMTYuNzg1JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xMjEsMS41ODYsMC41OTMsMy4wODIsMS40MDYsNC40NDlsMi4zNzUtMC4wNDdDOS40ODgsMTkuODE2LDkuMjYsMTguMzM3LDkuMiwxNi43ODVINi4xeiBNMjUuMjU2LDIxLjE4NiYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNzI4LTEuMzIsMS4xOTktMi44MTUsMS4zMi00LjRoLTMuMTQ3Yy0wLjA1OSwxLjU1MS0wLjI4NiwzLjAyOS0wLjY3OSw0LjRIMjUuMjU2eiBNMjEuMDgsMjEuMTg2JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MzgtMS4zNDYsMC43MD'+
			'UtMi44NjMsMC43NzItNC40aC00LjcyOHY0LjRIMjEuMDh6IE0xNS41NTEsMjEuMTg2di00LjRoLTQuNzczYzAuMDY3LDEuNTM3LDAuMzMzLDMuMDU1LDAuNzcxLDQuNEgxNS41NTF6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTI2LjU3NiwxNS4yMTJjLTAuMTIxLTEuNTYzLTAuNjA0LTMuMDk1LTEuMzk4LTQuNDM1bC0yLjQyNSwwLjA0N2MwLjM5LDEuMzYzLDAuNjE3LDIuODM4LDAuNjc2LDQuMzg4SDI2LjU3NnogTTIxLjg1MywxNS4yMTImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wNjctMS41MjktMC4zMzMtMy4wNDItMC43Ny00LjM4NmgtMy45NTh2NC4zODZIMjEuODUzeiBNMTUuNTUxLDE1LjIx'+
			'MnYtNC4zODZoLTQuMDA1Yy0wLjQzNiwxLjM0LTAuNzAxLDIuODUzLTAuNzY4LDQuMzg2JiN4YTsmI3g5OyYjeDk7JiN4OTtIMTUuNTUxeiBNOS4yLDE1LjIxMmMwLjA2LTEuNTQ3LDAuMjg3LTMuMDIxLDAuNjc3LTQuMzg2SDcuNDdjLTAuNzgxLDEuMzM1LTEuMjUzLDIuODQ4LTEuMzcsNC4zODZIOS4yeiBNMjQuMDcyLDkuMjUxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuODk5LTEuMDI5LTIuMDA5LTEuODgtMy4yMzctMi40ODJjMC41MjcsMC43MDksMC45OSwxLjU0MiwxLjM3NywyLjQ4MkgyNC4wNzJ6IE0yMC40NTYsOS4yNTEmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC44ODItMS44MzgtMi4wNT'+
			'gtMy4wMzktMy4zMzEtMy40MDJ2My40MDJIMjAuNDU2eiBNMTUuNTUxLDkuMjUxVjUuODM1Yy0xLjI5MiwwLjM0OC0yLjQ4MywxLjU1My0zLjM3NywzLjQxNkgxNS41NTF6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEwLjQxOSw5LjI1MWMwLjM3OC0wLjkyMSwwLjgzMS0xLjc0MiwxLjM0OS0yLjQ0NGMtMS4xOTcsMC41OTctMi4yODEsMS40MzQtMy4xNjYsMi40NDRIMTAuNDE5eiIvPgogICA8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNMTYuMzM4LDQuMjU0YzYuNDc3LDAsMTEuNzQ2LDUuMjY5LDExLjc0NiwxMS43NDZjMCw2LjQ3My01LjI2NSwxMS43NDEtMTEuNzM3LDExLjc0NSYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7Yy0wLjAxLDAtMC4wMjEsMC4wMDItMC4wMzIsMC4wMDJjLTAuMDM1LDAtMC4wNy0wLjAwMi0wLjEwNy0wLjAwNkM5Ljc5MiwyNy42Nyw0LjU5MiwyMi40MzIsNC41OTIsMTYmI3hhOyYjeDk7JiN4OTsmI3g5O0M0LjU5Miw5LjUyMiw5Ljg2MSw0LjI1NCwxNi4zMzgsNC4yNTQgTTEyLjAxNiw5LjM1MWgzLjYzNVY1LjcwN0MxNC4yMTMsNi4wMzMsMTIuOTI0LDcuMzkxLDEyLjAxNiw5LjM1MSBNMTcuMDI1LDkuMzUxaDMuNTg5JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuODk5LTEuOTQtMi4xNzEtMy4yODktMy41ODktMy42MzJWOS4zNTEgTTIyLjE0NSw5LjM1MWgyLjE0NWMtMS4wMi'+
			'0xLjIxOS0yLjMxNi0yLjE5OS0zLjc4OS0yLjg0OCYjeGE7JiN4OTsmI3g5OyYjeDk7QzIxLjE0Myw3LjI4NywyMS42OTcsOC4yNDksMjIuMTQ1LDkuMzUxIE04LjM4NSw5LjM1MWgyLjEwMWMwLjQzOS0xLjA4NiwwLjk4Ni0yLjAzNywxLjYxNi0yLjgxMyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwLjY1OSw3LjE4Niw5LjM5MSw4LjE1Miw4LjM4NSw5LjM1MSBNMjMuMzMyLDE1LjMxMmgzLjM1MmMtMC4xMTEtMS42NjYtMC42MTMtMy4yMjYtMS40Mi00LjU4NkgyMi42MiYjeGE7JiN4OTsmI3g5OyYjeDk7QzIzLjAyOSwxMi4xMTMsMjMuMjc3LDEzLjY2MSwyMy4zMzIsMTUuMzEyIE0xNy4wMjUsMTUu'+
			'MzEyaDQuOTMyYy0wLjA2My0xLjY1Ni0wLjM1LTMuMjE5LTAuODAyLTQuNTg2aC00LjEzVjE1LjMxMiYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xMC42NzQsMTUuMzEyaDQuOTc3di00LjU4NmgtNC4xNzdDMTEuMDIxLDEyLjA5NCwxMC43MzcsMTMuNjU3LDEwLjY3NCwxNS4zMTIgTTUuOTkzLDE1LjMxMmgzLjMwNCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDU2LTEuNjUxLDAuMzA1LTMuMiwwLjcxMy00LjU4Nkg3LjQxM0M2LjYwNywxMi4wODYsNi4xMDEsMTMuNjQ2LDUuOTkzLDE1LjMxMiBNMjIuNjE3LDIxLjI4NWgyLjYzOSYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuODExLTEuMzY1LDEuMzE2LTIuOT'+
			'I2LDEuNDI4LTQuNmgtMy4zNTJDMjMuMjc3LDE4LjM0MiwyMy4wMjcsMTkuODk1LDIyLjYxNywyMS4yODUgTTE3LjAyNSwyMS4yODVoNC4xMjcmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ1NS0xLjM3MSwwLjc0MS0yLjkzOCwwLjgwNS00LjZoLTQuOTMyVjIxLjI4NSBNMTEuNDc3LDIxLjI4NWg0LjE3NHYtNC42aC00Ljk3N0MxMC43MzcsMTguMzQ4LDExLjAyMiwxOS45MTQsMTEuNDc3LDIxLjI4NSYjeGE7JiN4OTsmI3g5OyYjeDk7IE03LjQyLDIxLjI4NWgyLjU5M2MtMC40MS0xLjM5MS0wLjY2MS0yLjk0My0wLjcxNi00LjZINS45OTNDNi4xMDMsMTguMzU5LDYuNjA4LDE5LjkyLDcuNDIsMjEu'+
			'Mjg1IE0yMC41MDIsMjUuNDk0JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS40NjgtMC42NDUsMi43NTgtMS42MjEsMy43NzctMi44MzRoLTIuMTRDMjEuNjk0LDIzLjc1NiwyMS4xNDEsMjQuNzE1LDIwLjUwMiwyNS40OTQgTTE3LjAyNSwyNi4yODEmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQxNS0wLjM0MiwyLjY4Ni0xLjY4OCwzLjU4My0zLjYyMWgtMy41ODNWMjYuMjgxIE0xNS42NTEsMjYuMjkzVjIyLjY2aC0zLjYzQzEyLjkyOSwyNC42MTUsMTQuMjE2LDI1Ljk2OSwxNS42NTEsMjYuMjkzJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEyLjEsMjUuNDYxYy0wLjYyNy0wLjc3My0xLjE3MS0xLjcxOS0xLj'+
			'YwOS0yLjgwMUg4LjM5N0M5LjM5OCwyMy44NTQsMTAuNjYyLDI0LjgxNCwxMi4xLDI1LjQ2MSBNMTYuMzM4LDQuMDU0JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS43NTEsNC4wNTQsNC4zOTIsOS40MTMsNC4zOTIsMTZjMCw2LjUxMyw1LjI5OSwxMS44NywxMS44MTMsMTEuOTQxYzAuMDI1LDAuMDAzLDAuMDY3LDAuMDA2LDAuMTA5LDAuMDA2JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi42MTQtMC4wMDYsMTEuOTctNS4zNjQsMTEuOTctMTEuOTQ3QzI4LjI4NCw5LjQxMywyMi45MjUsNC4wNTQsMTYuMzM4LDQuMDU0TDE2LjMzOCw0LjA1NHogTTEyLjMzNCw5LjE1MSYjeGE7JiN4OTsmI3g5OyYjeDk7YzAu'+
			'ODQyLTEuNjk0LDEuOTM1LTIuODEsMy4xMTctMy4xODN2My4xODNIMTIuMzM0TDEyLjMzNCw5LjE1MXogTTE3LjIyNiw5LjE1MVY1Ljk4NGMxLjE2MywwLjM4NywyLjIzOSwxLjQ5NywzLjA3LDMuMTY3SDE3LjIyNiYjeGE7JiN4OTsmI3g5OyYjeDk7TDE3LjIyNiw5LjE1MXogTTIyLjI3OCw5LjE1MWMtMC4zMjQtMC43NzgtMC43MDEtMS40ODMtMS4xMjQtMi4xMDRjMS4wMDgsMC41NDUsMS45MjQsMS4yNiwyLjY5NCwyLjEwNEgyMi4yNzhMMjIuMjc4LDkuMTUxeiYjeGE7JiN4OTsmI3g5OyYjeDk7IE04LjgyNiw5LjE1MWMwLjc1NC0wLjgyNCwxLjY0Ni0xLjUyNSwyLjYyMi0yLjA2MmMtMC40MT'+
			'MsMC42MTItMC43NzksMS4zMDMtMS4wOTYsMi4wNjJIOC44MjZMOC44MjYsOS4xNTF6IE0yMi44ODYsMTAuOTI3JiN4YTsmI3g5OyYjeDk7JiN4OTtoMi4yNjRjMC43MzQsMS4yNzIsMS4xODgsMi43MTMsMS4zMTgsNC4xODZoLTIuOTQzQzIzLjQ2MiwxMy42MzksMjMuMjQ4LDEyLjIzMiwyMi44ODYsMTAuOTI3TDIyLjg4NiwxMC45Mjd6IE0xNy4yMjYsMTAuOTI3JiN4YTsmI3g5OyYjeDk7JiN4OTtoMy43ODRjMC40MTEsMS4yODgsMC42NjUsMi43MjgsMC43MzgsNC4xODZoLTQuNTIyVjEwLjkyN0wxNy4yMjYsMTAuOTI3eiBNMTEuNjE5LDEwLjkyN2gzLjgzMnY0LjE4NmgtNC41NjgmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5O0MxMC45NTYsMTMuNjUsMTEuMjA5LDEyLjIxLDExLjYxOSwxMC45MjdMMTEuNjE5LDEwLjkyN3ogTTcuNTI3LDEwLjkyN2gyLjIxOGMtMC4zNjIsMS4zMDgtMC41NzgsMi43MTMtMC42NDEsNC4xODZINi4yMDgmI3hhOyYjeDk7JiN4OTsmI3g5O0M2LjMzNiwxMy42NDYsNi43ODksMTIuMjA1LDcuNTI3LDEwLjkyN0w3LjUyNywxMC45Mjd6IE0yMy41MjQsMTYuODg2aDIuOTQzYy0wLjEzLDEuNDkxLTAuNTc1LDIuOTAzLTEuMzI2LDQuMTk5aC0yLjI1OSYjeGE7JiN4OTsmI3g5OyYjeDk7QzIzLjI0NywxOS43NzEsMjMuNDYyLDE4LjM2MSwyMy41MjQsMTYuODg2TDIzLjUyNC'+
			'wxNi44ODZ6IE0xNy4yMjYsMTYuODg2aDQuNTIyYy0wLjA3MywxLjQ2Ni0wLjMyOCwyLjkxLTAuNzQxLDQuMTk5aC0zLjc4MSYjeGE7JiN4OTsmI3g5OyYjeDk7VjE2Ljg4NkwxNy4yMjYsMTYuODg2eiBNMTAuODgzLDE2Ljg4Nmg0LjU2OHY0LjE5OWgtMy44MjlDMTEuMjA5LDE5Ljc5NiwxMC45NTYsMTguMzUyLDEwLjg4MywxNi44ODZMMTAuODgzLDE2Ljg4NnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNNi4yMDgsMTYuODg2aDIuODk2YzAuMDYzLDEuNDc2LDAuMjc5LDIuODg2LDAuNjQ0LDQuMTk5SDcuNTM0QzYuNzgzLDE5Ljc4OSw2LjMzNywxOC4zNzgsNi4yMDgsMTYuODg2TDYuMjA4LDE2Ljg4'+
			'NnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjIuMjczLDIyLjg2aDEuNTY0Yy0wLjc3MSwwLjg0MS0xLjY4NCwxLjU1Mi0yLjY4MywyLjA5MkMyMS41NzYsMjQuMzMzLDIxLjk1MSwyMy42MzMsMjIuMjczLDIyLjg2TDIyLjI3MywyMi44NnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTcuMjI2LDIyLjg2aDMuMDY0Yy0wLjgyOSwxLjY2NC0xLjkwMywyLjc3MS0zLjA2NCwzLjE1NVYyMi44NkwxNy4yMjYsMjIuODZ6IE0xMi4zMzksMjIuODZoMy4xMTJ2My4xNzImI3hhOyYjeDk7JiN4OTsmI3g5O0MxNC4yNzEsMjUuNjYsMTMuMTgxLDI0LjU0OSwxMi4zMzksMjIuODZMMTIuMzM5LDIyLjg2eiBNOC44Mz'+
			'gsMjIuODZoMS41MThjMC4zMTQsMC43NTUsMC42NzksMS40NCwxLjA4OCwyLjA1JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTAuNDczLDI0LjM3NCw5LjU4NywyMy42NzgsOC44MzgsMjIuODZMOC44MzgsMjIuODZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMzJweCIgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlck'+
			'V4dGVuc2lvbnMvMy4wLyIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeT0iMHB4Ij4KIDxnIGlkPSJMYXllcl8xIi8+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBkPSJNMjkuMjU5LDE1Ljk5OSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC03LjEyNS01Ljc5Ni0xMi45Mi0xMi45MjEtMTIuOTJjLTcuMTI0LDAtMTIuOTIsNS43OTUtMTIuOTIsMTIuOTJjMCw3LjA3NSw1LjcyLDEyLjgzOCwxMi43NzcsMTIuOTE1JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjA0LDAuMDA0LDAuMDc4LDAuMD'+
			'A3LDAuMTE3LDAuMDA3YzAuMDEzLDAsMC4wMjQtMC4wMDMsMC4wMzUtMC4wMDNDMjMuNDY4LDI4LjkxNCwyOS4yNTksMjMuMTIsMjkuMjU5LDE1Ljk5OXogTTQuOTU5LDE2Ljc1NCYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoMy42MzRjMC4wNjIsMS44MjIsMC4zMzcsMy41MywwLjc4OCw1LjA2SDYuNTI4QzUuNjM2LDIwLjMxMiw1LjA4LDE4LjU5NSw0Ljk1OSwxNi43NTR6IE0yNy43MTksMTUuMjQzaC0zLjY4NyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDYxLTEuODE2LTAuMzMzLTMuNTItMC43ODMtNS4wNDRoMi45MDdDMjcuMDQ0LDExLjY5NSwyNy41OTYsMTMuNDExLDI3LjcxOSwx'+
			'NS4yNDN6IE0yMi41MiwxNS4yNDNoLTUuNDI1di01LjA0NGg0LjU0MyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjIuMTM1LDExLjcwMywyMi40NDksMTMuNDIyLDIyLjUyLDE1LjI0M3ogTTE3LjA5NSw4LjY4NlY0LjY5YzEuNTYsMC4zNzgsMi45NTgsMS44NjEsMy45NDcsMy45OTVIMTcuMDk1eiBNMTUuNTgzLDQuNjc4djQuMDA4JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMy45OTlDMTIuNTgzLDYuNTI5LDE0LjAwMSw1LjAzNiwxNS41ODMsNC42Nzh6IE0xNS41ODMsMTAuMTk5djUuMDQ0aC01LjQ3NmMwLjA2OS0xLjgyMSwwLjM4Mi0zLjU0LDAuODgtNS4wNDRIMTUuNTgzeiYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTsgTTguNTkzLDE1LjI0M0g0Ljk1OWMwLjExOS0xLjgzMiwwLjY3NS0zLjU0OCwxLjU2Mi01LjA0NGgyLjg1N0M4LjkyOSwxMS43MjQsOC42NTQsMTMuNDI3LDguNTkzLDE1LjI0M3ogTTEwLjEwNywxNi43NTRoNS40NzYmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7djUuMDZoLTQuNTkyQzEwLjQ5MSwyMC4zMDYsMTAuMTc3LDE4LjU4MiwxMC4xMDcsMTYuNzU0eiBNMTUuNTgzLDIzLjMyNnYzLjk5NmMtMS41NzgtMC4zNTYtMi45OTUtMS44NDYtMy45OTQtMy45OTZIMTUuNTgzeiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTTE3LjA5NSwyNy4zMXYtMy45ODNoMy45'+
			'NDFDMjAuMDQ5LDI1LjQ1MywxOC42NTEsMjYuOTM0LDE3LjA5NSwyNy4zMXogTTE3LjA5NSwyMS44MTN2LTUuMDZoNS40MjUmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjA3LDEuODI4LTAuMzg1LDMuNTUyLTAuODg2LDUuMDZIMTcuMDk1eiBNMjQuMDMyLDE2Ljc1NGgzLjY4N2MtMC4xMjMsMS44NDEtMC42NzksMy41NTgtMS41Nyw1LjA2aC0yLjkwMyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjMuNjk2LDIwLjI4NCwyMy45NzIsMTguNTc2LDI0LjAzMiwxNi43NTR6IE0yNS4wODUsOC42ODZoLTIuMzU5Yy0wLjQ5Mi0xLjIxMi0xLjEwMy0yLjI3MS0xLjgwOS0zLjEzMyYjeGE7JiN4OT'+
			'smI3g5OyYjeDk7JiN4OTtDMjIuNTM2LDYuMjY3LDIzLjk2Myw3LjM0NSwyNS4wODUsOC42ODZ6IE0xMS42OCw1LjU5MmMtMC42OTMsMC44NTQtMS4yOTUsMS44OTktMS43NzgsMy4wOTRINy41OTEmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzguNjk2LDcuMzY3LDEwLjA5Miw2LjMwNCwxMS42OCw1LjU5MnogTTcuNjA0LDIzLjMyNmgyLjMwM2MwLjQ4MSwxLjE5LDEuMDgsMi4yMjksMS43NywzLjA4MSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTAuMDk1LDI1LjY5NSw4LjcwNCwyNC42MzksNy42MDQsMjMuMzI2eiBNMjAuOTE5LDI2LjQ0M2MwLjcwMi0wLjg1NywxLjMxMi0xLjkxMiwxLjgw'+
			'Mi0zLjExN2gyLjM1NCYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjMuOTUyLDI0LjY2LDIyLjUzMywyNS43MzQsMjAuOTE5LDI2LjQ0M3oiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgIDwvZz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE2LjE4NiwyOS4wMTRDOS4wOTQsMjguOTM3LDMuMzE4LDIzLjA5OCwzLjMxOCwxNS45OTljMC03LjE3OSw1Ljg0MS0xMy4wMiwxMy4wMi0xMy4wMiYjeGE7JiN4OTsmI3g5OyYjeDk7YzcuMTgsMCwxMy4wMjEsNS44NDEsMTMuMDIxLDEzLjAyYzAsNy4xNzUtNS44MzYsMTMuMDE1LTEzLjAxMSwxMy4wMTlsLTAuMDM1LDAuMDAzQzE2LjI3LDI5LjAyMS'+
			'wxNi4yMjksMjkuMDE4LDE2LjE4NiwyOS4wMTR6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTExLjc0NywyMy40MjZjMC45ODgsMi4wNjEsMi4zMDcsMy4zOTEsMy43MzYsMy43Njl2LTMuNzY5SDExLjc0N3ogTTE3LjE5NCwyNy4xOGMxLjQwOS0wLjM5NiwyLjcxLTEuNzIxLDMuNjg0LTMuNzU0aC0zLjY4NCYjeGE7JiN4OTsmI3g5OyYjeDk7VjI3LjE4eiBNMjIuNzg4LDIzLjQyNmMtMC40MywxLjA0NC0wLjk0NSwxLjk2OC0xLjUzNSwyLjc1M2MxLjM2My0wLjY2LDIuNi0xLjYwNCwzLjYwNC0yLjc1M0gyMi43ODh6IE03LjgyMSwyMy40MjYmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjk3NywxLjEyLDIu'+
			'MTg0LDIuMDUsMy41MiwyLjcxM2MtMC41NzktMC43OC0xLjA4My0xLjY5LTEuNTAyLTIuNzEzSDcuODIxeiBNNS4wNjYsMTYuODU0YzAuMTMxLDEuNzUsMC42NTEsMy40LDEuNTQ4LDQuOTA5JiN4YTsmI3g5OyYjeDk7JiN4OTtsMi42MzQtMC4wNDdjLTAuNDM1LTEuNTEzLTAuNjg3LTMuMTQ3LTAuNzUyLTQuODYySDUuMDY2eiBNMjYuMTQ4LDIxLjcxNGMwLjgxMS0xLjQ2LDEuMzMtMy4xMSwxLjQ2My00Ljg2aC0zLjQ4MiYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjA2NCwxLjcxNC0wLjMxNiwzLjM0Ny0wLjc1MSw0Ljg2SDI2LjE0OHogTTIxLjU2MiwyMS43MTRjMC40ODUtMS40ODMsMC43NzktMy'+
			'4xNiwwLjg1NC00Ljg2aC01LjIyMXY0Ljg2SDIxLjU2MnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTUuNDgzLDIxLjcxNHYtNC44NmgtNS4yNzFjMC4wNzQsMS42OTgsMC4zNjcsMy4zNzUsMC44NTIsNC44NkgxNS40ODN6IE0yNy42MTEsMTUuMTQzYy0wLjEzMy0xLjcyNi0wLjY2NC0zLjQxNS0xLjU0MS00Ljg5MyYjeGE7JiN4OTsmI3g5OyYjeDk7bC0yLjY4OCwwLjA0NmMwLjQzMiwxLjUwMywwLjY4MywzLjEzMiwwLjc0Nyw0Ljg0NkgyNy42MTF6IE0yMi40MTUsMTUuMTQzYy0wLjA3NC0xLjY4OS0wLjM2Ny0zLjM2LTAuODUtNC44NDRoLTQuMzcxdjQuODQ0JiN4YTsmI3g5OyYjeDk7JiN4OTtI'+
			'MjIuNDE1eiBNMTUuNDgzLDE1LjE0M3YtNC44NDRIMTEuMDZjLTAuNDgyLDEuNDc5LTAuNzc0LDMuMTUtMC44NDgsNC44NDRIMTUuNDgzeiBNOC40OTYsMTUuMTQzJiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wNjUtMS43MDgsMC4zMTctMy4zMzcsMC43NDktNC44NDRINi41NzhjLTAuODYzLDEuNDczLTEuMzg0LDMuMTQ1LTEuNTExLDQuODQ0SDguNDk2eiBNMjQuODY4LDguNTg1JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMDAyLTEuMTUxLTIuMjQyLTIuMS0zLjYxNi0yLjc2OGMwLjU5MiwwLjc4OSwxLjEwOSwxLjcxOCwxLjU0MSwyLjc2OEgyNC44Njh6IE0yMC44ODUsOC41ODUmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MtMC45NzYtMi4wMzktMi4yNzgtMy4zNjgtMy42OS0zLjc2NnYzLjc2NkgyMC44ODV6IE0xNS40ODMsOC41ODV2LTMuNzhjLTEuNDMzLDAuMzgtMi43NTMsMS43MTQtMy43NDEsMy43OEgxNS40ODN6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTkuODM0LDguNTg1YzAuNDIyLTEuMDMsMC45MjktMS45NDQsMS41MS0yLjcyNWMtMS4zMzksMC42NjItMi41NTEsMS41OTYtMy41MzYsMi43MjVIOS44MzR6Ii8+CiAgIDxwYXRoIGZpbGw9IiMxQTE3MUIiIGQ9Ik0xNi4zMzgsMy4wNzljNy4xMjUsMCwxMi45MjEsNS43OTUsMTIuOTIxLDEyLjkyYzAsNy4xMjEtNS43OTEsMTIuOTE1LTEyLjkx'+
			'MSwxMi45MTkmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMTEsMC0wLjAyMiwwLjAwMy0wLjAzNSwwLjAwM2MtMC4wMzksMC0wLjA3Ny0wLjAwMy0wLjExNy0wLjAwN2MtNy4wNTgtMC4wNzctMTIuNzc3LTUuODQtMTIuNzc3LTEyLjkxNSYjeGE7JiN4OTsmI3g5OyYjeDk7QzMuNDE4LDguODc0LDkuMjE0LDMuMDc5LDE2LjMzOCwzLjA3OSBNMTEuNTg0LDguNjg2aDMuOTk5VjQuNjc4QzE0LjAwMSw1LjAzNiwxMi41ODMsNi41MjksMTEuNTg0LDguNjg2IE0xNy4wOTUsOC42ODZoMy45NDcmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC45ODktMi4xMzQtMi4zODgtMy42MTctMy45NDctMy45OTVWOC42OD'+
			'YgTTIyLjcyNiw4LjY4NmgyLjM1OWMtMS4xMjItMS4zNDEtMi41NDktMi40MTktNC4xNjgtMy4xMzMmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMS42MjMsNi40MTUsMjIuMjMzLDcuNDc0LDIyLjcyNiw4LjY4NiBNNy41OTEsOC42ODZoMi4zMTFjMC40ODMtMS4xOTQsMS4wODUtMi4yNCwxLjc3OC0zLjA5NCYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwLjA5Miw2LjMwNCw4LjY5Niw3LjM2Nyw3LjU5MSw4LjY4NiBNMjQuMDMyLDE1LjI0M2gzLjY4N2MtMC4xMjMtMS44MzItMC42NzUtMy41NDgtMS41NjItNS4wNDRoLTIuOTA3JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjMuNjk5LDExLjcyNCwyMy45NzIsMTMu'+
			'NDI3LDI0LjAzMiwxNS4yNDMgTTE3LjA5NSwxNS4yNDNoNS40MjVjLTAuMDctMS44MjEtMC4zODUtMy41NC0wLjg4Mi01LjA0NGgtNC41NDNWMTUuMjQzJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEwLjEwNywxNS4yNDNoNS40NzZ2LTUuMDQ0aC00LjU5NkMxMC40ODksMTEuNzAzLDEwLjE3NywxMy40MjIsMTAuMTA3LDE1LjI0MyBNNC45NTksMTUuMjQzaDMuNjM0JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wNjItMS44MTYsMC4zMzYtMy41MiwwLjc4NS01LjA0NEg2LjUyMUM1LjYzNCwxMS42OTUsNS4wNzgsMTMuNDExLDQuOTU5LDE1LjI0MyBNMjMuMjQ1LDIxLjgxM2gyLjkwMyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7YzAuODkyLTEuNTAyLDEuNDQ3LTMuMjE5LDEuNTctNS4wNmgtMy42ODdDMjMuOTcyLDE4LjU3NiwyMy42OTYsMjAuMjg0LDIzLjI0NSwyMS44MTMgTTE3LjA5NSwyMS44MTNoNC41MzkmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjUwMS0xLjUwOCwwLjgxNS0zLjIzMSwwLjg4Ni01LjA2aC01LjQyNVYyMS44MTMgTTEwLjk5MSwyMS44MTNoNC41OTJ2LTUuMDZoLTUuNDc2QzEwLjE3NywxOC41ODIsMTAuNDkxLDIwLjMwNiwxMC45OTEsMjEuODEzJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTYuNTI4LDIxLjgxM2gyLjg1M2MtMC40NTEtMS41MjktMC43MjctMy4yMzctMC43ODgtNS4wNkg0Ljk1'+
			'OUM1LjA4LDE4LjU5NSw1LjYzNiwyMC4zMTIsNi41MjgsMjEuODEzIE0yMC45MTksMjYuNDQzJiN4YTsmI3g5OyYjeDk7JiN4OTtjMS42MTQtMC43MDksMy4wMzMtMS43ODMsNC4xNTUtMy4xMTdoLTIuMzU0QzIyLjIzLDI0LjUzMSwyMS42MjEsMjUuNTg2LDIwLjkxOSwyNi40NDMgTTE3LjA5NSwyNy4zMSYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNTU3LTAuMzc2LDIuOTU0LTEuODU2LDMuOTQxLTMuOTgzaC0zLjk0MVYyNy4zMSBNMTUuNTgzLDI3LjMyMnYtMy45OTZoLTMuOTk0QzEyLjU4OCwyNS40NzcsMTQuMDA1LDI2Ljk2NiwxNS41ODMsMjcuMzIyJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTExLj'+
			'Y3NiwyNi40MDdjLTAuNjg5LTAuODUyLTEuMjg4LTEuODkxLTEuNzctMy4wODFINy42MDRDOC43MDQsMjQuNjM5LDEwLjA5NSwyNS42OTUsMTEuNjc2LDI2LjQwNyBNMTYuMzM4LDIuODc5JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTcuMjM0LDAtMTMuMTIsNS44ODYtMTMuMTIsMTMuMTJjMCw3LjE1Myw1LjgyMSwxMy4wMzcsMTIuOTc2LDEzLjExNWMwLjAyOSwwLjAwMywwLjA3NCwwLjAwNywwLjExOSwwLjAwNyYjeGE7JiN4OTsmI3g5OyYjeDk7YzcuMjY1LTAuMDA3LDEzLjE0Ni01Ljg5MywxMy4xNDYtMTMuMTIyQzI5LjQ1OSw4Ljc2NSwyMy41NzMsMi44NzksMTYuMzM4LDIuODc5TDE2LjMzOCwy'+
			'Ljg3OXogTTExLjkwMSw4LjQ4NSYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOTM3LTEuODk3LDIuMTU5LTMuMTQyLDMuNDgxLTMuNTQ3djMuNTQ3SDExLjkwMUwxMS45MDEsOC40ODV6IE0xNy4yOTUsOC40ODVWNC45NTVjMS4zMDIsMC40MjIsMi41MDUsMS42NiwzLjQzLDMuNTMxSDE3LjI5NSYjeGE7JiN4OTsmI3g5OyYjeDk7TDE3LjI5NSw4LjQ4NXogTTIyLjg1OSw4LjQ4NWMtMC4zNjktMC44ODgtMC44LTEuNjg4LTEuMjg2LTIuMzkyYzEuMTUxLDAuNjEyLDIuMTk3LDEuNDI2LDMuMDcyLDIuMzkySDIyLjg1OUwyMi44NTksOC40ODV6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTguMDMxLDguNDg1Yz'+
			'AuODU2LTAuOTQzLDEuODc1LTEuNzQxLDIuOTkxLTIuMzQ2Yy0wLjQ3NCwwLjY5My0wLjg5NSwxLjQ3OS0xLjI1NSwyLjM0Nkg4LjAzMUw4LjAzMSw4LjQ4NXogTTIzLjUxNSwxMC4zOTkmI3hhOyYjeDk7JiN4OTsmI3g5O2gyLjUyN2MwLjgxNiwxLjQxLDEuMzE5LDMuMDA5LDEuNDYxLDQuNjQ0aC0zLjI3OEMyNC4xNTYsMTMuNDA1LDIzLjkxOCwxMS44NDYsMjMuNTE1LDEwLjM5OUwyMy41MTUsMTAuMzk5eiBNMTcuMjk1LDEwLjM5OSYjeGE7JiN4OTsmI3g5OyYjeDk7aDQuMTk3YzAuNDU3LDEuNDI3LDAuNzM4LDMuMDI1LDAuODE4LDQuNjQ0aC01LjAxNlYxMC4zOTlMMTcuMjk1LDEwLjM5OXog'+
			'TTExLjEzMiwxMC4zOTloNC4yNXY0LjY0NGgtNS4wNjYmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMC4zOTYsMTMuNDIxLDEwLjY3NiwxMS44MjMsMTEuMTMyLDEwLjM5OUwxMS4xMzIsMTAuMzk5eiBNNi42MzUsMTAuMzk5aDIuNDc4Yy0wLjQwNCwxLjQ1LTAuNjQ0LDMuMDEtMC43MTIsNC42NDRINS4xNzQmI3hhOyYjeDk7JiN4OTsmI3g5O0M1LjMxMiwxMy40MTUsNS44MTUsMTEuODE2LDYuNjM1LDEwLjM5OUw2LjYzNSwxMC4zOTl6IE0yNC4yMjUsMTYuOTU0aDMuMjc4Yy0wLjE0MiwxLjY1Ni0wLjYzNSwzLjIyMy0xLjQ2OSw0LjY1OWgtMi41MjMmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMy45MTcsMj'+
			'AuMTU3LDI0LjE1NywxOC41OTIsMjQuMjI1LDE2Ljk1NEwyNC4yMjUsMTYuOTU0eiBNMTcuMjk1LDE2Ljk1NGg1LjAxNmMtMC4wOCwxLjYyOS0wLjM2MiwzLjIzMi0wLjgyMiw0LjY1OWgtNC4xOTMmI3hhOyYjeDk7JiN4OTsmI3g5O1YxNi45NTRMMTcuMjk1LDE2Ljk1NHogTTEwLjMxNiwxNi45NTRoNS4wNjZ2NC42NTloLTQuMjQ3QzEwLjY3NywyMC4xODUsMTAuMzk2LDE4LjU4MSwxMC4zMTYsMTYuOTU0TDEwLjMxNiwxNi45NTR6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTUuMTc1LDE2Ljk1NEg4LjRjMC4wNjksMS42MzksMC4zMDksMy4yMDQsMC43MTUsNC42NTlINi42NDNDNS44MDgsMjAuMTc2'+
			'LDUuMzE0LDE4LjYxLDUuMTc1LDE2Ljk1NEw1LjE3NSwxNi45NTR6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTIyLjg1NCwyMy41MjZoMS43NzljLTAuODc2LDAuOTYyLTEuOTE3LDEuNzcxLTMuMDU5LDIuMzc3QzIyLjA1OSwyNS4yMDQsMjIuNDg3LDI0LjQwOCwyMi44NTQsMjMuNTI2TDIyLjg1NCwyMy41MjZ6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE3LjI5NSwyMy41MjZoMy40MjRjLTAuOTIzLDEuODY1LTIuMTI1LDMuMDk5LTMuNDI0LDMuNTJWMjMuNTI2TDE3LjI5NSwyMy41MjZ6IE0xMS45MDcsMjMuNTI2aDMuNDc2djMuNTM2JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTQuMDYzLDI2LjY1OCwxMi'+
			'44NDMsMjUuNDE4LDExLjkwNywyMy41MjZMMTEuOTA3LDIzLjUyNnogTTguMDQzLDIzLjUyNmgxLjcyOWMwLjM1NywwLjg2LDAuNzc0LDEuNjQyLDEuMjQ3LDIuMzMyJiN4YTsmI3g5OyYjeDk7JiN4OTtDOS45MDUsMjUuMjU0LDguODkzLDI0LjQ2MSw4LjA0MywyMy41MjZMOC4wNDMsMjMuNTI2eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		el=me._tt_ht_url_white=document.createElement('div');
		els=me._tt_ht_url_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_white.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._tt_ht_url.appendChild(me._tt_ht_url_white);
		me._ht_url.appendChild(me._tt_ht_url);
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
			skin._popup_video_youtube.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_youtube', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ontouchend=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_youtube=document.createElement('div');
		els=me._ht_video_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xMzkuNCw0MjEuN2MwLDEuMy0xLDIuMy0yLjMsMi4zaC02Ni43Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi00OS40YzAtMS4zLDEtMi4zLDIuMy0yLjNoNjYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MjEuN3oiLz4KICAgPHBh'+
			'dGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzguNCw0MDVsMTAuOC03LjVjMC43LTAuNSwwLjctMS4zLDAtMS44bC0xMC44LTcuNWMtMC43LTAuNS0xLjMtMC4yLTEuMywwLjd2MTUuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OS43LDQwNS4yLTE3OS4xLDQwNS41LTE3OC40LDQwNXoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LDE0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy04LDAtMTQuNC02LjUtMTQuNC0xNC'+
			'40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRDLTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIvPgogICA8cGF0aCBm'+
			'aWxsPSIjRkZGRkZGIiBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg5LjQsNDA0LjUtMTgzLDQxMS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_youtube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNS40LDQyNC40YzAsMS40LTEuMSwyLjYtMi42LDIuNkgtMjEyYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTU0LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS40LDEuMS0yLjYsMi42LTIuNmg3NC4xYzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0'+
			'MjQuNHoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzguOCw0MDUuOWwxMi04LjRjMC44LTAuNSwwLjgtMS40LDAtMS45bC0xMi04LjRjLTAuOC0wLjUtMS40LTAuMi0xLjQsMC43djE3LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODAuMiw0MDYuMS0xNzkuNiw0MDYuNC0xNzguOCw0MDUuOXoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLDE2LTE2LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC45LDAtMTYtNy4yLTE2LT'+
			'E2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjkuM0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6Ii8+CiAgIDxwYXRo'+
			'IGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_youtube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_video_youtube.style[domTransition]='';
				if (me._ht_video_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_video_youtube.style.visibility="hidden";
					me._ht_video_video_youtube.ggVisible=false;
				}
				else {
					me._ht_video_video_youtube.style.visibility=(Number(me._ht_video_video_youtube.style.opacity)>0||!me._ht_video_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_video_youtube.ggVisible=true;
				}
			}
		}
		me._ht_video_video_youtube.onmouseover=function (e) {
			me._ht_video_video_youtube__img.style.visibility='hidden';
			me._ht_video_video_youtube__imgo.style.visibility='inherit';
		}
		me._ht_video_video_youtube.onmouseout=function (e) {
			me._ht_video_video_youtube__img.style.visibility='inherit';
			me._ht_video_video_youtube__imgo.style.visibility='hidden';
		}
		me._ht_video_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_youtube);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_youtube.style.top='-47px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_youtube.ggDx=0;
					me._tt_ht_video_youtube.style.top='24px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		el=me._ht_video_youtube_customimage=document.createElement('div');
		els=me._ht_video_youtube_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_youtube_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_customimage.style[domTransition]='';
				if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_customimage.style.visibility="hidden";
					me._ht_video_youtube_customimage__img.src = '';
					me._ht_video_youtube_customimage.ggVisible=false;
				}
				else {
					me._ht_video_youtube_customimage.style.visibility=(Number(me._ht_video_youtube_customimage.style.opacity)>0||!me._ht_video_youtube_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_customimage.ggSubElement.src=me._ht_video_youtube_customimage.ggText;
					me._ht_video_youtube_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_youtube_customimage.clientWidth;
			var parentHeight = me._ht_video_youtube_customimage.clientHeight;
			var img = me._ht_video_youtube_customimage__img;
			var aspectRatioDiv = me._ht_video_youtube_customimage.clientWidth / me._ht_video_youtube_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_video_youtube';
			hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_youtube_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				hotspotTemplates['ht_video_youtube'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._video_screentint_youtube.logicBlock_visible();
	me._video_popup_youtube.logicBlock_visible();
	me._popup_video_youtube.logicBlock_visible();
	me._video_popup_close_youtube.logicBlock_visible();
	player.addListener('changenode', function(args) { me._video_screentint_youtube.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._video_popup_close_youtube.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_youtube', function(args) { me._video_screentint_youtube.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._video_popup_close_youtube.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};