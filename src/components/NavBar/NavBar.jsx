import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'

const NavBar = ({onSearch}) => {
    return (
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default NavBar;