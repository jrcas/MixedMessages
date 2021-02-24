var randomWords = require('random-words');

const famousQuotes = [
    "Be yourself; everyone else is already taken",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world."
];

const weirdQuotes = [
    "You can't say there were dinosaurs when you never saw them. Someone actually saw Adam and Eve. No one ever saw a Tyrannosaurus rex.",
    "You guys line up alphabetically by height.",
    "Take some Vaseline and swallow it, and it will help you.",
    "...and Schumacher has just completed lap 77 out of 73.",
    "He speaks English, Spanish, and he's bilingual, too.",
    "You know a football team grows all the time. They just keep swinging. They just keep getting better. You know, you crack enough eggs and you'll get an omelet.",
    "When the seagulls follow the trawler, it is because they think sardines will be thrown into the sea.",
    "'I have to feed my family.' (Said upon the turning down of a three-year, $21 million contract)",
    "I had pro offers from the Detroit Lions and Green Bay Packers, who were pretty hard up for linemen in those days. If I had gone into professional football the name Jerry Ford might have been a household word today.",
    "When you believe in what you believe in no matter what happens or what people believe, the ultimate is the ultimate."
];

const redditQuotes = [
    "I'm at that stage in life where I stay out of discussions. Even if you say 1+1=5, you're right - have fun.",
    "Addiction is giving up everything for ONE THING. Recovery is giving up one thing for EVERYTHING.",
    "If anyone can refute me—show me I’m making a mistake or looking at things from the wrong perspective—I’ll gladly change. It’s the truth I’m after, and the truth never harmed anyone. What harms us is to persist in self-deceit and ignorance.",
    "Most people die at 25 and aren't buried until they're 75",
    "A person who has good thoughts cannot ever be ugly. You can have a wonky nose and a crooked mouth and a double chin and stick-out teeth, but if you have good thoughts it will shine out of your face like sunbeams and you will always look lovely.",
    "Everyone must choose one of two pains: The pain of discipline or the pain of regret.",
    "I've never wished a man dead, but I have read some obituaries with great pleasure.",
    "Whenever two people meet, there are really six people present. There is each man as he sees himself, each man as the other person sees him, and each man as he really is.",
    "Until it's my turn, I will keep clapping for others. It's really that simple.",
    "Just because your pain is understandable, doesn’t mean your behavior is acceptable"
];

const randomSentence = (num) => {
    return randomWords({ exactly: num, join: ' ' })
};

const posCat = [famousQuotes,weirdQuotes,redditQuotes,randomSentence];
const varName = ["famousQuotes","weirdQuotes","redditQuotes","randomSentence"];

const mixedMessages = () => {
    const category = Math.floor(Math.random()*posCat.length);
    const selectCat = posCat[category]
    if (Array.isArray(selectCat)) {
        const rand = Math.floor(Math.random()*selectCat.length);
        const str = `Your ${varName[category]} of the day is: \n \n ${selectCat[rand]}`;
        return str;
    } else {
        const str = `Your ${varName[category]} of the day is: \n \n ${randomSentence(Math.floor(Math.random()*50))}`;
        return str;
    }  
};


console.log(mixedMessages());