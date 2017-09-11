$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type:"GET",
    url: "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?column_index=4&start_date=2014-01-01&end_date=2014-12-31&collapse=monthly&transform=rdiff&api_key=RHAbp4b2msadmufSJuzn"
    ,
    success: function(data) {
      console.log(data);
      $('.text').text(JSON.stringify(data));
    },
    dataType: 'json',
  });
  
});