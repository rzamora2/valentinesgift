"useClient";

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
    name: "Rockies",
    icon: "🏔️",
    photos: [
      {
        src: "/images/rockies-photo1.jpg",
        caption: "Caption for rockies-photo1",
      },
      {
        src: "/images/rockies-photo2.jpg",
        caption: "Caption for rockies-photo2",
      },
    ],
  },
  {
    name: "Colombia",
    icon: "🇨🇴",
    photos: [
      {
        src: "/images/colombia-photo1.jpg",
        caption: "Caption for colombia-photo1",
      },
      {
        src: "/images/colombia-photo2.jpg",
        caption: "Caption for colombia-photo2",
      },
    ],
  },
  {
    name: "Illinois",
    icon: "🌆",
    photos: [
      {
        src: "/images/illinois-photo1.jpg",
        caption: "Caption for illinois-photo1",
      },
      {
        src: "/images/illinois-photo2.jpg",
        caption: "Caption for illinois-photo2",
      },
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
        Happy Valentine&apos;s Day, Mi Amor!
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
              Click to open your gift!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {isFirstGiftOpen && (
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            {currentLocation?.name}
          </h2>
          <div className="flex flex-wrap justify-center">
            {currentLocation?.photos.map((photo, index) => (
              <div
                key={index}
                className="m-2 cursor-pointer"
                onClick={handleLocationClick}
              >
                <LocationIcon
                  icon={currentLocation.icon}
                  name={""}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {showingPhotos && currentLocation && (
        <PhotoGallery
          photos={currentLocation.photos}
          onClose={handleClosePhotos}
        />
      )}

      {showFinalSurprise && (
        <FinalSurprise
          onReset={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </div>
  );
}
