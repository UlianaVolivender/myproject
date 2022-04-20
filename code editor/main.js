let form1 = document.forms.form1;
let form2 = document.forms.form2;




form1.btn_edit.onclick = function(){
    
editing.style.display  = 'block';
editing_txt.style.display  = 'block';
    
    
  form2.area_edit.value=txt.innerHTML;    
    
}
form2.btn_save.onclick= function(){
 if (form2.area_edit.value){
     txt.innerHTML =form2.area_edit.value;
     form2.area_edit.value='';
     editing.style.display='none';
 }
}

form2.btn_remove.onclick = function(){
    form2.area_edit.value = '';
}