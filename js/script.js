var TREYTD = function() {
    var SIDEx = parseInt(document.getElementById("uno").value);
    var SIDEy = parseInt(document.getElementById("deux").value);
    var SIDEz = parseInt(document.getElementById("trois").value);
    var ans = document.getElementById("result");

    if (SIDEx+SIDEy <= SIDEz || SIDEy+SIDEz <= SIDEx || SIDEx+SIDEz <= SIDEy) {
      ans.innerHTML = 'CONFIRMED NOT to be a triangle!';
   }
   else if (SIDEx === SIDEy && SIDEy === SIDEz && SIDEx === SIDEz) {
      ans.innerHTML = 'CONFIRMED to be an Equilateral triangle!'
   }
    else if (SIDEx === SIDEy || SIDEx === SIDEz || SIDEy === SIDEz) {
       ans.innerHTML = 'CONFIRMED to be an Isosceles triangle!';
   }
     else if (SIDEx+SIDEy > SIDEz || SIDEy+SIDEz > SIDEx || SIDEx+SIDEz > SIDEy && SIDEx !== SIDEy && SIDEy !== SIDEz && SIDEz !== SIDEx){
       ans.innerHTML = 'CONFIRMED to be a Scalene triangle!';
   }
    else {

       ans.innerHTML = 'YOU DONT MAKE SENSE!!!';
   }

};
