export function lc_Count_Function(config) {
    // console.log('Main Module - Lc Count Function');

    document.addEventListener('DOMContentLoaded', function () {

                fetch(`${config.HOST}/lc_count`)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Network response was not OK");
                    }
                    return response.json();
                })
                .then(function (responseLcCount) {
                  document.getElementById("HomepageTotalRecords").value = responseLcCount;
                //   document.getElementById("BottomNav_TotalResult").innerText = responseLcCount;
                  console.log('Total Records: ', responseLcCount);
                  

                })
    });

}
