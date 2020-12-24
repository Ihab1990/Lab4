alert('This is a medical suuplies shop');

var answer = prompt('Do you have a medical report, Enter  yes/ No');

document.write('<p>' + answer + '</p>');

while (answer !== 'yes' && answer !== 'no') {
    answer = prompt('Do you have a medical report, Enter yes/No');
}
if (answer === 'yes') {
    (alert('welcome to the shop'))
}
else if (answer === 'no') {
    (alert('go to the doctor first'))
}
alert('you can reach us on ' + '0775299163');

var ans = prompt('verfiy you are not a robot enter a number from 1 to 5')

var j = 0;

while (ans > j) {
    (document.write('<img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop">'))
    j++;
}




