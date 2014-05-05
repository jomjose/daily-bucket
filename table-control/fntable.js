var main = {};
		(function(){
		    function fnInit(){
		        var btn = document.querySelector("#btnImprimir");
		        btn.addEventListener("click",fnPrint,false);
		    }

		    function fnPrint(){ window.print(); }
		    
		    this.fnInit = fnInit;
		}).apply(main);

		window.addEventListener("load",main.fnInit,false);
