import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/triangle.css';

import trust from "../images/trustss.png";
import conflict from "../images/conflictss.png";
import commitment from "../images/commitmentss.png";
import accountability from "../images/accountabilityss.png";


const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 350,
    },
});


export const Triangle = () =>
{
    function trustOn() {
        document.getElementById("trust-overlay").style.display = "block";
    }
    
    function trustOff() {
        document.getElementById("trust-overlay").style.display = "none";
    }

    function conflictOn() {
        document.getElementById("conflict-overlay").style.display = "block";
    }
    
    function conflictOff() {
        document.getElementById("conflict-overlay").style.display = "none";
    }

    function commitOn() {
        document.getElementById("commit-overlay").style.display = "block";
    }
    
    function commitOff() {
        document.getElementById("commit-overlay").style.display = "none";
    }

    function accountabilityOn() {
        document.getElementById("accountability-overlay").style.display = "block";
    }
    
    function accountabilityOff() {
        document.getElementById("accountability-overlay").style.display = "none";
    }

    function resultsOn() {
        document.getElementById("results-overlay").style.display = "block";
    }
    
    function resultsOff() {
        document.getElementById("results-overlay").style.display = "none";
    }

    function resultsVidOff() {
        document.getElementById("results-vid-overlay").style.display = "none";
    }

    function resultsVidOn() {
        document.getElementById("results-vid-overlay").style.display = "block";
    }

    const classes = useStyles();

    return(
        <div class="container">
            <div id="trust-overlay" onClick={trustOff}>
                <img src={trust} id="popup" />
            </div>

            <div id="conflict-overlay" onClick={conflictOff}>
                <img src={conflict} id="popup" />
            </div>

            <div id="commit-overlay" onClick={commitOff}>
                <img src={commitment} id="popup" />
            </div>

            <div id="accountability-overlay" onClick={accountabilityOff}>
                <img src={accountability} id="popup" />
            </div>

            <div id="results-overlay" onClick={resultsOff}>
                <img src="../images/resultsss.png" id="popup" />
            </div>

            <div id="results-vid-overlay" onClick={resultsVidOff}>
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ro0NBgHo_a8?start=391"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />
            </div>

            <svg className='whole-triangle' height="650" width="1050">
                <text x="300" y="50" id="title" fill="red">5 Dysfunctions of a Team</text>
                <svg className='poly1' onClick={resultsVidOn}>
                    <path d='M 450 200 L 550 100 L 650 200' />
                    <text x="550" y="180" textAnchor="middle" fill="white" fontSize="30" fontWeight='600'>Results</text>
                </svg>

                <svg className="poly2" onClick={accountabilityOn}>
                    <path d='M 350 300 L 450 200 L 650 200 L 750 300' />
                    <text x="550" y="280" textAnchor="middle" fill="white" fontSize="30" fontWeight='600'>Accountability</text>
                </svg>

                <svg className="poly3" onClick={commitOn}>
                    <path d='M 250 400 L 350 300 L 750 300 L 850 400 '  />
                    <text x="550" y="380" textAnchor="middle" fill="white" fontSize="30" fontWeight='600'>Commitment</text>
                </svg>

                <svg className="poly4" onClick={conflictOn}>
                    <path d='M 150 500 L 250 400 L 850 400 L 950 500 '  />
                    <text x="550" y="480" textAnchor="middle" fill="white" fontSize="30" fontWeight='600'>Conflict</text>
                </svg>

                <svg className="poly5" onClick={trustOn}>
                    <path d='M 50, 600 L 150 500 L 950 500 L 1050 600 ' />
                    <text x="550" y="580" textAnchor="middle" fill="white" fontSize="30" fontWeight='600'>Trust</text>
                </svg>
            </svg>
        </div>


    )
}

export default Triangle;