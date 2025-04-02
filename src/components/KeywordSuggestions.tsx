
import React from 'react';
import { Button } from "@/components/ui/button";

interface KeywordSuggestionsProps {
  keywords: string[];
  onKeywordClick: (keyword: string) => void;
}

const KeywordSuggestions: React.FC<KeywordSuggestionsProps> = ({ 
  keywords, 
  onKeywordClick 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {keywords.map((keyword, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onKeywordClick(keyword)}
          className="text-xs rounded-full bg-gray-100 border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
        >
          {keyword}
        </Button>
      ))}
    </div>
  );
};

export default KeywordSuggestions;
