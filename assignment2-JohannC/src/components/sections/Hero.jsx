import React, { useState, useEffect } from "react";

// Importing Content from JSON file storing data for the text and image content
import heroContent from "./heroContent.json";
 
// Hero Function with contentType prop
// Probably should have been set to content for consistency of prop usages all throughout the components however, I had already set "content" as a variable within the function below
export default function Hero({ contentType }) {

    // Store data for hero section and differentiating each by content
    // setContent for updating the content
    const [content, setContent] = useState({});


    // runs based on which content prop is used in the pages (ex. <Hero content="home"/>)
    // if hero content has been set a content, runs setContent to update the information from the json file
    useEffect(() => {
        if (heroContent[contentType]) {
            setContent(heroContent[contentType]);
        }
    }, [contentType]);


    return (

        <div>
            <div className="w-10/12 mx-auto text-center flex justify-center items-center flex-col my-12 lg:my-32 lg:mb-20">
                <p className="font-playfair text-xl">{content.subtitle}</p>
                <h1 className="font-playfair text-5xl font-medium">{content.title}</h1>
                <p className="font-playfair text-xl mt-2 max-w-96">{content.description}</p>
                <div className="bg-black w-px h-32 mt-16"></div>
            </div>
 
            {/* looks for the imageUrls which were set in the json file */}
            {/* Optional Chaining used to ensure imageUrls exist before using map, (So many errors before this)*/}
            {/* Map Loops through each of the images in the imageUrls array and index used to create keys for each image*/}
            <div className="flex justify-between items-center my-4 w-10/12 mx-auto flex-col lg:flex-row lg:gap">
            {content.imageUrls?.map((url, index) => (
                    <img
                    
                        key={index}
                        src={url}
                        // Passes in the image names as the alt tag (not sure if this is the best practice/choice for metadata)
                        alt={`image ${index}`}
                        className="mb-4 w-full h-auto max-h-48 object-cover md:mb-0 md:w-[31%] md:h-full md:max-h-96"
                    />
                ))}
            </div>
        </div>

    )
}