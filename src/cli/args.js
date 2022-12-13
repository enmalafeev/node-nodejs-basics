const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = [];
    for (let [idx, arg] of args.entries()) {
        if (idx % 2 === 0) {
            result.push(`${arg} is ${args[idx + 1]}`);
        }
    }
    console.log(result.join(', '))
};

parseArgs();