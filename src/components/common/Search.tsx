import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 0%;
  min-width: 600px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  font-family: "Funnel Display", sans-serif;
  width: 100%;
  background-color: #BEBEBE;
  color: white;
  border-radius: 9999px;
  padding: 8px 16px 8px 40px;
  border: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #181818;
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #181818;
  width: 20px;
  height: 20px;
  padding: 0;
  cursor: pointer;
`;


const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
};
  
const Search = () => {
  return (
    <SearchContainer>
    <form onSubmit={handleSearch}>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          name="searchQuery"
          placeholder="Busca una liga o equipo"
        />
        <SearchIcon type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </SearchIcon>
      </SearchInputWrapper>
    </form>
  </SearchContainer>
  );
};

export default Search;