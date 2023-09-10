import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Logo from './Logo.png'
import { set } from 'mongoose'
import  productDetails from '../context/productDetails'

const Header = () => {
    const [ToggleOn, setToggleOn] = useState(false)
    const [showoptions, setshowoptions] = useState(false)
    const [lis,setlis]=useState([])
    const product_data=React.useContext(productDetails)
    const [searchbardata,setsearchbardata]=useState(lis)
    const fetchdata = async () => {
        // https://api-krudra9125-gmailcom.vercel.app/api/products/
        // await fetch("https://api-krudra9125-gmailcom.vercel.app/api/products/") 
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
            
        // setlis(data?.map((item)=>{return item.name.toLowerCase()}));
          
        //   })
        //   .catch((err) => console.log(err));

        setlis(product_data.product_data?.map((item)=>{return item.name.toLowerCase()}));
      };
      React.useEffect(() => {
    
        fetchdata();
  
      }, [product_data]);

    const [activeCategory, setActiveCategory] = useState(null);
    const ToggleDiv = useRef(null)
    const searchbardataonchange=(e)=>{
        if(e.length<=0)
        {
            setshowoptions(false)
        }
        else
        {
            setshowoptions(true)
            console.log(showoptions)
        setsearchbardata(lis?.filter((item)=>{if(item.includes(e)){return true}else{ return false }}))
        }
    }
    const ToggleOnOff = () => {
        if (ToggleDiv.current) {
            const currentDisplay = ToggleDiv.current.style.display;
            ToggleDiv.current.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
        }
        setToggleOn(!ToggleOn)
    }

    const handleCategoryHover = (index) => {
        setActiveCategory(index);
    };

    const handleCategoryLeave = () => {
        setActiveCategory(null);
    };

    const handleSubMenuHover = (index) => {
        setActiveCategory(index);
    };

    const handleWindowResize = () => {
        if (ToggleDiv.current) {
            ToggleDiv.current.style.display = 'none';
            setToggleOn(false)
        }
        const windowWidth = window.innerWidth;
        ToggleDiv.current.style.display = windowWidth > 1024 ? 'block' : 'none';

    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleWindowResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <header className='Navbar'  >
            <div className="UpperNav VCenter-flex">
                <div className="ToggleIconDiv VCenter-flex Mobile">
                    <button className="ToggleButton VCenter-flex" onClick={ToggleOnOff}>
                        {ToggleOn ? <>
                            <svg height="25px" width="26px" id="Close" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                                        fill="#0F0F0F"></path>
                                </g>
                            </svg>
                        </> : <>

                            <svg height="25px" width="26px" id="Open" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </>}


                    </button>
                </div>
                <div className="LogoDiv VCenter-flex">
                    <img src={Logo} className=" w-[22rem] "  alt="" srcSet="" />
                </div>
                <div className="relative SearchDiv VCenter-flex Laptop">
                    <div className="SearchBar ">
                        <div className="SearchIcon">
                            <svg width="20px" height="100%" viewBox="0 0 32 32" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                sketch="http://www.bohemiancoding.com/sketch/ns">

                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                    type="MSPage">
                                    <g id="Icon-Set" type="MSLayerGroup"
                                        transform="translate(-256.000000, -1139.000000)" fill="#000000">
                                        <path
                                            d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"
                                            id="search" type="MSShapeGroup">

                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="SearchInput  w-[100%] h-[100%] z-50  ">
                            <input type="text" onFocus={()=>{setshowoptions(true)}}   onChange={(e)=>{searchbardataonchange(e.target.value.toLowerCase().trim(""))}} placeholder="Search Items Here" />
                            <div  onBlur={()=>{
                                setshowoptions(false)
                            }}  className={` ${showoptions ?'absolute':'hidden'} z-20 max-h-[12rem] overflow-scroll bg-white w-[100%] min-h-fit top-14 left-0 flex  shadow-lg  flex-col justify-start items-center  `} >
                                {
                                    searchbardata?.map((item)=>{
                                        return(
                                            <a href="https://google.com" className="w-[100%] text-start  pl-7 hover:bg-yellow-300 hover:shadow-md transition-all duration-500  ease-in-out    border  " >{item}</a>
                                        )
                                    })
                                }
                               {/* <div className= ' w-[100%] text-start  pl-7     border  ' >lorem</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="UpperLastDiv VCenter-flex">
                    <div className="flex items-center justify-center BecomeSupp Laptop ">
                      
                            <p className=" px-3 py-2 rounded-lg font-[500] bg-yellow-300 cursor-pointer hover:shadow-md transition-all duration-500  ease-in-out ">For Suppliers </p>
                    
                    </div>
                    <div style={{ height: '50%', border: ' 1px solid black' }} className="Laptop"></div>
                    <div className="flex items-center justify-center ProfileDiv VCenter-flex">
                       
                            <div className=" bg-yellow-300 rounded-2xl  w-[3rem] h-[3rem]  hover:shadow-md transition-all duration-500  ease-in-out flex justify-center items-center cursor-pointer ">
                              <img src="./user.svg" className=' w-[2.6rem] h-[2.6rem] active:w-[2.5rem] active:h-[2.5rem] '  alt="d"  />
                              
                                {/* <span className="Laptop"> Profile</span> */}
                            </div>
                        
                    </div>
                    <div className="CartDiv VCenter-flex">
                        <a href="/" className="CartLink VCenter-flex">
                            <p className="CartContent bg-yellow-300 rounded-2xl  w-[3rem] h-[3rem]  hover:shadow-md transition-all duration-500  ease-in-out  VCenter-flex">
                                <svg  className=" laptop active:w-[27px] active:h-[27px] "  width="28px" height="28px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                
                                {/* <span className="Laptop">Cart</span> */}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="LowerNav Laptop" id="ToggleM" ref={ToggleDiv}>
                <ul className="MenuBannerUl VCenter-flex">
                    <li className="MenuBannerLi" id="First" onMouseEnter={() => handleCategoryHover(0)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 0 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Vegetables & Fruits</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Second" onMouseEnter={() => handleCategoryHover(1)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 1 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Dairy & Breakfast</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Third" onMouseEnter={() => handleCategoryHover(2)}
                        onMouseLeave={handleCategoryLeave}>
                        <a href="" className={`${activeCategory === 2 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Munchies</p>
                        </a>
                    </li>
                    <li className="MenuBannerLi" id="Fourth" onMouseEnter={() => handleCategoryHover(3)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 3 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Bevrages</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Fifth" onMouseEnter={() => handleCategoryHover(4)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 4 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Instant Foods</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Sixth" onMouseEnter={() => handleCategoryHover(5)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 5 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Biscuits</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Seventh" onMouseEnter={() => handleCategoryHover(6)}
                        onMouseLeave={handleCategoryLeave}>
                        <a href="" className={`${activeCategory === 6 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Sweet Tooth</p>
                        </a>
                    </li>
                    <li className="MenuBannerLi" id="Eighth" onMouseEnter={() => handleCategoryHover(7)}
                        onMouseLeave={handleCategoryLeave}>
                        <a href="" className={`${activeCategory === 7 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Spreads & Sauces</p>
                        </a>
                    </li>
                    <li className="MenuBannerLi" id="Ninth" onMouseEnter={() => handleCategoryHover(8)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 8 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Electronics</p>
                        </a></li>

                </ul>
                <ul className="MenuBannerHoverDisplayUl">
                    <li className={`First MenuBannerDisplayLi SubMenu ${activeCategory === 0 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(0)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                          <img src="./Assets/category_logos/vegetables.webp" alt="test" srcset="" />
                        </div>
                    </li>
                    <li className={`Second MenuBannerDisplayLi SubMenu ${activeCategory === 1 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(1)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                        <img src="./Assets/category_logos/breakfast.webp" alt="test" srcset="" />
                        <img src="./Assets/category_logos/dairy.webp" alt="test" srcset="" />
                    
                        </div>
                    </li>
                    <li className={`Third MenuBannerDisplayLi SubMenu ${activeCategory === 2 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(2)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                        <img src="./Assets/category_logos/chips.webp" alt="test" srcset="" />
                      
                        </div>
                    </li>
                    <li className={`Fourth MenuBannerDisplayLi SubMenu ${activeCategory === 3 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(3)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                        <img src="./Assets/category_logos/colddrinks.webp" alt="test" srcset="" />
                        <img src="./Assets/category_logos/hotdrinks.webp" alt="test" srcset="" />
                        </div>
                    </li>
                    <li className={`Fifth MenuBannerDisplayLi SubMenu ${activeCategory === 4 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(4)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                          
                        </div>
                    </li>
                    <li className={`Sixth MenuBannerDisplayLi SubMenu ${activeCategory === 5 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(5)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                         
                        </div>
                    </li>
                    <li className={`Seventh MenuBannerDisplayLi SubMenu ${activeCategory === 6 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(6)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                                               <img src="./Assets/category_logos/sweet tooth.webp" alt="test" srcset="" />

                        </div>
                    </li>
                    <li className={`Eighth MenuBannerDisplayLi SubMenu ${activeCategory === 7 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(7)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Men Footwear</li>
                                <li className="DisplayLi"><a href=""> Sports Shoes</a></li>
                                <li className="DisplayLi"><a href="">Casual Shoes</a></li>
                                <li className="DisplayLi"><a href="">Formal Shoes</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Men Footwear</li>
                                <li className="DisplayLi"><a href=""> Sports Shoes</a></li>
                                <li className="DisplayLi"><a href="">Casual Shoes</a></li>
                                <li className="DisplayLi"><a href="">Formal Shoes</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Men Footwear</li>
                                <li className="DisplayLi"><a href=""> Sports Shoes</a></li>
                                <li className="DisplayLi"><a href="">Casual Shoes</a></li>
                                <li className="DisplayLi"><a href="">Formal Shoes</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Ninth MenuBannerDisplayLi SubMenu ${activeCategory === 8 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(8)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Mobile & Accessories</li>
                                <li className="DisplayLi"><a href=""> All Mobile & Accessories</a></li>
                                <li className="DisplayLi"><a href="">Smartwatches</a></li>
                                <li className="DisplayLi"> <a href="">Mobile Holders</a></li>
                                <li className="DisplayLi"><a href="">Mobile cases and covers</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Mobile & Accessories</li>
                                <li className="DisplayLi"><a href=""> All Mobile & Accessories</a></li>
                                <li className="DisplayLi"><a href="">Smartwatches</a></li>
                                <li className="DisplayLi"> <a href="">Mobile Holders</a></li>
                                <li className="DisplayLi"><a href="">Mobile cases and covers</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Mobile & Accessories</li>
                                <li className="DisplayLi"><a href=""> All Mobile & Accessories</a></li>
                                <li className="DisplayLi"><a href="">Smartwatches</a></li>
                                <li className="DisplayLi"> <a href="">Mobile Holders</a></li>
                                <li className="DisplayLi"><a href="">Mobile cases and covers</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
