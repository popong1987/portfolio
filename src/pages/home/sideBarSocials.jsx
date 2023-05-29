import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'


const SideBarSocials = () => {
    return (
        <>
           <div className="sideBarSocials">
               <ul>
                   <li>
                        <h3><a href="https://github.com/popong1987" target="_blank"><AiFillGithub/></a></h3>
                   </li>
                   <li>
                        <h3><a href="https://github.com/popong1987" target="_blank"><AiFillInstagram/></a></h3>
                   </li>
                   <li>
                       <h3><a href="https://www.linkedin.com/in/liesbeth-de-haes-5132565a/" target="_blank"><AiFillLinkedin/></a></h3>
                   </li>
               </ul>

           </div>
        </>
    )
}

export default SideBarSocials;