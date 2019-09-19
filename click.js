$(document).ready(function () {
        $('.abc').click(function () {
            var status = $("#<%=ddlstatus.ClientID%>").val;
            if (status == "Prepared") {
                var _Action = confirm('Do you really want to cancel this payment ? All pending money will be available in the retention account of the contractor ');
                if (_Action) {
                    $.blockUI({ css: {
                        border: 'none',
                        padding: '15px',
                        backgroundColor: '#000',
                        '-webkit-border-radius': '10px',
                        '-moz-border-radius': '10px',
                        opacity: .5,
                        color: '#fff'
                    }
                    });
                    return true;
                }
                else {
                    return false;
                }


            }

        });
    }); 