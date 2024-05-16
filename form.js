//Import express
const express= require("express");
const app= express();
const port=3000;
//Middleware for parsing the application
app.use(express.urlencoded({extended:true}));
 
//Serve the HTML form
 
app.get('/',(req,res)=>{
	//Send the HTML content with a form to the client
	res.send(`
 
		<h1>Simple form</h1>
<form action="/" method="post">
<label for="name">Name:</label>
<input type="text" id="name" name="name" required><br><br>
 
		<label for="email">Email:</label>
<input type="email" id="email" name="email" required><br><br>
 
		<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50" required></textarea>
 
		<button type="submit">Submit</button>
 
		</form>
 
		`);
});
 
//Handle form submission
app.post('/',(req,res)=>{
	//Extract form data from the request body
	const name= req.body.name;
	const email=req.body.email;
	const message=req.body.message;
 
	//Send a tank you msg
	res.send(`
<h1>Thank you for your response</h1>
<p>Hi ${name}, we have received your message.</p>
<p>Email: ${email}</p>
<p>Message: ${message}</p>
 
		`)
});
 
//strat the server
app.listen(port,()=>{
	console.log(`Server is running on: http://localhost:${port}`);
});