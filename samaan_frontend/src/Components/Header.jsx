import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import Logo from './Logo.png'

const Header = () => {
    const [ToggleOn, setToggleOn] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null);
    const ToggleDiv = useRef(null)
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
        <header className='Navbar'>
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
                    <img src={Logo} alt="" srcSet="" />
                </div>
                <div className="SearchDiv VCenter-flex Laptop">
                    <div className="SearchBar">
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
                        <div className="SearchInput">
                            <input type="text" placeholder="Search Items Here" />
                        </div>
                    </div>
                </div>
                <div className="UpperLastDiv VCenter-flex">
                    <div className="BecomeSupp Laptop">
                        <a href="" className="BecomeSuppLink VCenter-flex">
                            <p className="BecomeSuppContent VCenter-flex">Become Supplier</p>
                        </a>
                    </div>
                    <div style={{ height: '50%', border: ' 1px solid black' }} className="Laptop"></div>
                    <div className="ProfileDiv VCenter-flex">
                        <a href="" className="ProfileLink HoverEffectLink VCenter-flex">
                            <p className="ProfileContent HoverEffectLinkPara VCenter-flex">
                                <svg className="Laptop" height="20px" width="20px" viewBox="0 0 25 25" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2159.000000)"
                                                fill="#000000">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path
                                                        d="M334,2011 C337.785,2011 340.958,2013.214 341.784,2017 L326.216,2017 C327.042,2013.214 330.215,2011 334,2011 M330,2005 C330,2002.794 331.794,2001 334,2001 C336.206,2001 338,2002.794 338,2005 C338,2007.206 336.206,2009 334,2009 C331.794,2009 330,2007.206 330,2005 M337.758,2009.673 C339.124,2008.574 340,2006.89 340,2005 C340,2001.686 337.314,1999 334,1999 C330.686,1999 328,2001.686 328,2005 C328,2006.89 328.876,2008.574 330.242,2009.673 C326.583,2011.048 324,2014.445 324,2019 L344,2019 C344,2014.445 341.417,2011.048 337.758,2009.673"
                                                        id="profile-[#1336]"> </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <svg className="Mobile" height="20px" width="20px" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"
                                            fill="#9f2089"></path>
                                    </g>
                                </svg>
                                <span className="Laptop"> Profile</span>
                            </p>
                        </a>
                    </div>
                    <div className="CartDiv VCenter-flex">
                        <a href="" className="CartLink VCenter-flex">
                            <p className="CartContent VCenter-flex">
                                <svg className="Laptop" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="Mobile" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#590a49">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.50229 2.37675C2.51549 2.38115 2.52864 2.38554 2.54176 2.38991C3.16813 2.59867 3.69746 2.7751 4.11369 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52221 4.2374 5.64282 4.68226 5.69817 5.16708C5.75025 5.62318 5.75023 6.18114 5.7502 6.84139L5.7502 9.49996C5.7502 10.9354 5.7518 11.9365 5.85335 12.6918C5.952 13.4256 6.13245 13.8142 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279Z"
                                            fill="#590a49"></path>
                                        <path opacity="0.5"
                                            d="M5.74512 6C5.75008 6.25912 5.75008 6.53957 5.75007 6.8414L5.75006 9.5C5.75006 10.9354 5.75166 11.9365 5.85321 12.6919C5.86803 12.8021 5.8847 12.9046 5.90326 13H16.0221C16.9815 13 17.4612 13 17.8369 12.7523C18.2126 12.5045 18.4016 12.0636 18.7795 11.1818L19.2081 10.1818C20.0176 8.29294 20.4223 7.34853 19.9777 6.67426C19.5331 6 18.5056 6 16.4507 6H5.74512Z"
                                            fill="#590a49"></path>
                                        <path
                                            d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                                            fill="#590a49"></path>
                                        <path
                                            d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z"
                                            fill="#590a49"></path>
                                    </g>
                                </svg>
                                <span className="Laptop">Cart</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="LowerNav Laptop" id="ToggleM" ref={ToggleDiv}>
                <ul className="MenuBannerUl VCenter-flex">
                    <li className="MenuBannerLi" id="First" onMouseEnter={() => handleCategoryHover(0)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 0 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Women Ethnic</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Second" onMouseEnter={() => handleCategoryHover(1)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 1 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Women Western</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Third" onMouseEnter={() => handleCategoryHover(2)}
                        onMouseLeave={handleCategoryLeave}>
                        <a href="" className={`${activeCategory === 2 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Men</p>
                        </a>
                    </li>
                    <li className="MenuBannerLi" id="Fourth" onMouseEnter={() => handleCategoryHover(3)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 3 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Kids</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Fifth" onMouseEnter={() => handleCategoryHover(4)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 4 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Home & Kitchen</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Sixth" onMouseEnter={() => handleCategoryHover(5)}
                        onMouseLeave={handleCategoryLeave}><a href="" className={`${activeCategory === 5 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Beauty & Health</p>
                        </a></li>
                    <li className="MenuBannerLi" id="Seventh" onMouseEnter={() => handleCategoryHover(6)}
                        onMouseLeave={handleCategoryLeave}>
                        <a href="" className={`${activeCategory === 6 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Jewellery & Accessories</p>
                        </a>
                    </li>
                    <li className="MenuBannerLi" id="Eighth" onMouseEnter={() => handleCategoryHover(7)}
                        onMouseLeave={handleCategoryLeave}>
                        <a href="" className={`${activeCategory === 7 ? 'activeCate' : ''} HoverEffectLink MenuBannerLink`}>
                            <p className="HoverEffectLinkPara MenuBannerPara">Bags & Footwear</p>
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
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Sarees</li>
                                <li className="DisplayLi"><a href="">All Sarees</a></li>
                                <li className="DisplayLi"><a href="">Silk Sarees</a></li>
                                <li className="DisplayLi"><a href="">Cotton Silk Sarees</a></li>
                                <li className="DisplayLi"><a href="">Cotton Sarees</a></li>
                                <li className="DisplayLi"><a href="">Georgette Sarees</a></li>
                                <li className="DisplayLi"><a href="">Chiffon Sarees</a></li>
                                <li className="DisplayLi"><a href="">Satin Sarees</a></li>
                                <li className="DisplayLi"><a href="">Embroidered Sarees</a> </li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Sarees</li>
                                <li className="DisplayLi"><a href="">All Sarees</a></li>
                                <li className="DisplayLi"><a href="">Silk Sarees</a></li>
                                <li className="DisplayLi"><a href="">Cotton Silk Sarees</a></li>
                                <li className="DisplayLi"><a href="">Cotton Sarees</a></li>
                                <li className="DisplayLi"><a href="">Georgette Sarees</a></li>
                                <li className="DisplayLi"><a href="">Chiffon Sarees</a></li>
                                <li className="DisplayLi"><a href="">Satin Sarees</a></li>
                                <li className="DisplayLi"><a href="">Embroidered Sarees</a> </li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Sarees</li>
                                <li className="DisplayLi"><a href="">All Sarees</a></li>
                                <li className="DisplayLi"><a href="">Silk Sarees</a></li>
                                <li className="DisplayLi"><a href="">Cotton Silk Sarees</a></li>
                                <li className="DisplayLi"><a href="">Cotton Sarees</a></li>
                                <li className="DisplayLi"><a href="">Georgette Sarees</a></li>
                                <li className="DisplayLi"><a href="">Chiffon Sarees</a></li>
                                <li className="DisplayLi"><a href="">Satin Sarees</a></li>
                                <li className="DisplayLi"><a href="">Embroidered Sarees</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Second MenuBannerDisplayLi SubMenu ${activeCategory === 1 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(1)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Topwear</li>
                                <li className="DisplayLi"><a href="">Tops</a></li>
                                <li className="DisplayLi"><a href="">Dresses</a></li>
                                <li className="DisplayLi"><a href="">Sweaters</a></li>
                                <li className="DisplayLi"><a href="">Jumpsuits</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Topwear</li>
                                <li className="DisplayLi"><a href="">Tops</a></li>
                                <li className="DisplayLi"><a href="">Dresses</a></li>
                                <li className="DisplayLi"><a href="">Sweaters</a></li>
                                <li className="DisplayLi"><a href="">Jumpsuits</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Topwear</li>
                                <li className="DisplayLi"><a href="">Tops</a></li>
                                <li className="DisplayLi"><a href="">Dresses</a></li>
                                <li className="DisplayLi"><a href="">Sweaters</a></li>
                                <li className="DisplayLi"><a href="">Jumpsuits</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Third MenuBannerDisplayLi SubMenu ${activeCategory === 2 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(2)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Men Accessories</li>
                                <li className="DisplayLi"><a href=""> All Men Accessories</a></li>
                                <li className="DisplayLi"><a href="">Watches</a></li>
                                <li className="DisplayLi"><a href="">Belts</a></li>
                                <li className="DisplayLi"><a href="">Wallets</a></li>
                                <li className="DisplayLi"><a href="">Jewellery</a></li>
                                <li className="DisplayLi"><a href="">Sunglasses</a></li>
                                <li className="DisplayLi"><a href="">Bags</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Men Accessories</li>
                                <li className="DisplayLi"><a href=""> All Men Accessories</a></li>
                                <li className="DisplayLi"><a href="">Watches</a></li>
                                <li className="DisplayLi"><a href="">Belts</a></li>
                                <li className="DisplayLi"><a href="">Wallets</a></li>
                                <li className="DisplayLi"><a href="">Jewellery</a></li>
                                <li className="DisplayLi"><a href="">Sunglasses</a></li>
                                <li className="DisplayLi"><a href="">Bags</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Men Accessories</li>
                                <li className="DisplayLi"><a href=""> All Men Accessories</a></li>
                                <li className="DisplayLi"><a href="">Watches</a></li>
                                <li className="DisplayLi"><a href="">Belts</a></li>
                                <li className="DisplayLi"><a href="">Wallets</a></li>
                                <li className="DisplayLi"><a href="">Jewellery</a></li>
                                <li className="DisplayLi"><a href="">Sunglasses</a></li>
                                <li className="DisplayLi"><a href="">Bags</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Fourth MenuBannerDisplayLi SubMenu ${activeCategory === 3 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(3)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Toys & Accessories</li>
                                <li className="DisplayLi"><a href="">Soft Toys</a></li>
                                <li className="DisplayLi"><a href="">Footwear</a></li>
                                <li className="DisplayLi"><a href="">Belts</a></li>
                                <li className="DisplayLi"><a href="">Stationery</a></li>
                                <li className="DisplayLi"><a href="">Watches</a></li>
                                <li className="DisplayLi"><a href="">Bags & Backpacks</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Toys & Accessories</li>
                                <li className="DisplayLi"><a href="">Soft Toys</a></li>
                                <li className="DisplayLi"><a href="">Footwear</a></li>
                                <li className="DisplayLi"><a href="">Belts</a></li>
                                <li className="DisplayLi"><a href="">Stationery</a></li>
                                <li className="DisplayLi"><a href="">Watches</a></li>
                                <li className="DisplayLi"><a href="">Bags & Backpacks</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Toys & Accessories</li>
                                <li className="DisplayLi"><a href="">Soft Toys</a></li>
                                <li className="DisplayLi"><a href="">Footwear</a></li>
                                <li className="DisplayLi"><a href="">Belts</a></li>
                                <li className="DisplayLi"><a href="">Stationery</a></li>
                                <li className="DisplayLi"><a href="">Watches</a></li>
                                <li className="DisplayLi"><a href="">Bags & Backpacks</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Fifth MenuBannerDisplayLi SubMenu ${activeCategory === 4 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(4)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Home Furnishing</li>
                                <li className="DisplayLi"><a href="">Bedsheets</a></li>
                                <li className="DisplayLi"><a href="">Doormats</a></li>
                                <li className="DisplayLi"><a href="">Curtains & Sheers</a></li>
                                <li className="DisplayLi"><a href="">Cushions & Cushion Covers</a></li>
                                <li className="DisplayLi"><a href=""> Mattress Protectors</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Home Furnishing</li>
                                <li className="DisplayLi"><a href="">Bedsheets</a></li>
                                <li className="DisplayLi"><a href="">Doormats</a></li>
                                <li className="DisplayLi"><a href="">Curtains & Sheers</a></li>
                                <li className="DisplayLi"><a href="">Cushions & Cushion Covers</a></li>
                                <li className="DisplayLi"><a href=""> Mattress Protectors</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Home Furnishing</li>
                                <li className="DisplayLi"><a href="">Bedsheets</a></li>
                                <li className="DisplayLi"><a href="">Doormats</a></li>
                                <li className="DisplayLi"><a href="">Curtains & Sheers</a></li>
                                <li className="DisplayLi"><a href="">Cushions & Cushion Covers</a></li>
                                <li className="DisplayLi"><a href=""> Mattress Protectors</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Sixth MenuBannerDisplayLi SubMenu ${activeCategory === 5 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(5)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Wellness</li>
                                <li className="DisplayLi"><a href="">Sanitizers</a></li>
                                <li className="DisplayLi"><a href="">Oral Care</a></li>
                                <li className="DisplayLi"><a href="">Feminine Hygiene</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Wellness</li>
                                <li className="DisplayLi"><a href="">Sanitizers</a></li>
                                <li className="DisplayLi"><a href="">Oral Care</a></li>
                                <li className="DisplayLi"><a href="">Feminine Hygiene</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Wellness</li>
                                <li className="DisplayLi"><a href="">Sanitizers</a></li>
                                <li className="DisplayLi"><a href="">Oral Care</a></li>
                                <li className="DisplayLi"><a href="">Feminine Hygiene</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={`Seventh MenuBannerDisplayLi SubMenu ${activeCategory === 6 ? 'active' : ''}`} onMouseEnter={() => handleSubMenuHover(6)}
                        onMouseLeave={handleCategoryLeave}>
                        <div className="MenuBannerDisplayLiDiv">
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Jewellery</li>
                                <li className="DisplayLi"><a href="">Jewellery Set</a></li>
                                <li className="DisplayLi"><a href="">Earrings</a></li>
                                <li className="DisplayLi"><a href="">Mangalsutras</a></li>
                                <li className="DisplayLi"><a href="">Studs</a></li>
                                <li className="DisplayLi"><a href="">Bangles</a></li>
                                <li className="DisplayLi"><a href="">Necklaces</a></li>
                                <li className="DisplayLi"><a href="">Rings</a></li>
                                <li className="DisplayLi"><a href="">Anklets</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Jewellery</li>
                                <li className="DisplayLi"><a href="">Jewellery Set</a></li>
                                <li className="DisplayLi"><a href="">Earrings</a></li>
                                <li className="DisplayLi"><a href="">Mangalsutras</a></li>
                                <li className="DisplayLi"><a href="">Studs</a></li>
                                <li className="DisplayLi"><a href="">Bangles</a></li>
                                <li className="DisplayLi"><a href="">Necklaces</a></li>
                                <li className="DisplayLi"><a href="">Rings</a></li>
                                <li className="DisplayLi"><a href="">Anklets</a></li>
                            </ul>
                            <ul className="DisplayUl">
                                <li className="DisplayLi HeaderLi">Jewellery</li>
                                <li className="DisplayLi"><a href="">Jewellery Set</a></li>
                                <li className="DisplayLi"><a href="">Earrings</a></li>
                                <li className="DisplayLi"><a href="">Mangalsutras</a></li>
                                <li className="DisplayLi"><a href="">Studs</a></li>
                                <li className="DisplayLi"><a href="">Bangles</a></li>
                                <li className="DisplayLi"><a href="">Necklaces</a></li>
                                <li className="DisplayLi"><a href="">Rings</a></li>
                                <li className="DisplayLi"><a href="">Anklets</a></li>
                            </ul>
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
