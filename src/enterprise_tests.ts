import { postData } from './apiService'

// 使用示例
const apiUrl = 'http://localhost:32009/api/enterprise/list-enterprise-for-selected';
const requestData = {
	"name": "公司"
};

postData(apiUrl, requestData)
	.then((data) => {
		console.log('响应数据:', JSON.stringify(data));
	})
	.catch((error) => {
		console.error('发生错误:', error);
	});
