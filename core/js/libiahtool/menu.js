// JavaScript Document
function Menu()
{
	this.nombre="Libiahtool";
	this.request=null;
	this.pagina=null;
	this.parametros=null;
	this.render=
	(
	    function()
		{
			//cabezera
			var strHtml='<nav class="navbar navbar-default">';
            strHtml+='<div class="container-fluid">
                                <!-- Brand and toggle get grouped for better mobile display -->
                                   <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                       <span class="sr-only">Toggle navigation</span>
                                       <span class="icon-bar"></span>
                                       <span class="icon-bar"></span>
                                       <span class="icon-bar"></span>
                                       </button>
                                  <a class="navbar-brand" href="#">'+ this.nombre +'</a>
                             </div>';				 
           strHtml+='<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
		   var instancia=this;
		   this.request=$.ajax(
		   {
			    type: "POST",
	 	        async:false,
	 	        url:this.pagina,
	 	        data: this.parametros,
	 	        dataType: "json",
		   }
		   );
		   this.request.done
	 	   (
	 	          function(data)
	 	          {   
	 	              instancia.datos=data["registros"];
	 	          }
	 	   );
		   this.request.error
		   (
		          function(XMLHttpRequest, textStatus, errorThrown)
		          {

		          }
		    );
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
     strHtml+='</div><!-- /.navbar-collapse -->';
     strHtml+='</div><!-- /.container-fluid --></nav>';
  
		}
	);
}