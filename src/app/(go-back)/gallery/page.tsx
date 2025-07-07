// import Image from "next/image";
import Link from "next/link";

const PHOTOS = [
  {
    thumbnail: "/assets/thumbnails/porche.webp",
    insta_url: "https://www.instagram.com/p/DLHRTjBtIzf",
    description: "A Phorche in Sofia",
  },
  {
    thumbnail: "/assets/thumbnails/tram.webp",
    insta_url: "https://www.instagram.com/p/DLDssSrN06z/",
    description: "A tram in the forest, Sofia",
  },
  {
    thumbnail: "/assets/thumbnails/moto.webp",
    insta_url: "https://www.instagram.com/p/DLCIyf0N2q5/",
    description: "Motorbikes in Sofia Centre",
  },
  
];

const GalleryPage = () => {
  // const abc = 123;

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="gap-2 sm:gap-4 columns-2 sm:columns-3 start-0 pb-2">
        {PHOTOS.map(({ thumbnail, insta_url, description }) => (
          <Link
            className="w-full"
            href={insta_url}
            key={insta_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="relative w-fit z-0 object-cover mb-2 rounded-2xl border border-transparent hover:border-neutral-500/70 cursor-pointer transition-colors"
              src={thumbnail}
              alt={description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
