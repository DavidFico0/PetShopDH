const questions = [
    "Qual seu nome?",
    "Qual seu hobby?",
    "Qual sua lingugem de programação favorita?"
]

var answer = [];

function ask(i){
    process.stdout.write('\n\n\n\n' + questions[i]);
    process.stdout.write(' > ');

}
process.stdin.on('data', function(data){
    answer.push(data.toString().trim());
    if(answer.length < questions.length){
        ask(answer.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write('\n\n\n\n');
    process.stdout.write('Go ' + answer[1]);
    process.stdout.write('\n\n\n\n');

});
ask(0);