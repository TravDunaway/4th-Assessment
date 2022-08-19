// const bcrypt = require("bcryptjs")
// let birthdayInfo = []


module.exports = {

    getFortune: (req, res) => {
        const fortunes = ["Wait, for tomorrow the sun rises!", "You'll come to know that too many cooks spoil the broth!", "Undoubtably tomorrow you'll be, for today you are.", "Soon you'll be able to flock together, as birds of a feather!", "Congrats! Its a baby boy!", "You are soon to find out: IT BELONGS TO THE MILKMAN!"];
      
      
        let randomIndexF = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndexF];
      
        res.status(200).send(randomFortune);
    },
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
     getWeather: (req, res) => {
        const weathers = ["Hot, and Rainy!", "Cool and Sunny", "Not a day for Jeans"];
      
        let randomIndexW = Math.floor(Math.random() * weathers.length);
        let randomWeather = weathers[randomIndexW];
      
        res.status(200).send(randomWeather);
    },
     
    getBirthday: (req, res) => {
        const birthdays = ["02/02/2020", "01/01/2002", "03/03/1999", "09/12/1873", "12/13/2090! You are from the Future!!!", "04/04/1981 So remember, BUY APPLE!!!!", "09/09.1999"];
      
        let randomIndexB = Math.floor(Math.random() * birthdays.length);
        let randomBirthday = birthdays[randomIndexB];
      
        res.status(200).send(randomBirthday);
    }
}