function compareObject(obj1, obj2){
    if(Object.keys(obj1).length != Object.keys(obj2).length)
      return false;
 
      for(let i in obj1) {
         if(obj1[i] != obj2[i]) {
             return false;
         }
      }
 
      return true;
 }
 
 let student1 = {
     "name": "Manjula",
     "state" : "Tamil Nadu",
     "country" : "India"
 }
 
 let student2 = {
     "name": "Manjula",
     "state" : "Tamil Nadu",
     "country" : "India"
 }
 
 console.log(compareObject(student1, student2));
 