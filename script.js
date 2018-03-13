(function() {
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    type: "GET",
    success: function(response){
        console.log(response);
        document.getElementById('commentPic').src = response.data[0].avatar;
        document.getElementById('firstName').textContent = response.data[0].first_name;
        document.getElementById('lastName').textContent = response.data[0].last_name;
        document.getElementById('commentPic1').src = response.data[1].avatar;
        document.getElementById('firstName1').textContent = response.data[1].first_name;
        document.getElementById('lastName1').textContent = response.data[1].last_name;
        document.getElementById('commentPic2').src = response.data[2].avatar;
        document.getElementById('firstName2').textContent = response.data[2].first_name;
        document.getElementById('lastName2').textContent = response.data[2].last_name;
    }
});
})()
