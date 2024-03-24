
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'sxmzdsh'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken ='7141232491:AAFGd5RWYSKbaQfSJBRgEECbPD_a6-PoaaA'; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 1; //1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//自建节点
const MainData = `
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@104.16.61.119:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@104.16.81.251:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@achk.cloudflarest.link:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@cf.090227.xyz:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@cip.951535.xyz:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@fbi.gov:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@icook.tw:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@iplocation.io:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@malaysia.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@sp.rweek.top:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@tg.ezbiz365.cloudns.org:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@time.is:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@whatismyipaddress.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.csgo.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.ipchicken.com:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.iplocation.net:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.okcupid.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.visa.com.hk:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.visa.com.sg:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.visa.com.tw:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.visakorea.com:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://3dd86e92-1aa7-4227-b5c8-af7470be5f36@www.whoer.net:443?encryption=none&security=tls&sni=esubcm.ezbiz.dynv6.net&fp=randomized&type=ws&host=esubcm.ezbiz.dynv6.net&path=%2F%3Fed%3D2048#CFEP
vless://dac89ddd-1a89-4732-88dd-105cfaaf5ab8@www.wto.org:443?encryption=none&security=tls&sni=tg.ezbiz365.cloudns.org&fp=randomized&type=ws&host=tg.ezbiz365.cloudns.org&path=%2F%3Fed%3D2048#CFWP
`

//机场信息，可多个，也可为0
const urls = [
	'https://3k.fxxk.dedyn.io/sub',
	'http://allsub.king361.cf',
	'https://sub.kaiche.tk/?token=auto',
	'https://vless.fxxk.dedyn.io/auto',
	// 添加更多订阅,支持base64
];

let subconverter = "api.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full.ini"; //订阅配置文件

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

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			return new Response('Hello World!', { status: 403 });
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		if (userAgent.includes('clash')) {
			const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

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
			const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

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
				const responses = await Promise.all(urls.map(url => fetch(url,{
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': 'CF-Workers-SUB/cmliu'
					}
				})));
					
				for (const response of responses) {
					if (response.ok) {
						const content = await response.text();
						//console.log(content);
						req_data += base64Decode(content) + '\n';
						//console.log(req_data);
					}
				}
			} catch (error) {
	
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
