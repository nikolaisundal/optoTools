import { v4 as uuidv4 } from 'uuid';

const lens = [
    {
      type: "SV 1.5 UT",
      id: uuidv4(),
      price: 0,
      cat: "SV"
    },
    {
      type: "SV 1.5 UCL",
      id: uuidv4(),
      price: 800,
      cat: "SV"
    },
    {
      type: "SV 1.5 UCSC",
      id: uuidv4(),
      price: 1000,
      cat: "SV"
    },
    {
      type: "SV 1.5 Lifestyle",
      id: uuidv4(),
      price: 1700,
      cat: "SV"
    },
    {
      type: "SV 1.5 Asph UT",
      id: uuidv4(),
      price: 400,
      cat: "SV"
    },
    {
      type: "SV 1.5 Asph UCL",
      id: uuidv4(),
      price: 1200,
      cat: "SV"
    },
    {
      type: "SV 1.5 Asph UCSC",
      id: uuidv4(),
      price: 1400,
      cat: "SV"
    },
    {
      type: "SV 1.6 UCL",
      id: uuidv4(),
      price: 1200,
      cat: "SV"
    },
    {
      type: "SV 1.6 UCSC",
      id: uuidv4(),
      price: 1400,
      cat: "SV"
    },
    {
      type: "SV 1.6 Lifestyle",
      id: uuidv4(),
      price: 2100,
      cat: "SV"
    },
    {
      type: "SV 1.67 UCSC",
      id: uuidv4(),
      price: 2200,
      cat: "SV"
    },
    {
      type: "SV 1.67 Lifestyle",
      id: uuidv4(),
      price: 2900,
      cat: "SV"
    },
    {
      type: "SV 1.74 UCSC",
      id: uuidv4(),
      price: 2700,
      cat: "SV"
    },
    {
      type: "SV 1.74 Lifestyle",
      id: uuidv4(),
      price: 3400,
      cat: "SV"
    },

    {
      type: "SV 1.5 Reactions UT",
      id: uuidv4(),
      price: 800,
      cat: "SV reactions"
    },
    {
      type: "SV 1.5 Reactions UCL",
      id: uuidv4(),
      price: 1600,
      cat: "SV reactions"
    },
    {
      type: "SV 1.5 Reactions UCSC",
      id: uuidv4(),
      price: 1800,
      cat: "SV reactions"
    },
    {
      type: "SV 1.5 Reactions Lifestyle",
      id: uuidv4(),
      price: 2500,
      cat: "SV reactions"
    },
    {
      type: "SV 1.6 Reactions UCL",
      id: uuidv4(),
      price: 2000,
      cat: "SV reactions"
    },
    {
      type: "SV 1.6 Reactions UCSC",
      id: uuidv4(),
      price: 2200,
      cat: "SV reactions"
    },
    {
      type: "SV 1.6 Reactions Lifestyle",
      id: uuidv4(),
      price: 2900,
      cat: "SV reactions"
    },
    {
      type: "SV 1.67 Reactions UCL",
      id: uuidv4(),
      price: 3200,
      cat: "SV reactions"
    },
    {
      type: "SV 1.67 Reactions Lifestyle",
      id: uuidv4(),
      price: 2900,
      cat: "SV reactions"
    },
    


    {
      type: "1.5 Standard UT",
      id: uuidv4(),
      price: 800,
      cat: "Standard" 
    },
    {
      type: "1.6 Standard UCL",
      id: uuidv4(),
      price: 2100,
      cat: "Standard" 
    },
    {
      type: "1.6 Standard UCSC",
      id: uuidv4(),
      price: 2300,
      cat: "Standard" 
    },
    {
      type: "1.67 Standard UCSC",
      id: uuidv4(),
      price: 3000,
      cat: "Standard" 
    },
    {
      type: "1.74 Standard UCSC",
      id: uuidv4(),
      price: 3500,
      cat: "Standard" 
    },

    {
      type: "1.5 Standard UT m/farge",
      id: uuidv4(),
      price: 1200,
      cat: "Standard m/farge" 
    },
    {
      type: "1.6 Standard UCL m/farge",
      id: uuidv4(),
      price: 2500,
      cat: "Standard m/farge" 
    },
    {
      type: "1.6 Standard UCSC m/farge",
      id: uuidv4(),
      price: 2700,
      cat: "Standard m/farge" 
    },
    {
      type: "1.67 Standard UCSC m/farge",
      id: uuidv4(),
      price: 3400,
      cat: "Standard m/farge" 
    },
    {
      type: "1.74 Standard UCSC m/farge",
      id: uuidv4(),
      price: 3900,
      cat: "Standard m/farge" 
    },

    {
      type: "1.5 Standard UT Reactions",
      id: uuidv4(),
      price: 1600,
      cat: "Standard Reactions" 
    },
    {
      type: "1.6 Standard UCL Reactions",
      id: uuidv4(),
      price: 2900,
      cat: "Standard Reactions" 
    },
    {
      type: "1.6 Standard UCSC Reactions",
      id: uuidv4(),
      price: 3100,
      cat: "Standard Reactions" 
    },
    {
      type: "1.67 Standard UCSC Reactions",
      id: uuidv4(),
      price: 3800,
      cat: "Standard Reactions" 
    },
    


    {
      type: "1.5 Premium UT",
      id: uuidv4(),
      price: 2600,
      cat: "Premium" 
    },
    {
      type: "1.5 Premium UT",
      id: uuidv4(),
      price: 2600,
      cat: "Premium" 
    },
    {
      type: "1.6 Premium UCSC",
      id: uuidv4(),
      price: 4100,
      cat: "Premium" 
    },
    {
      type: "1.67 Premium UCSC",
      id: uuidv4(),
      price: 4800,
      cat: "Premium" 
    },
    {
      type: "1.74 Premium UCSC",
      id: uuidv4(),
      price: 5300,
      cat: "Premium" 
    },
    {
      type: "1.5 Premium UT m/farge",
      id: uuidv4(),
      price: 3000,
      cat: "Premium sol" 
    },
    {
      type: "1.6 Premium UCSC m/farge",
      id: uuidv4(),
      price: 4500,
      cat: "Premium sol" 
    },
    {
      type: "1.67 Premium UCSC m/farge",
      id: uuidv4(),
      price: 5300,
      cat: "Premium sol" 
    },
    {
      type: "1.74 Premium UCSC m/farge",
      id: uuidv4(),
      price: 5700,
      cat: "Premium sol" 
    },
  ]

export default lens