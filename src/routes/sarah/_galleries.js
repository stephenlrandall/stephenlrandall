import fs from "fs";

const imgPath = "img/sarah";
export async function getGalleries()
{
    const images = await new Promise(function(resolve, _)
    {
        fs.readdir(`static/${imgPath}`, function(_, images)
        {
            resolve(images);
        });
    });

    const galleryMap = new Map();
    images.forEach(img =>
    {
        const slug = img.match(/(.+)-\d+/)[1];
        const imgURL = `${imgPath}/${img}`;
        if (galleryMap.has(slug))
            galleryMap.get(slug).push(imgURL);
        else
            galleryMap.set(slug, [imgURL]);
    });

    const galleries = [];
    for (const galleryPair of galleryMap.entries())
        galleries.push({ slug: galleryPair[0], images: galleryPair[1] });

    return galleries;
}