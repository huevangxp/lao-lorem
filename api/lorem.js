import { generate } from '../src/core/generator.js';

export default function handler(req, res) {
  // Set CORS headers to allow anyone to query your API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Parse query parameters
  const { type = 'paragraphs', count = '3', sentencesPerParagraph = '4' } = req.query;

  const result = generate({
    type,
    count: parseInt(count, 10) || 3,
    sentencesPerParagraph: parseInt(sentencesPerParagraph, 10) || 4
  });

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({
    type,
    count: parseInt(count, 10) || 3,
    result: Array.isArray(result) ? result : [result]
  });
}
