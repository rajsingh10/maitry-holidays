import React from "react";

// List of specific place and temple names to bold when no colon is present
const PLACES_TO_BOLD = [
  "Yamunotri Temple",
  "Surya Kund",
  "Kashi Vishwanath Temple",
  "Gangotri Temple",
  "Kedarnath Temple",
  "Badrinath Temple",
  "Tapt Kund",
  "Vyas Gufa",
  "Ganesh Gufa",
  "Saraswati River",
  "Lakhamandal Temple",
  "Shiv Gufa",
  "Budha Kedar Temple",
  "Triyuginarayan Temple",
  "Omkareshwar Temple",
  "Tungnath Temple",
  "Narsingh Temple",
  "Har Ki Pauri",
  "Ganga Aarti",
  "Bhimashankar Jyotirlinga",
  "Mallikarjuna Jyotirlinga",
  "Shree Mayureshwar Temple",
  "Shree Siddhivinayak Temple",
  "Shree Chintamani Temple",
  "Shree Mahaganpati Temple",
  "Shree Vighneshwar Temple",
  "Shree Girijatmaj Temple",
  "Shree Ballaleshwar Temple",
  "Shree Varadvinayak Temple",
  "Kovalam Beach",
  "Dhanushkodi",
  "Badrinath Temple",
  "Shirdi Sai Baba Temple"
];

// Sort by length descending to match longer strings first (e.g. "Kashi Vishwanath Temple" before "Vishwanath Temple")
const sortedPlaces = [...PLACES_TO_BOLD].sort((a, b) => b.length - a.length);

const findPlaceColonIndex = (text: string): number => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ":") {
      // Check if it is a time colon (digit on both sides)
      const prevChar = text[i - 1];
      const nextChar = text[i + 1];
      const isDigitBefore = prevChar >= "0" && prevChar <= "9";
      const isDigitAfter = nextChar >= "0" && nextChar <= "9";
      if (isDigitBefore && isDigitAfter) {
        // It's a time colon, skip it
        continue;
      }
      return i;
    }
  }
  return -1;
};

const boldTimesAndInlinePlaces = (text: string) => {
  const timeRegexPattern = "\\b\\d{1,2}:\\d{2}\\s*(?:AM|PM)\\b";
  const escapedPlaces = sortedPlaces.map(p => p.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  
  // Combine all patterns into one capturing group regex
  const combinedRegex = new RegExp(`(${timeRegexPattern}|${escapedPlaces.join("|")})`, "gi");
  
  const parts = text.split(combinedRegex);
  return (
    <>
      {parts.map((part, index) => {
        const isTime = /^\d{1,2}:\d{2}\s*(?:AM|PM)$/i.test(part);
        const isPlace = PLACES_TO_BOLD.some(p => p.toLowerCase() === part.toLowerCase());
        
        if (isTime || isPlace) {
          return <strong key={index}>{part}</strong>;
        }
        return part;
      })}
    </>
  );
};

export const renderTextWithHighlights = (text: string) => {
  // If the text contains a colon separator (excluding time colons), split it and bold the prefix (place name)
  const colonIndex = findPlaceColonIndex(text);
  if (colonIndex !== -1 && colonIndex < 60) {
    const title = text.slice(0, colonIndex);
    const description = text.slice(colonIndex);
    return (
      <>
        <strong>{title}</strong>
        {boldTimesAndInlinePlaces(description)}
      </>
    );
  }

  // Otherwise, look for specific place names and times to bold inline
  return boldTimesAndInlinePlaces(text);
};
