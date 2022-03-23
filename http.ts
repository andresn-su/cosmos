export class Http {
	public segment: string;


	/**
	 * @param {string}
	 */
	public constructor(
		public path: string
	) {}

	/**
	 * @param  {boolean   = true}
	 * @param  {object}
	 * @return {Promise<any>}
	 */
	public async get(cors: boolean = true, opts?: object): Promise<any> {
		let res = await this.exec("get", cors, undefined, opts);
		return res;
	}

	/**
	 * @param  {object}
	 * @param  {boolean   = true}
	 * @param  {object}
	 * @return {Promise<any>}
	 */
	public async post(data: object, cors: boolean = true, opts?: object): Promise<any>{
		let res = await this.exec("post", cors, data, opts);
		return res;
	}

	/**
	 * @param  {object}
	 * @param  {boolean   = true}
	 * @param  {object}
	 * @return {Promise<any>}
	 */
	public async put(data: object, cors: boolean = true, opts?: object): Promise<any>{
		let res = await this.exec("put", cors, data, opts);
		return res;
	}

	/**
	 * @param  {boolean   = true}
	 * @param  {object}
	 * @return {Promise<any>}
	 */
	public async delete( cors: boolean = true, opts?: object): Promise<any>{
		let res = await this.exec("delete", cors, undefined, opts);
		return res;
	}

	/**
	 * @param  {string}
	 * @param  {boolean}
	 * @param  {object}
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
