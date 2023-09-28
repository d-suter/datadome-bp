import fetch from 'node-fetch';

async function generateSecureCookie(targetDomain) {
    try {
        const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        
        const params = new URLSearchParams({
            ddv: '4.6.0',
            jsData: JSON.stringify({
                jset: Math.floor(1000000000 + Math.random() * 9000000000)
            }),
        });
        
        const response = await fetch('https://api-js.datadome.co/js/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'x-forwarded-for': randomIP, 
                'Content-type': 'application/x-www-form-urlencoded',
                'Host': 'api-js.datadome.co',
                'Origin': targetDomain,
                'Referer': targetDomain,
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
            },
            body: params.toString(),
        });

        if (!response.ok) {
            throw new Error(`API response error: ${response.statusText}`);
        }
        
        const responseData = await response.text();
        const rawCookie = responseData.substring(24, responseData.length - 2);
        
        return {
            raw: rawCookie,
            cookie: rawCookie.split(';')[0],
            value: rawCookie.split(';')[0].split('=')[1],
        };
        
    } catch (error) {
        console.error(`Error in generating cookie for ${targetDomain}: `, error);
        throw error;
    }
}

export { generateSecureCookie };
