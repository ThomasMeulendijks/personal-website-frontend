import axios from "axios";

export default {
	async get(name) {
		const response = await axios.get(`http://localhost:8070/pages/${name}`);
		return response.data;
	}
};
