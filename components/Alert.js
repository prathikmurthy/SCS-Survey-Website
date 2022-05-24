import * as AlertDialog from '@radix-ui/react-alert-dialog';

function API_Post() {
    const test = { title: 'test' };
    axios.post('/api/test', test).then(function (response) {console.log(response.body);});
}

export default function Alert() {

    return(

        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <button className="pl-4 pr-4 pt-2 pb-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded" onClick={API_Post}>Submit</button> 
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
            <AlertDialog.Overlay />
            <AlertDialog.Content className="bg-white rounded fixed p-20 ml-40 mr-40 mt-20 inset-0">
                <AlertDialog.Title className="text-black text-3xl text-center">
                    Are you absolutely sure?
                </AlertDialog.Title>
                <AlertDialog.Description className="text-black text-xl text-center">
                    idk smth to fill the space here lol
                </AlertDialog.Description>
                <AlertDialog.Cancel />
                <AlertDialog.Action />
            </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>

    )
}