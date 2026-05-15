import { useState, useEffect, useCallback } from "react";
import "./Carousel.css";

const CARDS = [
    {
        id: 1,
        image: "/Personality Cards_01.png",
        alt : "Cheese Katori personality card - Mission Accomplished: a hearty egg dish for serious appetites that leaves nothing behind",
        heading: "Mission Accomplished",
        paragraph: "Shows up heavy and commits fully, every single time. Takes hunger personally, leaves absolutely nothing behind.",
    },
    {
        id: 2,
        image: "/Personality Cards_02.png",
        alt : "Hum-Tum personality card - Full Feeling: a rich, satisfying egg curry that makes you lean back with a smile",
        heading: "Full Feeling",
        paragraph: "The kind that slows you down from the first bite and makes you lean back with a smile.",
    },
    {
        id: 3,
        image: "/Personality Cards_03.png",
        heading: "Quietly Addictive",
        alt : "Lava Pulav personality card - Quietly Addictive: comforting egg rice that stays interesting and keeps you coming back",
        paragraph: "Looks innocent but knows exactly what it’s doing. Comfort that stays interesting, warm, and slightly dangerous.",
    },
    {
        id: 4,
        image: "/Personality Cards_04.png",
        heading: "Wakes You Up",
        alt : "Chatpata Anda personality card - Wakes You Up: a bold, unapologetically spicy egg dish with a sharp punch",
        paragraph: "Strangely addictive with a sharp, unapologetic punch. Proof that eggs can hit hard without warning.",
    },
    {
        id: 5,
        image: "/Personality Cards_05.png",
        heading: "A Well Defined Chemistry",
        alt : "Dabeli personality card - A Well Defined Chemistry: a shareable street snack that starts as sharing and ends in happy stealing of bites",
        paragraph: "Never stays on one side for too long. Starts as sharing, ends as stealing bites.",
    },
    {
        id: 6,
        image: "/Personality Cards_06.png",
        heading: "Cheesy Calm",
        alt : "Amdavadi Touch Sandwich personality card - Cheesy Calm: a soft, cheesy sandwich that is impossible to stop eating",
        paragraph: "Soft, messy, and impossible to stop going back. Keeps you locked in every single bite.",
    },


];

/* ── Custom hook: cards visible at current breakpoint ── */
function useCardsPerView() {
    const getCount = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth < 600) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [count, setCount] = useState(getCount);

    useEffect(() => {
        const handle = () => setCount(getCount());
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);

    return count;
}

/* ── Main Component ── */
export default function Carousel() {
    const [index, setIndex] = useState(0);   // first visible card index
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [animDir, setAnimDir] = useState(null); // "next" | "prev" | null
    const [busy, setBusy] = useState(false);

    const cardsPerView = useCardsPerView();

    const isFirst = index === 0;
    const isLast = index + cardsPerView >= CARDS.length;

    /* Reset to start when breakpoint changes */
    useEffect(() => { setIndex(0); }, [cardsPerView]);

    /* Navigate by direction */
  const go = useCallback(
    (dir) => {
        if (busy) return;

        setBusy(true);
        // Index ko turant update karein, 430ms ka wait na karein
        setIndex((prev) => {
            if (dir === "next")
                return Math.min(prev + 1, CARDS.length - cardsPerView); // +1 se swipe smooth hota hai, +cardsPerView se jump
            return Math.max(prev - 1, 0);
        });

        // Busy state ko thodi der baad reset karein taaki spamming na ho
        setTimeout(() => {
            setBusy(false);
        }, 400); // Ye sirf accidental double-clicks rokne ke liye hai
    },
    [busy, cardsPerView]
);
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        if (distance > minSwipeDistance) {
            go("next");
        }

        if (distance < -minSwipeDistance) {
            go("prev");
        }
    };

    /* Jump to a specific card index (used by dots) */
    const jumpToCard = useCallback(
        (cardIndex) => {
            if (busy) return;
            // clamp so we never show a partial set
            const newIndex = Math.min(cardIndex, CARDS.length - cardsPerView);
            if (newIndex === index) return;
            const dir = newIndex > index ? "next" : "prev";
            setAnimDir(dir);
            setBusy(true);
            setTimeout(() => {
                setIndex(newIndex);
                setBusy(false);
                setAnimDir(null);
            }, 100);
        },
        [busy, cardsPerView, index]
    );


    return (
        <section className="carousel-section">

            {/* ── Stage: arrows + viewport ── */}
            <div className="carousel-stage">

                {/* Left arrow (desktop only) */}
                <button
                    className={`carousel-arrow carousel-arrow--left${isFirst ? " carousel-arrow--disabled" : ""}`}
                    onClick={() => go("prev")}
                    disabled={isFirst}
                    aria-label="Previous cards"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Viewport — overflow hidden so only N cards show */}
                <div className="carousel-viewport"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="carousel-track"
                        style={{
                            "--cpv": cardsPerView,
                            transform: `translateX(calc(-${index} * ((100% - (var(--gap) * (${cardsPerView} - 1))) / ${cardsPerView} + var(--gap))))`
                        }}
                    >
                        {CARDS.map((card, i) => (
                            <div
                                key={card.id}
                                className="carousel-card"
                                style={{ "--delay": `${i * 60}ms` }}
                                onClick={() =>  window.location.href = "https://order.eggholic.com/"}
                            >
                                {/* Full-bleed image */}
                                <img
                                    src={card.image}
                                    alt={card.heading}
                                    className="carousel-card__img"
                                    loading="lazy"
                                />

                                {/* Text overlay at the bottom of the image */}
                                <div className="carousel-card__overlay">
                                    <h3 className="carousel-card__heading">{card.heading}</h3>
                                    <p className="carousel-card__para">{card.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right arrow (desktop only) */}
                <button
                    className={`carousel-arrow carousel-arrow--right${isLast ? " carousel-arrow--disabled" : ""}`}
                    onClick={() => go("next")}
                    disabled={isLast}
                    aria-label="Next cards"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

            </div>{/* /stage */}

            {/* ── Dots — one per card, mobile only ── */}
            <div className="carousel-dots" role="tablist" aria-label="Select card">
                {CARDS.map((card, i) => {
                    const isActive = i >= index && i < index + cardsPerView;
                    return (
                        <button
                            key={card.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-label={`Show card ${i + 1}: ${card.heading}`}
                            className={`carousel-dot${isActive ? " carousel-dot--active" : ""}`}
                            onClick={() => jumpToCard(i)}
                        />
                    );
                })}
            </div>

        </section>
    );
}