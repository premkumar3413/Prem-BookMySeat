@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

* {
    box-sizing: border-box;
}

body {
    font-family: Arial,Helvetica,sans-serif;
   
    background: linear-gradient(rgba(0, 18, 50, 0.84), rgba(0, 0, 0, 0.95)),
        url("./lloyd-dirks-4SLz_RCk6kQ-unsplash.jpg") bottom;
    background-size: cover;
    color: skyblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:skyblue;
    padding-top: 25px;

}

.movie-container {
    margin: 20px 0;
}

.movie-container select {
    cursor: pointer;
    background-color:whitesmoke;
    font-family: "Lucida Console"monospace;
    border: 0;
    border-radius: 5px;
    font-size: 18px;
    outline: none;
    margin-left: 10px;
    padding: 5px 15px 5px 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}


.container {
    perspective: 1000px;
    -webkit-perspective: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.row-container {
    margin-top: 30px;
}


.seat {
    background-color: yellow;
    height: 12px;
    width: 17px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    height: 25px;
    width: 30px;
    background: yellow;
    border: 2px solid yellow;
    transition: all .2s ease;
}

.seat.selected {
    background-color: darkblue;
    background-color: darkblue;
}

.seat.occupied {
    background-color: white;
}

.seat:nth-of-type(2) {
    margin-right: 18px;
}

.seat:nth-last-of-type(2) {
    margin-left: 18px;
}

.seat:not(.occupied):hover {
    cursor: pointer;
    transform: scale(1.2);
}

.showcase .seat:not(.occupied):hover {
    cursor: default;
    transform: scale(1);
}

.showcase {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
    color: #777;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
}

.showcase li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
}

.showcase li small {
    margin-left: 2px;
}

.row {
    display: flex;
}

.screen {
    background-color: #fff;
    height: 70px;
    width: 100%;
    margin: 15px 0;
    transform: rotateX(-45deg);
    box-shadow: 0 3px 10px rgba(255, 255, 255, .7);
}

p.text {
    margin: 5px 0;
}

p.text span {
    color: #6feaf5;
}

.movie-screen {
    margin-top: 35px;
    margin-bottom: 35px;
    text-align: center;
}

.movie-screen img {
    max-width: 85%;
}

.subtitle {
    position: relative;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    color: #31d7a9;
    font-size: 16px;
    max-width: 270px;
    margin-left: auto;
    margin-right: auto;
}

.subtitle:before,
.subtitle:after {
    position: absolute;
    content: '';
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 1px;
    background: #213a69;
}

.subtitle:before {
    width: 80%;
    top: 0;
}

.subtitle:after {
    width: 100%;
    bottom: 0;
}

.text {
    font-size: 18px;
}

#count,
#total {
    font-size: 24px;
    padding: 0 8px;
}

.text-wrapper {
    margin-top: 10px;
}

@media (max-width: 576px) {

    body {
        padding-top: 30px;
    }

    .movie-container select {
        font-size: 14px;
    }

    .seat {
        height: 21px;
        width: 23px;
    }

    .movie-screen img {
        max-width: 92%;
    }

    .subtitle {
        font-size: 13px;
        padding: 7px;
    }

    .seat:nth-of-type(2) {
        margin-right: 12px;
    }

    .seat:nth-last-of-type(2) {
        margin-left: 12px;
    }

    .movie-screen {
        margin-top: 25px;
        margin-bottom: 20px;
    }

    .text {
        font-size: 14px;
    }

    #count,
    #total {
        font-size: 18px
    }
    
}
button {
    padding: 10px 30px;
    margin: 10px 0;
    background-color: skyblue;
    background-color: yellow;
	box-shadow: 0px 0px 5px yellow,0px 0px 25px yellow,0px 0px 25px yellow,0px 0px 25px yellow,0px 0px 25px yellow;
}
  
