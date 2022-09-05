// Luis Rodriguez  09-05-22
//Purpose
/* Add an object for yourself following a similar format. Put each object in 
an array so you have an array of objects (your choice how to do that). 
Iterate through the array of objects adding the date the script was run 
to each object as favorite things may change in the future. Console.log 
only active records with the Name, date, Favorite movie of each person. 
Add a function that can sort the output by object property. There may 
be a time where no Active records are found. Include code that provides 
a message when that occurs. */

/// Provide more information regarding Iterate through the array of objects adding the date the script was run 
//to each object as favorite things may change in the future


//assesment made on node js assesment dont jave information if they need a SPA (single page application)

let rockyObj = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
  }
  let miroslavObj = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
  }
  let donnyObj = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
  }
  let mattObj = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
  }
//ADDING INDIVIDUAL OBJECTS TO AN ARRAY , using let to manipulate array later replacing 
let DATA = [rockyObj,miroslavObj,donnyObj,mattObj];
//


if (DATA[0] == undefined) 
{
    console.log('No data Found');
}
else
{
const readline = require('readline');
const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    console.log("-active objects-");
    DATA =  DATA.filter((object)=> {return object.Status === 'Active'});
    DATA.map((object) => { console.log('Name: '+ object.Name+'\n'+ 'Fav Food:'+ object['Favorite Food']+'\n'+ 'Fav Movie: '+ object['Favorite Movie']+'\n')});
    //showing only 4 options because Its already filtered by status 
    console.log("Choose Sortby : 1-Name 2-Fav food 3-Fav movie  ");
    // Select 1 number to sort on the function 
    readl.question('Select Number: ', function (number) {
    ///using switch to run the sort by funciton 
    
        switch (number) {
            // case 1 will sort by name
            case '1':
            DATA= DATA.sort(function(a,b){return a.Name.localeCompare(b.Name)});
            break;
            // case 2 will sort by Food
            case '2':
            DATA= DATA.sort(function(a,b){return a['Favorite Food'].localeCompare(b['Favorite Food'])});
            
            break;
            // case 3 will sort by Movie
            case '3': 
            DATA= DATA.sort(function(a,b){return a['Favorite Movie'].localeCompare(b['Favorite Movie'])});
            break;
    
        }
    
        DATA.map((object) => { console.log('Name: '+ object.Name+'\n'+ 'Fav Food:'+ object['Favorite Food']+'\n'+ 'Fav Movie: '+ object['Favorite Movie']+'\n')});
        readl.close();
    
    });
    readl.on('close', function () {
        console.log('\nBYE BYE !!!');
        process.exit(0);
      });
}



