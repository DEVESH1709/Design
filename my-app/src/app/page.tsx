"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import mask from "/public/Mask.png"
import image1 from "/public/1.png"
import image2 from "/public/2.png"
import image3 from "/public/3.png"
import image4 from "/public/4.png"
import image5 from "/public/5.png"
import image6 from "/public/6.png"
import image7 from "/public/7.png"
import image8 from "/public/8.png"
import office from "/public/office.jpg"
import { BackgroundAnimation } from "./components/background-animation"
import { HeroBackground } from "./components/hero-background"
import {
 
  Search,
  Globe,
  Shield,
  Users,
  Award,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Target,
  BarChart,
  Users2,
  LeafIcon,
  ChevronDownIcon,
  PhoneCallIcon,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ExactAgencyDesign() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
     setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
     if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)}
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
     
      <BackgroundAnimation />

      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-2xl font-bold tracking-tight" whileHover={{ scale: 1.05 }}>
            <Image 
        src={mask}
        alt="My Image"
        width={150}
        height={100}
      />
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              {["Who we are", "What we do", "Insights", "Careers"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white-300 flex gap-2 hover:text-white transition-colors text-sm font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item} <ChevronDownIcon></ChevronDownIcon>
                  
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white">
                <Search className="h-4 w-4" />
              </Button>
               <Button className="border-gray-200"><PhoneCallIcon  className="h-4 w-4 white"></PhoneCallIcon>ContactUs</Button>
            </div>

           
          </div>

         
        </div>
      </motion.nav>

   
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 flex-1 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight"
              variants={fadeInUp}
            >
              TOGETHER WE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
               REINVENTED
              </span>
            </motion.h1>

            <motion.div className="max-w-3xl mx-auto mb-12" variants={fadeInUp}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
                Together, we can reinvent your business. Reinvention is about breaking industry norms. Our wide range of capabilities and unmatched industry experties can help your business become the next best version of itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium">
                   See what we do
                  </Button>
                </motion.div>
    
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#111111] relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 text-lg">Showcasing our creative projects and innovations</p>
          </motion.div>

          <motion.div
           
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
  variants={staggerContainer}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>

          
           <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image1}
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />


    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
  
  </Card>
</motion.div>


            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image2} 
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
   
  </Card>
</motion.div>


           <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image3}
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
  
  </Card>
</motion.div>

          
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image4} 
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />


    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
   
  </Card>
</motion.div>
 <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image5}
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />

  
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    
   
    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
   
  </Card>
</motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image6}
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />


    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    
 
    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
  
  </Card>
</motion.div>
    <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image7}
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    

    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
   
  </Card>
</motion.div>
    <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, y: -5 }}>
  <Card className="relative bg-gray-900 border border-gray-800 overflow-hidden h-100 group cursor-pointer rounded-lg">
    <Image
      src={image8}
      alt="Project Alt"
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      sizes="100%"
      priority
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    
    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
   
  </Card>
</motion.div>

          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm mb-4">The reason why Blackcoffer stands out</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Blackcoffer Unfolds Solutions To Everything
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-12 gap-4 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
     
            <motion.div className="col-span-12 md:col-span-4 lg:col-span-2" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-32 flex flex-col justify-center">
                <div className="text-3xl font-bold text-white mb-2">12+</div>
                <p className="text-white-400 text-sm">Years of Experience</p>
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-4 lg:col-span-2" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-32 flex flex-col justify-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <p className="text-white-400 text-sm">Clients</p>
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-4 lg:col-span-2" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-32 flex flex-col justify-center">
                <div className="text-3xl font-bold text-white mb-2">97%</div>
                <p className="text-white-400 text-sm">Client Retention Rate</p>
              </div>
            </motion.div>

            <motion.div className="col-span-12 lg:col-span-6 row-span-3" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden h-80 lg:h-96">
                <Image
                 src={office}
                  alt="Office Meeting"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-6 lg:col-span-3" variants={fadeInUp}>
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-800/50 rounded-lg p-6 h-40 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="text-8xl font-bold text-white-400/30 absolute -right-4 -top-4">AI</div>
                </div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-white mb-2">40+</div>
                  <p className="text-white-200 text-sm">AI solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-3 lg:col-span-2" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-40 flex flex-col justify-center">
                <div className="text-3xl font-bold text-white mb-2">350+</div>
                <p className="text-white-400 text-sm">Employees</p>
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-3 lg:col-span-1" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-40 flex flex-col justify-center">
                <div className="text-3xl font-bold text-white mb-2">2+</div>
                <p className="text-white-400 text-sm">Countries</p>
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-4 lg:col-span-2" variants={fadeInUp}>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-32 flex flex-col justify-center">
                <div className="text-3xl font-bold text-white mb-2">80+</div>
                <p className="text-white-400 text-sm">Big Data Solutions</p>
              </div>
            </motion.div>

            <motion.div className="col-span-12 md:col-span-8 lg:col-span-4" variants={fadeInUp}>
              <div className="bg-gray-900 border text-white border-gray-800 rounded-lg p-6 h-32 flex flex-col justify-center">
                <p className="text-gray-400 text-xs mb-2">Dedicated to</p>
                <h3 className="text-white font-semibold text-sm leading-tight">
                  Providing Top-Notch Big Data Analytics & BI Services
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#111111] relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes Us Different</h2>
            
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon:Target, title: "Consistency", color: "text-gray-400" },
              { icon: BarChart, title: "Improvement", color: "text-gray-400" },
              { icon: Globe, title: "Branching", color: "text-gray-400" },
              { icon: Users2, title: "Expertise", color: "text-gray-400" },
              { icon: Shield, title: "Security", color: "text-gray-400" },
              { icon: LeafIcon, title: "Transparency", color: "text-gray-400" },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group text-center"
              >
                <div className="bg-black-900  cursor-pointer border-gray-800 rounded-xl p-6 h-full hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <service.icon
                    className={`h-12 w-12 ${service.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-white font-semibold text-sm">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400 text-lg">What our clients say about working with us</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }}>
              <Card className="bg-gray-900 border-gray-800 p-8 h-full hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "Blackcoffee delivered exceptional results that exceeded our expectations. Their innovative approach
                    and attention to detail transformed our digital presence completely."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Sarah Johnson</h4>
                      <p className="text-gray-400 text-sm">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -5 }}>
              <Card className="bg-gray-900 border-gray-800 p-8 h-full hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "Outstanding work! The team's creativity and technical expertise resulted in a beautiful, functional
                    solution that perfectly represents our brand and vision."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Michael Chen</h4>
                      <p className="text-gray-400 text-sm">Founder, Creative Studio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r bg-black-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">REQUEST A CALL BACK</h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              When you need intelligent answer to your toughest questions, we're here to help. We're just a call away! Don't hang back from getting it touch with with us. We'll be glad to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="flex-1 cursor-pointer text-white w-100 bg-gray-900 border-2 hover:bg-black-100 font-semibold"
                >
                  
                REQUEST A CALL BACK
                </Button>
              </motion.div>
               
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] py-16 border-t border-gray-800 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
             <div>
              <h4 className="font-semibold mb-6 text-white">About us</h4>
              <ul className="space-y-3 text-gray-400">
                {["About Founder", "Contact us", "Team", "Location"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-6 text-white">FAQ</h4>
              <ul className="space-y-3 text-gray-400">
                {["Terms & Condition", "Carrers", "Solutions", "Our Process"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
               Taking seamless key performance indicators offline to maximize the long tail
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-gray-400 hover:text-white" />
                  </motion.div>
                ))}
              </div>
            </div>

      
           
          </div>
        </div>
      </footer>
    </div>
  )
}
