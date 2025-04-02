
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
          className="text-xs rounded-full bg-[#0A2540]/10 border-[#0A2540]/20 text-[#0A2540] hover:bg-[#0A2540]/20 hover:text-[#0A2540] transition-colors"
        >
          {keyword}
        </Button>
      ))}
    </div>
  );
};

export default KeywordSuggestions;
