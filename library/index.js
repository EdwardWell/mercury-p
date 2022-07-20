'use strict';

import functions from "./functions/index";

const SUCCESS_STYLE = "color:#fff; background: green; font-size: 14px;";
const FAIL_STYLE = "color: #fff; background: red; font-size: 14px;";

class Mercury {
	constructor(config = {}) {
		let defaultConfig = {
			domain: "",
			ver: "0.0.1",
		}
		functions.objectAssign(defaultConfig, config);
		defaultConfig.domain += (defaultConfig.domain.endsWith("/") ? "" : "/");
		this.config = defaultConfig;
	}
	addRequestExtraParam(params = {}) {
		if (typeof params !== "object") throw "params[addRequestExtraParam] must be Object!";
		if (!this.extra) this.extra = {};
		Object.assign(this.extra, params);
	}
	request(params, options = {}) {
		let config = this.config, httpRequest;
		params.data = params.data || {};
		if (config.ver) params.data.ver = config.ver;
		this.extra && Object.assign(params.data, this.extra);
		if (params.url.startsWith("/")) params.url = params.url.slice(1);
		if (!params.url.startsWith("http")) params.url = config.domain + params.url;
		if (params.method) params.method = params.method.toUpperCase();
		config.data && Object.assign(params.data, config.data);
		httpRequest = utils.promiseApi(uni.request, params);

		return httpRequest.then(res => {
			if (res.success) {
				console.log(`%c%s`, SUCCESS_STYLE, `成功:${params.url}`, params.data || params.params, res)
				return res.data;
			}
			throw {
				errMsg: res.error_message === undefined ? res.errorMessage : res.error_message,
				code: res.error_code === undefined ? res.errorCode : res.error_code
			}
		}).catch(err => {
			console.log(`%c%s`, FAIL_STYLE, `失败:${params.url}`, params.data || params.params, e)
			throw err
		})
	}
}

Object.assign(Mercury.prototype, functions);
export default Mercury;