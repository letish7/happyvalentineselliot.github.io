
document.addEventListener("DOMContentLoaded", () => {
  const vinyl = document.getElementById("vinyl-image");
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("love-song");
  let isPlaying = false;

  playButton.addEventListener("click", () => {
    if (!isPlaying) {
      vinyl.style.animation = "spin 2s linear infinite";
      audio.play();
      playButton.textContent = "pause";
      isPlaying = true;
    } else {
      vinyl.style.animation = "";
      audio.pause();
      playButton.textContent = "play";
      isPlaying = false;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const vinyl2 = document.getElementById("vinyl-image2");
  const playButton2 = document.getElementById("playButton2");
  let isclicked = false;

  playButton2.addEventListener("click", () => {
    if (!isclicked) {
      window.location.href = "https://open.spotify.com/playlist/05Y1J9QPfTnRDcErHfMB4q?si=xsENhciITxWCPChNHUuB-w&pi=s39PW4t4Qj2Q7";  // Replace with your desired link
      vinyl2.style.animation = "spin 2s linear infinite";
      isclicked = true; // Prevent multiple clicks
    }
  });
});


const messages = [
  "I love you",
  "I'm so proud of you",
  "I'm glad we met",
  "I want to spend the rest of my life with you",
  "I want to kiss you",
  "I miss you",
  "I love you more than anything",
  "I want to marry you"
];

let currentMessageIndex = 0; // Keep track of the current message index

message.addEventListener("click", () => {
  // Create and show 3 messages at once
  for (let i = 0; i < 5; i++) {
    // Get the current message based on the index
    const loveMessage = document.createElement("h4");
    loveMessage.textContent = messages[currentMessageIndex];

    // Set random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    loveMessage.style.position = "absolute";
    loveMessage.style.left = `${randomX}px`;
    loveMessage.style.top = `${randomY}px`;

    // Set initial opacity for fading effect
    loveMessage.style.opacity = "1";
    loveMessage.style.transition = "opacity 1s ease-out"; // Smooth transition for fading

    // Append it to the body
    document.body.appendChild(loveMessage);

    // After 3 seconds, start fading out
    setTimeout(() => {
      loveMessage.style.opacity = "0";
    }, 4000); // Fades out after 3 seconds

    // Move to the next message in the array
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  }
});


