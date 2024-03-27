const HomeData = () => {
    return ( 
        <div className=" h-screen flex items-center justify-center">

            <div className=" rounded-lg bg-[#0f1622] w-[50%] h-[96] text-white border border-[#51555c]">

                <form className=" w-full border-b-white flex flex-col gap-4 items-center mt-4">
                    <div className=" flex items-center gap-4 w-full ml-4 mr-4">
                        <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(173,184,194,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                        <input className=" border-none text-sm bg-transparent outline-none" type="text" placeholder="Search all media channels" />
                    </div>
                    <hr className=" w-full bg-[#51555c]"></hr>
                </form>

                <div className=" mt-4 ml-4 mr-4 mb-4">
                    <div className=" mb-4">
                        <h4 className=" text-sm">Document Channels</h4>
                        <div className=" w-full text-sm py-2 rounded-sm hover:bg-[#222935] cursor-pointer flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(173,184,194,1)"><path d="M5 4H15V8H19V20H5V4ZM3.9985 2C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H20.0066C20.5551 22 21 21.5489 21 20.9925L20.9997 7L16 2H3.9985ZM10.4999 7.5C10.4999 9.07749 10.0442 10.9373 9.27493 12.6534C8.50287 14.3757 7.46143 15.8502 6.37524 16.7191L7.55464 18.3321C10.4821 16.3804 13.7233 15.0421 16.8585 15.49L17.3162 13.5513C14.6435 12.6604 12.4999 9.98994 12.4999 7.5H10.4999ZM11.0999 13.4716C11.3673 12.8752 11.6042 12.2563 11.8037 11.6285C12.2753 12.3531 12.8553 13.0182 13.5101 13.5953C12.5283 13.7711 11.5665 14.0596 10.6352 14.4276C10.7999 14.1143 10.9551 13.7948 11.0999 13.4716Z"></path></svg>
                            <span className=" text-xs">Documents</span>
                        </div>
                    </div>
                </div>

                <div className=" mt-4 ml-4 mr-4 mb-4">
                    <div className=" mb-4">
                        <h4 className=" text-sm">Audio Channels</h4>
                        <div className=" w-full text-sm py-2 rounded-sm hover:bg-[#222935] cursor-pointer flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(173,184,194,1)"><path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path></svg>
                            <span className=" text-xs">Audio</span>
                        </div>
                    </div>
                </div>

                <div className=" mt-4 ml-4 mr-4 mb-4">
                    <div className=" mb-4">
                        <h4 className=" text-sm">Video Channels</h4>
                        <div className=" w-full text-sm py-2 rounded-sm hover:bg-[#222935] cursor-pointer flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(173,184,194,1)"><path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2ZM17 12.3587L21 15.1587V8.84131L17 11.6413V12.3587ZM3 6V18H15V6H3ZM5 8H7V10H5V8Z"></path></svg>
                            <span className=" text-xs">Video</span>
                        </div>
                    </div>
                </div>


            </div>

        </div>
     );
}
 
export default HomeData;