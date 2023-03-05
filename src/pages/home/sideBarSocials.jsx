import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'


const SideBarSocials = () => {
    return (
        <>
           <div className="sideBarSocials">
               <ul>
                   <li>
                        <h3><AiFillGithub/></h3>
                   </li>
                   <li>
                        <h3><AiFillInstagram/></h3>
                   </li>
                   <li>
                       <h3><AiFillLinkedin/></h3>
                   </li>
               </ul>

           </div>
        </>
    )
}

export default SideBarSocials;