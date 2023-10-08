
export async function postData(url: string, data: any) {
	const fetch = await import('node-fetch');

	const response = await fetch.default(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json', // 设置请求头，根据需要修改
		},
		body: JSON.stringify(data), // 将数据转换为JSON字符串并放入请求体中
	});

	if (!response.ok) {
		throw new Error('网络请求失败'); // 处理请求失败情况
	}

	const responseData = await response.json(); // 解析响应数据
	return responseData;
}