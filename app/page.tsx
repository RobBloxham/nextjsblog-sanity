import Image from "next/image";


async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    
  }`;
  
}

export default function Home() {
  return (
    <div>

    </div>
  );
}
