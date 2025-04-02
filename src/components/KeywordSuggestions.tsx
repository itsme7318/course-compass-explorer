
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
    <div className="flex flex-wrap gap-2 mt-2">
      {keywords.map((keyword, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onKeywordClick(keyword)}
          className="text-xs"
        >
          {keyword}
        </Button>
      ))}
    </div>
  );
};

export default KeywordSuggestions;
