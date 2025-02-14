"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import LocationIcon from "./components/LocationIcon";
import PhotoGallery from "./components/PhotoGallery";
import FinalSurprise from "./components/FinalSurprise";

const locations = [
  {
    name: "Texas",
    icon: "🤠",
    photos: [
      { src: "/ama1.jpg", caption: "Chasewood had a nice pool" },
      { src: "/ama2.jpg", caption: "One of MANY sushi + sake nights" },
      { src: "/austin1.jpg", caption: "KEEP AUSTIN WEIRD" },
      { src: "/cap1.jpg", caption: "Camping in la media de nada" },
      { src: "/corpus1.jpg", caption: "First beach day" },
      { src: "/dal1.jpg", caption: "New Years in Six Flags" },
      { src: "/f1.jpg", caption: "Racing + Eminem = Focking Chimba" },
      { src: "/fred1.jpg", caption: "Oh Ja Alstadt Bier ist Gut" },

      { src: "/palo1.jpg", caption: "Todo Instagram Influencer Couple" },
      {
        src: "/mov1.jpg",
        caption: "The start of our new adventure across Texas",
      },
    ],
  },
  {
    name: "Las Montañas",
    icon: "🏔️",
    photos: [
      {
        src: "/colo1.jpg",
        caption: "Why do I have two different gloves?",
      },
      {
        src: "/colo2.jpg",
        caption: "USA: the land of drive thru mountains",
      },
      { src: "/guad1.jpg", caption: "First of many mountains" },
      { src: "/guad2.jpg", caption: "The highest couple in Texas" },
      { src: "/nm1.jpg", caption: "We really went to Balloon Fiesta twice" },
      { src: "/nm2.jpg", caption: "Coolest hot springs (so far)" },
      { src: "/nm3.jpg", caption: "Literally la media de nada" },
      { src: "/nm4.jpg", caption: "I really put Balloon Fiesta photos twice" },
      {
        src: "/nm5.jpg",
        caption: "Three times? I mean it was very fun with you",
      },
    ],
  },
  {
    name: "Colombia",
    icon: "🇨🇴",
    photos: [
      { src: "/colom1.jpg", caption: "Una Pareja Seria y Profesional" },
      { src: "/colom2.jpg", caption: "How to be gringo part 23453" },
      { src: "/colom3.jpg", caption: "Jardin Botanico, o La Selva?" },
      { src: "/colom4.jpg", caption: "Just a really cute picture" },
      { src: "/colom5.jpg", caption: "Lake Meredith but Green" },
      {
        src: "/colom6.jpg",
        caption: "Con la cerveza en la mano y mi amor a mi lado",
      },
    ],
  },
  {
    name: "Chicago",
    icon: "🌆",
    photos: [
      {
        src: "/chi1.jpg",
        caption: "First Frozen Lake (MediPark does not count)",
      },
      { src: "/chi2.jpg", caption: "Wow the sky was so clear that day!" },
      {
        src: "/chi3.jpg",
        caption: "A picture with the greatest of all time, and Michael Jordan",
      },
      { src: "/chi4.jpg", caption: "Yesicanha y Ricardinho" },
    ],
  },
];

export default function ValentinesGiftClient() {
  const [isFirstGiftOpen, setIsFirstGiftOpen] = useState(false);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(-1);
  const [showingPhotos, setShowingPhotos] = useState(false);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);

  const currentLocation = locations[currentLocationIndex];

  const handleGiftOpen = () => {
    setIsFirstGiftOpen(true);
    setCurrentLocationIndex(0);
  };

  const handleLocationClick = () => {
    setShowingPhotos(true);
  };

  const handleClosePhotos = () => {
    setShowingPhotos(false);
    if (currentLocationIndex < locations.length - 1) {
      setCurrentLocationIndex(currentLocationIndex + 1);
    } else {
      setShowFinalSurprise(true);
    }
  };

  const handleReset = () => {
    setIsFirstGiftOpen(false);
    setCurrentLocationIndex(-1);
    setShowingPhotos(false);
    setShowFinalSurprise(false);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-8">
        Happy Valentine's Day, Mi Amor!
      </h1>

      <AnimatePresence mode="wait">
        {!isFirstGiftOpen && (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGiftOpen}
            className="cursor-pointer"
          >
            <Gift size={200} color="#e91e63" />
            <p className="text-center mt-4 text-xl text-pink-600">
              Click to unwrap!
            </p>
          </motion.div>
        )}

        {isFirstGiftOpen &&
          currentLocation &&
          !showingPhotos &&
          !showFinalSurprise && (
            <motion.div
              key={currentLocation.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <LocationIcon
                name={currentLocation.name}
                icon={currentLocation.icon}
                onClick={handleLocationClick}
                size="large"
              />
              <p className="mt-4 text-xl text-pink-600">
                Our memories from {currentLocation.name}!
              </p>
            </motion.div>
          )}

        {showingPhotos && (
          <PhotoGallery
            key="photos"
            photos={currentLocation.photos}
            onClose={handleClosePhotos}
          />
        )}

        {showFinalSurprise && (
          <FinalSurprise key="final" onReset={handleReset} />
        )}
      </AnimatePresence>
    </div>
  );
}
