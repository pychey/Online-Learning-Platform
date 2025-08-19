import { khmerToEnglishNumber } from "../../utils/khmerToEnglishNumber.js";

const StarRating = ({ ratingNumber = true ,rating, className = 'flex text-base select-none', outline = true }) => {
  const englishRating = khmerToEnglishNumber(rating);

  return (
    <div className={className}>
      {ratingNumber && <span className="text-yellow-400 mr-1.5 font-medium">{rating}</span>}
      {Array.from({ length: 5 }, (_, i) => {
        const fillLevel = Math.min(Math.max(englishRating - i, 0), 1) * 100;

        return (
          <span
            key={i}
            className="relative inline-block text-white"
            style={ outline ? { WebkitTextStroke: "1px #facc15" } : { }}
          >
            <span
              className={`absolute top-0 left-0 overflow-hidden text-yellow-400 pointer-events-none`}
              style={{ width: `${fillLevel}%` }}
            >
              ★
            </span>
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
