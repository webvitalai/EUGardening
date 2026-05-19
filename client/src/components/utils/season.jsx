// src/utils/season.js

export const getCurrentSeason = () => {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";

  return "winter";
};

export const seasonData = {
  spring: {
    label: "Spring",
    emoji: "🌱",
    headline: "Spring is Here —\nIs Your Garden Ready?",
    description:
      "The perfect time to clear, feed and plant. Get your garden looking its best for the season ahead.",
    services: [
      "Garden Clearance & Tidy",
      "Lawn Scarification & Feeding",
      "New Planting & Borders",
      "Patio Cleaning",
    ],
    cta: "Book Spring Garden Clearance",
    color: "#4A7C59",
    bgColor: "#F2F7F2",
  },

  summer: {
    label: "Summer",
    emoji: "☀️",
    headline: "Keep Your Garden\nLooking Its Best",
    description:
      "Regular maintenance through summer keeps everything healthy, tidy and enjoyable.",
    services: [
      "Regular Lawn Mowing",
      "Hedge Trimming & Shaping",
      "Watering & Plant Care",
      "Patio & Decking Maintenance",
    ],
    cta: "Start a Summer Maintenance Plan",
    color: "#4A7C59",
    bgColor: "#F2F7F2",
  },

  autumn: {
    label: "Autumn",
    emoji: "🍂",
    headline: "Prepare Your Garden\nfor Winter",
    description:
      "Autumn preparation makes all the difference to how your garden emerges in spring.",
    services: [
      "Leaf Clearance",
      "Autumn Pruning",
      "Lawn Autumn Treatment",
      "Border Preparation",
    ],
    cta: "Book Autumn Garden Prep",
    color: "#4A7C59",
    bgColor: "#F2F7F2",
  },

  winter: {
    label: "Winter",
    emoji: "❄️",
    headline: "Plan Your Dream\nGarden for Spring",
    description:
      "Winter is the ideal time to plan, design and carry out structural garden work.",
    services: [
      "Tree Surgery & Pruning",
      "Garden Design Consultation",
      "Structural Landscaping",
      "Planning & Preparation",
    ],
    cta: "Plan Your Spring Garden Now",
    color: "#4A7C59",
    bgColor: "#F2F7F2",
  },
};