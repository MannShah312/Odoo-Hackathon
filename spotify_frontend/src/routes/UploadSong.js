// import { useState } from "react";
// import { Icon } from "@iconify/react";
// import spotify_logo from "../assets/images/spotify_logo_white.svg";
// import IconText from "../components/shared/IconText";
// import TextWithHover from "../components/shared/TextWithHover";
// import TextInput from "../components/shared/TextInput";
// import CloudinaryUpload from "../components/shared/CloudinaryUpload";
// import { useNavigate } from "react-router-dom";
// import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

// const UploadSong = () => {
//     const [name, setName] = useState("");
//     const [thumbnail, setThumbnail] = useState("");
//     const [playlistUrl, setPlaylistUrl] = useState("");
//     const [uploadedSongFileName, setUploadedSongFileName] = useState("");
//     const navigate = useNavigate();
    
//      const submitSong = async() => {
//          const data = {name, thumbnail, track:playlistUrl};
//          const response = await makeAuthenticatedPOSTRequest("/song/create", data);
//          if(response.err){
//         alert("Could not create Song")
//         return;
//     }
//         alert("Success");
//         navigate("/home");
//     };

//     // const submitSong = async () => {
//     //     try {
//     //         const data = { name, thumbnail, track: playlistUrl };
//     //         const response = await makeAuthenticatedPOSTRequest("/song/create", data);
//     //         console.log(response);
//     //         // Handle successful response
//     //     } catch (error) {
//     //         console.error('Error submitting song:', error);
//     //         // Handle error here, such as displaying a message to the user
//     //     }
//     // };
    

//     return(
//     <div className="h-full w-full flex">
//         <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
//             <div>
//             <div className="logoDiv p-6 py-5"> {/*Logo*/}
//                 <img src={spotify_logo} alt="logo" width={140}/>
//             </div>
//             <div>
//                 <IconText iconName={"material-symbols:home"} 
//                 displayText={"Home"}
//                 active
//             />
//             </div>
//             <div>
//                 <IconText iconName={"material-symbols:search-rounded"} 
//                 displayText={"Search"}
//                 />
//             </div>
//             <div>
//                 <IconText iconName={"icomoon-free:books"} 
//                   displayText={"Library"}/>
//             </div>
//             <div>
//                 <IconText iconName={"material-symbols:library-music-sharp"} 
//                   displayText={"My Music"}/>
//             </div>
//             <div className="pt-7">
//             <div>
//                 <IconText iconName={"material-symbols:add-box"} 
//                   displayText={"Create Playlist"}/>
//             </div>
//             <div>
//                 <IconText iconName={"mdi:cards-heart"} 
//                   displayText={"Liked Songs"}/>
//             </div>
//             </div>
//             </div>
//             <div className="px-5">
//                 <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                     <Icon icon="carbon:earth-europe-africa" />
//                     <div className="ml-2 text-sm font-semibold">English</div>     
//                 </div>
//             </div>
//         </div>
//         <div className="h-full w-4/5 bg-app-black overflow-auto">
//             <div className="navbar w-full h-1/10 bg-black flex bg-opacity-30 items-center justify-end">
//                 <div className="w-1/2 flex h-full">
//                     <div className="w-2/3 flex justify-around items-center">
//                         <TextWithHover displayText={"Premium"} />
//                         <TextWithHover displayText={"Support"} />
//                         <TextWithHover displayText={"Download"} /> 
//                         <div className="h-1/2 border-r border-white"></div>
//                     </div>
//                     <div className="w-1/3 flex justify-around h-full items-center">
//                         <TextWithHover displayText={"Upload Song"} /> 
//                             <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                                 MS
//                             </div>  
//                     </div>            
//             </div>
//             </div>
//             <div className="content p-8 overflow-auto pt-0">
//                 <div className="text-2xl font-semibold mb-5 text-white mt-8">
//                     Upload your music
//                 </div>
//                 <div className="w-2/3 flex space-x-3 mb-2">
//                     <div className="w-1/2">
//                         <TextInput 
//                             label="Name"
//                             placeholder="Name"
//                             value={name}
//                             setValue={setName}
//                             />
//                     </div>
//                     <div className="w-1/2">
//                         <TextInput 
//                             label="Thumbnail" 
//                             /*labelClassName={"text-white"}*/
//                             placeholder="Thumbnail"
//                             value={thumbnail}
//                             setValue={setThumbnail}/>
//                     </div>
//                 </div>
//                     <div className="pt-5">
//                         {
//                             uploadedSongFileName?(
//                                 <div className="bg-white rounded-full p-3 w-1/3">
//                                     {uploadedSongFileName.substring(0, 40)}
//                                 </div>
//                             ):(
//                         <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/>
//                         )}
//                     </div>
//                     <div className="bg-white w-40 flex items-center p-4 rounded-full cursor-pointer font-semibold mt-4" onClick={submitSong}>
//                         Submit Song
//                     </div>
//             </div>
//         </div>
//     </div>
//     ); 
// };

// export default UploadSong;


import { useState } from "react";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useNavigate } from "react-router-dom";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../Containers/LoggedInContainer";

const UploadSong = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState("");
    const navigate = useNavigate();
    
    const submitSong = async() => {
        const data = {name, thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if(response.err){
            alert("Could not create Song")
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
        <LoggedInContainer curActiveScreen="UploadSong">
            <div className="content p-8 overflow-auto pt-0">
                <div className="text-2xl font-semibold mb-5 text-white mt-8">
                    Upload your music
                </div>
                <div className="w-2/3 flex space-x-3 mb-2">
                    <div className="w-1/2">
                        <TextInput 
                            label="Name"
                            placeholder="Name"
                            value={name}
                            setValue={setName}
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput 
                            label="Thumbnail" 
                            placeholder="Thumbnail"
                            value={thumbnail}
                            setValue={setThumbnail}
                        />
                    </div>
                </div>
                <div className="pt-5">
                    {uploadedSongFileName ? (
                        <div className="bg-white rounded-full p-3 w-1/3">
                            {uploadedSongFileName.substring(0, 40)}
                        </div>
                    ) : (
                        <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/>
                    )}
                </div>
                <div className="bg-white w-40 flex items-center p-4 rounded-full curso  r-pointer font-semibold mt-4" onClick={submitSong}>
                    Submit Song
                </div>
            </div>
        </LoggedInContainer>
    ); 
};

export default UploadSong;
