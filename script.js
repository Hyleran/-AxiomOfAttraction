// Love Chemistry Simulator
let chemistryLevel = 0;
let chaosLevel = 0;
let pancakeLevel = 0;

const loveLiquid = document.getElementById('love-liquid');
const reactionText = document.getElementById('reaction-text');

function updateBeaker() {
    const totalLevel = chemistryLevel + chaosLevel + pancakeLevel;
    const fillPercentage = Math.min(totalLevel * 10, 100);
    
    loveLiquid.style.height = `${fillPercentage}%`;
    
    // Change color based on mixture
    if (pancakeLevel > chemistryLevel && pancakeLevel > chaosLevel) {
        loveLiquid.style.background = 'linear-gradient(to top, #ffd166, #ffb347)';
    } else if (chaosLevel > chemistryLevel) {
        loveLiquid.style.background = 'linear-gradient(to top, #ef476f, #eb234e)';
    } else {
        loveLiquid.style.background = 'linear-gradient(to top, #4a90e2, #357abd)';
    }
    
    checkReactions();
}

function addChemistry() {
    chemistryLevel++;
    reactionText.textContent = "⚗️ Neural pathways activating!";
    reactionText.style.color = "#4a90e2";
    updateBeaker();
    createParticle("🧠");
}

function addChaos() {
    chaosLevel++;
    reactionText.textContent = "🎮 Gaming session initiated!";
    reactionText.style.color = "#ef476f";
    updateBeaker();
    createParticle("🎯");
}

function addPancakes() {
    pancakeLevel++;
    reactionText.textContent = "🥞 Fluffy deliciousness detected!";
    reactionText.style.color = "#ffd166";
    updateBeaker();
    createParticle("🥞");
}

function resetLab() {
    chemistryLevel = 0;
    chaosLevel = 0;
    pancakeLevel = 0;
    reactionText.textContent = "Molecules at rest...";
    reactionText.style.color = "#e8f4f8";
    reactionText.style.transform = "scale(1)";
    updateBeaker();
}

function checkReactions() {
    const total = chemistryLevel + chaosLevel + pancakeLevel;
    
    if (total >= 15) {
        reactionText.textContent = "💖 CRITICAL REACTION! Love particles stabilizing!";
        reactionText.style.color = "#ef476f";
        reactionText.style.transform = "scale(1.1)";
        createExplosion();
    } else if (total >= 10) {
        reactionText.textContent = "🌟 Positive energy surge detected!";
        reactionText.style.color = "#06d6a0";
    } else if (total >= 5) {
        reactionText.textContent = "⚡ Chemical bonds forming...";
        reactionText.style.color = "#4a90e2";
    }
}

function createParticle(emoji) {
    const particle = document.createElement('div');
    particle.textContent = emoji;
    particle.style.position = 'fixed';
    particle.style.fontSize = '2em';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.animation = `floatUp ${Math.random() * 2 + 1}s ease-in forwards`;
    particle.style.zIndex = '1000';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 2000);
}

function createExplosion() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle('💖');
        }, i * 100);
    }
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Interactive flask clicking
document.querySelectorAll('.flask').forEach(flask => {
    flask.addEventListener('click', () => {
        const messages = [
            "Bubbling with potential!",
            "Experimental romance in progress!",
            "Hypothesis: You're cute!",
            "Lab protocol: Smile more!",
            "Chemical reaction: Successful!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        reactionText.textContent = randomMessage;
        reactionText.style.color = "#ffd166";
        
        // Add a little shake to the flask
        flask.style.animation = 'none';
        setTimeout(() => {
            flask.style.animation = '';
        }, 10);
    });
});

// Make character cards interactive
document.getElementById('carson').addEventListener('click', () => {
    const quotes = [
        "My emotional parameters are... recalculating.",
        "The probability of this working is approximately 87.3%",
        "I should probably run more diagnostics.",
        "Your smile appears to be an optimal variable."
    ];
    showQuote(quotes[Math.floor(Math.random() * quotes.length)], '#4a90e2');
});

document.getElementById('jamie').addEventListener('click', () => {
    const quotes = [
        "Dude, just go with the flow!",
        "Pancakes solve everything. It's science.",
        "Your formalness is kinda cute, ngl.",
        "Wanna game? I'll go easy on you!"
    ];
    showQuote(quotes[Math.floor(Math.random() * quotes.length)], '#ffd166');
});

function showQuote(text, color) {
    const quote = document.createElement('div');
    quote.textContent = text;
    quote.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${color};
        color: #1a3a5f;
        padding: 20px 30px;
        border-radius: 15px;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        font-size: 1.2em;
        text-align: center;
        border: 2px solid rgba(255,255,255,0.3);
    `;
    
    document.body.appendChild(quote);
    
    setTimeout(() => {
        quote.remove();
    }, 2000);
}

// Add some initial fun
window.addEventListener('load', () => {
    setTimeout(() => {
        reactionText.textContent = "Welcome to the lab! Start mixing elements!";
        reactionText.style.color = "#ffd166";
    }, 1000);
});
