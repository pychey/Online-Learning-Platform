export function khmerToEnglishNumber (input) {
    const khmerDigits = ['០','១','២','៣','៤','៥','៦','៧','៨','៩'];
    return input
        .toString()
        .split('')
        .map(char => {
            if (char === '.') return '.';
            const index = khmerDigits.indexOf(char);
            return index !== -1 ? index.toString() : char;
        })
        .join('');
}