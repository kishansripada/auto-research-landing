import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
   return (
      <div className="flex flex-col min-h-screen h-[100vh] text-white">
         <div className="absolute top-0 left-0 w-full h-full white p-3 pointer-events-none">
            <div className="w-full h-full relative -z-10 pointer-events-none">
               <img
                  className=" w-full h-full rounded-xl object-cover object-center absolute pointer-events-none"
                  src="/picnic-cherry-tree.webp"
                  alt="logo"
               />
               <div className="bg-black/60 w-full h-full rounded-xl absolute  pointer-events-none"></div>
            </div>
         </div>
         <header className="px-4 lg:px-12 h-20  flex items-center justify-center">
            <Link className="flex items-center justify-center" href="#">
               {/* <p className="text-5xl mr-2">💌</p> */}
               <span className="ml-2 text-xl font-medium mt-12">enrichly</span>
            </Link>
         </header>

         {/* <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"> */}
         <div className="flex flex-col justify-center w-full items-center mt-[100px]">
            <div className=" max-w-[800px] text-center flex flex-col items-center justify-center">
               <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl xl:text-7xl/none max-w-[400px] md:max-w-[800px]">
                  win more deals with custom sales materials
               </h1>
               <p className=" text-neutral-300 md:text-lg mt-10 max-w-[400px] md:max-w-[700px]">
                  instantly create personalized pitch decks, custom visuals, and branded presentations that wow prospects over email and sales calls.
               </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 ">
               <Button asChild className="">
                  <Link href="https://calendly.com/kishansripada/30min">book a demo</Link>
               </Button>
               <p className="text-xs text-gray-300 mt-2">see how our AI can transform your sales outreach.</p>
            </div>
         </div>
         {/* <div className="flex items-center justify-center">
                        {logoUrl ? (
                           <div className="flex flex-row w-full h-full gap-10  ">
                              <div className="aspect-video flex flex-col justify-center items-center overflow-hidden rounded-xl object-cover object-center">
                                 <p className="text-[200px]">💌</p>
                              </div>
                              <p className="text-[100px] my-auto">×</p>
                              <Image
                                 alt="Hero"
                                 className=" overflow-hidden rounded-xl object-cover object-center"
                                 height="200"
                                 src={logoUrl}
                                 width="300"
                              />
                           </div>
                        ) : (
                           <Image
                              alt="Hero"
                              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                              height="310"
                              src="/placeholder.svg"
                              width="550"
                           />
                        )}
                     </div> */}
         {/* </div> */}
      </div>
   );
}
