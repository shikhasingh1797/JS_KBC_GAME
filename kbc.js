console.log('Kaun bnega crorepati me aapka swagat hai , ab first question ye rha aapki screen par....')
var list1 = ['Who invented Java Script?', 'Who invented the Computer?', 'What is the largetst flower of earth?']
var option = [['Radar Ford', 'Edison', 'Brendan Eich', 'Einstein'], ['Marie Curie', 'Newton', 'Charles Darwin', 'Charles Babbage'], ['Rafflesia', 'Chrysanthemum ', 'Hyacinth ', 'Alcoa ']]
var solution = [3, 4, 1]
var option1 = [['Brendan Each', 'Einstein'], ['Charles Darwin', 'Charles Babbage'], ['Rafflesia', 'Chrysanthemum']]
var solution1 = [1, 2, 1]
var count = 0
var i = 0
while (i < list1.length) {
    console.log("Ques", i + 1, list1[i])
    var j = 0
    while (j <= option.length) {
        console.log(j + 1, option[i][j])
        j = j + 1
    }
    var n = require("readline-sync");
    var ask = (n.question("Do you know this anwer press yes or no:"));
    if (ask == "yes") {
        var ans = (n.question("Enter your answer***:"));
        if (ans == solution[i]) {
            console.log("Your guess is correct")
            i = i + 1
        }
        else {
            console.log("Your guess is wrong")
            break
        }
    }
    
    if (ask=="no"){
        var life = (n.question("Do you want to use 5050 lifeline:"));
        if (life=="yes"){
            if(count==0){
                var k=0
                while (k<2){
                    console.log(k + 1, option1[i][k])
                    k=k+1
                    count=count+1
                    
                }
                var ans2 = (n.question("Enter your answer*:"))
                if (ans2==solution1[i]){
                    console.log("Your ans is correct")
                    i=i+1
                }
                else{
                    console.log("Your guess is wrong")
                }
            }
            
            else{
                console.log("You already used 5050 lifeline")
                var ans1 = (n.question("enter your answer**:"))
                if (ans1==solution[i]){
                    console.log("Your guess is correct")
                }
                i=i+1
            }
                }            
        else{
            var ans = (n.question("Enter your answer***:"));
            if (ans == solution[i]) {
                console.log("Your guess is correct") 
                i=i+1
            }

            else{
                console.log("Your guesss is wrong")
                break
            }
        }
    }
}