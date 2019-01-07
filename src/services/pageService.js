import axios from "axios";

export default{
	async get(name) {
		const response= await axios.get(`http://localhost:8090/pages/${name}`);
		return response.data;
	}
};
