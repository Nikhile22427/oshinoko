---
layout: page
title: About
permalink: /about/
---
<html>
<head>

<style>
h1 {text-align: center;}
p {text-align: center;}
img {
  padding-left: 30px;
  display: inline-block;
}
icentered {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
    #secretMessage {
        display: none;
}
</style>
</head>
<body>
<p><h1><span style="color:purple;font-weight:bold">Ai Hoshino</span></h1></p> 
<br>
<p>Arguably, Ai Hoshino is the #1 idol. This is because idol=idol and as shown in the animated picture below, has 2 very motivated babies supporting her.</p></br>
<p><a href="https://evansvetina.github.io/CSSEproj1" target="_blank"><span style="color:yellow">Obligatory Partner Blog Plug</span></a></p>

<img src="https://cdn.myanimelist.net/r/200x268/images/characters/6/496453.jpg?s=f78b6dbaf8d93085f406d5bb9d2aab70" height="230" class="center"> <img src="https://media1.tenor.com/m/PdX3X0HrrkYAAAAd/oshi-no-ko-aqua.gif" height="230">

<h2>The #1 playlist i'm listening to right now</h2> <br> <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/13JzhlV0FLIB1ue21TCusB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<p>Art thou a true anime lover? Prove thyself.(<sub>My beloved...</sub>)</p>
    <div id="secretMessage">
        <p>You have proven yourself. You may now see my anime list</p>
        <ul>
            <li>#1 Your Lie in April -already watched</li>
            <li>#2 Oshi No Ko -already watched</li>
            <li>#3 Jujutsu Kaisen -already watched</li>
            <li>#4 My Teen Romantic Comedy SNAFU -already watched</li>
            <li>#4 Alya Sometimes Hides Her Feelings in Russian -watched season 1, season 2 on the way</li>
        </ul>
        <h3>Not watched yet</h3>
        <ul>
            <li>The Angel Next Door Spoils Me Rotten</li>
            <li>Kiznaiver</li>
            <li>Love, Chuunibyo, and Other Delusions</li>
            <li>Death Note</li>
        </ul>
    </div>

<script>
        // Correct the sequence (no spaces in between)
        const weebCode = [
            "a", "i", "h", "o", "s", "h", "i", "n", "o"
        ];

        let inputSequence = [];

        window.addEventListener("keydown", (event) => {
            // Add the key pressed to the input sequence
            inputSequence.push(event.key.toLowerCase());

            // Limit the input sequence length to the length of the weebCode
            if (inputSequence.length > weebCode.length) {
                inputSequence.shift();
            }

            // Check if the input matches the weebCode sequence
            if (JSON.stringify(inputSequence) === JSON.stringify(weebCode)) {
                // Reveal the secret message if the code is correct
                document.getElementById("secretMessage").style.display = "block";
            }
        });
</script>  
 </body>   

Creator of Student 2025
</html>