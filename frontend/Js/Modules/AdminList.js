export function admin_List_Function(config) {
    // console.log('Main Module - Admin List Function');

    document.addEventListener('DOMContentLoaded', function () {
        let displayLCPreparer = document.getElementById("Homepage_Preparer");
        let displayLCPKPreparer = document.getElementById("Homepage_PkPreparer");
        let displayLCPCPreparer = document.getElementById("Homepage_PcPrep");
        let displayLCPCChker = document.getElementById("Homepage_PcChker");

        fetch(`${config.HOST}/List_Of_Admins`)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }
                return response.json();
            })
            .then(function (AdminList) {
                displayLCPreparer.innerHTML = '';
                displayLCPKPreparer.innerHTML = '';
                displayLCPCPreparer.innerHTML = '';
                displayLCPCChker.innerHTML = '';

                for (const admin of AdminList) {
                    const option = document.createElement('option');
                    option.value = admin;
                    option.text = admin;

                    const option1 = document.createElement('option');
                    option1.value = admin;
                    option1.text = admin;

                    const option2 = document.createElement('option');
                    option2.value = admin;
                    option2.text = admin;

                    const option3 = document.createElement('option');
                    option3.value = admin;
                    option3.text = admin;

                    displayLCPreparer.appendChild(option);
                    displayLCPKPreparer.appendChild(option1);
                    displayLCPCPreparer.appendChild(option2);
                    displayLCPCChker.appendChild(option3);
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            })
        });
    }
    