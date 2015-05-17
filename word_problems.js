//Purpose:  A system for generating wacky word problems that will hopefully be both tricky and be interesting and varied enough to keep children's interest.
//Author:   Peter Orzell
//Date:     5/16/2015

var animals_list =
[
    "cow",
    "chicken",
    "bear",
    "tiger",
    "lion",
    "rooster",
    "hen",
    "alpaca",
    "lizard",
    "tarantula",
    "rhino",
    "elephant",
    "zombie",
    "unicorn",
    "monster",
    "dolphin",
    "cat",
    "dog",
    "pup",
    "kitten",
    "horse",
    "miniature horse",
    "iguana",
    "chickadee",
    "blue jay",
    "heron",
    "flamingo",
    "raven",
    "parrot",
    "macaw",
    "river otter",
    "aye-aye",
    "monkey",
    "chimp",
    "gorilla",
    "hamster",
    "guinea pig",
    "pig",
    "goat",
    "billy goat",
    "lamb",
    "pokémon",
    "liopleurodon",
    "charizard",
    "robot",
    "orc",
    "gnome",
    "pixie",
    "small dinosaur",
    "tauntaun",
    "rat",
    "squirrel",
    "chipmunk",
    "lab rat",
    "mink",
    "gopher"
];

var food_words =
[
    "feed",
    "carrots",
    "beans",
    "tofu",
    "cereal",
    "zebra meat",
    "special food",
    "wheat grain",
    "protein shake",
    "formula",
    "special formula",
    "secret sauce",
    "secret ingredient",
    "dietary supplement",
    "required protein",
    "required vitamins"
];

var eat_words_plural =
[
    "eat",
    "consume",
    "go through",
    "devour",
    "dine on",
    "gulf down",
    "gulp down",
    "wolf down",
    "ingest",
    "pig out on",
    "digest",
    "swallow"
];

var eat_words =
[
    "eats",
    "consumes",
    "goes through",
    "devours",
    "dines on",
    "gulfs down",
    "gulps down",
    "wolfs down",
    "pigs out on",
    "digests"
];

var possession_words =
[
    "owns",
    "cares for",
    "takes care of",
    "has",
    "works with",
    "provides for"
];

var amount_units =
[
    "packets",
    "pounds",
    "deliveries",
    "rations",
    "kilograms"
];

var length_units =
[
    "inches",
    "feet",
    "yards",
    "miles"
];

/*var size_things =
[
    {
    ""
];*/

var each_words =
[
    "Each",
    "Every",
    "Everybody knows that a",
    "The encyclopedia says that one",
    "A reputable website claims that an average",
    "It's a known fact that one",
    "In the wild, a typical",
    "Outside of captivity, an average",
    "Typically, one"
];

var time_words =
[
    "hour",
    "day",
    "single weekend",
    //"fortnight",
    "week",
    "month",
    "year"
];

var acquire_words =
[
    "buy",
    "purchase",
    "acquire",
    "get",
    "pay for",
    "have shipped"
];

var total_words =
[
    "in total",
    "altogether",
    "for all of them"
];

var singular_words =
[
    "a ",
    "one"
];

var need_words =
[
    "need",
    "require"
];

var additional_words =
[
    "a new group of",
    "an additional",
    "a new batch of",
    "even more animals, including"
];

var precise_words =
[
    "exactly",
    "roughly",
    "only",
    ""
];

var body_part_words =
[
    "leg",
    "head",
    "tail",
    "arm",
    "tongue"
];

var conditional_words =
[
    "Supposing",
    "Supposing that",
    "If",
    "If we assume",
    "When"
];

var give_words =
[
    "gives",
    "has to give up",
    "owes",
    "brings",
    "donates",
    "sends",
    "sends over"
];

var take_words =
[
    "takes",
    "buys",
    "purchases",
    "acquires",
    "loans",
    "borrows",
];

function generate_throwoff_sentence(animal)
{
    
    var n = "<span class='number'>" + spellOutNumber(Math.floor(Math.random() * 11), 0) + "</span>";
    
    switch(Math.floor(Math.random() * 4))
    {
        case 0:
            return "All " + animal + "s have " + pick_random(precise_words) + " " + n + " " + pick_random(body_part_words) + "s.";
        case 1:
            return "Each " + animal + " has " + pick_random(precise_words) + " " + n + " " + pick_random(body_part_words) + "s.";
        case 2:
            return "Each of the " + animal + "s have " + pick_random(precise_words) + " " + n + " " + pick_random(body_part_words) + "s.";
        case 3:
            return "Every " + animal + " has " + pick_random(precise_words) + " " + n + " " + pick_random(body_part_words) + "s.";
    }
};


