const result = document.querySelector('.result')

async function serverCall()
{
     const promise = await fetch('https://randomuser.me/api')
	   .then((res) => {
	       if(res.status === 200)
	       {
		   res.json().then(
		       values => {
			   alert("data is here")
			   console.log(values.results)
		       })
	       }
	       else
	       {
		   alert("Error: ", res.status)
	       }
	   })
           .catch((error) => {
	       console.log(error)
	       alert("Type error: Failed to fetch")
	   })
   
     //var para = document.createElement('p')
     //var node = document.createTextNode("boris")
     //para.appendChild(node)
     //result.appendChild(para)
}
