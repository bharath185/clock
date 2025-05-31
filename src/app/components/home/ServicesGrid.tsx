"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const mainServices = [
  { 
    id: 1,
    name: "AC Repair", 
    icon: "❄️", 
    desc: "24/7 Cooling Solutions",
    subServices: [
      {
        title: "Split AC Repair",
        desc: "Expert repair for all split AC models",
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Gas Refilling",
        desc: "Professional gas refilling services",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "AC Maintenance",
        desc: "Regular maintenance packages",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },  {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 2,
    name: "Electrical", 
    icon: "⚡", 
    desc: "Wiring & Maintenance",
    subServices: [
      {
        title: "Wiring Installation",
        desc: "Complete home/office wiring solutions",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Switchboard Repair",
        desc: "Faulty switchboard diagnostics and repair",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Lighting Solutions",
        desc: "Modern lighting installations",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },  {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 3,
    name: "Plumbing", 
    icon: "🚿", 
    desc: "Leakage & Pipe Repair",
    subServices: [
      {
        title: "Pipe Repair",
        desc: "Fix leaks and broken pipes",
        image: "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Drain Cleaning",
        desc: "Clogged drain solutions",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Bathroom Fixtures",
        desc: "Installation and repair",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
        {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 4,
    name: "Appliance", 
    icon: "🔌", 
    desc: "Repair & Maintenance",
    subServices: [
      {
        title: "Refrigerator Repair",
        desc: "Cooling system maintenance",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Washing Machine",
        desc: "Motor and drum repairs",
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Microwave Oven",
        desc: "Heating element replacement",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
        {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 5,
    name: "Carpentry", 
    icon: "🪚", 
    desc: "Furniture & Fixtures",
    subServices: [
      {
        title: "Furniture Repair",
        desc: "Restoration and polishing",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Custom Woodwork",
        desc: "Tailored carpentry solutions",
        image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Door Installation",
        desc: "Precision fitting and alignment",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },  {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 6,
    name: "Painting", 
    icon: "🎨", 
    desc: "Interior & Exterior",
    subServices: [
      {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Waterproofing",
        desc: "Dampness protection",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Texture Coating",
        desc: "Decorative wall finishes",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },  {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 7,
    name: "Emergency", 
    icon: "🚨", 
    desc: "Instant Response",
    subServices: [
      {
        title: "24/7 Support",
        desc: "Round the clock service",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Quick Fix",
        desc: "Temporary solutions",
        image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Leak Control",
        desc: "Immediate water damage control",
        image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  { 
    id: 8,
    name: "Installation", 
    icon: "🛠️", 
    desc: "Professional Setup",
    subServices: [
      {
        title: "AC Installation",
        desc: "Expert unit setup",
        image: "https://images.unsplash.com/photo-1600566752229-250ed79470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Appliance Setup",
        desc: "Safe installation",
        image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Smart Home",
        desc: "Automation solutions",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },  {
        title: "Wall Painting",
        desc: "Premium finish painting",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  }
];
export function ServicesGrid() {
  const [activeService, setActiveService] = useState(mainServices[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = mainServices.findIndex(s => s.id === activeService.id);
      const nextIndex = (currentIndex + 1) % mainServices.length;
      setActiveService(mainServices[nextIndex]);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeService.id]);

  if (isMobile) {
    return (
      <div className="px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 rounded-lg shadow-sm h-full ${activeService.id === service.id ? 'bg-blue-50 border-2 border-blue-300' : 'bg-white border'}`}
              onClick={() => setActiveService(service)}
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">{activeService.name} Services</h3>
          <div className="grid grid-cols-1 gap-4">
            {activeService.subServices.map((sub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="border rounded-lg overflow-hidden shadow-sm h-full"
              >
                <img 
                  src={sub.image} 
                  alt={sub.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-semibold">{sub.title}</h4>
                  <p className="text-sm text-gray-600">{sub.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Services</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Left Column - Main Services (4 cards per row) */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 h-full">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 rounded-lg cursor-pointer transition-all h-full flex flex-col ${activeService.id === service.id ? 'bg-blue-50 border-2 border-blue-300 shadow-md' : 'bg-white border hover:bg-gray-50'}`}
                onClick={() => setActiveService(service)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center flex-grow">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Sub Services */}
        <div className="lg:w-1/2">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col"
          >
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{activeService.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-blue-600">{activeService.name}</h2>
                <p className="text-gray-600">{activeService.desc}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
              {activeService.subServices.map((sub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={sub.image} 
                    alt={sub.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold text-lg mb-2">{sub.title}</h3>
                    <p className="text-gray-600 text-sm">{sub.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 