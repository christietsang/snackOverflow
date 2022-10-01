import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useNavigate  } from 'react-router-dom'
import  { ReactComponent as AccountIcon }  from '../icons/circle-user-regular.svg'


const DashHeader = () => {

    const navigate = useNavigate()
    const onAddPostClicked = () => navigate('/addPost')


    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                
                <Link to="/profile">
                    <AccountIcon/>
                </Link>
                
                <Link to="/home">
                    <h2 className="dash-header__title">snackOverflow</h2>
                </Link>

                <button
                    className= "dash-header_add_post_button"
                    title="addPost"
                    onClick={onAddPostClicked}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>

            </div>
        </header>
    )

    return content
}
export default DashHeader