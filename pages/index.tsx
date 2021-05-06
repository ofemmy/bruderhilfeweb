import { Navbar, Hero } from "../components";
import Link from "next/link";
export default function Home(params) {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center relative space-x-16">
          <div className="w-1/2 relative z-20">
            <img
              src="vision.png"
              alt="Bruder Hilfe vision"
              className="w-full h-full relative z-20 object-cover"
            />
            <img src="pattern2.png" alt="" className="absolute -bottom-12 -left-20 h-[336.73px] w-[228px]"/>
           
          </div>
          <div className="w-1/2 space-y-8">
            <h2 className="text-custom-black font-extrabold text-4xl tracking-wide mt-12">Our Vision</h2>
            <p className="text-custom-gray leading-relaxed font-light text-md">
              Bruder Hilfe is a charity organization located in Nigeria and
              Germany, dedicated to improving the health, education, of
              children, men and women both in cities and rural areas through
              community projects, infrastructural projects thereby creating more
              opportunities for children, adults and families in rural areas and
              communities. <br/> Our mission is to embark on sustainable
              social-economic initiatives and programmes that will lead to the
              empowerment of the disadvantaged and marginalized members of the
              society and ensure the fulfilment of the right of all humans to
              live in security, dignity and peace.
            </p>
            <Link href="/donate">
              <a className="inline-flex items-center px-8 py-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );

}

{/* <svg
className="block absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/2 z-10"
width={428}
height={500}
fill="none"
viewBox="0 0 404 784"
aria-hidden="true"
>
<defs>
  <pattern
    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
    x={0}
    y={0}
    width={20}
    height={20}
    patternUnits="userSpaceOnUse"
  >
 
    
     <rect
      x={0}
      y={0}
      width={10}
      height={10}
      className="text-green-pattern"
      fill="currentColor"
    />
  </pattern>
</defs>

<rect
  width={400}
  height={600}
  fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
  className="bg-red-100"
/>
</svg> */}
