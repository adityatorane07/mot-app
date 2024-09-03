import {useState} from "react"
import axios from "axios";

function Mot()
{
	const[quote, setQuote]=useState("");
	const[author, setAuthor]=useState("");

	const gm=(event)=>{
		event.preventDefault();
		let url="https://quotes-api-self.vercel.app/quote";
		axios.get(url)
		.then(res=>{
			setQuote(res.data.quote);
			setAuthor(res.data.author);
		})
		.catch(err=>alert("issue"+err));
	}
	return(
	<>
	<center>
	 	<h1> Mot app by aditya </h1>
		<form onSubmit={gm}>
		<input type="submit" 	value="get Quote"/>
		</form>
		<h2> {quote} </h2>
		<h2> {author} </h2>
	</center>
	</>
	);
}	
export default Mot;







