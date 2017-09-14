$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type:"GET",
    url: "https://www.quandl.com/api/v3/databases/YC/data?download_type=partial"
    ,
    success: function(data) {
      console.log(data);
      $('.text').text(JSON.stringify(data));
    },
    dataType: 'json',
  });
  
});

/*fetch("https://www.quandl.com/api/v3/datasets/WIKI/FB/data.csv")
.then(response => response.json())
.then(data => {
  // Here's a list of repos!
  console.log(data)
});*/

/*function csvJSON(stocks){
  
    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
      var obj = {};
      var currentline=lines[i].split(",");
  
      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }
  
      result.push(obj);
  
    }
    
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }*/
  /*const request=require('request');
  const csv=require('csvtojson');

  csv()
  .fromStream(request.get('https://www.quandl.com/api/v3/databases/wiki/codes'))
  .on('csv',(csvRow)=>{
      // csvRow is an array 
  })
  .on('done',(error)=>{
   
  })*/

