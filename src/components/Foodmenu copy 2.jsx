


import React, { useState, useEffect } from 'react';
import './FoodMenu.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Add this import

const throttle = (func, limit) => {
  let inThrottle;
  let lastFunc;
  let lastRan;

  const throttledFunc = function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
    setTimeout(() => inThrottle = false, limit);
  };

  // ADD THIS PART:
  throttledFunc.cancel = () => {
    clearTimeout(lastFunc);
  };

  return throttledFunc;
};

const FoodMenu = () => {
// --- 1. HOOKS (Always at the top) ---
  const [activeTab, setActiveTab] = useState('online');
  const [activeCategory, setActiveCategory] = useState('New Here? Try these');
  const [menuData, setMenuData] = useState({ online: [], catering: [] });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
  const scrollRef = useRef(null);
  const gridRef = useRef(null); // Initialized at the top
  const location = useLocation();

  // --- 2. EFFECTS & LOGIC ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl).trim();
      setActiveCategory(decodedCategory);

      if (scrollRef.current) {
        setTimeout(() => {
          const activeElement = scrollRef.current.querySelector('.fx-sub-active');
          if (activeElement) {
            activeElement.scrollIntoView({ 
              behavior: 'smooth', 
              inline: 'center', 
              block: 'nearest' 
            });
          }
        }, 100);
      }
    }
  }, [location.search]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [menuData, activeTab]);


  useEffect(() => {
    // Mock Data based on your new structure
    const mockData = {
      online: [

        {
          category: "New Here? Try these",
          isVeg: false,
          items: [
            { id: 1, title: "Cheese Katori", description: "Two boiled eggs filled with spices & garnished with cheese", image: "/Cheese Katori.webp", icon: "/egg.svg", alt: `Cheese Katori - two spiced boiled eggs garnished with melted cheese` },
            { id: 2, title: "Dabeli (2 Pieces)", description: "Spicy potato filling in a bun with chutney, peanuts & Sev", image: "/Dabeli (2).webp", icon: "/gluten.svg", alt: `Dabeli - two pieces of spicy potato-filled buns with peanuts, chutney, and sev` },
            { id: 3, title: "Amdavadi Touch Sandwich", description: "Mashed potato, veggies, Indian sauces & Mayo", image: "/Amdavadi Touch.webp", icon: "/gluten.svg", alt: `Amdavadi Touch Sandwich - mashed potato, veggies, and Indian sauces with mayo` },
            { id: 4, title: "Anda Masala Sandwich", description: "Flavored eggs & veggies", image: "/Anda Masala.webp", icon: "/gluten.svg", alt: `Anda Masala Sandwich - flavored eggs and vegetables in a grilled sandwich` },
            { id: 5, title: "Hum-Tum", description: "Green garlic cooked with tomato & cheese gravy, topped with a sesame seed and chili", image: "/Hum-Tum.webp", icon: "/egg.svg", alt: `Hum-Tum - egg in green garlic tomato cheese gravy, topped with sesame and chili` },
            { id: 6, title: "Paneer Kadai", description: "Paneer cooked in a creamy gravy with onions and bell peppers", image: "/Paneer Kadai.webp", icon: "/veg.svg", alt: `Paneer Kadai - paneer cubes in creamy gravy with onions and bell peppers` },
            { id: 7, title: "Chicken Butter Masala ", description: "Boneless chicken cooked in a creamy onion-based gravy", image: "/Chicken Butter Masala.webp", icon: "/ckn.svg", alt: `Chicken Butter Masala - boneless halal chicken in rich, creamy onion-based gravy` },
            { id: 8, title: "Raja Da Chicken Kabob with Rice ", description: "Marinated Garlic flavored chicken kabobs grilled to perfection, served with rice & raita", image: "/Raja Da Chicken Kabob.webp", icon: "/ckn.svg", alt: `Raja Da Chicken Kabob with Rice - garlic-marinated grilled halal chicken kabobs with rice and raita` },
            { id: 9, title: "Lava Pulav", description: "Omelette topped with egg rice, made with spicy gravy & garnished with cheese", image: "/Lava Egg Pulav.webp", icon: "/egg.svg", alt: `Lava Pulav - omelette on spicy egg rice, garnished with cheese` },
          ]
        },

        {
          category: "Eggetizer",
          isVeg: false,
          items: [
            { id: 1, title: "Plain Boiled Egg ", description: "", image: "/egg-1.webp", icon: "/egg.svg", alt: `Plain Boiled Egg - two fresh whole boiled eggs, simply served` },
            { id: 2, title: "Green Boiled Fry ", description: "Two boiled eggs made in indian spices", image: "/green-boiled-fry.webp", icon: "/egg.svg", alt: `Green Boiled Fry - two boiled eggs cooked in Indian green spices` },
            { id: 3, title: "Cheese Katori", description: "Two boiled eggs filled with spices & garnished with cheese", image: "/Cheese Katori.webp", icon: "/egg.svg", alt: `Cheese Katori - two spiced boiled eggs garnished with melted cheese` },
            { id: 4, title: "French Toast ", description: "Pan fried bread soaked in Omelette batter", image: "/French Toast.webp", icon: "/egg.svg", alt: `French Toast - pan-fried bread soaked in an omelette batter, Indian style` },
            { id: 5, title: "Egg Bites", description: "Pan fried boiled eggs with Indian spices", image: "/Egg Bites.webp", icon: "/egg.svg", alt: `Egg Bites - pan-fried boiled eggs tossed in aromatic Indian spices` },

          ]
        },
        {
          category: "Holic Specials",
          isVeg: false,
          items: [
            { id: 1, title: "Boil Tikka", description: "Sliced boiled eggs with garlic & chillies", image: "/Boil Tikka.webp", icon: "/egg.svg", alt: `Boil Tikka - signature Eggholic boiled egg dish with tikka spice coating` },
            { id: 2, title: "Lachko", description: "Shredded green bell pepper cooked with cheese & running eggs", image: "/lachko.webp", icon: "/egg.svg", alt: `Lachko - a Holic Special egg preparation with rich Indian flavors` },
            { id: 3, title: "Lapeti", description: "Semi cooked omelette, stuffed with seasoned boiled eggs & cheese", image: "/lapeti.webp", icon: "/egg.svg", alt: `Lapeti - egg wrapped in spiced layers, a signature Holic Special` },
            { id: 4, title: "Surti Gotalo", description: "Shredded hard boiled eggs mixed with sunny side up in our special house spices", image: "/Surti Gotalo.webp", icon: "/egg.svg", alt: `Surti Gotalo - a Surat-style scrambled egg specialty` },
            { id: 5, title: "Toofani Curry ", description: "Pieces of boiled eggs cooked in a spicy gravy", image: "/Toofani Curry.webp", icon: "/egg.svg", alt: `Pieces of boiled eggs cooked in a spicy gravy` },
            { id: 6, title: "Malai Tikka ", description: "Surprise your taste buds with our Chef's secret gravy", image: "/Malai Tikka.webp", icon: "/egg.svg", alt: `Surprise your taste buds with our Chef's secret gravy` },

          ]
        },
        {
          category: "Eggcellent Egg",
          isVeg: false,
          items: [
            { id: 1, title: "Hum-Tum", description: "Green garlic cooked with tomato & cheese gravy, topped with a sesame seed and chili", image: "/Hum-Tum.webp", icon: "/egg.svg", alt: `Hum-Tum - egg in green garlic tomato cheese gravy, topped with sesame and chili` },
            { id: 2, title: "Gotalo 2.0", description: "Twist to your favorite gotalo with vibrant flavors of green garlic", image: "/Gotalo 2.0.webp", icon: "/egg.svg", alt: `Twist to your favorite gotalo with vibrant flavors of green garlic` },
            { id: 3, title: "Egg Bullet Fry", description: "A rich, creamy gravy topped with perfectly seasoned boiled eggs, sunny side ups, and a sprinkle of cheese", image: "/bullet.png", icon: "/egg.svg", alt: `Decadent egg curry recipe featuring runny sunny-side-up yolks and creamy gravy with cheese.` },

          ]
        },
        {
          category: "Straight from the street",
          isVeg: false,
          items: [
            { id: 1, title: "Desi Omelette", description: "Omelette made with tomatoes, onions, chillies", image: "/Desi Omelette.webp", icon: "/egg.svg", alt: `Desi Omelette - omelette made with tomatoes, onion, and green chillies`, alt: `Desi Omelette - classic Indian street-style omelette` },
            { id: 2, title: "Masala Half Fry", description: "Indian style sunny side up with veggies & spices", image: "/Masala Half Fry.webp", icon: "/egg.svg", alt: `Masala Half Fry - Indian sunny-side-up egg with vegetables and spices` },
            { id: 3, title: "Egg Bhurji ", description: "Scrambled eggs with veggies & spices", image: "/Egg Bhurji.webp", icon: "/egg.svg", alt: `Egg Bhurji - Indian-style scrambled eggs with vegetables and bold spices` },
            { id: 4, title: "Boiled Kheemo  ", description: "Shredded boiled eggs cooked with Indian spices & veggies AKA Desi Kheemo", image: "/Boiled Kheemo.webp", icon: "/egg.svg", alt: `Boiled Kheemo - shredded boiled eggs cooked with Indian spices and vegetables, also known as desi kheemo` },

          ]
        },
        {
          category: "Egg Grill Sandwiches",
          isVeg: false,
          items: [
            { id: 1, title: "Anda Masala Sandwich", description: "Flavored eggs & veggies", image: "/Anda Masala.webp", icon: "/gluten.svg", alt: `Anda Masala Sandwich - flavored eggs and vegetables in a grilled sandwich` },
            { id: 2, title: "Chatpata Anda Sandwich", description: "Sriracha flavored boiled eggs & veggies", image: "/Chatpata Anda.webp", icon: "/gluten.svg", alt: `Chatpata Anda - tangy, spicy masala egg dish` },

          ]
        },
        {
          category: "Egg Rice",
          isVeg: false,
          items: [
            { id: 1, title: "Bhurji Pulav", description: "Scrambled eggs with veggies & rice", image: "/Bhurji Pulav.webp", icon: "/egg.svg", alt: `Bhurji Pulav - Indian spiced scrambled egg rice` },
            { id: 2, title: "Anda Pulav", description: "Rice cooked with boiled eggs & Indian spices", image: "/Anda Pulav.webp", icon: "/egg.svg", alt: `Rice cooked with boiled eggs & Indian spices` },
            { id: 3, title: "Green Egg Rice", description: "Mint flavored egg rice with a tadka of mustard seeds & curry leaves", image: "/Green Rice.webp", icon: "/egg.svg", alt: `Close-up of vibrant green mint egg rice in a bowl, showing the texture of mustard seeds and glossy curry leaves.` },
            { id: 4, title: "Lava Pulav", description: "Omelette topped with egg rice, made with spicy gravy & garnished with cheese", image: "/Lava Egg Pulav.webp", icon: "/egg.svg", alt: `Lava Pulav - omelette on spicy egg rice, garnished with cheese` },

          ]
        },
        {
          category: "Chaats",
          isVeg: true,
          items: [
            { id: 1, title: "Samosa (2 Pieces)", description: "Crispy fried dumpling filled with spiced potatoes & peas. served with chutney", image: "/Samosa.webp", icon: "/gluten.svg", alt: `Golden-brown crispy fried dumplings filled with a savory spiced potato and pea stuffing, served with a side of vibrant dipping chutney.` },
            { id: 2, title: "Samosa Chaat", description: "Samosa with yougurt, tamarind sauce & tangy salty spices", image: "/Samosa Chaat.webp", icon: "/gluten.svg", alt: `Samosa Chaat - crispy samosa served with chutneys and toppings` },
            { id: 3, title: "Bhel", description: "Puffed rice with crispy wafers, tomato, & onion served with chutneys", image: "/Bhel.webp", icon: "/gluten.svg", alt: `Bhel Puri - puffed rice tossed with vegetables, chutneys, and sev` },
            { id: 4, title: "Pani-Puri", description: "Puffed wafers stuffed with chickpeas, potato; served with flavored water", image: "/Pani-Puri.webp", icon: "/gluten.svg", alt: `Pani Puri - hollow crispy shells filled with spiced water, potato, and chickpeas` },
            { id: 5, title: "Dahi-Puri ", description: "Puffed wafers stuffed with chickpeas, potato; topped with yogurt, chutneys and sev", image: "/Dahi-Puri .webp", icon: "/gluten.svg", alt: `Dahi Puri - crispy puris filled with yogurt, tamarind, and chutneys` },
            { id: 6, title: "Dabeli (2 Pieces)", description: "Spicy potato filling in a bun with chutney, peanuts & Sev", image: "/Dabeli (2).webp", icon: "/gluten.svg", alt: `Dabeli - two pieces of spicy potato-filled buns with peanuts, chutney, and sev` },
            { id: 7, title: "Vada-Pav (2 Pieces)", description: "A bun filled with spicy potato dumpling", image: "/vada-pav.jpg", icon: "/gluten.svg", alt: `Vada Pav - spiced potato fritter served in a bun with chutneys, a Mumbai street food classic` },
            { id: 8, title: "Maggi", description: "A quick and comforting noodle dish, seasoned with spices and served hot for the ultimate snack.", image: "/veg-maggi.jpg", icon: "/gluten.svg", alt: `Maggi - Indian-style spiced noodle cup, served as a snack beverage item` },

          ]
        },
        {
          category: "Grill Sandwiches",
          isVeg: true,
          items: [
            { id: 1, title: "Veg Cheese Grill Sandwich", description: "Tomato, cucumber, onion, potato and green bell peppers with Indian sauces", image: "/Veg Cheese Grill.webp", icon: "/gluten.svg", alt: `Veg Cheese Grill Sandwich - melted cheese and vegetables in a toasted Indian-style sandwich` },

            { id: 2, title: "Amdavadi Touch Sandwich", description: "Mashed potato, veggies, Indian sauces & Mayo", image: "/Amdavadi Touch.webp", icon: "/gluten.svg", alt: `Amdavadi Touch Sandwich - mashed potato, veggies, and Indian sauces with mayo` },
            { id: 3, title: "Paneer Masala Sandwich", description: "Marinated paneer, veggies & Mayo", image: "/Paneer Masala.webp", icon: "/gluten.svg", alt: `Paneer Masala Sandwich - spiced paneer filling in a grilled sandwich` },
            { id: 4, title: "Panner Toofani Sandwich", description: "Flavored paneer, veggies & mayo", image: "/Paneer Toofani.webp", icon: "/gluten.svg", alt: `Flavored paneer, veggies & mayo` },
            { id: 5, title: "Samosa Cheese Grill Sandwich", description: "Samosa, veggies, Indian sauces & Mayo", image: "/Samosa Cheese Grill.webp", icon: "/gluten.svg", alt: `Samosa Cheese Grill Sandwich - samosa filling with melted cheese in a toasted sandwich` },
            { id: 6, title: "Corn Masala Sandwich", description: "Flavored corn, veggies & mayo", image: "/Corn Masala .webp", icon: "/gluten.svg", alt: `Flavored corn, veggies & mayo` },

          ]
        },
        {
          category: "Shan-E-Veg",
          isVeg: true,
          items: [
            { id: 1, title: "Paneer Gotala", description: "Shredded Paneer cooked in Tomato based Gravy", image: "/Paneer Gotala.webp", icon: "/veg.svg", alt: `Paneer Gotala - crumbled paneer scrambled with Indian spices and vegetables` },
            { id: 2, title: "Methi Mutter Malai ", description: "Peas cooked in a creamy onion gravy with a hint of fenugreek", image: "/Methi Mutter Malai.webp", icon: "/nuts.svg", alt: `Peas cooked in a creamy onion gravy with a hint of fenugreek` },
            { id: 3, title: "Paneer Kadai", description: "Paneer cooked in a creamy gravy with onions and bell peppers", image: "/Paneer Kadai.webp", icon: "/veg.svg", alt: `Paneer Kadai - paneer cubes in creamy gravy with onions and bell peppers` },
            { id: 4, title: "Paneer Butter Masala", description: "Paneer cooked in a creamy onion-based gravy", image: "/Paneer Butter Masala.webp", icon: "/nuts.svg", alt: `Paneer Butter Masala - paneer cubes in a rich, buttery tomato-cream gravy` },
            { id: 5, title: "Paneer Bhurji", description: "Scrambled paneer with veggies & Indian spices", image: "/Paneer Bhurji.webp", icon: "/veg.svg", alt: `Scrambled paneer with veggies & Indian spices` },
            { id: 6, title: "Pav Bhaji", description: "Mashed veggies simmered with the perfect blend of Indian spices and garnished with fresh cilantro. Served with soft buttery bread.", image: "/Pav Bhaji.webp", icon: "/gluten.svg", alt: `Pav Bhaji - buttered bread rolls served with a thick, spiced vegetable mash` },
            { id: 7, title: "Chhole with Paratha", description: "Boiled chickpeas cooked with gravy; served with Paratha", image: "/Chole.webp", icon: "/veg.svg", alt: `Chhole with Paratha - spiced chickpea curry served with flaky whole wheat flatbread` },
            { id: 8, title: "Dal Makhani", description: "Black lentils cooked in a rich creamy gravy, served with Jeera Rice", image: "/Dal Makhani.webp", icon: "/veg.svg", alt: `Black lentils cooked in a rich creamy gravy, served with Jeera Rice` },
            { id: 9, title: "Dal Tadka", description: "Creamy Lentils cooked with Indian spices; Served with Jeera Rice.", image: "/Dal Tadka with Rice.webp", icon: "/veg.svg", alt: `Creamy Lentils cooked with Indian spices; Served with Jeera Rice.` },

          ]
        },
        {
          category: "Vegetarian Rice",
          isVeg: true,
          items: [
            { id: 1, title: "Veg Pulav", description: "Rice cooked with veggies & Indian spices", image: "/Veg Pulav.webp", icon: "/veg.svg", alt: `Veg Pulav - aromatic vegetarian spiced rice cooked with mixed vegetables` },
            { id: 2, title: "Lava Paneer Pulav", description: "Rice made with paneer spicy gravy & garnished with cheese", image: "/Lava Paneer Pulav.webp", icon: "/veg.svg", alt: `Lava Paneer Pulav - paneer-topped spiced rice with a rich gravy` },
            { id: 3, title: "Jeera Rice", description: "Indian cumin rice", image: "/Jeera Rice.webp", icon: "/veg.svg", alt: `Indian cumin rice` },
            { id: 4, title: "Hyderabadi Pulav", description: "Mint flavored veg rice with tadka of mustard seeds & curry leaves", image: "/Hyderabadi Pulav.webp", icon: "/veg.svg", alt: `Mint flavored veg rice with tadka of mustard seeds & curry leaves` },

          ]
        },
        {
          category: "CHICKEN (Halal)",
          isVeg: false,
          items: [
            { id: 1, title: "Holic Chicken Kabob with Rice ", description: "Marinated chicken kabobs grilled to perfection, served with rice & raita.", image: "/Holic Chicken Kabob with Rice.webp", icon: "/ckn.svg", alt: `Holic Chicken Kabob with Rice - halal grilled chicken kabobs served over rice with raita` },
            { id: 2, title: "Raja Da Chicken Kabob with Rice ", description: "Marinated Garlic flavored chicken kabobs grilled to perfection, served with rice & raita.", image: "/Raja Da Chicken Kabob.webp", icon: "/ckn.svg", alt: `Raja Da Chicken Kabob with Rice - garlic-marinated grilled halal chicken kabobs with rice and raita` },
            { id: 3, title: "Tandoori Chicken Kabob with Rice", description: "Marinated in a blend of Indian spices, grilled to perfection in a traditional tandoor oven", image: "/Tandoori Chicken Kabob.webp", icon: "/ckn.svg", alt: `Marinated in a blend of Indian spices, grilled to perfection in a traditional tandoor oven` },
            { id: 4, title: "Chicken Butter Masala ", description: "Boneless chicken cooked in a creamy onion-based gravy", image: "/Chicken Butter Masala.webp", icon: "/ckn.svg", alt: `Chicken Butter Masala - boneless halal chicken in rich, creamy onion-based gravy` },
            { id: 5, title: "Chicken Kadai ", description: "Boneless chicken cooked in a creamy gravy with onions & bell peppers", image: "/Chicken Kadai.webp", icon: "/ckn.svg", alt: `Boneless chicken cooked in a creamy gravy with onions & bell peppers` },
            { id: 6, title: "Toofani Chicken ", description: "Boneless chicken cooked in a spicy tomato gravy.", image: "/tufani-chicken.webp", icon: "/ckn.svg", alt: `Boneless chicken cooked in a spicy tomato gravy.` },
            { id: 7, title: "Malvani Chicken ", description: "Chicken cooked in an onion & coconut based gravy", image: "/malvani-chicken.webp", icon: "/ckn.svg", alt: `Chicken cooked in an onion & coconut based gravy` },
            { id: 8, title: "Chicken Pulav ", description: "Veggie rice with chicken; served with raita", image: "/Chicken Pulav.webp", icon: "/ckn.svg", alt: `Veggie rice with chicken; served with raita` },

          ]
        },
        {
          category: "Chicken Grill Sandwiches",
          isVeg: false,
          items: [
            { id: 1, title: "Chicken Masala Sandwich", description: "Marinated chicken & veggies", image: "/Chatpata Anda.webp", icon: "/hen.svg", alt: `Chicken Masala Sandwich - grilled sandwich filled with spiced halal chicken masala` },
            { id: 2, title: "Chatpata Chicken Sandwich ", description: "Sriracha flavored chicken & veggies", image: "/Chatpata Chicken Sandwich.webp", icon: "/hen.svg", alt: `Chatpata Chicken Sandwich` },

          ]
        }, {
          category: "Wraps",
          isVeg: false,
          items: [
            { id: 1, title: "Paneer Tikka Wrap", description: "Marinated paneer wrapped in a soft flat bread with Indian sauces", image: "/Paneer Tikka Wrap.webp", icon: "/gluten.svg", alt: `Paneer Tikka Wrap - grilled paneer and vegetables wrapped in a soft flatbread` },
            { id: 2, title: "Samosa Wrap ", description: "Mashed samosa wrapped in a soft flatbread with Indian sauces", image: "/Samosa Wrap.webp", icon: "/gluten.svg", alt: `Mashed samosa wrapped in a soft flatbread with Indian sauces` },
            { id: 3, title: "Chatpata Chicken Wrap ", description: "Sriracha flavored chicken wrapped in a soft flatbread with onions & Indian sauces", image: "/Chatpata Chicken Wrap .webp", icon: "/gluten.svg", alt: `Sriracha flavored chicken wrapped in a soft flatbread with onions & Indian sauces` },
            { id: 4, title: "Egg Wrap", description: "Shredded boiled eggs with onion, cheese & Indian spices wrapped in a soft flatbread", image: "/Egg Wrap.webp", icon: "/gluten.svg", alt: `Shredded boiled eggs with onion, cheese & Indian spices wrapped in a soft flatbread` },
            { id: 5, title: "Egg Chicken Wrap  ", description: "Flavored chicken & eggs wrapped in a soft flatbread with onions & Indian sauces", image: "/Egg Chicken Wrap.webp", icon: "/gluten.svg", alt: `Flavored chicken & eggs wrapped in a soft flatbread with onions & Indian sauces` },
            { id: 6, title: "Chicken Masala Wrap", description: "House flavored chicken wrapped in a soft flatbread with Indian sauces", image: "/roll.png", icon: "/gluten.svg", alt: `Chicken Masala Wrap - spiced halal chicken masala wrapped in a soft flatbrea` },

          ]
        },
        {
          category: "Kids Menu",
          isVeg: false,
          items: [
            { id: 1, title: "Paneer Tikka Wrap", description: "Marinated paneer wrapped in a soft flat bread with Indian sauces", image: "/Paneer Tikka Wrap.webp", icon: "/gluten.svg", alt: `Paneer Tikka Wrap - grilled paneer and vegetables wrapped in a soft flatbread` },
            { id: 2, title: "Cheese Jam Sandwich  ", description: "A sweet pineapple jam layered with cheese.", image: "/Cheese Jam Sandwich.webp", icon: "/gluten.svg", alt: `A sweet pineapple jam layered with cheese.` },
            { id: 3, title: "Scrambled Eggs with Bread ", description: "", image: "/scrambled.png", icon: "/gluten.svg", alt: `Scrambled Eggs with Bread` },
            { id: 4, title: "Plain Omelette with Bread ", description: "", image: "/omelette toast.webp", icon: "/gluten.svg", alt: `Plain Omelette with Bread` }
          ]
        },
        {
          category: "EXTRAS",
          isVeg: true,
          items: [
            { id: 1, title: "Bread (2 slices)", description: "", image: "/bread.png", icon: "/veg.svg", alt: `Bread - side bread available with Eggholic orders` },
            { id: 2, title: "Roti (Chapati) ", description: "", image: "/roti.webp", icon: "/veg.svg", alt: `Roti (Chapati)` },
            { id: 3, title: "Sweet Paan ", description: "betel leaves with a flavorful mix of sweet and aromatic ingredients,", image: "/Sweet Paan.webp", icon: "/veg.svg", alt: `Sweet Paan` },
            { id: 4, title: "Raita ", description: "A cool and creamy yogurt-based side dish mixed with fresh herbs and spices, perfect for balancing spicy flavors.", image: "/Raita.webp", icon: "/veg.svg", alt: `A cool and creamy yogurt-based side dish mixed with fresh herbs and spices, perfect for balancing spicy flavors.` },
            { id: 5, title: "Masala Papad ", description: "", image: "/Masala Papad.webp", icon: "/gluten.svg", alt: `Masala Papad - crispy lentil wafer topped with onion, tomato, and chutney` },
            // { id: 6, title: "Roasted papad", description: "", image: "/rosted.png", icon: "/gluten.svg" },
            { id: 7, title: "Pair of Pav", description: "", image: "/Pav.webp", icon: "/veg.svg", alt: `Pair of Pav` },
          ]
        },
        {
          category: "Desserts",
          isVeg: true,
          items: [
            { id: 1, title: "Kulfi ", description: "", image: "/Kulfi.webp", icon: "/veg.svg", alt: `Kulfi - traditional Indian frozen dessert, denser and creamier than ice cream` },
            { id: 2, title: "Rose Falooda ", description: "A refreshing, sweet drink made with rose syrup, milk, basil seeds, and ice cream, perfect for a cool treat.", image: "/Rose Falooda.webp", icon: "/veg.svg", alt: `Rose Falooda - chilled Indian dessert drink layered with rose syrup, basil seeds, and ice cream` },
            { id: 3, title: "Rabadi Falooda  ", description: "A rich, creamy dessert drink with chilled milk, falooda noodles, and a sweet touch of rabri, topped with nuts and rose syrup.", image: "/Rabadi Falooda.webp", icon: "/veg.svg", alt: `Rabadi Falooda - sweet rose-flavored layered dessert drink with vermicelli, basil seeds, and ice cream` },
            { id: 4, title: "Gulab Jamun with Ice Cream  ", description: "", image: "/Gulab Jamun with ice-cream.webp", icon: "/veg.svg", alt: `Gulab Jamun with Ice Cream` },
            { id: 5, title: "Brownie with Ice Cream", description: "", image: "/Brownie with ice-cream.webp", icon: "/veg.svg", alt: `Brownie with Ice Cream` },

          ]
        },
        {
          category: "BEVERAGES",
          isVeg: true,
          items: [
            { id: 1, title: "Masala Chhaas ", description: "Tangy & refreshing yogurt drink", image: "/chaas.png", icon: "/veg.svg", alt: `Chaas - chilled Indian spiced buttermilk drink` },
            { id: 2, title: "Mango Lassi ", description: "Mango flavored sweet yogurt", image: "/Mango Lassi.webp", icon: "/veg.svg", alt: `Mango flavored sweet yogurt` },
            { id: 3, title: "Sweet Lassi ", description: "Sweet yogurt", image: "/lassi.png", icon: "/veg.svg", alt: `Sweet yogurt` },
            { id: 4, title: "Rajwadi Lassi ", description: "Sweet yogurt topped with ice cream, cashews & almonds with rose flavor", image: "/Rajwadi Lassi.webp", icon: "/veg.svg", alt: `Rajwadi Lassi - sweet yogurt drink topped with ice cream, cashews, almonds, and rose flavor` },
            { id: 5, title: "Mango Mastani ", description: "Mango flavored yogurt with ice cream, cashews & almonds with khus flavor", image: "/Mango Mastani.webp", icon: "/veg.svg", alt: `Mango Mastani` },
            { id: 6, title: "Desi Chai ", description: "Indian flavored tea", image: "/Desi chai.webp", icon: "/veg.svg", alt: `Indian flavored tea` },
            { id: 7, title: "Soft Drink", description: "Coke, Diet Coke, Sprite", image: "/soft.png", icon: "/veg.svg", alt: `Coke, Diet Coke, Sprite` },
            { id: 8, title: "Indian Soft Drinks", description: "Indian soda", image: "/Indian Soft Drinks.webp", icon: "/veg.svg", alt: `Indian Soft Drinks` },

          ]
        },

      ],
      catering: [
        {
          category: "Party Packs",
          isVeg: false,
          items: [
            { id: 101, title: "Family Feast", description: "Large tray for 10 people.", image: "https://via.placeholder.com/300x300" }
          ]
        }
      ]
    };
    setMenuData(mockData);
  }, []);

