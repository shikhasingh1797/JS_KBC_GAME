console.log('🙏💐🙏Kaun Bnega Crorepati me aapka swagat hai , ab first question ye rha aapki screen par....🙏💐🙏')
var list1 = ['Who invented Java Script?', 'Who invented the Computer?', 'What is the largetst flower of earth?']
var option = [['Radar Ford', 'Edison', 'Brendan Eich', 'Einstein'], ['Marie Curie', 'Newton', 'Charles Darwin', 'Charles Babbage'], ['Rafflesia', 'Chrysanthemum ', 'Hyacinth ', 'Alcoa ']]
var solution = [3, 4, 1]
var option1 = [['Brendan Each', 'Einstein'], ['Charles Darwin', 'Charles Babbage'], ['Rafflesia', 'Chrysanthemum']]
var solution1 = [1, 2, 1]
var n = require("readline-sync");
var i=0
var count=0
function first(){
    while(i<list1.length){
        console.log("Ques", i + 1, list1[i])
        var j = 0
        while(j<=option.length){
            console.log(j + 1, option[i][j])
            j = j + 1
        }
        ask()
    }
}
function ask(){
    var ask = (n.question("Do you know this anwer press yes or no:"));
    if(ask=="yes"){
        var ans = (n.question("Enter your answer***:"));
        if(ans==solution[i]){
            console.log("Your guess is correct")
            i=i+1

        }
        else{
            console.log("Your guess is wrong")
            i=list1.length
        }
    }
    else{
        lifeline()
    }
}
function lifeline(){
    var life = (n.question("Do you want to use 5050 lifeline:"))
    if(life=="yes"){{
        if(count==0){
            var k=0
            while(k<2){
                console.log(k + 1, option1[i][k])
                k=k+1
                count=count+1
            }
            var ans1 = (n.question("Enter your answer***:"))
            if(ans1==solution1[i]){
                console.log("Your guess is correct@@")
            }
            else{
                console.log("Your guess is wrong**@@")
                i=list1.length
            }
        }
        else{
            console.log("You already used 5050 lifeline")
            var ans2 = (n.question("enter your answer**:"))
            if(ans2==solution[i]){
                console.log("Your guess is correct")
                i=i+1
            }
            else{
                console.log("Your guess is wrong$$")
                i=list1.length
            }
        }
    }

    }
    else{
        console.log("Its great that you don't want to use 5050 lifeline😇😇")
        var ans = (n.question("Enter your answer***:"))
        if(ans==solution[i]){
            console.log("Your gusess is correct***")
            i=i+1

        }
        else{
            console.log("Your guess is wrong%%%%%%%%%%%%")
            i=list1.length
        }


    }

}
first()