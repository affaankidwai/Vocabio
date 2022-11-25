import axios from 'axios';


export default function data(req, res) {
	if (req.method === 'GET') {
		const options = {
			method: 'GET',
			url: `https://wordsapiv1.p.rapidapi.com/words/${req.query.word}/examples`,
			headers: {
				'x-rapidapi-host': 'bf8da4b392mshd5ff5bf76b73417p1b529ejsn445bc7e3eab0',
				'x-rapidapi-key': 'wordsapiv1.p.rapidapi.com'
			}
		};
		axios
			.request(options)
			.then(function (response) {
				res.status(200).json(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	} else {
		res.status(400);
	}
}



const styles = StyleSheet.create({})