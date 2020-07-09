import { getGalleries } from "./_galleries.js";

export async function get(_, res)
{
	const galleries = await getGalleries();
	
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(galleries));
}