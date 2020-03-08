import React from 'react';
import styled from 'styled-components';

//Export default component
export default function About() {

    return (
        <AboutBox>
            <AboutHeader>About Salty Hackers</AboutHeader>
            <AboutSection>
                Salty Hackers is a data analysis of the top 100 saltiest and sweetest commenters from HackerNews.
                <br />
                <br />
                The analysis scanned the HackerNews database and determined how salty or sweet each comment was, and then aggregated the information from each commenter to derive a score to find the saltiest and sweetest commenters.
                <br />
                <br />
                Scores ranging from -1 to -0.5 indicate a high subjective and negative polarity of their comments, indicating they are "salty."
                <br />
                <br />
                Scores ranging from 0.5 to 1 indicate a high subjective and positive polarity of their comments, indicating they are "sweet."
                <br />  
                <br />
                In addition, the analysis determined these commenters' saltiest or sweetest comment.
                <br />
                <br />
                This application is meant for fun and providing useful insights into HackerNews posters. 
                <br />   
                <br /> 
                Please do not use this data as a basis for any actions against the commenters. 
            </AboutSection>
        </AboutBox>
    )
}

const AboutBox = styled.div`
    
    width: 80%;
    position: relative;
    top: 150px;
    min-height: 50vh;
    margin: auto auto 90px;
    background-image: linear-gradient(120deg, #F5F6EE, #e2e4d8);
    display: flex;
    flex-flow: column nowrap;
    padding: 2% 5%;
    // position: relative;
    // top: 260px;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid #FD6600;
`

const AboutHeader = styled.div`
    font-size: 36px;
    font-family: 'Damion', cursive;

`

const AboutSection = styled.div`
    font-size: 20px;
    text-align: left;
    line-height: 1.5;
    padding: 15px;
    padding-top: 2%;
`