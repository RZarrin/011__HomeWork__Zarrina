    let arr = [];

    let cmd = '';


    while (cmd.toLocaleLowerCase() != 'stop') {
        cmd = prompt('Введите команду');

        let cmdArr = cmd.split(',');

        if (cmdArr.length >= 2) {


            let operation = cmdArr[0].toLocaleLowerCase().trim();
            let item = cmdArr[1].toLocaleLowerCase().trim();

            if (operation === 'add') {
                arr.push(item);
            } else if (operation === 'del') {
                let index = arr.indexOf(item);

                if (index !== -1) {
                    arr.splice(index, 1);
                }
            }

            console.log(arr);
        }

    }