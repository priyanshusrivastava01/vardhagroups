const mongoose = require('mongoose');
const Venture = require('../models/Venture');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vardha_group');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed default ventures matching the reference image layout
    await seedVentures();
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

const seedVentures = async () => {
  try {
    const count = await Venture.countDocuments();
    if (count === 0) {
      console.log('No ventures found. Seeding default holdings portfolio...');
      
      const venturesList = [
        {
          title: "FMCG",
          slug: "fmcg",
          description: "Premium organic skin care, cosmetics, and wellness products manufactured to global luxury standards.",
          logo: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=150",
          coverImage: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600",
          websiteUrl: "https://vardha-fmcg.com",
          category: "FMCG",
          isFeatured: true,
          displayOrder: 0,
          status: true
        },
        {
          title: "STOCK MARKET TRADING",
          slug: "stock-market-trading",
          description: "Quantitative algorithmic trading, asset management, and equity advisory services.",
          logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=150",
          coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600",
          websiteUrl: "https://vardha-finance.com",
          category: "FINANCE",
          isFeatured: true,
          displayOrder: 1,
          status: true
        },
        {
          title: "WEBSITE DESIGNING",
          slug: "website-designing",
          description: "Bespoke digital design, immersive user experiences, and luxury web design solutions.",
          logo: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=150",
          coverImage: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600",
          websiteUrl: "https://vardha-web.com",
          category: "TECHNOLOGY",
          isFeatured: true,
          displayOrder: 2,
          status: true
        },
        {
          title: "APP DEVELOPMENT",
          slug: "app-development",
          description: "Sleek iOS and Android application development focusing on responsive premium layouts.",
          logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=150",
          coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600",
          websiteUrl: "https://vardha-apps.com",
          category: "TECHNOLOGY",
          isFeatured: true,
          displayOrder: 3,
          status: true
        },
        {
          title: "CO-WORKING SPACE",
          slug: "co-working-space",
          description: "Luxury workspace environments, state-of-the-art office infrastructure, and community ecosystems.",
          logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=150",
          coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
          websiteUrl: "https://vardha-coworking.com",
          category: "COMMUNITY",
          isFeatured: true,
          displayOrder: 4,
          status: true
        },
        {
          title: "REAL ESTATE",
          slug: "real-estate",
          description: "Premium commercial and luxury residential properties built for sustainable futures.",
          logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=150",
          coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600",
          websiteUrl: "https://vardha-realestate.com",
          category: "REAL ESTATE",
          isFeatured: true,
          displayOrder: 5,
          status: true
        }
      ];

      await Venture.insertMany(venturesList);
      console.log('Seeded 6 luxury ventures matching layout.');
    } else {
      console.log('Ventures exist in database. Skipping seeding.');
    }
  } catch (error) {
    console.error(`Error seeding ventures: ${error.message}`);
  }
};

module.exports = connectDB;
