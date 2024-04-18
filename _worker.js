
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'sxmzdsh'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//自建节点+机场订阅
const MainData = `
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@www.sean-now.com:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.iakeys.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@www.iakeys.com:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@malaysia.com:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.gov.ua:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@skk.moe:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.baipiao.eu.org:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@fbi.gov:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.d-555.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.who.int:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.shopify.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@wm.wmzuv.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@zjstv.cc:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.ipget.net:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.boba88slot.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@malaysia.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@www.singapore.com:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@alejandracaiccedo.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@www.udemy.com:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@www.visa.com.sg:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@icook.hk:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@whatismyipaddress.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.hugedomains.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@log.bpminecraft.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://ba331ad9-83fa-453d-b026-ca54f506e9da@www.wto.org:443?encryption=none&security=tls&sni=ygcfw.ezbiz365.cloudns.org&fp=random&type=ws&host=ygcfw.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#ygcfw
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.udemy.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@ip.sb:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@japan.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.gov.se:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
`

//机场信息，可多个，也可为0
const urls = [
	'https://sub.xf.free.hr/auto',
	'https://hy2sub.pages.dev',
	'https://vless.fxxk.dedyn.io/auto',
	// 'https://3k.fxxk.dedyn.io/sub', //3Kmfi6HP
	// 'https://classelivre.eu.org/CMLiu', //天城
	// 'https://sub.kaiche.tk/?token=auto', //OTC
	// 'http://allsub.king361.cf', //King
	// 添加更多订阅,支持base64
];

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;

		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link ="";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub)
		let sublinks = request.url ;
		if(env.WARP) sublinks += '|' + (await ADD(env.WARP)).join('|');
		//console.log(MainData,urls,sublinks);

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			
			const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
					}
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
					}
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else {
			let req_data = "";
			req_data += MainData;
			
			try {
				const responses = await Promise.allSettled(urls.map(url =>
					fetch(url, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': 'v2rayN/6.39 cmliu/CF-Workers-SUB'
						}
					}).then(response => response.ok ? response.text() : Promise.reject())
				));
			
				for (const response of responses) {
					if (response.status === 'fulfilled') {
						const content = await response.value;
						req_data += base64Decode(content) + '\n';
					}
				}
			} catch (error) {
				console.error(error);
			}
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			const base64Data = btoa(result);
			//console.log(base64Data);
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}
	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
