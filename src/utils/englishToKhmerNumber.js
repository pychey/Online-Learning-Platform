export function englishToKhmerNumber(input) {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return input
        .toString()
        .split('')
        .map(char => {
            if (char === '.') return '.';
            if (char >= '0' && char <= '9') return khmerDigits[parseInt(char, 10)];
            return char;
        })
        .join('');
}