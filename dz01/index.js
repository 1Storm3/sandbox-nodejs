import {argv} from 'node:process';
import process from 'node:process';
import {stderr, stdout} from 'node:process';

const args = argv.slice(2).map(Number);

if (args.length === 3 && args.every(num => typeof num === 'number')) {
    let a = args[0];
    let b = args[1];
    let c = args[2];
    console.log('Ваши введённые числа:', a, b, c);
    const desc = b * b - 4 * a * c;
    if (desc > 0) {
        let x1 = (-b - Math.sqrt(desc)) / 2 * a;
        let x2 = (-b + Math.sqrt(desc)) / 2 * a;
        stdout.write(`Корень х1 =' ${x1}, 'Корень х2 =', ${x2}`)
        process.exit(0);
    } else if (desc === 0) {
        let x1 = -b / 2 * a;
        let x2 = x1;
        stdout.write(`Корень х1 =' ${x1}, 'Корень х2 =', ${x2}`)
        process.exit(0);
    } else {
        stderr.write('Корней нет,ну или точнее сказать есть комплексные,но это не входит в условие задачи)')
        process.exit(50);
    }
} else if (args[0] || args[1] || args[2] == null) {
    stdout.write("Вы должны ввести 3 числа, разделяя их пробелом!")
    process.exit(1);
}

