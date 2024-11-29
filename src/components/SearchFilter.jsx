import { useState } from "react";

const SearchFilter = () => {

    const [searchTerm, setSearchTerm] = useState("");

    console.log(searchTerm);

    const items = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Grapes",
        "Mango",
        "Orange",
        "Pineapple",
        "Strawberry",
        "Watermelon",
    ]

  return (
    <>
     <div className="search-input">
        <h1>Search Filter App</h1>
        <input type="text"
            placeholder='Search item...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
            {
                items.filter((item) => item.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                .map((filterItem, index) => (
                    <li key={index}>{filterItem}</li>
                ))
            }
        </ul>
    </div> 
    </>
  )
}

export default SearchFilter;
