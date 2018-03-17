import RandomColor from 'just.randomcolor'
export function a2c(a) {
    let obj = a.shift();
    let formatedData = {labels: [obj.name], datasets: []};
    let map = new Map();

    delete obj.name;
    for (let item in obj) {
        let ds = {label: item, data: [obj.item],};
        let clr = new RandomColor.toRGBA();
        
        ds.borderColor = clr.toCSS();
        ds.borderWidth = 2;
        clr.value.a = .5;
        ds.backgroundColor = clr.toCSS();
        
        formatedData.datasets.push(ds);
        map[item] = ds;
    }

    a.forEach((obj, i, a) => {
        formatedData.labels.push(obj.name);
        delete obj.name;
        for (let item in obj) {
            map[item].data.push(obj[item]);
        }
    });
}