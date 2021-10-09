function saveInfo(event){
    console.log(event);
    event.preventDefault();

    let name = document.getElementById("name").value == "" ? null:document.getElementById("name").value;
    let Id = document.getElementById("id").value  == "" ? null:document.getElementById("id").value;
    let Math = document.getElementById("math").value == "" ? null:document.getElementById("math").value;
    let Español = document.getElementById("Español").value == "" ? null:document.getElementById("Español").value;
    let Ingles = document.getElementById("Ingles").value == "" ? null:document.getElementById("Ingles").value;
    let Etica = document.getElementById("Etica").value == "" ? null:document.getElementById("Etica").value;
    let Fisica = document.getElementById("Fisica").value == "" ? null:document.getElementById("Fisica").value;
    if(name==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";
    }else if(Id==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";
        
    }else if(Math==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";
        
    }else  if(Español==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";
        
    }else if(Ingles==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";
        
    }else  if(Etica==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";
        
    } else  if(Fisica==null){
        document.getElementById("error").innerHTML="Error los campos deben estar completos";

    }else{
        
        if(parseFloat(Math)>5 || parseFloat(Español)>5  || parseFloat(Ingles)>5 ||parseFloat(Etica)>5 ||parseFloat(Fisica)>5  ){
            document.getElementById("error").innerHTML="Error los campos deben ser inferiores a 5";
        }else{
        console.log(Id);
        console.log(localStorage.getItem(Id));
        if(localStorage.getItem(Id) == null){
            let notes=[
                Math,
                Español,
                Ingles,
                Etica,
                Fisica
            ]
            
            localStorage.setItem(Id, [notes]);
            document.getElementById("error").innerHTML="El Estudiente se registro con exito  ";
        }else{
            document.getElementById("error").innerHTML="Error El Estudiente Ya esta registrado ";
        }
    }
    
}
}

function calculcateAvg(event){
    let arraytopics=["Matematicas","Español","Ingles","Etica","Fisica"]
    event.preventDefault();
    let studentId = document.getElementById("student").value== "" ?  null:document.getElementById("student").value;
    console.log(studentId);
    if(studentId== null){
        document.getElementById("error").innerHTML="Error El Campo es invalido ";

    }else{
    let values=localStorage.getItem(studentId).split(",");
  
    let avg=0.0;
    let table = "<h2>Notas</h2><table class='table'>";
    let cont=0;
    values.forEach(element => {
        table+="<tr>";
            table+="<td>"+arraytopics[cont]+"</td>";
            table+="<td>"+element+"</td>";
            avg+=parseFloat(element);
        table+="</tr>";
            cont++;
    });
    table+="</table>";
    avg= avg/values.length;
    let ispass="";
    if( avg >=4 ){
        ispass+="Aprobo";
    }else{
        ispass+="Reprobo"
    }

    document.getElementById("notas").innerHTML=table;
    document.getElementById("avg").innerHTML="<div class='card' style='width: 18rem;'> <div class='card-body'><p class='card-text'>Promedio final del estudiante "+avg+"</p></div>";
    document.getElementById("ispass").innerHTML="<div class='card' style='width: 18rem;'> <div class='card-body'><p class='card-text'>El Estudiante "+ispass+"</p></div>";


    }

}