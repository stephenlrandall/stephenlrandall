import { getGalleries } from "./_galleries.js";

export async function get(req, res)
{
	const { slug } = req.params;

	const lookup = new Map();
	const galleries = await getGalleries();
	
	galleries.forEach(gallery =>
	{
		lookup.set(gallery.slug, JSON.stringify(gallery));
	});

	if (lookup.has(slug))
	{
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(lookup.get(slug));
	}
	else
	{
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "Not found" }));
	}
}
