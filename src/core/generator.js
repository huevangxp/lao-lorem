import { words, sentences } from '../data/lao-words.js';

// ສຸ່ມເລືອກຈາກ array
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ສ້າງປະໂຫຍກດຽວ
export const generateSentence = () => {
  const pattern = Math.floor(Math.random() * 4);
  switch (pattern) {
    case 0:
      return `${pick(words.starters)}${pick(words.nouns)}${pick(words.verbs)}${pick(words.adjectives)}`;
    case 1:
      return `${pick(words.nouns)}${pick(words.verbs)}${pick(words.connectors)}${pick(words.nouns)}${pick(words.adjectives)}`;
    case 2:
      return pick(sentences);
    default:
      return `${pick(words.starters)}${pick(words.nouns)}${pick(words.adjectives)}${pick(words.verbs)}`;
  }
};

// ສ້າງຍ່ອຫນ້າ (paragraph)
export const generateParagraph = (sentenceCount = 4) => {
  return Array.from({ length: sentenceCount }, () => generateSentence()).join(' ');
};

// ສ້າງຄຳ (words)
export const generateWords = (count = 10) => {
  const allWords = [...words.nouns, ...words.adjectives, ...words.verbs];
  return Array.from({ length: count }, () => pick(allWords)).join(' ');
};

// Main generator function
export const generate = ({ type = 'paragraphs', count = 3, sentencesPerParagraph = 4 }) => {
  switch (type) {
    case 'words':
      return generateWords(count);
    case 'sentences':
      return Array.from({ length: count }, generateSentence).join(' ');
    case 'paragraphs':
    default:
      return Array.from({ length: count }, () => generateParagraph(sentencesPerParagraph));
  }
};
