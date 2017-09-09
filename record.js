function record() {
    let startTime = Date.now();
    let records = [];
    window.addEventListener('click', (e) => {
        records.push({event: e, timestamp: Date.now(), time: startTime - Date.now()});
    }, false);
    window.addEventListener('beforeunload', (e) => {
        let dialogText = 'Dialog text here';
        e.returnValue = dialogText;
        return dialogText;
    });
    window.addEventListener('unload', () => {
        console.log(records);
    })
}

record();
