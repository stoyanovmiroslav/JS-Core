function solve() {
    let summary = [];
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        let value = arguments[i];
        console.log(`${type}: ${value}`);

        if (summary.some(x => x.type === type)) {
           summary.find(x => x.type === type).count++;
        }else {
            summary.push({
                type: type,
                count: 1
            });
        }
    }

    summary = summary.sort((a, b) => b.count - a.count);
    summary.forEach(x => console.log(`${x.type} = ${x.count}`));
}

solve('cat', 42, 41, function () { console.log('Hello world!'); });