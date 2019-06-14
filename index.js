let obj;
let wnd, detailsTemplate, wnd2,detailsTemplate2;


$(document).ready(function () {


    $("#grid").kendoGrid({
        dataSource: {
            transport: {
                read: {


                    url: "http://207.180.200.121/mtrclaimsapi/InsWorkShopType/GetWorkShopType",
                    type: 'get',
                    dataType: "json"
                }
            },

            pageSize: 15,
            

        },
        
        selectable: "multiple row",
        pageable: true,
        scrollable: true,
        filterable: true,
        width: 50,
        columns: [{
                field: "WSTypeCode",
                title: "WorkShop No",
                width: "140px"
            },
            {
                field: "WSTypeDescription",
                title: "WorkShop Name",
                width: "140px",
               // format: "{0:c}"

            },
            {
                field: "TxnSysDate",
                title: "Init Date",
                width: "140px"
            },
            {
                command: {
                    text: "Renew",
                    click: showDetails
                },

                title: "Renew", 
                width: "50px"
            },

            {
                command: {
                    text: "Depreciate",
                    click: showDetails
                },

                title: "Depreciation", 
                width: "50px"
            }

        ]

    }).data("kendoGrid");


    wnd = $("#detailMdl")
        .kendoWindow({
            title: "Renew Details",
            modal: true,
            visible: false,
            resizable: false,
            width: 300
        }).data("kendoWindow");


        wnd2 = $("#detailMdl")
        .kendoWindow({
            title: "Depriciation",
            modal: true,
            visible: false,
            resizable: false,
            width: 300
        }).data("kendoWindow");

    detailsTemplate = kendo.template($("#template").html());

    detailsTemplate2 = kendo.template($("#template").html());


    function showDetails(e) {
        e.preventDefault();

        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        wnd.content(detailsTemplate(dataItem));
        wnd.center().open();
    }

    

});