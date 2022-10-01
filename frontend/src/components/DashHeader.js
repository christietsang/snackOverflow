import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useNavigate  } from 'react-router-dom'
import { 
    homeHeaderIcon, 
    homeHeader,
    homeHeaderContainer,
    homeHeaderAddPostIcon,
    homeHeaderText,
 }  from '../styles/headerStyle'
 import  { ReactComponent as AccountIcon }  from '../icons/circle-user-regular.svg'
 
const DashHeader = () => {

    const navigate = useNavigate()
    const onAddPostClicked = () => navigate('/addPost')
    const profileClicked = () => navigate('/profile')


    const content = (
        <header className={homeHeader}>
            <div className={homeHeaderContainer}>
                <AccountIcon 
                className={homeHeaderIcon}
                onClick={profileClicked}/>

                <Link to="/home">
                    <h2 className={ homeHeaderText }>snackOverflow</h2>
                </Link>

                <button
                    className= { homeHeaderAddPostIcon }
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