import { v4 as uuidv4 } from 'uuid';

const lens = [
  {
    type: "1,5 SV UT",
    id: uuidv4(),
    price: 0,
    cat: "SV"
  },
  {
    type: "1,5 SV UCL",
    id: uuidv4(),
    price: 800,
    cat: "SV"
  },
  {
    type: "1,5 SV UCSC",
    id: uuidv4(),
    price: 1000,
    cat: "SV"
  },
  {
    type: "1,5 SV Lifestyle",
    id: uuidv4(),
    price: 1700,
    cat: "SV"
  },
  {
    type: "1,5 SV Asph UT",
    id: uuidv4(),
    price: 400,
    cat: "SV"
  },
  {
    type: "1,5 SV Asph UCL",
    id: uuidv4(),
    price: 1200,
    cat: "SV"
  },
  {
    type: "1,5 SV Asph UCSC",
    id: uuidv4(),
    price: 1400,
    cat: "SV"
  },
  {
    type: "1,6 SV UCL",
    id: uuidv4(),
    price: 1200,
    cat: "SV"
  },
  {
    type: "1,6 SV UCSC",
    id: uuidv4(),
    price: 1400,
    cat: "SV"
  },
  {
    type: "1,6 SV Lifestyle",
    id: uuidv4(),
    price: 2100,
    cat: "SV"
  },
  {
    type: "1,67 SV UCSC",
    id: uuidv4(),
    price: 2200,
    cat: "SV"
  },
  {
    type: "1,67 SV Lifestyle",
    id: uuidv4(),
    price: 2900,
    cat: "SV"
  },
  {
    type: "1,74 SV UCSC",
    id: uuidv4(),
    price: 2700,
    cat: "SV"
  },
  {
    type: "1,74 SV Lifestyle",
    id: uuidv4(),
    price: 3400,
    cat: "SV"
  },

  {
    type: "1,5 SV UT m/farge",
    id: uuidv4(),
    price: 400,
    cat: "SV m/farge"
  },
  {
    type: "1,5 SV UCL m/farge",
    id: uuidv4(),
    price: 1200,
    cat: "SV m/farge"
  },
  {
    type: "1,5 SV UCSC m/farge",
    id: uuidv4(),
    price: 1400,
    cat: "SV m/farge"
  },
  {
    type: "1,5 SV Lifestyle m/farge",
    id: uuidv4(),
    price: 2100,
    cat: "SV m/farge"
  },
  {
    type: "1,5 SV Asph UT m/farge",
    id: uuidv4(),
    price: 900,
    cat: "SV m/farge"
  },
  {
    type: "1,5 SV Asph UCL m/farge",
    id: uuidv4(),
    price: 1600,
    cat: "SV m/farge"
  },
  {
    type: "1,5 SV Asph UCSC m/farge",
    id: uuidv4(),
    price: 1800,
    cat: "SV m/farge"
  },
  {
    type: "1,6 SV UCL m/farge",
    id: uuidv4(),
    price: 1600,
    cat: "SV m/farge"
  },
  {
    type: "1,6 SV UCSC m/farge",
    id: uuidv4(),
    price: 1800,
    cat: "SV m/farge"
  },
  {
    type: "1,6 SV Lifestyle m/farge",
    id: uuidv4(),
    price: 2500,
    cat: "SV m/farge"
  },
  {
    type: "1,67 SV UCSC m/farge",
    id: uuidv4(),
    price: 2600,
    cat: "SV m/farge"
  },
  {
    type: "1,67 SV Lifestyle m/farge",
    id: uuidv4(),
    price: 3300,
    cat: "SV m/farge"
  },
  {
    type: "1,74 SV UCSC m/farge",
    id: uuidv4(),
    price: 3100,
    cat: "SV m/farge"
  },
  {
    type: "1,74 SV Lifestyle m/farge",
    id: uuidv4(),
    price: 3800,
    cat: "SV m/farge"
  },

  {
    type: "1,5 SV Reactions UT",
    id: uuidv4(),
    price: 800,
    cat: "SV Reactions"
  },
  {
    type: "1,5 SV Reactions UCL",
    id: uuidv4(),
    price: 1600,
    cat: "SV Reactions"
  },
  {
    type: "1,5 SV Reactions UCSC",
    id: uuidv4(),
    price: 1800,
    cat: "SV Reactions"
  },
  {
    type: "1,5 SV Reactions Lifestyle",
    id: uuidv4(),
    price: 2500,
    cat: "SV Reactions"
  },
  {
    type: "1,6 SV Reactions UCL",
    id: uuidv4(),
    price: 2000,
    cat: "SV Reactions"
  },
  {
    type: "1,6 SV Reactions UCSC",
    id: uuidv4(),
    price: 2200,
    cat: "SV Reactions"
  },
  {
    type: "1,6 SV Reactions Lifestyle",
    id: uuidv4(),
    price: 2900,
    cat: "SV Reactions"
  },
  {
    type: "1,67 SV Reactions UCL",
    id: uuidv4(),
    price: 3000,
    cat: "SV Reactions"
  },
  {
    type: "1,67 SV Reactions Lifestyle",
    id: uuidv4(),
    price: 2700,
    cat: "SV Reactions"
  },

  {
    type: "1,5 SV Polariserte UT",
    id: uuidv4(),
    price: 1000,
    cat: "SV Polariserte"
  },
  {
    type: "1,5 SV Polariserte UCL",
    id: uuidv4(),
    price: 1800,
    cat: "SV Polariserte"
  },
  {
    type: "1,5 SV Polariserte UCSC",
    id: uuidv4(),
    price: 2000,
    cat: "SV Polariserte"
  },
  {
    type: "1,5 SV Polariserte Lifestyle",
    id: uuidv4(),
    price: 2700,
    cat: "SV Polariserte"
  },
  {
    type: "1,6 SV Polariserte UCL",
    id: uuidv4(),
    price: 2200,
    cat: "SV Polariserte"
  },
  {
    type: "1,6 SV Polariserte UCSC",
    id: uuidv4(),
    price: 2400,
    cat: "SV Polariserte"
  },
  {
    type: "1,6 SV Polariserte Lifestyle",
    id: uuidv4(),
    price: 3100,
    cat: "SV Polariserte"
  },
  {
    type: "1,67 SV Polariserte UCL",
    id: uuidv4(),
    price: 3200,
    cat: "SV Polariserte"
  },
  {
    type: "1,67 SV Polariserte Lifestyle",
    id: uuidv4(),
    price: 3900,
    cat: "SV Polariserte"
  },
  


  {
    type: "1,5 Standard UT",
    id: uuidv4(),
    price: 800,
    cat: "Standard" 
  },
  {
    type: "1,5 Standard UCSC",
    id: uuidv4(),
    price: 1800,
    cat: "Standard" 
  },
  {
    type: "1,6 Standard UCL",
    id: uuidv4(),
    price: 2100,
    cat: "Standard" 
  },
  {
    type: "1,6 Standard UCSC",
    id: uuidv4(),
    price: 2300,
    cat: "Standard" 
  },
  {
    type: "1,67 Standard UCSC",
    id: uuidv4(),
    price: 3000,
    cat: "Standard" 
  },
  {
    type: "1,74 Standard UCSC",
    id: uuidv4(),
    price: 3500,
    cat: "Standard" 
  },

  {
    type: "1,5 Standard UT m/farge",
    id: uuidv4(),
    price: 1200,
    cat: "Standard m/farge" 
  },
  {
    type: "1,6 Standard UCL m/farge",
    id: uuidv4(),
    price: 2500,
    cat: "Standard m/farge" 
  },
  {
    type: "1,6 Standard UCSC m/farge",
    id: uuidv4(),
    price: 2700,
    cat: "Standard m/farge" 
  },
  {
    type: "1,67 Standard UCSC m/farge",
    id: uuidv4(),
    price: 3400,
    cat: "Standard m/farge" 
  },
  {
    type: "1,74 Standard UCSC m/farge",
    id: uuidv4(),
    price: 3900,
    cat: "Standard m/farge" 
  },

  {
    type: "1,5 Standard UT Reactions",
    id: uuidv4(),
    price: 1600,
    cat: "Standard Reactions" 
  },
  {
    type: "1,5 Standard UCSC Reactions",
    id: uuidv4(),
    price: 2600,
    cat: "Standard Reactions" 
  },
  {
    type: "1,6 Standard UCL Reactions",
    id: uuidv4(),
    price: 2900,
    cat: "Standard Reactions" 
  },
  {
    type: "1,6 Standard UCSC Reactions",
    id: uuidv4(),
    price: 3100,
    cat: "Standard Reactions" 
  },
  {
    type: "1,67 Standard UCSC Reactions",
    id: uuidv4(),
    price: 3800,
    cat: "Standard Reactions" 
  },

  {
    type: "1,5 Standard UT Polarisert",
    id: uuidv4(),
    price: 1800,
    cat: "Standard Polarisert" 
  },
  {
    type: "1,5 Standard UCSC Polarisert",
    id: uuidv4(),
    price: 2800,
    cat: "Standard Polarisert" 
  },
  {
    type: "1,6 Standard UCL Polarisert",
    id: uuidv4(),
    price: 3100,
    cat: "Standard Polarisert" 
  },
  {
    type: "1,6 Standard UCSC Polarisert",
    id: uuidv4(),
    price: 3300,
    cat: "Standard Polarisert" 
  },
  {
    type: "1,67 Standard UCSC Polarisert",
    id: uuidv4(),
    price: 4000,
    cat: "Standard Polarisert" 
  },
  
  


  {
    type: "1,5 Premium UT",
    id: uuidv4(),
    price: 2600,
    cat: "Premium" 
  },
  {
    type: "1,5 Premium UCSC",
    id: uuidv4(),
    price: 3600,
    cat: "Premium" 
  },
  {
    type: "1,6 Premium UCL",
    id: uuidv4(),
    price: 3900,
    cat: "Premium" 
  },
  {
    type: "1,6 Premium UCSC",
    id: uuidv4(),
    price: 4100,
    cat: "Premium" 
  },
  {
    type: "1,67 Premium UCSC",
    id: uuidv4(),
    price: 4800,
    cat: "Premium" 
  },
  {
    type: "1,74 Premium UCSC",
    id: uuidv4(),
    price: 5300,
    cat: "Premium" 
  },

  {
    type: "1,5 Premium UT m/farge",
    id: uuidv4(),
    price: 3000,
    cat: "Premium m/farge" 
  },
  {
    type: "1,5 Premium UCSC m/farge",
    id: uuidv4(),
    price: 4000,
    cat: "Premium m/farge" 
  },
  {
    type: "1,6 Premium UCL m/farge",
    id: uuidv4(),
    price: 4300,
    cat: "Premium m/farge" 
  },
  {
    type: "1,6 Premium UCSC m/farge",
    id: uuidv4(),
    price: 4500,
    cat: "Premium m/farge" 
  },
  {
    type: "1,67 Premium UCSC m/farge",
    id: uuidv4(),
    price: 5300,
    cat: "Premium m/farge" 
  },
  {
    type: "1,74 Premium UCSC m/farge",
    id: uuidv4(),
    price: 5700,
    cat: "Premium m/farge" 
  },

  {
    type: "1,5 Premium UT Polarisert",
    id: uuidv4(),
    price: 3600,
    cat: "Premium Polarisert" 
  },
  {
    type: "1,5 Premium UCSC Polarisert",
    id: uuidv4(),
    price: 4600,
    cat: "Premium Polarisert" 
  },
  {
    type: "1,6 Premium UCL Polarisert",
    id: uuidv4(),
    price: 4900,
    cat: "Premium Polarisert" 
  },
  {
    type: "1,6 Premium UCSC Polarisert",
    id: uuidv4(),
    price: 5100,
    cat: "Premium Polarisert" 
  },
  {
    type: "1,67 Premium UCSC Polarisert",
    id: uuidv4(),
    price: 5800,
    cat: "Premium Polarisert" 
  },

  {
    type: "1,5 Elite UT",
    id: uuidv4(),
    price: 3600,
    cat: "Elite" 
  },
  {
    type: "1,5 Elite UCSC",
    id: uuidv4(),
    price: 4600,
    cat: "Elite" 
  },
  {
    type: "1,6 Elite UCL",
    id: uuidv4(),
    price: 4900,
    cat: "Elite" 
  },
  {
    type: "1,6 Elite UCSC",
    id: uuidv4(),
    price: 5100,
    cat: "Elite" 
  },
  {
    type: "1,67 Elite UCSC",
    id: uuidv4(),
    price: 5800,
    cat: "Elite" 
  },
  {
    type: "1,74 Elite UCSC",
    id: uuidv4(),
    price: 6300,
    cat: "Elite" 
  },

  {
    type: "1,5 Elite UT m/farge",
    id: uuidv4(),
    price: 4000,
    cat: "Elite m/farge" 
  },
  {
    type: "1,5 Elite UCSC m/farge",
    id: uuidv4(),
    price: 5000,
    cat: "Elite m/farge" 
  },
  {
    type: "1,6 Elite UCL m/farge",
    id: uuidv4(),
    price: 5300,
    cat: "Elite m/farge" 
  },
  {
    type: "1,6 Elite UCSC m/farge",
    id: uuidv4(),
    price: 5500,
    cat: "Elite m/farge" 
  },
  {
    type: "1,67 Elite UCSC m/farge",
    id: uuidv4(),
    price: 6200,
    cat: "Elite m/farge" 
  },
  {
    type: "1,74 Elite UCSC m/farge",
    id: uuidv4(),
    price: 6700,
    cat: "Elite m/farge" 
  },

  {
    type: "1,5 Elite UT Reactions",
    id: uuidv4(),
    price: 4400,
    cat: "Elite Reactions" 
  },
  {
    type: "1,5 Elite UCSC Reactions",
    id: uuidv4(),
    price: 5400,
    cat: "Elite Reactions" 
  },
  {
    type: "1,6 Elite UCL Reactions",
    id: uuidv4(),
    price: 5700,
    cat: "Elite Reactions" 
  },
  {
    type: "1,6 Elite UCSC Reactions",
    id: uuidv4(),
    price: 5900,
    cat: "Elite Reactions" 
  },
  {
    type: "1,67 Elite UCSC Reactions",
    id: uuidv4(),
    price: 6600,
    cat: "Elite Reactions" 
  },

  {
    type: "1,5 Elite UT Polarisert",
    id: uuidv4(),
    price: 4600,
    cat: "Elite Polarisert" 
  },
  {
    type: "1,5 Elite UCSC Polarisert",
    id: uuidv4(),
    price: 5600,
    cat: "Elite Polarisert" 
  },
  {
    type: "1,6 Elite UCL Polarisert",
    id: uuidv4(),
    price: 5900,
    cat: "Elite Polarisert" 
  },
  {
    type: "1,6 Elite UCSC Polarisert",
    id: uuidv4(),
    price: 6100,
    cat: "Elite Polarisert" 
  },
  {
    type: "1,67 Elite UCSC Polarisert",
    id: uuidv4(),
    price: 6800,
    cat: "Elite Polarisert" 
  },

  {
    type: "1,5 Ultimate UT",
    id: uuidv4(),
    price: 4100,
    cat: "Ultimate" 
  },
  {
    type: "1,5 Ultimate UCSC",
    id: uuidv4(),
    price: 5100,
    cat: "Ultimate" 
  },
  {
    type: "1,6 Ultimate UCL",
    id: uuidv4(),
    price: 5400,
    cat: "Ultimate" 
  },
  {
    type: "1,6 Ultimate UCSC",
    id: uuidv4(),
    price: 5600,
    cat: "Ultimate" 
  },
  {
    type: "1,67 Ultimate UCSC",
    id: uuidv4(),
    price: 6300,
    cat: "Ultimate" 
  },
  {
    type: "1,74 Ultimate UCSC",
    id: uuidv4(),
    price: 6800,
    cat: "Ultimate" 
  },

  {
    type: "1,5 Ultimate UT m/farge",
    id: uuidv4(),
    price: 4500,
    cat: "Ultimate m/farge" 
  },
  {
    type: "1,5 Ultimate UCSC m/farge",
    id: uuidv4(),
    price: 5500,
    cat: "Ultimate m/farge" 
  },
  {
    type: "1,6 Ultimate UCL m/farge",
    id: uuidv4(),
    price: 5900,
    cat: "Ultimate m/farge" 
  },
  {
    type: "1,6 Ultimate UCSC m/farge",
    id: uuidv4(),
    price: 6000,
    cat: "Ultimate m/farge" 
  },
  {
    type: "1,67 Ultimate UCSC m/farge",
    id: uuidv4(),
    price: 6700,
    cat: "Ultimate m/farge" 
  },
  {
    type: "1,74 Ultimate UCSC m/farge",
    id: uuidv4(),
    price: 7200,
    cat: "Ultimate m/farge" 
  },

  {
    type: "1,5 Ultimate UT Reactions",
    id: uuidv4(),
    price: 4900,
    cat: "Ultimate Reactions" 
  },
  {
    type: "1,5 Ultimate UCSC Reactions",
    id: uuidv4(),
    price: 5900,
    cat: "Ultimate Reactions" 
  },
  {
    type: "1,6 Ultimate UCL Reactions",
    id: uuidv4(),
    price: 6200,
    cat: "Ultimate Reactions" 
  },
  {
    type: "1,6 Ultimate UCSC Reactions",
    id: uuidv4(),
    price: 6400,
    cat: "Ultimate Reactions" 
  },
  {
    type: "1,67 Ultimate UCSC Reactions",
    id: uuidv4(),
    price: 7100,
    cat: "Ultimate Reactions" 
  },
  
  {
    type: "1,5 Ultimate UT Polariserte",
    id: uuidv4(),
    price: 5100,
    cat: "Ultimate Polariserte" 
  },
  {
    type: "1,5 Ultimate UCSC Polariserte",
    id: uuidv4(),
    price: 6100,
    cat: "Ultimate Polariserte" 
  },
  {
    type: "1,6 Ultimate UCL Polariserte",
    id: uuidv4(),
    price: 6400,
    cat: "Ultimate Polariserte" 
  },
  {
    type: "1,6 Ultimate UCSC Polariserte",
    id: uuidv4(),
    price: 6600,
    cat: "Ultimate Polariserte" 
  },
  {
    type: "1,67 Ultimate UCSC Polariserte",
    id: uuidv4(),
    price: 7300,
    cat: "Ultimate Polariserte" 
  },
  
  {
    type: "1,5 Lifestyle UT",
    id: uuidv4(),
    price: 5800,
    cat: "Lifestyle" 
  },
  {
    type: "1,5 Lifestyle UCSC",
    id: uuidv4(),
    price: 6800,
    cat: "Lifestyle" 
  },
  {
    type: "1,6 Lifestyle UCL",
    id: uuidv4(),
    price: 6100,
    cat: "Lifestyle" 
  },
  {
    type: "1,6 Lifestyle UCSC",
    id: uuidv4(),
    price: 6300,
    cat: "Lifestyle" 
  },
  {
    type: "1,67 Lifestyle UCSC",
    id: uuidv4(),
    price: 7000,
    cat: "Lifestyle" 
  },
  {
    type: "1,74 Lifestyle UCSC",
    id: uuidv4(),
    price: 7500,
    cat: "Lifestyle" 
  },

  {
    type: "1,5 Lifestyle UT m/farge",
    id: uuidv4(),
    price: 6200,
    cat: "Lifestyle m/farge" 
  },
  {
    type: "1,5 Lifestyle UCSC m/farge",
    id: uuidv4(),
    price: 7200,
    cat: "Lifestyle m/farge" 
  },
  {
    type: "1,6 Lifestyle UCL m/farge",
    id: uuidv4(),
    price: 6500,
    cat: "Lifestyle m/farge" 
  },
  {
    type: "1,6 Lifestyle UCSC m/farge",
    id: uuidv4(),
    price: 6700,
    cat: "Lifestyle m/farge" 
  },
  {
    type: "1,67 Lifestyle UCSC m/farge",
    id: uuidv4(),
    price: 7400,
    cat: "Lifestyle m/farge" 
  },
  {
    type: "1,74 Lifestyle UCSC m/farge",
    id: uuidv4(),
    price: 7900,
    cat: "Lifestyle m/farge" 
  },

  {
    type: "1,5 Lifestyle UT Reactions",
    id: uuidv4(),
    price: 6600,
    cat: "Lifestyle Reactions" 
  },
  {
    type: "1,5 Lifestyle UCSC Reactions",
    id: uuidv4(),
    price: 7600,
    cat: "Lifestyle Reactions" 
  },
  {
    type: "1,6 Lifestyle UCL Reactions",
    id: uuidv4(),
    price: 6900,
    cat: "Lifestyle Reactions" 
  },
  {
    type: "1,6 Lifestyle UCSC Reactions",
    id: uuidv4(),
    price: 7100,
    cat: "Lifestyle Reactions" 
  },
  {
    type: "1,67 Lifestyle UCSC Reactions",
    id: uuidv4(),
    price: 7800,
    cat: "Lifestyle Reactions" 
  },

  {
    type: "1,5 Lifestyle UT Polariserte",
    id: uuidv4(),
    price: 6800,
    cat: "Lifestyle Polariserte" 
  },
  {
    type: "1,5 Lifestyle UCSC Polariserte",
    id: uuidv4(),
    price: 8600,
    cat: "Lifestyle Polariserte" 
  },
  {
    type: "1,6 Lifestyle UCL Polariserte",
    id: uuidv4(),
    price: 7100,
    cat: "Lifestyle Polariserte" 
  },
  {
    type: "1,6 Lifestyle UCSC Polariserte",
    id: uuidv4(),
    price: 7300,
    cat: "Lifestyle Polariserte" 
  },
  {
    type: "1,67 Lifestyle UCSC Polariserte",
    id: uuidv4(),
    price: 8000,
    cat: "Lifestyle Polariserte" 
  },

]

export default lens