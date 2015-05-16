//Purpose:  A system for generating wacky word problems that will hopefully be both tricky and be interesting and varied enough to keep children's interest.
//Author:   Peter Orzell
//Date:     5/16/2015

var animals =
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

function generate_word_problem(m)
{
    var op = m.operation;
    var f1 = m.value1;
    var f2 = m.value2;
    
    /*switch(Math.floor(Math.random()*2))
    {
        case 0:
        {*/
            var n = generate_name();
            
            var full_name = n.join(" ");
           
            var first_name;
            
            if(n.length > 1)
                first_name = n[0];
            else
                first_name = full_name;
                
            var animal = pick_random(animals);
            var unit = pick_random(amount_units);
            var food = pick_random(food_words);
            var t_unit = pick_random(time_words);
            
            var lastphrase;
            
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
            
            return full_name + " " + pick_random(possession_words) + " " + f1 + " " + animal + "s. " +
                pick_random(each_words) + " " + animal + " " + pick_random(eat_words) + " " + f2 + " " + unit + " of " + food + " in " + pick_random(singular_words) + " " + t_unit + ". " +
                lastphrase;
                //"How many " + unit + " of " + food + " will " + name + " have to " + pick_random(acquire_words) + " " + pick_random(total_words) + "?";
        /*}
        
    }*/
}