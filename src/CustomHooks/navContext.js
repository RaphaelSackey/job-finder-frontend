import React,{useState} from 'react'

const dropdownContext = React.createContext()
const searchbarContext = React.createContext();

export function useDropdownContext(){
    return (
        React.useContext(dropdownContext)
    )
}

export function useSearchbarContext(){
    return (
        React.useContext(searchbarContext)
    )
}


export default function NavbarContextProvider({children}){
    const [dropDown, setDropdown] = useState({
      jobType: {
        isActive: false,
        value: "",
      },
      location: {
        isActive: false,
        value: "",
      },
      pay: {
        isActive: false,
        value: "",
      },
    });

    const [searchBar, setSearchBar] = useState("");

    return (
      <dropdownContext.Provider value={[dropDown, setDropdown]}>
        <searchbarContext.Provider value={[searchBar, setSearchBar]}>
          {children}
        </searchbarContext.Provider>
      </dropdownContext.Provider>
    );

}