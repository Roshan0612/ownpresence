import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { animateSection, animateCards } from "./animation";
const initialReviews = [
  {
    name: "Alice",
    review: "Great service and friendly staff!",
    rating: 5,
  },
  {
    name: "Bob",
    review: "Very satisfied with the experience.",
    rating: 4,
  },
  {
    name: "Charlie",
    review: "Could be better, but overall good.",
    rating: 3,
  },
];

const ClientReview: React.FC = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
  animateSection(".reviews-title");
  animateSection(".reviews-form", { start: "top 85%" });
  animateCards(".review-card");
}, []);


  useEffect(() => {
    gsap.fromTo(
      ".reviews-title",
      { opacity: 0, y: -40, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".reviews-form",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.6,
        ease: "power3.out",
      }
    );
  }, [reviews.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim() || rating === 0) {
      setError("Please enter your name, review, and rating.");
      return;
    }
    setReviews([...reviews, { name, review, rating }]);
    setName("");
    setReview("");
    setRating(0);
    setError("");
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-neutral-900 transition-colors reviews-section">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100 reviews-title">
          Client Reviews
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700 reviews-form"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:border-neutral-600"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 dark:border-neutral-600"
            />
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2">Rating:</span>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setRating(num)}
                className={`text-2xl mx-1 ${
                  rating >= num ? "text-yellow-400" : "text-gray-300"
                }`}
                aria-label={`Rate ${num} star${num > 1 ? "s" : ""}`}
              >
                ★
              </button>
            ))}
          </div>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </form>
        <div className="space-y-4">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 p-6 rounded-xl shadow-lg border border-transparent review-card transition-all duration-300 hover:scale-105"
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">
                {r.name}
              </div>
              <div className="text-gray-700 dark:text-gray-300 mb-2">
                {r.review}
              </div>
              <div className="text-yellow-500 font-bold text-lg">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;