//{operator:"+",value1:56,value2:64}
function generate_word_problem(operator, value1, value2)
{
    var op = operator;
    var f1 = "<span class='number'>" + spellOutNumber(value1,0) + "</span>";
    var f2 = "<span class='number'>" + spellOutNumber(value2,0) + "</span>";;
    
    //Determine whether to make an extra tricky word problem with a throw-off sentence.
    var useThrowoffSentence;
    
    if(Math.random() >= 0.5)
        useThrowoffSentence = true;
    else
        useThrowoffSentence = false;
    
    //A string variable to hold our question.
    var question = "<span title=" + '"(' + value1 + " " + operator + " " + value2 + ')">';
    
    switch(op)
    {
        case "+":
            var n = generate_name();
            
            var full_name = n.join(" ");
            var first_name;
            
            if(n.length > 1)
                first_name = n[0];
            else
                first_name = full_name;
                
            var animal1 = pick_random(animals_list);
            var animal2 = pick_random(animals_list);
            
            question = full_name + " " + pick_random(possession_words) + " " + f1 + " " + animal1 + "s. " +
                pick_random(conditional_words) + " " + first_name + " " + pick_random(possession_words) + " " + pick_random(additional_words) + " " + f2 + " " + animal2 + "s, how many creatures will it be that " + first_name + " " + pick_random(possession_words) + "?";
            break;
        
        case "-":
            var n = generate_name();
            
            var full_name = n.join(" ");
            var first_name;
            
            if(n.length > 1)
                first_name = n[0];
            else
                first_name = full_name;
            
            //Generate other person.
            var other_person = generate_name().join(" ");
                
            //Generate animal species.
            var animal = pick_random(animals_list);
            
            question = full_name + " " + pick_random(possession_words) + " " + f1 + " " + animal + "s. ";
            
            if(Math.random() < 0.5)
                question += pick_random(conditional_words) + " " + first_name + " " + pick_random(give_words) + " " + f2 + " " + animal + "s to " + other_person + ", how many creatures will it be that " + first_name + " " + pick_random(possession_words) + "?";
            else
                question += pick_random(conditional_words) + " " + other_person + " " + pick_random(take_words) + " " + f2 + " " + animal + "s from " + first_name + ", how many creatures will it be that " + first_name + " " + pick_random(possession_words) + "?";
            break;
        
        case "*":
            //Get an array representing a name or first and last name entries.
            var n = generate_name();
            
            //Create a full name.
            var full_name = n.join(" ");
           
            //Create a first name.
            var first_name;
            
            //If we have two names, put the first in first_name.
            //Otherwise, we can just make first_name equal to full_name.
            if(n.length > 1)
                first_name = n[0];
            else
                first_name = full_name;
                
            var animal = pick_random(animals_list);
            var unit = pick_random(amount_units);
            var food = pick_random(food_words);
            var t_unit = pick_random(time_words);
            
            var lastphrase;
            
            //Generate the final question.
            switch(Math.floor(Math.random()*4))
            {
                case 0:
                    lastphrase = "How many " + unit + " of " + food + " will all of the " + animal + "s " + pick_random(eat_words_plural) + " in one " + t_unit + "?";
                    break;
                case 1:
                    lastphrase = "How many " + unit + " of " + food + " will " + first_name + " " + pick_random(need_words) + " for all of the " + animal + "s?";
                    break;
                case 2:
                    lastphrase = "In " + pick_random(singular_words) + " " + t_unit + ", how many " + unit + " of " + food + " will the " + animal + "s " + pick_random(need_words) + "?";
                    break;
                case 3:
                    lastphrase = "If " + first_name + " " + pick_random(possession_words) + " the " + animal + "s for " + pick_random(singular_words) + " " + t_unit + ", how much " + food + " will " + first_name + " " + pick_random(need_words) + "?";
                    break;
            }
            
            question = full_name + " " + pick_random(possession_words) + " " + f1 + " " + animal + "s. ";
            
            if(useThrowoffSentence && Math.random() >= 0.5)
            {
                question += generate_throwoff_sentence(animal) + " ";
                useThrowoffSentence = false;
            }
            
            question += pick_random(each_words) + " " + animal + " " + pick_random(eat_words) + " " + f2 + " " + unit + " of " + food + " in " + pick_random(singular_words) + " " + t_unit + ". ";
            
            if(useThrowoffSentence)
            {
                question += generate_throwoff_sentence(animal) + " ";
                useThrowoffSentence = false;
            }
            
            question += lastphrase;
                //"How many " + unit + " of " + food + " will " + name + " have to " + pick_random(acquire_words) + " " + pick_random(total_words) + "?";
            break;
            
        case "/":
            //Get an array representing a name or first and last name entries.
            var n = generate_name();
            
            //Create a full name.
            var full_name = n.join(" ");
           
            //Create a first name.
            var first_name;
            
            //If we have two names, put the first in first_name.
            //Otherwise, we can just make first_name equal to full_name.
            if(n.length > 1)
                first_name = n[0];
            else
                first_name = full_name;
                
            var animal = pick_random(animals_list);
            var unit = pick_random(amount_units);
            var food = pick_random(food_words);
            
            var lastphrase;
            
            //Generate the final question.
            switch(Math.floor(Math.random()*2))
            {
                case 0:
                    lastphrase = "How many " + unit + " of " + food + " should " + first_name + " alot to each " + animal + " to give them an equal amount of " + food;
                    break;
                case 1:
                    lastphrase = "If " + first_name + " would like to evenly distribute the " + food + " across the " + animal + "s, how many " + unit + " of " + food + " should go to each " + animal + "?";
                    break;
            }
            
            question = full_name + " " + pick_random(possession_words) + " " + f2 + " " + animal + "s. ";
            
            if(useThrowoffSentence && Math.random() >= 0.5)
            {
                question += generate_throwoff_sentence(animal) + " ";
                useThrowoffSentence = false;
            }
            
            question += first_name + " also has " + f1 + " " + unit + " of " + food + ". ";
            
            if(useThrowoffSentence)
            {
                question += generate_throwoff_sentence(animal) + " ";
                useThrowoffSentence = false;
            }
            
            question += lastphrase;
            question += "</span>";
            break;
        
        default:
            break
    }
    
    return question;
}