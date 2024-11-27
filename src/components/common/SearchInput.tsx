import React from 'react';

interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
);

export default SearchInput;