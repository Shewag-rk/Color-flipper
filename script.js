var mdColors = [
  "#F44336",
  "#FFEBEE",
  "#FFCDD2",
  "#EF9A9A",
  "#E57373",
  "#EF5350",
  "#F44336",
  "#E53935",
  "#D32F2F",
  "#C62828",
  "#B71C1C",
  "#FF8A80",
  "#FF5252",
  "#FF1744",
  "#D50000",
  "#E91E63",
  "#FCE4EC",
  "#F8BBD0",
  "#F48FB1" 
];


let i = 0;
function changerColor(){
    i+=1;
   document.body.style.backgroundColor = mdColors[i];
   console.log(mdColors[i]);
  if(i===mdColors.length-1){
    i=0
  }
}