const categoriesList = menuData[activeTab].map(catObj => catObj.category);

  // Updated filtering logic to include Search
  const getFilteredItems = () => {
    const currentTabData = menuData[activeTab];
    
    // If searching, filter globally across the active tab
    if (searchQuery.trim() !== '') {
      const allResults = [];
      currentTabData.forEach(cat => {
        cat.items.forEach(item => {
          const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesDesc = item.description.toLowerCase().includes(searchQuery.toLowerCase());
          if (matchesTitle || matchesDesc) {
            allResults.push({ ...item, isVeg: cat.isVeg });
          }
        });
      });
      return allResults;
    }

    // Normal Category filtering
    const selectedCatObj = currentTabData.find(cat => cat.category === activeCategory);
    return selectedCatObj
      ? selectedCatObj.items.map(item => ({ ...item, isVeg: selectedCatObj.isVeg }))
      : [];
  };

  const filteredItems = getFilteredItems();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery(''); // Reset search on tab change
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
    if (menuData[tab] && menuData[tab].length > 0) {
      setActiveCategory(menuData[tab][0].category);
    }
    setTimeout(checkScroll, 100);
  };



  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const distanceFromBottom = totalHeight - (scrollPosition + viewportHeight);
      setIsSticky(scrollPosition > 150);
      setIsAtBottom(distanceFromBottom < 100);
    }, 16);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const DIETARY_ALT_TEXT = {
    '/egg.svg': 'Contains Egg',
    '/gluten.svg': 'Contains Gluten',
    '/veg.svg': 'Vegetarian',
    '/ckn.svg': 'Contains Chicken (Halal)',
    '/hen.svg': 'Contains Chicken',
    '/nuts.svg': 'Contains Nuts'
  };

  return (
    <div className="fx-wrapper">

      <div className="cxz-toggle-container">
        <div className="cxz-toggle-wrapper shadow-sm">
          {/* Locations Link */}
          <NavLink
            to="/menu"
            className={
              "cxz-toggle-item cxz-active"}
          >
            <span> Menu</span>
          </NavLink>

          {/* Catering Link */}
          <NavLink
            to="/catering"
            className={({ isActive }) =>
              isActive ? "cxz-toggle-item cxz-active" : "cxz-toggle-item"
            }
          >
            <span>
              Catering
            </span>
          </NavLink>
        </div>
      </div>


    <div className="kgf-search-container">
  <div className="kgf-search-wrapper">
    <div className="kgf-search-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
    <input
      type="text"
      placeholder="Search for a dish (Press Enter)..."
      className="kgf-search-input"
      value={tempSearch}
      onChange={(e) => setTempSearch(e.target.value)}
      onKeyDown={handleKeyDown} 
    />
    {tempSearch && (
      <button className="kgf-search-clear" onClick={handleClear}>✕</button>
    )}
  </div>
</div>

      {/* Main Tabs */}
      <div className="fx-nav-controls">
        <button
          onClick={() => scroll('left')}
          className="fx-nav-arrow left-arrow"
          disabled={!canScrollLeft}
        >
          {"<"}
        </button>

        <button
          onClick={() => scroll('right')}
          className="fx-nav-arrow"
          disabled={!canScrollRight}
        >
          {">"}
        </button>
      </div>


      {/* Sub-Category Navigation */}
      <nav

        ref={gridRef}
        className={`fx-sub-nav ${isSticky ? 'is-sticky' : ''} ${isAtBottom ? 'fx-hidden' : ''}`}
      >
        <ul className="fx-sub-list" ref={scrollRef}>
          {categoriesList.map(cat => (
            <li
              key={cat}
              className={`fx-sub-item ${activeCategory === cat ? 'fx-sub-active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);

                // Only scroll to top if the screen width is less than 1024px (Mobile/Tablet)
                // On Desktop (>= 1024px), it will stay at the current scroll position
                if (window.innerWidth < 1024) {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>


      {/* <section className='max-menu'>
       <img src="/menutitle.svg" />
      </section> */}

      {/* Food Grid - Renders only items from the active category */}
      <div className="fx-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="fx-card">
            <span className='fx-icon'>

              <img src={item.icon} alt={DIETARY_ALT_TEXT[item.icon] || "Dietary Info"} />

            </span>
            <div className="fx-img-box">
              <img src={item.image} className="fx-img" alt={item.alt} />
            </div>
            <div className="fx-card-content">
              <h3 className="fx-card-title">{item.title}</h3>
              <p className="fx-card-desc">{item.description}</p>
              <a href="https://order.eggholic.com/" className="cv-order-link mmkj">Order now →</a>
            </div>

          </div>
        ))}
      </div>
    </div >
  );
};

export default FoodMenu;