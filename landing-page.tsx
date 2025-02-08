import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Twitter, Newspaper, PresentationIcon as PresentationChart, Send, MicroscopeIcon as MagnifyingGlassIcon } from "lucide-react";
import { useEffect } from "react";

export default function LandingPage() {
   const searchParams = useSearchParams();
   const logoUrl = searchParams.get("logoUrl");

   return (
      <div className="flex flex-col min-h-screen">
         <header className="px-4 lg:px-12 h-20  flex items-center justify-between">
            <Link className="flex items-center justify-center" href="#">
               <p className="text-5xl mr-2">💌</p>
               <span className="ml-2 text-2xl font-medium">enrichly</span>
            </Link>
            <Button asChild>
               <Link href="#book-demo">Book a Demo</Link>
            </Button>
         </header>
         <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 lg:px-10">
               <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Supercharge Your Sales Outreach</h1>
                           <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                              Automatically research companies, generate custom assets, and create personalized outreach materials.
                           </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                           <Button asChild className="w-full">
                              <Link href="#book-demo">Book a Demo</Link>
                           </Button>
                           <p className="text-xs text-gray-500 dark:text-gray-400">See how our AI can transform your sales outreach.</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
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
                     </div>
                  </div>
               </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
               <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center mb-12">How It Works</h2>
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                     <Card className="bg-white dark:bg-gray-900 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-200">
                        <CardHeader>
                           <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                              <MagnifyingGlassIcon className="h-6 w-6 text-indigo-600" />
                              Automatic Research
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 dark:text-gray-300">
                           Our AI scans multiple sources to gather comprehensive information about your target companies.
                        </CardContent>
                     </Card>
                     <Card className="bg-white dark:bg-gray-900 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-200">
                        <CardHeader>
                           <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                              <PresentationChart className="h-6 w-6 text-green-600" />
                              Custom Asset Generation
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 dark:text-gray-300">
                           Create tailored presentations, images, and other assets based on the gathered intelligence.
                        </CardContent>
                     </Card>
                     <Card className="bg-white dark:bg-gray-900 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-200">
                        <CardHeader>
                           <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                              <Send className="h-6 w-6 text-purple-600" />
                              Personalized Outreach
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-700 dark:text-gray-300">
                           Use the generated assets and insights to craft highly personalized outreach campaigns.
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
               <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Comprehensive Research</h2>
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                     <div className="flex flex-col items-center space-y-4 text-center">
                        <Youtube className="h-12 w-12 text-red-600" />
                        <h3 className="text-xl font-bold">YouTube Analysis</h3>
                        <p className="text-gray-500 dark:text-gray-400">Analyze company videos and presentations to gather valuable insights.</p>
                     </div>
                     <div className="flex flex-col items-center space-y-4 text-center">
                        <Twitter className="h-12 w-12 text-blue-400" />
                        <h3 className="text-xl font-bold">Twitter Intelligence</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                           Track social media presence and engagement to understand company culture and priorities.
                        </p>
                     </div>
                     <div className="flex flex-col items-center space-y-4 text-center">
                        <Newspaper className="h-12 w-12 text-gray-600" />
                        <h3 className="text-xl font-bold">Recent News</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                           Stay updated with the latest news and developments about your target companies.
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            <section id="book-demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
               <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Sales Outreach?</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Join thousands of sales professionals who are closing more deals with our AI-powered research and asset generation
                           platform.
                        </p>
                     </div>
                     <div className="w-full max-w-sm space-y-2">
                        <Button className="w-full">Book a Demo</Button>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Our team will contact you to schedule a personalized demo.</p>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 enrichly . All rights reserved.</p>
         </footer>
      </div>
   );
}
