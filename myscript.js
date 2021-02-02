
//restart game button
var restart = document.querySelector("#bt");

//grab all the squares
var sqr = document.querySelectorAll("td");

//clear all the squares
function clearsqr()
{
	for(var i =0 ;i<sqr.length; i++)
	 {
   	  sqr[i].textContent= '';
	 }

}

restart.addEventListener('click',clearsqr)

function changeMarker()
{
    if(this.textContent === '')
    {
      this.textContent = 'X';
      // console.log(marker)
    }
    else if (this.textContent === 'X')
    {
      this.textContent = 'O';
    }
     else 
     {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < sqr.length; i++) 
{
    sqr[i].addEventListener('click', changeMarker);
}
