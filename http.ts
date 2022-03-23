export class Http {
	private segment: string;


	/**
	 * @param {string} path
	 */
	public constructor(
		public path: string
	) {}

	/**
	 * @param  {boolean   = true} cors
	 * @param  {object} opts
	 * @return {Promise<any>}
	 */
	public async get(cors: boolean = true, opts?: object): Promise<any> {
		let res = await this.exec("get", cors, undefined, opts);
		return res;
	}

	/**
	 * @param  {object} data
	 * @param  {boolean   = true} cors
	 * @param  {object} opts
	 * @return {Promise<any>}
	 */
	public async post(data: object, cors: boolean = true, opts?: object): Promise<any>{
		let res = await this.exec("post", cors, data, opts);
		return res;
	}

	/**
	 * @param  {object} data
	 * @param  {boolean   = true} cors
	 * @param  {object} opts
	 * @return {Promise<any>}
	 */
	public async put(data: object, cors: boolean = true, opts?: object): Promise<any>{
		let res = await this.exec("put", cors, data, opts);
		return res;
	}

	/**
	 * @param  {boolean   = true} cors
	 * @param  {object} opts
	 * @return {Promise<any>}
	 */
	public async delete(cors: boolean = true, opts?: object): Promise<any>{
		let res = await this.exec("delete", cors, undefined, opts);
		return res;
	}

	/**
	 * @param {string} segment
	 */
	public seg(segment: string) {
		if(segment[0] !== "/") {
			segment = "/" + segment
		}

		this.segment = segment;
	}

	/**
	 * @param  {string} method
	 * @param  {boolean} cors
	 * @param  {object} data
	 * @return {Promise<any>}
	 */
	private async exec(method: string, cors: boolean, data?: object, opts?: object): Promise<any> {
		let options: RequestInit = {
			method,
			mode: cors ? 'cors' : 'no-cors',
			...opts
		};

		if(data) {
			options = {
				...options,
				body: JSON.stringify(data)
			};
		}

		return await fetch((this.path + this.segment), options).then(res => res.json());
	}
}
