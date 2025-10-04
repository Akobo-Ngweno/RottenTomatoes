import React from "react"
export default function MenuBar(){
        return(
            <>
            <img src="logo.png" alt="logo" />
            <input type="text" placeholder="Search movies, TV, actors,more..." />
            <nav>
                <div className="li_a">
                    <ul>
                        <li>What's the Tomatometer{'\u00AE'}?</li>
                        <li>Critics</li>
                        <li>LOGIN /SIGNUP</li>
                    </ul>
                </div>
                <div className="li_b">
                    <ul>
                    <li>Movies</li>
                    <li>Tv Shows</li>
                    <li>Movie Trivia</li>
                    <li>News</li>
                    <li>ShowTimes</li>
                </ul>
                </div>
                
            </nav>
            
            </>
        )
}